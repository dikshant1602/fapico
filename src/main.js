import '../src/style.css';
import { showProductContainer } from '../homeProductCard';
import { showTrendingProductContainer } from '../trendingProducts';
import products from '../api/products.json' assert { type: 'json' };
import trendingProducts from '../api/trending.json' assert { type: 'json' };

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  if (path.includes('index.html') || path === '/') {
    showProductContainer(products);
  } else if (path.includes('trending.html')) {
    showTrendingProductContainer(trendingProducts);
  }
});