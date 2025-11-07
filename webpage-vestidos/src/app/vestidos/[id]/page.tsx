import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getDressById } from "@/lib/api";

interface DressDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DressDetailPage({ params }: DressDetailPageProps) {
  const { id } = await params;
  const dress = await getDressById(id);

  if (!dress) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-6"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar para a galeria
        </Link>

        {/* Dress Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={dress.image}
                alt={dress.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {dress.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {dress.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800"
                  >
                    <Image
                      src={img}
                      alt={`${dress.name} - imagem ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 25vw, 12.5vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {dress.name}
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Categoria: {dress.category}
              </p>
            </div>

            <div className="border-t border-b border-zinc-200 dark:border-zinc-700 py-4">
              <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                R$ {dress.price.toFixed(2)}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Descrição
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {dress.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Tamanhos Disponíveis
              </h2>
              <div className="flex gap-2">
                {dress.sizes.map((size) => (
                  <span
                    key={size}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-md border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Cores Disponíveis
              </h2>
              <div className="flex flex-wrap gap-2">
                {dress.colors.map((color) => (
                  <span
                    key={color}
                    className="px-4 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-md bg-green-600 px-6 py-3 text-lg font-medium text-white hover:bg-green-700 transition-colors"
              >
                Entrar em contato via WhatsApp
              </a>
              <p className="mt-2 text-sm text-center text-zinc-500 dark:text-zinc-400">
                ou ligue para (11) 1234-5678
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Informações Importantes
          </h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 mt-0.5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Possibilidade de prova antes da locação ou compra
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 mt-0.5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Ajustes disponíveis para garantir o caimento perfeito
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 mt-0.5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Entrega e retirada agendada com antecedência
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 mt-0.5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Atendimento personalizado para garantir sua satisfação
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
