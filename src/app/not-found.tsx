"use client";

import Image from "next/image";
import Link from "next/link";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0e0e10] text-gray-300 px-4">
      <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <Image
          src="/Vector.svg" 
          alt="Logo Celebraí"
          width={100}
          height={100}
          className="opacity-80"
        />

        {/* Texto e botão */}
        <div>
          <p className="text-base md:text-lg mb-4 max-w-md">
            Desculpe. Esse conteúdo não existe no nosso site no momento.
          </p>

          <Link
            href="/"
            className="inline-block bg-[#ff007f] hover:opacity-80 text-white font-semibold px-5 py-2 rounded-full transition"
          >
            Ir para a pagina principal
          </Link>
        </div>
      </div>
    </div>
  );
}