# Apna Pahad - Discover Uttarakhand

A beautiful, modern website showcasing the culture, destinations, and adventures of Uttarakhand, India.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Parallax Effects**: Smooth scroll-based parallax animations
- **Modern UI/UX**: Beautiful animations, gradients, and glassmorphism effects
- **Multiple Pages**: Destinations, Experiences, Culture, Stories, and Gallery pages
- **Clean URLs**: URL rewriting for SEO-friendly URLs without `/pages/` in the path
- **Dynamic Header**: Transparent header on hero section, solid on scroll
- **Newsletter Integration**: Google Sheets integration for newsletter subscriptions
- **Image Gallery**: Multiple gallery pages (Landscape, Culture, Adventure, Temples, Village)

## 📁 Project Structure

```
discover-pahad/
├── index.html              # Homepage
├── pages/                  # All content pages
│   ├── destinations.html
│   ├── experiences.html
│   ├── culture.html
│   ├── stories.html
│   ├── plan-trip.html
│   └── *-gallery.html     # Gallery pages
├── asset/
│   ├── css/               # Stylesheets
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── landing_page.css
│   │   ├── footer.css
│   │   ├── new-sections.css
│   │   └── pages.css
│   ├── js/                # JavaScript files
│   │   ├── global.js
│   │   ├── header.js
│   │   └── landing-page.js
│   └── images/           # Image assets
├── .htaccess              # Apache URL rewriting rules
├── robots.txt             # SEO robots file
└── sitemap.xml            # SEO sitemap
```

## 🚀 Getting Started

### Option 1: Local Development Server (Recommended)

#### Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js:
```bash
# Install http-server globally
npm install -g http-server

# Run the server
npx http-server -p 8000
```

#### Using PHP:
```bash
php -S localhost:8000
```

### Option 2: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Direct File Access

You can open `index.html` directly in your browser, but some features (like URL rewriting) may not work without a server.

## 🌐 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select your branch and folder (usually `main` and `/root`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to [Netlify](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### Traditional Web Hosting

1. Upload all files to your web server via FTP/SFTP
2. Ensure `.htaccess` is uploaded (for Apache servers)
3. Make sure your server supports URL rewriting

## ⚙️ Configuration

### URL Rewriting

The project uses URL rewriting to remove `/pages/` from URLs. This works automatically on Apache servers with `.htaccess`. For other servers:

- **Nginx**: Add rewrite rules to your nginx config
- **Node.js**: Use a middleware like `express-urlrewrite`
- **GitHub Pages**: URL rewriting won't work, but the site will still function

### Newsletter Integration

The newsletter form is configured to submit to Google Sheets. To set up:

1. Create a Google Sheet for storing subscriptions
2. Create a Google Apps Script (see the script URL in the code)
3. Update the form action URL in `asset/js/header.js`

### Customization

#### Replace Images:
- Hero image: Update the `background-image` URL in `index.html` (line ~31)
- Gallery images: Update image URLs in respective gallery HTML files
- Logo/Profile: Replace files in `asset/images/`

#### Change Colors:
- Edit CSS variables in `asset/css/global.css`
- Or modify specific color values in individual CSS files

#### Add New Pages:
1. Create HTML file in `pages/` folder
2. Update navigation in `asset/js/header.js`
3. Add link in footer (if needed)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with animations, gradients, and flexbox/grid
- **JavaScript (Vanilla)**: No frameworks, pure JavaScript
- **Google Sheets API**: Newsletter subscription handling

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please open an issue in the repository.

---

**Made with ❤️ for Uttarakhand**

