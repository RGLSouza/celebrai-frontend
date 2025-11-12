interface CategoriaHeaderProps {
  categoria: string;
  totalItems: number;
}

export default function CategoriaHeader({ categoria, totalItems }: CategoriaHeaderProps) {
  return (
    <header className="mb-8 border-b border-gray-200 pb-4">
      <h1 className="text-4xl font-extrabold text-gray-900 capitalize mb-1">
        {categoria}
      </h1>
      <p className="text-gray-600 text-base">
        {totalItems} produto{totalItems !== 1 ? "s" : ""} encontrado
        {totalItems !== 1 ? "s" : ""}
      </p>
    </header>
  );
}