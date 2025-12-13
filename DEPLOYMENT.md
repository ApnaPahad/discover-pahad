# Deployment Guide

## Quick Deploy Options

### 1. GitHub Pages (Free)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/discover-pahad.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click Save

3. **Your site will be live at:**
   `https://yourusername.github.io/discover-pahad`

**Note:** URL rewriting won't work on GitHub Pages, but the site will function normally.

### 2. Netlify (Free)

**Option A: Drag & Drop**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your project folder
3. Done! Your site is live

**Option B: Git Integration**
1. Connect your GitHub repository
2. Netlify will auto-detect settings
3. Deploy automatically on every push

**For URL Rewriting on Netlify:**
Create `netlify.toml` in root:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Vercel (Free)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts** - your site will be live instantly

### 4. Traditional Web Hosting (cPanel/FTP)

1. **Upload files via FTP:**
   - Upload all files to `public_html` or `www` folder
   - Ensure `.htaccess` is uploaded (for Apache)

2. **Verify .htaccess is working:**
   - Check if URLs work without `/pages/`
   - If not, contact your host to enable mod_rewrite

3. **Set proper permissions:**
   - Folders: 755
   - Files: 644

## Environment-Specific Notes

### Apache Server (.htaccess)
- URL rewriting works automatically
- No additional configuration needed

### Nginx Server
Add to your nginx config:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}

# Rewrite /page.html to /pages/page.html
location ~ ^/([^/]+\.html)$ {
    try_files /pages/$1 /$1 =404;
}
```

### Node.js Server
Use Express with middleware:
```javascript
const express = require('express');
const app = express();

app.use(express.static('.'));

// URL rewriting middleware
app.get('/:page.html', (req, res) => {
    res.sendFile(__dirname + '/pages/' + req.params.page + '.html');
});

app.listen(3000);
```

## Pre-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify all images are loading
- [ ] Check mobile responsiveness
- [ ] Test newsletter form (if using)
- [ ] Verify all links work
- [ ] Check browser console for errors
- [ ] Test URL rewriting (if applicable)
- [ ] Update any hardcoded URLs
- [ ] Optimize images for web
- [ ] Check SEO meta tags

## Post-Deployment

1. **Test the live site:**
   - Check all pages
   - Test on mobile devices
   - Verify forms work

2. **Set up analytics** (optional):
   - Google Analytics
   - Facebook Pixel
   - Other tracking tools

3. **Submit to search engines:**
   - Google Search Console
   - Bing Webmaster Tools

4. **Monitor performance:**
   - Page load speed
   - Mobile usability
   - Core Web Vitals

## Troubleshooting

### URLs showing `/pages/` in address bar
- **GitHub Pages:** This is expected, URL rewriting doesn't work
- **Other hosts:** Check if `.htaccess` is uploaded and mod_rewrite is enabled

### Images not loading
- Check file paths (case-sensitive on Linux servers)
- Verify images are uploaded
- Check file permissions

### Styles not applying
- Clear browser cache
- Check CSS file paths
- Verify files are uploaded correctly

### JavaScript errors
- Check browser console
- Verify all JS files are loaded
- Check for CORS issues if loading external resources

