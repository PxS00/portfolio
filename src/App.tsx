import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0D0F14]">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
