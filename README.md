# approvU Mortgage Frontend

Modern Next.js 15 application for approvU mortgage platform - providing comprehensive mortgage information, calculators, and broker connections across Canada.

## 🚀 Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Deployment:** Vercel (recommended)
- **Package Manager:** npm

## 📁 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── mortgage/            # Mortgage section
│   │   ├── basics/          # Mortgage basics hub + articles
│   │   ├── brokers/         # Broker directory (province/city)
│   │   ├── calculators/     # Mortgage calculators
│   │   ├── rates/           # Rates by province
│   │   ├── lenders/         # Lender information
│   │   └── ...              # Other mortgage sections
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Homepage
│   ├── sitemap.ts           # Dynamic sitemap generation
│   └── robots.ts            # SEO robots configuration
├── components/              # Reusable React components
│   ├── layout/             # Header, Footer
│   └── sections/           # Hero, CTA, Features
├── types/                   # TypeScript type definitions
├── public/                  # Static assets
└── ...config files

```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your values.

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🗂️ Content Management

The application supports multiple CMS options:

### Option 1: Markdown Files
- Store content in `/content` directory
- Use gray-matter for frontmatter parsing
- Ideal for developer-managed content

### Option 2: Headless CMS
- **Sanity.io** (Recommended) - Real-time editing
- **Strapi** - Self-hosted option
- **Contentful** - Enterprise-grade

Configure your chosen CMS in `.env.local`

## 🧮 Key Features

### Dynamic Routing
- **Articles:** `/mortgage/basics/[slug]`
- **Calculators:** `/mortgage/calculators/[slug]`
- **Brokers:** `/mortgage/brokers/[province]/[city]`
- **Rates:** `/mortgage/rates/[province]`
- **Lenders:** `/mortgage/lenders/[lender]/[slug]`

### SEO Optimizations
- Dynamic metadata per page
- Auto-generated sitemap.xml
- robots.txt configuration
- Open Graph tags
- JSON-LD schema (to be implemented)

### Components
- Responsive Header with mobile menu
- Global Footer with sitemap links
- Hero sections
- CTA sections
- Features grid
- Breadcrumb navigation

## 📊 Calculator Implementation

Calculators are placeholder components. Implement logic for:
- Mortgage Payment Calculator
- Affordability Calculator
- Down Payment Calculator
- Refinance Calculator
- Land Transfer Tax Calculator

## 🔐 Forms & Lead Capture

Forms currently render UI only. Integrate with:
- Zoho CRM
- approvU backend API
- Email notifications

Add reCAPTCHA for spam protection.

## 🎨 Styling

- **TailwindCSS** for utility-first styling
- Custom color palette in `tailwind.config.ts`
- Responsive design (mobile-first)
- Dark mode support (optional)

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy automatically on push

### Other Platforms

- AWS Amplify
- Netlify
- Docker container

## 🧪 Testing

To be implemented:
- Unit tests with Jest
- E2E tests with Playwright
- Lighthouse CI for performance

## 📈 Performance Goals

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Core Web Vitals: Pass

## 🔄 Future Enhancements

- [ ] Implement actual calculator logic
- [ ] Add CMS integration
- [ ] Create admin dashboard
- [ ] Add user authentication
- [ ] Implement mortgage application flow
- [ ] Add blog section
- [ ] Multi-language support (EN/FR)
- [ ] Progressive Web App (PWA)
- [ ] Advanced analytics

## 📚 Documentation

See `/docs` folder for:
- API documentation
- Component guidelines
- Content structure
- Deployment guide

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## 📄 License

ISC License - approvU

## 📞 Support

- Email: dev@approu.com
- Documentation: [docs.approu.com](https://docs.approu.com)

---

Built with ❤️ by the approvU team
