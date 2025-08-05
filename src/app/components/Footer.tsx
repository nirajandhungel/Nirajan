import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa'
import Newsletter from './Newsletter'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark ">
      {<Newsletter/>}
      
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Hola, amigo !
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Nirajan Dhungel. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/nirajandhungel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Nirajan Dhungel's GitHub profile"
              className="text-secondary hover:text-icon transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/SubashDhungel18"
              target="_blank"
              rel="noopener noreferrer"
               aria-label="Visit Nirajan Dhungel's Twitter/X profile"
              className="text-secondary hover:text-icon transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nirajan-dhungel/"
              target="_blank"
              rel="noopener noreferrer"
               aria-label="Visit Nirajan Dhungel's Linekdin profile"
              className="text-secondary hover:text-icon transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>

            <a
              href="https://www.youtube.com/@nirajan.dhungel"
              target="_blank"
              rel="noopener noreferrer"
               aria-label="Visit Nirajan Dhungel's Youtube Channel"
              className="text-secondary hover:text-red-600 transition-colors"
            >
              <FaYoutube className="h-6 w-6" />
            </a>

            <a
              href="https://www.facebook.com/subash.dhungel.712"
              target="_blank"
              rel="noopener noreferrer"
               aria-label="Visit Nirajan Dhungel's Facebook profile"
              className="text-secondary hover:text-icon transition-colors"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 