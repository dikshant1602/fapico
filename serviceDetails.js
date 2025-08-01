const modal = document.getElementById("detailsModal");
const closeModalBtn = document.querySelector(".close-modal-btn");

const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalActualPrice = document.getElementById("modalActualPrice");
const modalStock = document.getElementById("modalStock");
const modalRating = document.getElementById("modalRating");
const modalCustomerNumber = document.getElementById("modalCustomerNumber");

export const openServiceModal = (service) => {
  if (!service) return;

  modalTitle.textContent = service.name;
  modalImage.src = service.image;
  modalImage.alt = service.name;
  modalCategory.textContent = service.category;
  modalDescription.textContent = service.details || service.description; // Use details for more info, fallback to description
  modalPrice.textContent = `Price: ₹${service.price}`;
  modalActualPrice.textContent = `Original Price: ₹${service.actualPrice}`;
  modalStock.textContent = `Availability: ${service.stock}`;
  modalRating.textContent = `Rating: ${service.rating}/5`;
  modalCustomerNumber.textContent = `Reviews: ${service.customerNumber}+`;

  modal.style.display = "flex";
};

closeModalBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};