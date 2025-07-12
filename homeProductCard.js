const productsContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');

export const showProductContainer = (products) => {
  if(!products){
    return false;
  }

  products.forEach((currProd) => {
    const {category, description, id, image, name, price, customerNumber} = currProd;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector('.productName').textContent = name;
    //productClone.querySelector('.productId').id = id;
    productClone.querySelector('.productImage').src = image;
    productClone.querySelector('.productImage').alt = name;
    productClone.querySelector('.customerNumber').textContent = customerNumber;
    //productClone.querySelector('.productStock').textContent = stock;
    productClone.querySelector('.productDescription').textContent = description;
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.productPrice').textContent = `₹${price}`;
    productClone.querySelector('.productActualPrice').textContent = `₹${price * 2}`;


    productsContainer.append(productClone);
  });
};