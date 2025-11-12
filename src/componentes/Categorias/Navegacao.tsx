import Link from "next/link";

interface Navegacao {
  categoria: string;
}

export default function Breadcrumb({ categoria }: Navegacao) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6 pt-15">
      <Link href="/" className="text-pink-600 hover:text-purple-700 font-medium transition-colors">
        Home
      </Link>

      <span className="text-gray-400">/</span>
      <span className="text-gray-700 capitalize font-medium">{categoria}</span>
    </nav>
  );
}
