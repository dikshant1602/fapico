import { showTrendingProductContainer } from "./trendingProduct.js";

// Fetch and display only the Trending products
fetch("./public/api/trending.json")
  .then((res) => res.json())
  .then(showTrendingProductContainer)
  .catch((error) => console.error("Error fetching trending products:", error));