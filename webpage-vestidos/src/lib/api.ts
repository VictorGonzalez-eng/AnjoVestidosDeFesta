// API library for fetching dress data
// This simulates data from a CMS - replace with real API calls when needed

export interface Dress {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  sizes: string[];
  colors: string[];
  image: string;
  images: string[];
}

// Mock data - replace with actual API calls to your CMS
const mockDresses: Dress[] = [
  {
    id: "1",
    name: "Vestido de Festa Elegante",
    description: "Vestido longo em tecido nobre, perfeito para festas e eventos especiais.",
    price: 450.00,
    category: "Longo",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Azul Marinho", "Preto", "Vermelho"],
    image: "/imagens/dress1.jpg",
    images: ["/imagens/dress1.jpg", "/imagens/dress1-2.jpg"],
  },
  {
    id: "2",
    name: "Vestido Curto Moderno",
    description: "Vestido curto com design moderno e sofisticado.",
    price: 320.00,
    category: "Curto",
    sizes: ["P", "M", "G"],
    colors: ["Rosa", "Branco", "Nude"],
    image: "/imagens/dress2.jpg",
    images: ["/imagens/dress2.jpg"],
  },
  {
    id: "3",
    name: "Vestido Midi Clássico",
    description: "Vestido midi elegante com caimento perfeito.",
    price: 380.00,
    category: "Midi",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Verde", "Azul", "Preto"],
    image: "/imagens/dress3.jpg",
    images: ["/imagens/dress3.jpg"],
  },
  {
    id: "4",
    name: "Vestido de Gala Luxuoso",
    description: "Vestido de gala com detalhes bordados e acabamento premium.",
    price: 680.00,
    category: "Longo",
    sizes: ["P", "M", "G"],
    colors: ["Dourado", "Prata"],
    image: "/imagens/dress4.jpg",
    images: ["/imagens/dress4.jpg"],
  },
];

/**
 * Fetches all dresses from the CMS
 * @param filters - Optional filters for category, price range, etc.
 * @returns Promise with array of dresses
 */
export async function getDresses(filters?: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}): Promise<Dress[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  let dresses = [...mockDresses];

  // Apply filters
  if (filters?.category) {
    dresses = dresses.filter((dress) => dress.category === filters.category);
  }
  if (filters?.minPrice !== undefined) {
    dresses = dresses.filter((dress) => dress.price >= filters.minPrice!);
  }
  if (filters?.maxPrice !== undefined) {
    dresses = dresses.filter((dress) => dress.price <= filters.maxPrice!);
  }

  return dresses;
}

/**
 * Fetches a single dress by ID
 * @param id - Dress ID
 * @returns Promise with dress data or null if not found
 */
export async function getDressById(id: string): Promise<Dress | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const dress = mockDresses.find((d) => d.id === id);
  return dress || null;
}

/**
 * Gets unique categories from all dresses
 * @returns Promise with array of category names
 */
export async function getCategories(): Promise<string[]> {
  const dresses = await getDresses();
  const categories = [...new Set(dresses.map((d) => d.category))];
  return categories;
}
