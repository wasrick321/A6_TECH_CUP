# A6 DEX
Deployed link:  https://a6-tech-cup-frq2.vercel.app/

A modern, interactive profile showcase application built with React, TypeScript, and Vite. Inspired by the Pokédex interface, A6 DEX displays profiles organized by categories: Achievers, Sports, Academic Performance, and Fun Moments.

## 🚀 Features
                                       
                                       
- **Modern UI**: Pokédex-inspired interface with smooth animations
- **Category Organization**: Profiles organized into 4 distinct categories
- **Interactive Dashboard**: Browse profiles with detailed statistics
- **Profile Details**: Comprehensive profile views with achievements, habits, personality traits, and stats
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Type-Safe**: Built with TypeScript for better developer experience

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Modern web browser

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd A6
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:
```bash
npm run build
```

The production build will be in the `dist` directory.

## 📦 Deployment

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

### Docker

1. Build the image:
```bash
docker build -t a6-dex .
```

2. Run the container:
```bash
docker run -p 3000:80 a6-dex
```

## 📁 Project Structure

```
A6/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   └── profile_character_img/  # Profile character images
├── src/
│   ├── components/        # React components
│   │   ├── AppShell/     # Main app shell
│   │   ├── TopBar/       # Top navigation bar
│   │   ├── WelcomeView/  # Welcome screen
│   │   ├── CategoriesView/  # Category selection
│   │   ├── DashboardView/   # Profile dashboard
│   │   └── ProfileView/     # Profile detail view
│   ├── pages/            # Page components
│   │   └── HomePage/     # Main homepage
│   ├── data/             # Data files
│   │   └── profiles.ts   # Profile data
│   ├── types/            # TypeScript types
│   │   └── index.ts      # Type definitions
│   ├── constants/        # Constants
│   │   └── index.ts      # App constants
│   ├── styles/           # Global styles
│   │   ├── globals.css   # Global CSS
│   │   └── tokens.css    # CSS variables
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## 🎨 Customization

### Adding/Editing Profiles

Edit `src/data/profiles.ts` to add or modify profiles. Each profile includes:
- Basic info (name, role, description)
- Stats (velocity, impact, creativity)
- Achievements, habits, personality traits, and qualities
- Image path (should be in `public/profile_character_img/`)

### Styling

- Global styles: `src/styles/globals.css`
- CSS variables: `src/styles/tokens.css`
- Component-specific styles: Component CSS modules

## 🧪 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📝 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For internal contributions, please follow the existing code structure and patterns.

## 🐛 Troubleshooting

### Port already in use
Change the port in `vite.config.ts` or use:
```bash
npm run dev -- --port 3000
```

### Build errors
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

For issues or questions, please contact the development team.
