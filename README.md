# Production Portfolio

A simple, clean portfolio website that's easy to edit and maintain.

## File Structure

```
production_portfolio/
├── index.html          # Main landing page with hero section
├── portfolio.html      # Portfolio page with project list
├── styles.css          # All styling (colors defined at top)
├── script.js           # Minimal JavaScript for interactivity
├── assets/
│   ├── cv.pdf         # Your CV/Resume PDF file
│   └── portfolio/     # Portfolio project images go here
└── README.md          # This file
```

## Quick Start

1. **Replace the placeholder CV**: Add your actual CV PDF file to `assets/cv.pdf`
2. **Add portfolio images**: Place your project images in `assets/portfolio/` folder
3. **Edit content**: Open `index.html` and `portfolio.html` in a text editor and update:
   - Your name (replace "Your Name")
   - Professional title/description
   - Project titles and descriptions
   - Footer copyright information

## How to Edit Content

### Home Page (`index.html`)
- **Header**: Edit the logo text and navigation links
- **Hero Section**: Update your name, title, and introduction text
- **Footer**: Update copyright and add contact info if needed

### Portfolio Page (`portfolio.html`)
- **Add a Project**: 
  1. Copy one of the existing `.portfolio-item` divs
  2. Update the image path: `src="assets/portfolio/your-image.jpg"`
  3. Update the alt text (image description)
  4. Update the project title in `<h3>`
  5. Update the project description in `<p>`

- **Remove a Project**: Delete the entire `.portfolio-item` div

### Styling (`styles.css`)
- **Change Colors**: Edit the color values at the top of `styles.css` in the `:root` section
- All colors are defined as CSS variables for easy updates

## Adding Portfolio Images

1. Save your project images to the `assets/portfolio/` folder
2. Use descriptive filenames (e.g., `project1.jpg`, `website-redesign.png`)
3. Recommended image size: 1200x800px or similar aspect ratio
4. Update the image paths in `portfolio.html` to match your filenames

## Adding Your CV

1. Export or save your CV as a PDF
2. Name it `cv.pdf`
3. Place it in the `assets/` folder (replace the placeholder file)

## Testing

Simply open `index.html` in a web browser to view your portfolio. No build process or server required!

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
