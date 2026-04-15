import Image from "next/image";
import logo from "../assets/logo-xl.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
    return (
        <footer className="bg-[#244F41] text-white py-16 px-6 mt-12 w-full">
            <div className="container mx-auto flex flex-col items-center">

                <div className="flex flex-col items-center text-center max-w-3xl mb-12">
                    <Image src={logo} alt="KeenKeeper Logo" height={48} className="mb-6 object-contain" />
                    <p className="text-gray-300 sm:text-base max-w-2xl mx-auto">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>

                <div className="flex flex-col items-center mb-12">
                    <h3 className="text-xl font-medium mb-6">Social Links</h3>
                    <div className="flex justify-center gap-6">
                        <a href="#" className="hover:scale-105 transition-transform" aria-label="Instagram">
                            <Image src={instagram} alt="Instagram" width={40} height={40} className="rounded-full" />
                        </a>
                        <a href="#" className="hover:scale-105 transition-transform" aria-label="Facebook">
                            <Image src={facebook} alt="Facebook" width={40} height={40} className="rounded-full" />
                        </a>
                        <a href="#" className="hover:scale-105 transition-transform" aria-label="Twitter">
                            <Image src={twitter} alt="Twitter" width={40} height={40} className="rounded-full" />
                        </a>
                    </div>
                </div>

                <div className="w-full border-t border-[#ffffff1a] pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm gap-4">
                    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

