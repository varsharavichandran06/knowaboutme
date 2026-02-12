# Varsha Ravichandran - Personal Website

A professional personal portfolio website showcasing my experience in AI/ML and Software Engineering.

## 🚀 Live Demo
Once deployed, your website will be available at: `https://yourusername.github.io`

## 📁 Files Included
- `index.html` - Main HTML file with all content
- `styles.css` - Complete styling and responsive design
- `script.js` - Interactive features and animations
- `README.md` - This file with deployment instructions

## 🔧 Deployment Instructions

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com and sign up

2. **Create a new repository**
   - Click the "+" icon in the top right → "New repository"
   - Name it: `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - Make it public
   - Click "Create repository"

3. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop all files: `index.html`, `styles.css`, `script.js`, and `README.md`
   - Commit the changes

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)"
   - Click Save

5. **Access your website**
   - Your site will be live at `https://yourusername.github.io` in a few minutes!

### Option 2: Using Git (Command Line)

```bash
# Clone your repository
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# Copy all website files to this directory
# Then commit and push
git add .
git commit -m "Initial commit - Personal portfolio website"
git push origin main
```

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling and mobile menu
- **Sections Include**:
  - Hero/Landing page
  - About Me
  - Work Experience timeline
  - Featured Projects
  - Technical Skills
  - Education & Certifications
  - Contact information

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css` (lines 7-16) to change the color scheme:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... */
}
```

### Content
All content is in `index.html`. Simply edit the text within the HTML tags to update:
- Your name and title
- Work experience details
- Projects
- Skills
- Education
- Contact information

### Profile Photo (Optional)
To add a profile photo:
1. Add your photo file to the repository
2. In `index.html`, add this code in the hero section:
```html
<img src="your-photo.jpg" alt="Varsha Ravichandran" class="profile-photo">
```
3. Add styling in `styles.css`:
```css
.profile-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 2rem;
}
```

## 📱 Mobile Responsive
The website automatically adapts to different screen sizes:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔗 Adding Your GitHub/Portfolio Links
To add more social links, add this code in the contact section of `index.html`:
```html
<a href="https://github.com/yourusername" target="_blank" class="contact-card">
    <i class="fab fa-github"></i>
    <h3>GitHub</h3>
    <p>View my code</p>
</a>
```

## 💡 Tips

1. **Update regularly**: Keep your experience and projects current
2. **SEO**: Update the `<title>` and add meta descriptions in the `<head>` section
3. **Analytics**: Add Google Analytics to track visitors (optional)
4. **Custom domain**: You can use a custom domain instead of github.io
5. **Resume PDF**: Upload your resume PDF and link to it in the contact section

## 🐛 Troubleshooting

**Site not showing up?**
- Wait 5-10 minutes after pushing changes
- Check that your repository is named correctly: `username.github.io`
- Make sure GitHub Pages is enabled in Settings

**Styling looks broken?**
- Ensure `styles.css` and `script.js` are in the same folder as `index.html`
- Check browser console for errors (F12)

## 📄 License
Feel free to use this template for your own portfolio!

## 🤝 Support
If you need help with deployment or customization, feel free to reach out!

---
**Built with:** HTML5, CSS3, JavaScript
**Font Icons:** Font Awesome 6.4.0