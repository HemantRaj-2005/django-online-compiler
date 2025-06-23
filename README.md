# Online Compiler

This project is an online code compiler platform with a Django backend and a React (Vite) frontend. It allows users to write, submit, and execute code online.

## Screenshot

![Website Screenshot](https://i.ibb.co/ZpKkZY28/Screenshot-2025-06-23-014618.png)

## Project Structure

```
backend/           # Django backend for code execution and management
  compiler/        # Django project and apps
    code_execution/  # Handles code execution logic
    input/           # Handles input management
    output/          # Handles output management
    compiler/        # Django project settings and URLs
    manage.py        # Django management script
    README-deploy.md # Backend deployment instructions
  requirements.txt   # Python dependencies

frontend/          # React frontend (Vite)
  src/             # Source code for React app
    components/    # Reusable UI components
    pages/         # Application pages (e.g., Compiler)
    lib/           # Utility functions
    assets/        # Static assets
  public/          # Public static files
  package.json     # Node.js dependencies
  vite.config.ts   # Vite configuration
  README.md        # Frontend documentation
```

## Getting Started

### Backend (Django)

1. Navigate to the backend directory:
   ```bash
   cd backend/compiler
   ```
2. Install dependencies:
   ```bash
   pip install -r ../requirements.txt
   ```
3. Run migrations:
   ```bash
   python manage.py migrate
   ```
4. Start the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend (React + Vite)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Features
- Online code editor and compiler
- Django backend for code execution
- Modern React frontend with Vite

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
