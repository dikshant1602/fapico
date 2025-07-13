const productsContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');

export const showProductContainer = (products) => {
  console.log('Products:', products);
  if (!products || !productsContainer || !productTemplate) {
    console.error('Error: Missing products, container, or template', {
      products,
      productsContainer,
      productTemplate
    });
    return false;
  }

  productsContainer.innerHTML = ''; // Clear existing content

  products.forEach((currProd, index) => {
    console.log(`Processing product ${index}:`, currProd);
    const { category, description, id, image, name, price, customerNumber, stock } = currProd;

    const productClone = document.importNode(productTemplate.content, true);
    console.log('Cloned template:', productClone);

    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.productImage').src = image || '/public/Images/placeholder.jpg';
    productClone.querySelector('.productImage').alt = name;
    productClone.querySelector('.customerNumber').textContent = customerNumber;
    productClone.querySelector('.productDescription').textContent = description;
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.productPrice').textContent = `₹${price}`;
    productClone.querySelector('.productActualPrice').textContent = `₹${price * 2}`;

    productsContainer.append(productClone);
  });
};