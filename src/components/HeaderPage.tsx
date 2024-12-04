import React, { useState } from "react";
import MenuIcon from "@/images/MenuIcon";

export const HeaderPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full min-h-12 bg-zinc-400/70 border-b dark:bg-zinc-900/40 dark:border-gray-950 border-gray-900 flex justify-between items-center px-3 py-2">
      <div>
        <h1 className="text-2xl font-bold">Todo-List</h1>
      </div>
      <div>
        {/* Menu Normal */}
        <ul className="sm:flex gap-3 hidden">
          <li className="hover:underline underline-offset-8 text-lg dark:hover:text-slate-300 dark:active:text-slate-200 cursor-pointer hover:text-slate-800 active:text-slate-700">
            Notas
          </li>
          <li className="underline hover:underline underline-offset-8 text-lg dark:hover:text-slate-300 dark:active:text-slate-200 cursor-pointer hover:text-slate-800 active:text-slate-700">
            Todo-list
          </li>
          <li className="hover:underline underline-offset-8 text-lg dark:hover:text-slate-300 dark:active:text-slate-200 cursor-pointer hover:text-slate-800 active:text-slate-700">
            Configurações
          </li>
        </ul>

        {/* Menu Icon Responsivo */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu}>
            <MenuIcon
              width={48}
              height={48}
              className="stroke-black dark:stroke-white hover:dark:stroke-zinc-200 hover:stroke-zinc-700"
            />
          </button>
        </div>
      </div>

      {/* Menu Responsivo (Mobile) */}
      {isMobileMenuOpen && (
        <div className="w-8/12 fixed inset-y-0 right-0 bg-zinc-900/95 text-white z-50 flex flex-col items-center justify-center rounded-s-xl border-s border-black">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-6xl font-bold hover:text-gray-300"
          >
            &times;
          </button>
          <nav className="w-full flex flex-col items-end gap-6 text-2xl px-5">
            <a href="#" className="hover:underline underline-offset-8">
              Notas
            </a>
            <a href="#" className="underline underline-offset-8 hover:underline">
              Todo-list
            </a>
            <a href="#" className="hover:underline underline-offset-8">
              Configurações
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
