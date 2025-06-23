# Backend Deployment Guide

## 1. Install Dependencies

```bash
pip install -r requirements.txt
```

## 2. Set Environment Variables

Create a `.env` file in the backend directory with the following (see `.env.example`):

```
DJANGO_SECRET_KEY=your-production-secret-key
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
```

## 3. Collect Static Files

```bash
python manage.py collectstatic
```

## 4. Run Migrations

```bash
python manage.py migrate
```

## 5. Start the Server (Production)

Use a WSGI/ASGI server like Gunicorn, Daphne, or Uvicorn. Example with Gunicorn:

```bash
gunicorn compiler.wsgi:application --bind 0.0.0.0:8000
```

## 6. Database

For production, configure a robust database (PostgreSQL, MySQL, etc.) in `settings.py` or via environment variables.

---

# Frontend Deployment Guide

## 1. Build the Frontend

```bash
npm install
npm run build
```

## 2. Serve the Build

The production build will be in the `dist/` folder. Serve it with any static file server (e.g., Nginx, Vercel, Netlify, or `serve`).

```bash
npm install -g serve
serve -s dist
```

---

# Notes
- Make sure to set up CORS and API URLs correctly for production.
- Use HTTPS in production. 