# Login.github.io

A complete, production-quality static authentication UI built with vanilla HTML, CSS, and JavaScript.

## 🚀 Quick Start

### Option 1: Run Locally (No Installation Needed)

1. **Download the project**
   ```bash
   # Using Git
   git clone https://github.com/Samuel-025/Login.github.io.git

   # Or download ZIP from GitHub
   # https://github.com/Samuel-025/Login.github.io/archive/main.zip
   ```

2. **Open in browser**
   ```bash
   # Navigate to the folder
   cd Login.github.io

   # Open index.html directly in your browser
   # Double-click the file, or:
   open index.html           # macOS
   start index.html          # Windows
   xdg-open index.html       # Linux
   ```

3. **Live preview (optional but recommended)**
   ```bash
   # Using Python (built-in, no install needed)
   python -m http.server 8000
   # Visit: http://localhost:8000

   # Using Node.js
   npm install -g http-server
   http-server -p 8000
   # Visit: http://localhost:8000
   ```

---

### Option 2: View Online (GitHub Pages)

The site is already live — no setup needed:

🔗 **https://samuel-025.github.io/Login.github.io/**

---

### Option 3: Use in Your Own Project

1. **Copy the files**
   ```bash
   cp -r Login.github.io/ your-new-project/
   ```

2. **Reference shared CSS & JS in your HTML**
   ```html
   <link rel="stylesheet" href="css/style.css">
   <script src="js/app.js"></script>
   ```

3. **Link pages together**
   ```html
   <a href="index.html">Login</a>
   <a href="register.html">Register</a>
   <a href="forgot.html">Forgot Password</a>
   <a href="dashboard.html">Dashboard</a>
   ```

---

### Option 4: Deploy to Your Own GitHub Pages

1. **Fork this repository** (click Fork on GitHub)
2. Rename the repo to `yourusername.github.io` for a root site, or keep any name for a sub-path site
3. Go to **Settings → Pages**
4. Set Source to `main` branch → Save
5. Your site will be live at `https://yourusername.github.io/Login.github.io/`

---

## 📁 Project Structure

```
Login.github.io/
├── index.html          # Login page
├── register.html       # Registration page
├── forgot.html         # Forgot password page
├── dashboard.html      # Protected dashboard
├── 404.html            # Custom not-found page
├── css/
│   └── style.css       # Shared design system (tokens, layout, components)
├── js/
│   └── app.js          # Shared utilities (auth store, toast, validation, theme)
└── README.md           # This file
```

---

## ✨ Features

- ✅ Persistent auth via `localStorage` (survives page refresh)
- ✅ Route guards — dashboard redirects to login if not signed in
- ✅ Real-time form validation with inline error messages
- ✅ Password show/hide toggle on all password fields
- ✅ Password strength meter on registration (Weak → Fair → Good → Strong ✓)
- ✅ Loading spinner on all submit buttons
- ✅ Toast notifications — success / info / error
- ✅ Dark / Light mode toggle (respects `prefers-color-scheme`, persists in localStorage)
- ✅ Social sign-in placeholders (Google, GitHub)
- ✅ Profile editing on dashboard (name + phone)
- ✅ Animated gradient mesh background
- ✅ Fully responsive — mobile-first (375px+)
- ✅ Accessible: semantic HTML, `aria-label`, `:focus-visible`, `aria-live` toast

---

## 🛠️ Requirements

**To run locally:**
- Any modern web browser — Chrome, Firefox, Safari, Edge
- **No Node, npm, or build tools required**

**To deploy:**
- GitHub account (for GitHub Pages, free)
- OR any static host: Netlify, Vercel, Cloudflare Pages

---

## 📝 How It Works

### Authentication Flow

1. **Register** → account saved to `localStorage` (`auth_users` array)
2. **Login** → credentials checked against stored users; current user saved to `auth_user`
3. **Dashboard** → reads `auth_user`, blocks access if missing
4. **Logout** → clears `auth_user`, redirects to login

### Data Storage (browser localStorage)

```javascript
localStorage.setItem('auth_users', JSON.stringify([...users])); // All registered accounts
localStorage.setItem('auth_user',  JSON.stringify(user));       // Active session
localStorage.setItem('theme',      'dark');                     // Theme preference
```

### Route Guard Example

```javascript
// Top of dashboard.html — redirect if not logged in
if (!localStorage.getItem('auth_user')) {
  window.location.href = 'index.html';
}
```

---

## 🎨 Customization

### Change Brand Colors

All colors are CSS variables in `css/style.css`:

```css
[data-theme="dark"] {
  --color-primary:       #4f98a3;   /* buttons, links, focus rings */
  --color-bg:            #0f0e0d;   /* page background */
  --color-surface:       #1c1b19;   /* card background */
  --color-text:          #cdccca;   /* body text */
  --color-error:         #d163a7;   /* validation errors */
  --color-success:       #6daa45;   /* success toasts */
}
```

### Change Font

Replace the Google Fonts link in every HTML `<head>`:

```html
<!-- Current: Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap" rel="stylesheet">

<!-- Example: Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300..700&display=swap" rel="stylesheet">
```

Then update in `css/style.css`:
```css
--font-body: 'Poppins', system-ui, sans-serif;
```

### Change the Logo

Each HTML file has an SVG logo inside `.auth-header`. Replace with your own:

```html
<svg class="logo" viewBox="0 0 40 40">
  <!-- Paste your SVG path here -->
</svg>

<!-- Or use an image -->
<img class="logo" src="logo.png" alt="Your brand" width="48" height="48">
```

---

## 🔧 Troubleshooting

| Problem | Solution |
|---|---|
| Styles/scripts not loading locally | Use a local server: `python -m http.server 8000` |
| Opened from ZIP and nothing works | Extract the ZIP first, then open |
| Theme not persisting | Check that browser allows localStorage (no private/incognito restrictions) |
| Dashboard shows stale data | Hard refresh: `Ctrl+Shift+R` (Win) / `Cmd+Shift+R` (Mac) |
| Want to reset all accounts | Run `localStorage.clear()` in browser DevTools console |

---

## 📄 License

MIT License — free to use, modify, and distribute for personal or commercial projects.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📧 Contact

- **Project:** [Samuel-025/Login.github.io](https://github.com/Samuel-025/Login.github.io)
- **Live site:** https://samuel-025.github.io/Login.github.io/
