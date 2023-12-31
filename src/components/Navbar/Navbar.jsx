import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleDownload = (event) => {
    event.preventDefault();
    const fileId = "1oXo0v581gEWLgQiFQ9pjX3MDYbck9nxf";
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.location.href = url;
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex gap-5 flex-shrink-0 items-center">
              <a
                href="https://github.com/Tawhidalfatah"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/tawhidalfatah/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin size={30} />
              </a>
              <a href="/" onClick={handleDownload} download>
                <FaFilePdf size={30} />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center justify-end space-x-4">
              <a
                href="#hero"
                className=" px-3 py-2 rounded-md text-2xl font-medium"
              >
                Home
              </a>
              <a
                href="#skills"
                className=" px-3 py-2 rounded-md text-2xl font-medium"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="px-3 py-2 rounded-md text-2xl font-medium"
              >
                Projects
              </a>
              <a
                href="#about"
                className=" px-3 py-2 rounded-md text-2xl font-medium"
              >
                About Me
              </a>
              <a
                href="#contact"
                className=" px-3 py-2 rounded-md text-2xl font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-md absolute right-1 z-10">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md text-lg font-medium"
          >
            Home
          </a>
          <a
            href="#skills"
            className=" block px-3 py-2 rounded-md text-lg font-medium"
          >
            Skills
          </a>
          <a
            href="#projects"
            className=" block px-3 py-2 rounded-md text-lg font-medium"
          >
            Projects
          </a>
          <a
            href="#about"
            className=" block px-3 py-2 rounded-md text-lg font-medium"
          >
            About Me
          </a>
          <a
            href="#contact"
            className=" block px-3 py-2 rounded-md text-lg font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
