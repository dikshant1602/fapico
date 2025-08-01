import { showProductContainer } from "./homeProductCard.js";
import { showPestControlContainer } from "./pestControlCard.js";

// Fetch and display Cleaning Services for the homepage
fetch("./public/api/cleaningServices.json")
  .then((res) => res.json())
  .then(showProductContainer)
  .catch((error) => console.error("Error fetching cleaning services:", error));

// Fetch and display Pest Control Services for the homepage
fetch("./public/api/pestControlServices.json")
  .then((res) => res.json())
  .then(showPestControlContainer)
  .catch((error) => console.error("Error fetching pest control services:", error));a