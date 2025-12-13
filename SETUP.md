# Quick Setup Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Clone or Download
```bash
git clone https://github.com/yourusername/discover-pahad.git
cd discover-pahad
```

Or download and extract the ZIP file.

### Step 2: Start Local Server

**Option A: Using npm (if you have Node.js)**
```bash
npm start
```

**Option B: Using Python**
```bash
python -m http.server 8000
```

**Option C: Using PHP**
```bash
php -S localhost:8000
```

### Step 3: Open in Browser
Navigate to: `http://localhost:8000`

That's it! Your website is running locally.

## 📝 Next Steps

### Customize Content

1. **Update Hero Image:**
   - Edit `index.html` line ~31
   - Replace the `background-image` URL

2. **Change Logo:**
   - Replace `asset/images/logo.png`
   - Keep the same filename or update paths in `asset/js/header.js`

3. **Update Colors:**
   - Edit CSS variables in `asset/css/global.css`
   - Or modify specific colors in individual CSS files

4. **Add Your Content:**
   - Edit HTML files in `pages/` folder
   - Update images in `asset/images/`

### Configure Newsletter

1. Create a Google Sheet
2. Set up Google Apps Script (see DEPLOYMENT.md)
3. Update form action in `asset/js/header.js`

## 🛠️ Development

### File Structure
- `index.html` - Homepage
- `pages/` - All content pages
- `asset/css/` - Stylesheets
- `asset/js/` - JavaScript files
- `asset/images/` - Image assets

### Making Changes

1. **Edit HTML files** for content changes
2. **Edit CSS files** for styling changes
3. **Edit JS files** for functionality changes
4. **Refresh browser** to see changes

### Testing

- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices
- Check browser console for errors
- Verify all links work

## 📦 Production Build

No build step required! This is a static website.

Just upload all files to your web server:
- Via FTP/SFTP
- Via Git (for GitHub Pages, Netlify, Vercel)
- Via hosting panel file manager

## ❓ Troubleshooting

### Images not showing?
- Check file paths (case-sensitive on Linux)
- Verify images are in `asset/images/` folder

### Styles not applying?
- Clear browser cache (Ctrl+F5)
- Check CSS file paths in HTML

### JavaScript not working?
- Open browser console (F12)
- Check for error messages
- Verify JS files are loaded

### URLs showing `/pages/`?
- This is normal for local file access
- Use a local server (see Step 2)
- URL rewriting works on web servers with `.htaccess`

## 📚 More Information

- **Full Documentation:** See [README.md](README.md)
- **Deployment Guide:** See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Contributing:** See [CONTRIBUTING.md](CONTRIBUTING.md)

## 🆘 Need Help?

Open an issue on GitHub or check the documentation files.

