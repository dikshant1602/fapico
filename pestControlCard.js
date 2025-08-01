import { openServiceModal } from './serviceDetails.js';

const pestControlContainer = document.querySelector("#pestControlContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showPestControlContainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((curProd) => {
    const { id, name, category, image } = curProd;
    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;

    // Handle the More Details button click
    productClone.querySelector('.more-details-btn').addEventListener('click', () => {
        openServiceModal(curProd);
    });

    pestControlContainer.append(productClone);
  });
};