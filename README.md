# AnjoVestidosDeFesta
One simple webpage where you can expose dresses and have some information about the local store.

## Project Structure

This repository contains a Next.js 14+ application for showcasing dresses and store information.

### Directory Structure

```
webpage-vestidos/
├── public/
│   └── imagens/          # Dress images
├── src/
│   ├── app/              # Next.js 14+ routes
│   │   ├── page.tsx      # Homepage (dress list)
│   │   └── vestidos/[id]/page.tsx  # Dress detail page
│   ├── components/
│   │   ├── Gallery.tsx   # Dress gallery component
│   │   └── Filters.tsx   # Filter component
│   └── lib/
│       └── api.ts        # CMS data fetching functions
├── tailwind.config.ts
└── package.json
```

## Features

- **Dress Gallery**: Browse all available dresses with images, descriptions, and prices
- **Filtering**: Filter dresses by category and price range
- **Dress Details**: View detailed information about each dress including sizes and colors
- **Store Information**: Display store address, hours, and contact information
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Mode**: Automatic dark mode support
- **SEO Optimized**: Server-side rendering for better search engine visibility

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd webpage-vestidos
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Adding Real Dress Data

The application currently uses mock data in `src/lib/api.ts`. To connect to a real CMS:

1. Update the functions in `src/lib/api.ts` to fetch from your CMS API
2. Replace the mock data with actual API calls
3. Update the `Dress` interface if your data structure differs

### Adding Real Images

1. Place your dress images in `public/imagens/`
2. Update the image paths in your data source
3. Use proper image formats (JPEG, PNG, WebP) for optimal performance

### Customizing Store Information

Edit the store information section in `src/app/page.tsx` to match your store's details:
- Address
- Business hours
- Contact information
- About text

## Technology Stack

- **Framework**: Next.js 14.0.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: React 19.2.0
- **Linting**: ESLint

## License

This project is private and proprietary.
