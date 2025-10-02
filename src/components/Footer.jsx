"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library  } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function Footer() {
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    return (
        <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-10 items-center">
            <div className="text-center justify-center items-center font-semibold flex flex-col md:flex-row">
                <button
                    onClick={scrollToTop}
                    className="mb-4 md:mb-0 md:order-2 pl-4 p-2 text-black text-2xl cursor-pointer animate-pulse"
                    aria-label="Back to top"
                >
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
                </button>
                <p className="md:order-1">&copy; 2025 Warburtons AI Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
}