const trendingProductsContainer = document.querySelector('#trendingProductContainer');
const trendingProductTemplate = document.querySelector('#trendingProductTemplate');

export const showTrendingProductContainer = (products) => {
  if (!products || !trendingProductsContainer || !trendingProductTemplate) {
    console.error('Error: Missing products, container, or template');
    return;
  }

  trendingProductsContainer.innerHTML = ''; // Clear existing content

  products.forEach((currProd) => {
    const { category, description, image, name, customerNumber } = currProd;

    const productClone = document.importNode(trendingProductTemplate.content, true);

    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.productImage').src = image || '/public/Images/placeholder.jpg';
    productClone.querySelector('.productImage').alt = name;
    productClone.querySelector('.customerNumber').textContent = customerNumber;
    productClone.querySelector('.productDescription').textContent = description;
    productClone.querySelector('.category').textContent = category;

    trendingProductsContainer.append(productClone);
  });
};