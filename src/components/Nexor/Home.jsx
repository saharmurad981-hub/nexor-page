import { useState } from "react";
import All from "../../assets/NexorImg";
import Button from "./Button";
import Hero from "./Hero";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="relative flex items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-16">

        {/* Logo */}
        <img
          src={All.img1}
          alt="Nexor logo"
          className="w-28 shrink-0 object-contain sm:w-32"
        />

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-5 rounded-xl bg-white px-6 py-3 text-base lg:flex xl:gap-7 xl:text-lg">
          <li><a href="#about" className="transition hover:text-gray-500">About</a></li>
          <li><a href="#pages" className="transition hover:text-gray-500">Pages</a></li>
          <li><a href="#services" className="transition hover:text-gray-500">Service</a></li>
          <li><a href="#contact" className="transition hover:text-gray-500">Contact</a></li>
          <li><a href="#blog" className="transition hover:text-gray-500">Blog</a></li>
        </ul>

        {/* Desktop contact button */}
        <div className="hidden lg:block">
          <Button
            text="Contact Us"
            bgColor="bg-black"
            textColor="text-white"
            hoverColor="hover:bg-gray-700"
            padding="px-4 py-3"
            rounded="rounded-xl"
          />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-2xl lg:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="absolute left-4 right-4 top-full z-50 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl lg:hidden">
            <ul className="flex flex-col gap-5 text-base">
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              </li>
              <li>
                <a href="#pages" onClick={() => setMenuOpen(false)}>Pages</a>
              </li>
              <li>
                <a href="#services" onClick={() => setMenuOpen(false)}>Service</a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              </li>
              <li>
                <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
              </li>
            </ul>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 block rounded-xl bg-black px-4 py-3 text-center font-medium text-white transition hover:bg-gray-700"
            >
              Contact Us
            </a>
          </div>
        )}
      </nav>

      {/* Responsive Hero */}
      <Hero
        label="We are Nexor"
        title="Your trusted — partner in growing business success"
        description="Nexor is a consultancy built for teams that need direction, structure, and execution—not vague advice or long decks."
        labell="Book a free meeting"
        image={All.img2}
      />
    </>
  );
}