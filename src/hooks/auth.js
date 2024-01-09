import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useSWR from "swr"
import axios from "@/libs/axios"

export const useAuth = ({ middleware } = {}) => {
  const router = useRouter()

  // Loading
  const [isLoading, setIsLoading] = useState(true)

  // User
  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    axios
      .get("/api/user")
      .then((response) => response.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error
        router.push("/dashboard")
      })
  )

  // CSRF
  const csrf = () => axios.get("/sanctum/csrf-cookie")

  // Login
  const login = async ({ setErrors, ...props }) => {
    await csrf()
    setErrors([])

    axios
      .post("/login", props)
      .then(() => mutate() && router.push("/dashboard"))
      .catch((error) => {
        if (error.response.status != 422) throw error
        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  // Logout
  const logout = async () => {
    await axios.post("/logout")
    mutate(null)
    router.push("/")
  }

  useEffect(() => {
    if (user || error) {
      setIsLoading(false)
    }

    if (middleware === "guest" && user) router.push("/")
    if (middleware === "auth" && error) router.push("/dashboard")
  }, [user, error])

  return { user, csrf, isLoading, login, logout }
}
