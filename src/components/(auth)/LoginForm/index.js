import InputText from "@/components/(Form)/InputText"
import { useState } from "react"
import { useAuth } from "@/hooks/auth"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  // Auth Hook
  const { login, isLoading, user } = useAuth({
    middleware: "guest",
  })

  // Check if loading
  if (isLoading || user) {
    return <>is Loading ...</>
  }

  // handle Form
  const submitForm = async (e) => {
    e.preventDefault()

    login({
      email,
      password,
      setErrors,
    })
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={submitForm}>
      <InputText
        id="email"
        type="email"
        label="Email"
        onchange={(e) => setEmail(e.target.value)}
      />
      <InputText
        id="password"
        type="password"
        label="Password"
        onchange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-secondary hover:bg-secondaryH text-black rounded-lg p-1">
        Login
      </button>
    </form>
  )
}

export default LoginForm
