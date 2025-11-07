import { Suspense } from "react";
import { getDresses, getCategories } from "@/lib/api";
import Gallery from "@/components/Gallery";
import Filters from "@/components/Filters";

interface HomeProps {
  searchParams: Promise<{
    category?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  
  // Fetch dresses with filters
  const dresses = await getDresses({
    category: params.category,
    minPrice: params.minPrice ? parseFloat(params.minPrice) : undefined,
    maxPrice: params.maxPrice ? parseFloat(params.maxPrice) : undefined,
  });

  // Fetch categories for filters
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Anjo Vestidos de Festa
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Encontre o vestido perfeito para sua ocasião especial
          </p>
        </header>

        {/* Filters */}
        <Suspense fallback={<div>Carregando filtros...</div>}>
          <Filters categories={categories} />
        </Suspense>

        {/* Gallery */}
        <Suspense fallback={<div>Carregando vestidos...</div>}>
          <Gallery dresses={dresses} />
        </Suspense>

        {/* Store Information */}
        <section className="mt-16 rounded-lg bg-white dark:bg-zinc-900 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Sobre Nossa Loja
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Endereço
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Rua das Flores, 123<br />
                Centro - São Paulo, SP<br />
                CEP: 01000-000
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Horário de Funcionamento
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 14h<br />
                Domingo: Fechado
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Contato
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Telefone: (11) 1234-5678<br />
                WhatsApp: (11) 98765-4321<br />
                Email: contato@anjovestidos.com.br
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Sobre Nós
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Especializada em vestidos de festa há mais de 20 anos, 
                oferecemos qualidade e elegância para tornar seu evento inesquecível.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
