// ✅ Import your CSS and JS modules (now correctly inside `src/`)
import './style.css';
import './footer.js';
import { showProductContainer } from './homeProductCard.js';
import { showTrendingProductContainer } from './trendingProducts.js';

document.addEventListener('DOMContentLoaded', async () => {
  const productContainer = document.getElementById('productContainer');
  const path = window.location.pathname;

  // ✅ Check if on index page and productContainer exists
  const onHomePage = path.includes('index') || path === '/';
  const onTrendingPage = path.includes('trending');

  if (onHomePage && !productContainer) {
    console.error('Product container not found on home page');
    const fallbackContainer = document.querySelector('.section-product .container');
    if (fallbackContainer) {
      fallbackContainer.innerHTML += `
        <p class="fallback-message">Error loading services. Please try again later.</p>
      `;
    }
    return;
  }

  try {
    if (onHomePage) {
      const res = await fetch('/api/products.json?cacheBust=' + Date.now());
      if (!res.ok) throw new Error(`Failed to fetch products.json (${res.status})`);
      const products = await res.json();
      showProductContainer(products);
    } else if (onTrendingPage) {
      const res = await fetch('/api/trending.json?cacheBust=' + Date.now());
      if (!res.ok) throw new Error(`Failed to fetch trending.json (${res.status})`);
      const trendingProducts = await res.json();
      showTrendingProductContainer(trendingProducts);
    }
  } catch (error) {
    console.error('Error loading data:', error);
    if (productContainer) {
      productContainer.innerHTML = `
        <p class="fallback-message">Failed to load services. Please check your connection.</p>
      `;
    }
  }

  console.log('Device Info:', {
    userAgent: navigator.userAgent,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  });
});
