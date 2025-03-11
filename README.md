# CSITSS Website Redesign

A website for International Conference on Computational Systems and Information Technology for Sustainable Solutions (CSITSS) built with Next.js, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js (>18.18.0)
- npm (>9.0.0)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/CubeStar1/csitss-redesign.git
cd csitss-redesign
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

```
csitss-redesign/
├── components/               # React components
│   ├── global/               # Global components used across pages
│   │   ├── header.tsx        # Main navigation header
│   │   ├── footer.tsx        # Site footer
│   │   ├── theme-switcher.tsx # Dark/light mode switcher
│   │   ├── theme-provider.tsx # Theme context provider
│   │   └── header-mobile.tsx  # Mobile navigation header
│   ├── landing/    # Components specific to landing page
│   ├── ui/         # Reusable shadcn/ui components
│   ├── magicui/    # magicui components
├── data/            # Static data files
├── images/          # Image assets
├── lib/             # Utility functions and shared logic
├── pages/           # Next.js pages
├── public/          # Static files
├── styles/          # Global styles and Tailwind configurations
├── .gitignore       # Git ignore rules
├── .prettierrc.json # Prettier configuration
├── next.config.ts   # Next.js configuration
├── package.json     # Project dependencies and scripts
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json    # TypeScript configuration
```


