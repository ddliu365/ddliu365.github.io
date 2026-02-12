# Personal Website

This is a modern, responsive personal website built with **React**, **Vite**, and **Tailwind CSS**. It is designed to showcase your engineering portfolio, publications, and professional background with a premium "Apple-style" aesthetic.

## Features

- **Engineering Demos**: Dedicated section for robotics projects (Aloha, VR Teleop).
- **Responsive Design**: Mobile-friendly layout with a custom mobile menu.
- **Micro-animations**: Smooth reveal animations using `framer-motion`.
- **Content Management**: All content is managed in `src/data/content.js` for easy updates.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Customization

-   **Content**: Edit `src/data/content.js` to update your bio, projects, news, and publications.
-   **Images**: Place your project images/GIFs in `public/img/portfolio/`.
-   **Styling**: Modify `tailwind.config.js` or `src/index.css` for global styles.

## Deployment

To deploy to GitHub Pages (optional):

1.  Update `vite.config.js` with your base URL (if not at root):
    ```js
    export default defineConfig({
      base: '/your-repo-name/',
      plugins: [react()],
    })
    ```
2.  Run `npm run build`.
3.  Deploy the `dist` folder.
