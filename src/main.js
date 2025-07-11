import '../src/style.css';

import products from '../api/products.json'
import { showProductContainer } from '../homeProductCard';

// Function to create a product card
showProductContainer(products);