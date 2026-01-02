# Muhammad Alif Haziq - Portfolio Website

A modern, responsive portfolio website built with Nuxt.js 3 and Tailwind CSS.

## 🌐 Live Demo

**[View Live Portfolio →](https://your-portfolio-link.vercel.app)**

> Update this link after deployment!

## 🚀 Features

- **Responsive Design** - Looks great on all devices
- **Modern UI** - Clean and professional design with smooth animations
- **Fast Performance** - Built with Nuxt.js 3 for optimal performance
- **Easy to Customize** - Well-organized component structure

## 📋 Sections

- **Hero** - Introduction and call-to-action
- **About** - Professional summary and statistics
- **Experience** - Detailed work history with projects
- **Skills** - Technical and soft skills categorized by domain
- **Education** - Academic background
- **Contact** - Multiple ways to get in touch

## 🛠️ Technologies Used

- [Nuxt.js 3](https://nuxt.com/) - Vue.js Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:3000`

## 🚀 Build for Production

Generate a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Generate static site (SSG):

```bash
npm run generate
```

## 📝 Customization

### Update Personal Information

1. **Contact Information** - Update in `components/Hero.vue` and `components/Contact.vue`
2. **LinkedIn URL** - Update in `components/Hero.vue`, `components/Contact.vue`, and `components/Footer.vue`
3. **Experience Details** - Modify `components/Experience.vue`
4. **Skills** - Update arrays in `components/Skills.vue`
5. **Education** - Modify `components/Education.vue`

### Styling

- **Colors** - Modify the color scheme in `tailwind.config.js`
- **Fonts** - Change fonts in `assets/css/main.css`
- **Global Styles** - Update `assets/css/main.css`

## 📁 Project Structure

```
├── assets/
│   └── css/
│       └── main.css          # Global styles
├── components/
│   ├── About.vue             # About section
│   ├── Contact.vue           # Contact section
│   ├── Education.vue         # Education section
│   ├── Experience.vue        # Experience section
│   ├── Footer.vue            # Footer component
│   ├── Hero.vue              # Hero/Landing section
│   ├── Navigation.vue        # Navigation bar
│   └── Skills.vue            # Skills section
├── pages/
│   └── index.vue             # Main page
├── app.vue                   # Root component
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.js        # Tailwind configuration
└── package.json              # Dependencies
```

## 🌐 Deployment

### GitHub Pages (Current)

**Live Site:** [https://alifhaziq.github.io/portfolio/](https://alifhaziq.github.io/portfolio/)

**To Deploy Updates:**

1. Make your changes to the code
2. Run the deployment script:
```powershell
.\deploy.ps1
```

Or manually:
```bash
npm run generate
git checkout gh-pages
# Copy files from .output/public to root
git add -A
git commit -m "Deploy update"
git push origin gh-pages
git checkout main
```

### Other Platforms

This portfolio can also be deployed to:
- **Vercel** - [vercel.com](https://vercel.com) (Recommended for auto-deployment)
- **Netlify** - [netlify.com](https://netlify.com)
- **Azure Static Web Apps** - [azure.microsoft.com](https://azure.microsoft.com)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Muhammad Alif Haziq Bin Rosli**
- Location: Puchong, Selangor
- Phone: 018-4650914
- LinkedIn: [Haziq Rosli](https://linkedin.com/in/haziq_rosli)

---

Built with ❤️ using Nuxt.js & Tailwind CSS

