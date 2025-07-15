const trendingProductsContainer = document.querySelector('#trendingProductContainer');
const trendingProductTemplate = document.querySelector('#trendingProductTemplate');

export const showTrendingProductContainer = (products) => {
  console.log('Products:', products);
  if (!products || !trendingProductsContainer || !trendingProductTemplate) {
    console.error('Error: Missing products, container, or template', {
      products,
      trendingProductsContainer,
      trendingProductTemplate
    });
    return false;
  }

  trendingProductsContainer.innerHTML = ''; // Clear existing content

  products.forEach((currProd, index) => {
    console.log(`Processing product ${index}:`, currProd);
    const { category, description, id, image, name, price, customerNumber, stock } = currProd;

    const productClone = document.importNode(trendingProductTemplate.content, true);
    console.log('Cloned template:', productClone);

    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.productImage').src = image || '/public/Images/placeholder.jpg';
    productClone.querySelector('.productImage').alt = name;
    productClone.querySelector('.customerNumber').textContent = customerNumber;
    productClone.querySelector('.productDescription').textContent = description;
    productClone.querySelector('.category').textContent = category;

    trendingProductsContainer.append(productClone);
  });
};