import Link from "next/link"

export default function FixedNav({ show }: { show: boolean }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 py-4 transition-all duration-300 ease-in-out ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-3xl mx-auto flex justify-center space-x-6">
        <a href="#home" className="text-white hover:text-gray-300 hover:underline transition-colors">
          Home
        </a>
        <a href="#about" className="text-white hover:text-gray-300 hover:underline transition-colors">
          About
        </a>
        <a href="#projects" className="text-white hover:text-gray-300 hover:underline transition-colors">
          Projects
        </a>
        <a href="#talks" className="text-white hover:text-gray-300 hover:underline transition-colors">
          Talks
        </a>
        <a href="#contact" className="text-white hover:text-gray-300 hover:underline transition-colors">
          Contact
        </a>
      </div>
    </nav>
  )
}

