import Image from "next/image";
import Link from "next/link";
import { Dress } from "@/lib/api";

interface GalleryProps {
  dresses: Dress[];
}

export default function Gallery({ dresses }: GalleryProps) {
  if (dresses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Nenhum vestido encontrado.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {dresses.map((dress) => (
        <Link
          key={dress.id}
          href={`/vestidos/${dress.id}`}
          className="group cursor-pointer"
        >
          <div className="overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 transition-transform duration-300 group-hover:scale-105">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={dress.image}
                alt={dress.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
                {dress.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {dress.description}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  R$ {dress.price.toFixed(2)}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {dress.category}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
