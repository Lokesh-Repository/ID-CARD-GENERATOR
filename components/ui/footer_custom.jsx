import { Separator } from "../ui/separator";
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">ID CARD GENERATOR</h2>
            <p className="text-sm text-zinc-400 mt-1">Made With Keyboard And Code By Ujjwal Kumar And Lokesh.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-400 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
        
        <Separator className="my-6 bg-zinc-700" />
        
        <p className="text-center text-sm text-zinc-500">© {new Date().getFullYear()} ID CARD GENERATOR. All rights reserved.</p>
      </div>
    </footer>
  );
}
