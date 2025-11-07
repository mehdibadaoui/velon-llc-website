# Velon LLC - Professional Web Development Services

A modern, professional website for Velon LLC built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- SEO optimized with metadata and sitemap
- Professional service pages
- Contact form
- Privacy Policy & Terms of Service
- Mobile-first approach
- Fast performance with Next.js
- Ready for Stripe & Mercury Relay verification

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Step 1: Push to GitHub

1. **Initialize Git repository (if not already done):**
```bash
git init
git add .
git commit -m "Initial commit: Velon LLC website"
```

2. **Create a new repository on GitHub:**
- Go to [github.com](https://github.com)
- Click "New repository"
- Name it `velon-llc-website` (or any name you prefer)
- Don't initialize with README (you already have one)

3. **Push to GitHub:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/velon-llc-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com) and sign in** (use your GitHub account)

2. **Import your repository:**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your `velon-llc-website` repository
   - Click "Import"

3. **Configure project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** .next (auto-filled)
   - Leave environment variables empty (none needed for now)

4. **Click "Deploy"**
   - Vercel will build and deploy your site
   - You'll get a temporary URL like `velon-llc-website.vercel.app`

### Step 3: Connect Custom Domain

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain: `velonllc.com`

2. **Configure DNS:**
   - Go to your domain registrar (where you bought velonllc.com)
   - Add these DNS records:

   **For root domain (velonllc.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation** (can take up to 48 hours, usually faster)

4. **Vercel will automatically provision SSL certificate** (HTTPS)

### Step 4: Verify Deployment

- Visit https://velonllc.com
- Check all pages load correctly
- Test the contact form
- Verify mobile responsiveness
- Check Privacy Policy and Terms of Service pages

## Project Structure

```
velon-llc-website/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── privacy/
│   │   └── page.tsx          # Privacy Policy
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── terms/
│   │   └── page.tsx          # Terms of Service
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles
│   └── sitemap.ts            # XML sitemap
├── components/
│   ├── ContactForm.tsx       # Contact form component
│   ├── Footer.tsx            # Footer component
│   └── Navigation.tsx        # Navigation component
├── public/
│   └── robots.txt            # SEO robots file
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Pages

- **Home** (`/`) - Hero section, services overview, call-to-actions
- **About** (`/about`) - Company information, mission, expertise
- **Services** (`/services`) - Detailed service offerings, pricing models
- **Contact** (`/contact`) - Contact form, business information
- **Privacy Policy** (`/privacy`) - Privacy policy and data protection
- **Terms of Service** (`/terms`) - Terms and conditions

## Payment Gateway Approval Checklist

✅ Professional, modern design
✅ Complete business information (EIN, address, contact)
✅ Privacy Policy page
✅ Terms of Service page
✅ Contact information clearly displayed
✅ Legitimate business purpose
✅ Professional email (support@velonllc.com)
✅ SSL certificate (automatic with Vercel)
✅ Responsive design
✅ About page with company details
✅ Clear service descriptions
✅ Refund policy included in Terms

## Customization

### Update Contact Information

Edit the following files if you need to change contact details:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

### Update Colors

Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: {
    // Customize these colors
  }
}
```

### Add Email Integration

To make the contact form functional, integrate with:
- **SendGrid** - Email delivery service
- **Resend** - Modern email API
- **Netlify Forms** - Simple form handling
- **Formspree** - Form backend service

Example integration in `components/ContactForm.tsx`:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

## Support

For questions or issues:
- Email: support@velonllc.com
- Phone: 251-385-9704

## License

© 2025 Velon LLC. All rights reserved.

## Company Information

- **Legal Name:** Velon LLC
- **EIN:** 98-1891496
- **Registered:** Wyoming, USA
- **Address:** 30 N Gould St Ste R, Sheridan, WY 82801
