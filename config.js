export default {
  // Ensures env variables are exposed to client-side code
  define: {
    'import.meta.env.VITE_FORMSPREE_ID': JSON.stringify(process.env.FORMSPREE_ID)
  }
};