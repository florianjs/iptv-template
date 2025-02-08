# IPTV Stream Platform

A modern streaming platform built with Nuxt 3 and Nuxt Content, featuring a beautiful UI, video playback capabilities, and a content management system. This platform provides an immersive viewing experience with features like video categorization, search functionality, and a responsive design.

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82.svg)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC.svg)


## 💝 Support My Work

[![NuxtMint](https://nuxtmint.com/nuxt-mint-logo.png)](https://nuxtmint.com)

> This template and many others are available at [NuxtMint.com](https://nuxtmint.com)

[![Discord](https://img.shields.io/badge/Discord-Join_Us!-5865F2?style=for-the-badge&logo=discord)](https://discord.gg/dZF8tDgBrM)

> Join our friendly Discord community to get help, share your ideas, and connect with other developers!


## ✨ Showcase

![IPTV Template Preview](https://github.com/florianjs/iptv-template/blob/main/public/iptv.gif?raw=true)

[▶️ Watch Full Video Preview](https://github.com/florianjs/iptv-template/raw/refs/heads/main/public/iptv.mp4)

A beautiful and modern streaming platform template with:

- 🎬 Stunning video player interface with Plyr
- 🎨 Clean and responsive design using Tailwind CSS
- 📱 Mobile-first approach with smooth animations
- ⚡️ Lightning-fast performance with Nuxt 3
- 🔥 Built with the latest web technologies

[View Demo](https://iptv.0xexile.com/) · [Report Bug](https://github.com/florianjs/iptv-template/issues) · [Request Feature](https://github.com/florianjs/iptv-template/issues)

## ✨ Features

- 🎥 Video streaming with Plyr player integration
- 📝 Content management with Nuxt Content
- 🎨 Modern and responsive UI with Tailwind CSS
- 📱 Mobile-first design approach
- 🔍 Content search and filtering
- 📂 JSON-based content management
- 🌈 Beautiful animations and transitions
- 🎬 Video thumbnails and metadata support
- 🏷️ Category and tag-based organization

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or later
- npm, yarn, or pnpm package manager
- OMDB API key (free) for movie posters and metadata in the Hero section

### Installation

1. Clone the repository:

```bash
git clone https://github.com/florianjs/iptv-template
cd fiverr-iptv
```

2. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your OMDB API key (get one for free at https://www.omdbapi.com/apikey.aspx)

```bash
cp .env.example .env
```

4. Start the development server:

```bash
# Using pnpm (recomended)
pnpm dev

# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
fiverr-iptv/
├── components/        # Vue components
├── content/
│   └── medias/       # JSON content files for media items
├── pages/            # Application pages and routes
├── public/           # Static files
├── stores/           # Pinia stores
├── app.vue           # Main application file
└── nuxt.config.ts    # Nuxt configuration
```

## 💻 Development

### Content Management with Nuxt Content

This project uses [Nuxt Content](https://content.nuxt.com/) for managing media content. All media items are stored as JSON files in the `content/medias/` directory, making it easy to:

- Query content using the built-in API
- Leverage powerful search capabilities
- Use Git-based content management
- Benefit from automatic TypeScript types

### Adding New Content

Add new media items by creating JSON files in the `content/medias/` directory. Each file should follow this structure:

```json
{
  "title": "Movie Title",
  "mediaUrl": "https://example.com/video.mp4",
  "mediaThumbnail": "https://example.com/thumbnail.jpg",
  "mediaType": "video/mp4",
  "tags": ["Category1", "Category2"],
  "description": "Movie description",
  "quality": "4K",
  "duration": "2:30:00",
  "ageRating": "PG-13",
  "genres": ["Action", "Drama"],
  "actors": ["Actor 1", "Actor 2"]
}
```

### Building for Production

Build the application for production:

```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm
pnpm build
```

Preview the production build:

```bash
# Using npm
npm run preview

# Using yarn
yarn preview

# Using pnpm
pnpm preview
```

## 🚀 Deployment

### Recommended: Cloudflare Pages

This project is optimized for deployment on Cloudflare Pages, which provides:

- Global CDN distribution
- Automatic HTTPS
- Zero cold starts
- Easy deployment process

Follow the [Nuxt Content deployment guide for Cloudflare](https://content.nuxt.com/docs/deploy/serverless#deploy-with-serverless) for detailed instructions.

Basic deployment steps:

1. Connect your repository to Cloudflare Pages
2. Set build command: `pnpm run build`
3. Set build output directory: `.output/public`
4. Add environment variables:
   - `OMDB_API_KEY=your_api_key`
5. Add a D1 SQL Database from Cloudflare
6. Bind your database to your Cloudflare Page

## 🔧 Configuration

### Environment Variables

The following environment variables are required:

```bash
# OMDB API key for movie posters and metadata (required)
OMDB_API_KEY=your_api_key_here
```

To get started:

1. Sign up for a free OMDB API key at https://www.omdbapi.com/apikey.aspx
2. Copy `.env.example` to `.env`
3. Replace `your_api_key_here` with your actual OMDB API key

### Nuxt Configuration

The application can be configured through the `nuxt.config.ts` file. Key configurations include:

- Content module settings
- Tailwind CSS configuration
- Plyr player options
- Route handling

## 📱 Mobile Support

The application is fully responsive and optimized for mobile devices. Features include:

- Adaptive layouts
- Touch-friendly controls
- Optimized animations
- Mobile-specific UI enhancements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Nuxt.js](https://nuxt.com/) - The Vue Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Plyr](https://plyr.io/) - Media Player
- [Pinia](https://pinia.vuejs.org/) - State Management
- [Nuxt Content](https://content.nuxt.com/) - Content Management
- [Cloudflare Pages](https://pages.cloudflare.com/) - Deployment Platform
- [OMDB API](https://www.omdbapi.com/) - Movie Data API
