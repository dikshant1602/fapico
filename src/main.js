//import './style.css';
import './footer.js';
import { showProductContainer } from '../homeProductCard.js';
import { showTrendingProductContainer } from '../trendingProducts.js';

document.addEventListener('DOMContentLoaded', async () => {
  const productContainer = document.getElementById('productContainer');
  const path = window.location.pathname;

  if (!productContainer && (path.includes('index') || path === '/')) {
    console.error('Product container not found');
    document.querySelector('.section-product .container').innerHTML += 
      '<p class="fallback-message">Error loading services. Please try again later.</p>';
    return;
  }

  try {
    if (path.includes('index') || path === '/') {
      const res = await fetch('/api/products.json?cacheBust=' + Date.now());
      if (!res.ok) throw new Error('Failed to fetch products.json');
      const products = await res.json();
      showProductContainer(products);
    } 
    else if (path.includes('trending') || path.includes('trending.html')) {
      const res = await fetch('/api/trending.json?cacheBust=' + Date.now());
      if (!res.ok) throw new Error('Failed to fetch trending.json');
      const trendingProducts = await res.json();
      showTrendingProductContainer(trendingProducts);
    }
  } catch (error) {
    console.error('Error loading products:', error);
    if (productContainer) {
      productContainer.innerHTML = 
        '<p class="fallback-message">Failed to load services. Please check your connection.</p>';
    }
  }

  console.log('Device Info:', {
    userAgent: navigator.userAgent,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  });
});
