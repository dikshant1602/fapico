import { showProductContainer } from "./homeProductCard.js";
import { showTrendingProductContainer } from "./trendingProducts.js";

// ✅ Use fetch instead of import
fetch("./public/api/products.json")
  .then((res) => res.json())
  .then(showProductContainer)
  .catch(console.error);

fetch("./public/api/trending.json")
  .then((res) => res.json())
  .then(showTrendingProductContainer)
  .catch(console.error);
