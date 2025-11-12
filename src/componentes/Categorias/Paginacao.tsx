import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PaginacaoProps {
  slug: string;
  currentPage: number;
  totalPages: number;
}

export default function Paginacao({ slug, currentPage, totalPages }: PaginacaoProps) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      <Link
        href={`/categoria/${slug}?page=${currentPage - 1}`}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all
        ${currentPage === 1
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-white text-gray-700 border border-gray-300 hover:border-pink-600 hover:bg-purple-50 hover:text-pink-600"}`}
      >
        <ChevronLeft size={18} />
        Anterior
      </Link>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
        const ativo = page === currentPage;
        if (
          page === 1 ||
          page === totalPages ||
          (page >= currentPage - 1 && page <= currentPage + 1)
        ) {
          return (
            <Link
              key={page}
              href={`/categoria/${slug}?page=${page}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${ativo
                ? "bg-[#ff007f] text-white shadow"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-purple-50 hover:text-purple-600"}`}
            >
              {page}
            </Link>
          );
        }
        if (page === currentPage - 2 || page === currentPage + 2)
          return <span key={page} className="px-2 text-gray-400">...</span>;
        return null;
      })}

      <Link
        href={`/categoria/${slug}?page=${currentPage + 1}`}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all
        ${currentPage === totalPages
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-white text-gray-700 border border-gray-300 hover:border-pink-600 hover:bg-purple-50 hover:text-pink-600"}`}
      >
        Próximo
        <ChevronRight size={18} />
      </Link>
    </div>
  );
}
