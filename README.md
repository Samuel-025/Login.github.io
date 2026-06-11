# Login.github.io

A complete, production-quality static authentication UI built with vanilla HTML, CSS, and JavaScript.

## Pages

| Page | Description |
|---|---|
| `index.html` | Login page |
| `register.html` | Registration with password strength meter |
| `forgot.html` | Forgot password flow |
| `dashboard.html` | Protected user dashboard with profile editing |
| `404.html` | Custom not-found page |

## Features

- Persistent auth via `localStorage`
- Route guards (dashboard redirects to login if not signed in)
- Real-time form validation with inline error messages
- Password show/hide toggle on all password fields
- Password strength meter on registration
- Loading spinner on all submit buttons
- Toast notifications (success / info / error)
- Dark / Light mode toggle (respects `prefers-color-scheme`, persists in localStorage)
- Social sign-in placeholders (Google, GitHub)
- Profile editing on dashboard
- Animated gradient mesh background
- Fully responsive — mobile-first (375px+)
- Accessible: semantic HTML, `aria-label`, `:focus-visible`, `aria-live` toast

## Live site

https://samuel-025.github.io/Login.github.io/
