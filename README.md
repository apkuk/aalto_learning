# 🚀 AI MVP Builder

An interactive learning platform that teaches people with little AI experience how to build AI MVPs (Minimum Viable Products) from scratch.

## 🎯 What is this?

This is a step-by-step, interactive tutorial that guides beginners through the entire process of creating AI-powered applications. Perfect for entrepreneurs, developers, and anyone curious about building with AI.

## ✨ Features

- **5 Interactive Steps**: From understanding AI MVPs to deploying to production
- **Real Code Examples**: Copy-paste ready code snippets
- **Interactive Quizzes**: Test your knowledge as you learn
- **Progress Tracking**: Visual progress bar and checklists
- **Mobile Responsive**: Learn on any device
- **Beautiful UI**: Modern, clean interface with smooth animations

## 📚 What You'll Learn

1. **Understanding AI MVPs** - What makes a good AI product
2. **Choosing AI Tools** - OpenAI, Anthropic, Replicate, and more
3. **Building Prototypes** - Simple architecture and code examples
4. **Testing & Iteration** - How to get feedback and improve
5. **Deployment** - Launch on Netlify, Vercel, or Railway

## 🚀 Quick Start

### View Locally

1. Clone this repository:
```bash
git clone https://github.com/apkuk/aalto_learning.git
cd aalto_learning
```

2. Open `index.html` in your browser, or use a local server:
```bash
npx serve .
```

3. Visit `http://localhost:3000` in your browser

### Deploy to Netlify

#### Option 1: Deploy from GitHub (Recommended)

1. Push this code to your GitHub repository
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account and select this repository
5. Click "Deploy site"
6. Your site will be live in minutes!

#### Option 2: Drag and Drop

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire project folder into the drop zone
3. Your site will be deployed instantly!

#### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No frameworks, pure JS
- **Netlify** - Hosting and deployment

## 📁 Project Structure

```
.
├── index.html          # Main HTML structure
├── styles.css          # All styling
├── script.js           # Interactive functionality
├── netlify.toml        # Netlify configuration
├── package.json        # Project metadata
└── README.md           # This file
```

## 🎨 Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;  /* Accent color */
    --success-color: #10b981;    /* Success messages */
    /* ... */
}
```

### Add More Steps

1. Add a new section in `index.html`:
```html
<section class="step" id="step6">
    <!-- Your content -->
</section>
```

2. Update `totalSteps` in `script.js`:
```javascript
const totalSteps = 6; // Increase this number
```

### Modify Content

All content is in `index.html`. Simply edit the text, examples, and links to match your needs.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📝 License

MIT License - feel free to use this for your own projects!

## 🌟 Features in Detail

### Interactive Learning
- Step-by-step progression
- Quiz questions with instant feedback
- Code examples with one-click copy
- Progress tracking

### Comprehensive Coverage
- AI MVP concepts and best practices
- Comparison of popular AI APIs
- Real-world code examples
- Deployment strategies
- Security considerations

### Beautiful Design
- Modern gradient backgrounds
- Smooth animations
- Card-based layouts
- Fully responsive
- Dark code blocks for readability

## 🔗 Useful Resources

- [OpenAI Documentation](https://platform.openai.com/docs)
- [Anthropic Claude](https://www.anthropic.com)
- [Netlify Docs](https://docs.netlify.com)
- [Replicate API](https://replicate.com/docs)

## 💡 Ideas for AI MVPs

The tutorial includes examples like:
- Email Assistant
- Content Generator
- Image Analyzer
- Customer Support Bot

## 🎯 Target Audience

- Entrepreneurs wanting to build AI products
- Developers new to AI development
- Product managers exploring AI capabilities
- Anyone curious about building with AI

## 📧 Support

If you have questions or need help:
- Open an issue on GitHub
- Check existing issues for solutions
- Fork and modify for your needs

## 🚀 Next Steps After Completing Tutorial

1. Build your first AI MVP
2. Join AI builder communities
3. Share your progress
4. Iterate based on feedback
5. Launch and grow!

---

Built with ❤️ to help aspiring AI builders get started

**Live Demo**: Deploy to Netlify to see it in action!
