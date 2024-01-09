"use client"
import { useAuth } from "@/hooks/auth"
import LoginForm from "../(auth)/LoginForm"
import { Typewriter } from "react-simple-typewriter"

const Hero = () => {
  const words = ["berjalan secara daring", "menggunakan next.js dan laravel"]
  const currentTime = new Date()

  return (
    <div className="flex flex-col md:flex-row mx-8 gap-16 items-center justify-center min-h-[80vh]">
      <div className="flex flex-col gap-2 max-w-[95%] md:max-w-[60%] bg-red-500 p-8 rounded-xl shadow-lg shadow-gray-700">
        <h1 className="font-titan text-2xl text-white">
          Selamat datang di aplikasi E-Lection
        </h1>
        <p className="text-justify text-sm font-baloo text-white">
          Aplikasi pemilihan Ketua dan Wakil Ketua OSIS di SMPN 3 Rancah Periode
          2024/2025
          <br />
          Aplikasi ini{" "}
          <Typewriter
            words={words}
            typeSpeed={50}
            cursor
            cursorStyle="_"
            deleteSpeed={50}
            loop="false"
          />
        </p>
        <h2 className="text-white mt-5 text-xs">
          &#9400; {currentTime.getFullYear()} SMPN 3 Rancah
        </h2>
      </div>
      <div className="flex justify-center items-center min-w-[20%] p-6 bg-primary rounded-xl shadow-lg shadow-gray-700">
        <LoginForm />
      </div>
    </div>
  )
}

export default Hero
