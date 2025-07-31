// pestProduct.js

const productsContainer = document.querySelector('#pestProductContainer');
const productTemplate = document.querySelector('#productTemplate');

export const showPestProductContainer = (products) => {
  console.log('Pest Products:', products);

  if (!products || !productsContainer || !productTemplate) {
    console.error('Error: Missing pest products, container, or template', {
      products,
      productsContainer,
      productTemplate
    });
    return false;
  }

  productsContainer.innerHTML = ''; // Clear existing content

  products.forEach((currProd) => {
    const { category, description, id, image, name, price, customerNumber, stock } = currProd;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.productImage').src = image || '/public/Images/placeholder.jpg';
    productClone.querySelector('.productImage').alt = name;
    productClone.querySelector('.customerNumber').textContent = customerNumber;
    productClone.querySelector('.productDescription').textContent = description;
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.productPrice').textContent = `₹${price}`;
    productClone.querySelector('.productActualPrice').textContent = `₹${price * 2}`;

    // Update the link to navigate to the details page within the details folder
    productClone.querySelector('.more-details-link').href = `details/details.html?id=${id}`;

    productsContainer.append(productClone);
  });
};