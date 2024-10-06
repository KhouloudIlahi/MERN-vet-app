import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlinePets } from "react-icons/md";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Nav items
    const navItems = [
        { link: "Home", path: "/" },
        
        { link: "Conseils", path: "/Conseils" },
        { link: "Sinscrire", path: "/Sinscrire" },
        {link: "Se_Connecter", path:"/Se_Connecter"}
    ];

    return (
        <header className={`w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 ${isSticky ? "bg-blue-300 shadow-md" : "bg-transparent"}`}>
            <nav className={`py-4 px-4 lg:px-24`}>
                <div className="flex justify-between items-center text-base gap-8">
                    {/** Logo */}
                    <Link to="/" className="text-2xl font-bold text-teal-500 flex items-center gap-2">
                        <MdOutlinePets className="inline-block" /> Vet-App
                    </Link>

                    {/** Nav items for large devices */}
                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/** Button for large devices */}
                    <div className="hidden lg:flex items-center space-x-12">
                        <button><MdOutlinePets className="w-5 hover:text-blue-700" /></button>
                    </div>

                    {/** Menu button for mobile devices */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {isMenuOpen ? <MdOutlinePets className="h-5 w-5 text-black" /> : <MdOutlinePets className="h-5 w-5 text-black" />}
                        </button>
                    </div>
                </div>

                {/** Nav items for small devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer hover:text-blue-700">
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
