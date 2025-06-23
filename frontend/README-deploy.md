# Frontend Deployment Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Build the Project

```bash
npm run build
```

## 3. Serve the Build

The production build will be in the `dist/` folder. Serve it with any static file server (e.g., Nginx, Vercel, Netlify, or `serve`).

```bash
npm install -g serve
serve -s dist
```

---

# Notes
- Make sure your backend API URL is set correctly in production.
- Use HTTPS in production. 