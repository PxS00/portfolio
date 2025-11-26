import { useLocation } from "react-router-dom";
   
export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur bg-white/10 text-white/70">
      <div className="font-extrabold text-2xl">P</div>
      {isHome && (
        <div className="flex gap-8">
          <a href="#about" className="transition-opacity hover:opacity-100 opacity-70">About</a>
          <a href="#projects" className="transition-opacity hover:opacity-100 opacity-70">Projects</a>
          <a href="#contact" className="transition-opacity hover:opacity-100 opacity-70">Contact</a>
          <a href="#stacks" className="transition-opacity hover:opacity-100 opacity-70">Stacks</a>
        </div>
      )}
      <div className="flex gap-4">
        {/* Social icons and theme toggle will go here */}
      </div>
    </nav>
  );
}
