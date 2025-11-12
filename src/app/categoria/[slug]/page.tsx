import { Metadata } from "next";
import ProdutoCard from "@/componentes/Card_Produto/ProdutoCard";
import Breadcrumb from "@/componentes/Categorias/Navegacao";
import CategoriaHeader from "@/componentes/Categorias/cabecalho";
import Paginacao from "@/componentes/Categorias/Paginacao";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

async function getProdutos(categoria: string) {
  const apiCategories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
  const url = apiCategories.includes(categoria)
    ? `https://fakestoreapi.com/products/category/${categoria}`
    : `https://fakestoreapi.com/products`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Erro ao buscar produtos");
    return res.json();
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoria = decodeURIComponent(slug);
  
  const categoriaFormatada =
    categoria.charAt(0).toUpperCase() + categoria.slice(1);
  
  return {
    title: `${categoriaFormatada} | Celebraí`,
    description: `Encontre os melhores produtos de ${categoria} para sua festa`,
    openGraph: {
      title: `${categoria} | Celebraí`,
      description: `Confira os melhores produtos da categoria ${categoria}.`,
    },
  };
}

export default async function CategoriaPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;

  const categoria = decodeURIComponent(slug);
  const currentPage = Number(pageParam) || 1;
  const itemsPerPage = 15;

  const todosProdutos = await getProdutos(categoria);
  const totalItems = todosProdutos.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const produtosPaginados = todosProdutos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navegação */}
        <Breadcrumb categoria={categoria} />

        {/* Cabeçalho */}
        <CategoriaHeader categoria={categoria} totalItems={totalItems} />

        {/* Lista de Produtos */}
        {produtosPaginados.length > 0 ? (
          <>
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-10
              animate-fade-in"
            >
              {produtosPaginados.map((produto: any) => (
                <div
                  key={produto.id}
                  className="transition-transform transform hover:-translate-y-1"
                >
                  <ProdutoCard
                    id={produto.id}
                    title={produto.title}
                    price={produto.price}
                    image={produto.image}
                    location="Recife, PE"
                  />
                </div>
              ))}
            </div>

            {/* Paginação */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <Paginacao
                  slug={slug}
                  currentPage={currentPage}
                  totalPages={totalPages}
                />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">
              Nenhum produto encontrado nesta categoria.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-purple-600 text-white font-medium rounded-xl shadow hover:bg-purple-700 transition-all"
            >
              Voltar para a Home
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
