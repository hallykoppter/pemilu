import Link from "next/link"

const Button = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="group relative rounded-md bg-secondary inline-flex hidden lg:inline-flex focus:outline-none "
    >
      <span className="w-full inline-flex rounded-md bg-primary text-white items-center justify-center bg-body p-1 px-2 transform transition-transform group-hover:translate-y-1 group-hover:translate-x-1">
        {title}
      </span>
    </Link>
  )
}

export default Button
