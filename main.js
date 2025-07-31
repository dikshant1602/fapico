// main.js

import { showProductContainer } from "./homeProductCard.js";
import { showTrendingProductContainer } from "./trendingProducts.js";
import { showPestProductContainer } from "./pestProduct.js"; // Import the new file

// Fetch and display cleaning services
fetch("./public/api/products.json")
  .then((res) => res.json())
  .then(showProductContainer)
  .catch(console.error);

// Fetch and display trending services
fetch("./public/api/trending.json")
  .then((res) => res.json())
  .then(showTrendingProductContainer)
  .catch(console.error);
  
// Fetch and display pest services
fetch("./public/api/pest.json")
  .then((res) => res.json())
  .then(showPestProductContainer)
  .catch(console.error);