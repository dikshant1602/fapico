// details/productDetails.js

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        console.error('No product ID found in URL.');
        window.location.href = '../index.html'; // Redirect to home if no ID
        return;
    }

    // Function to fetch data from a given path
    const fetchData = async (path) => {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Could not fetch data from ${path}:`, error);
            return [];
        }
    };

    // Fetch data from the new details-specific JSON files
    const allProductsDetails = await fetchData('./product_details.json'); // Path relative to productDetails.js
    const pestProductsDetails = await fetchData('./pest_details.json');   // Path relative to productDetails.js
    const combinedProductsDetails = [...allProductsDetails, ...pestProductsDetails];

    // Find the product with the matching ID
    const product = combinedProductsDetails.find(p => p.id === productId);

    if (!product) {
        console.error('Product not found for ID:', productId);
        document.querySelector('.container').innerHTML = '<h1>Product Not Found</h1><p>The service you are looking for does not exist.</p>';
        return;
    }

    // Populate the details page with the product's data
    document.getElementById('pageTitle').textContent = product.name;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-price').textContent = `₹${product.price}`;
    document.getElementById('product-tagline').textContent = product.tagline || ''; // Populate tagline

    // Populate Info Icons
    const infoIconsContainer = document.getElementById('product-info-icons');
    infoIconsContainer.innerHTML = ''; // Clear existing content
    if (product.infoIcons && product.infoIcons.length > 0) {
        product.infoIcons.forEach(iconText => {
            const span = document.createElement('span');
            span.textContent = iconText;
            infoIconsContainer.appendChild(span);
        });
    }

    // Populate Description List (Features)
    const descriptionList = document.getElementById('product-description-list');
    descriptionList.innerHTML = ''; // Clear existing content
    if (product.features && product.features.length > 0) {
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            descriptionList.appendChild(li);
        });
    } else if (product.description) { // Fallback to single description if features array is not present
        const li = document.createElement('li');
        li.textContent = product.description;
        descriptionList.appendChild(li);
    }

    // Populate Gallery Images
    const galleryContainer = document.getElementById('product-gallery');
    galleryContainer.innerHTML = ''; // Clear existing content
    if (product.galleryImages && product.galleryImages.length > 0) {
        product.galleryImages.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = product.name + ' Gallery Image';
            galleryContainer.appendChild(img);
        });
    }

    // Populate Customer Reviews
    const reviewsContainer = document.getElementById('customer-reviews-container');
    reviewsContainer.innerHTML = ''; // Clear existing content
    if (product.reviews && product.reviews.length > 0) {
        product.reviews.forEach(reviewData => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');

            const strongName = document.createElement('strong');
            strongName.textContent = reviewData.name;
            reviewDiv.appendChild(strongName);

            const spanStars = document.createElement('span');
            spanStars.classList.add('stars');
            spanStars.textContent = '★'.repeat(reviewData.stars); // Display stars
            reviewDiv.appendChild(spanStars);

            const pComment = document.createElement('p');
            pComment.textContent = reviewData.comment;
            reviewDiv.appendChild(pComment);

            reviewsContainer.appendChild(reviewDiv);
        });
    }

    // Update Book Now and Call Us buttons
    const bookNowLink = document.querySelector('.book-btn a');
    if (bookNowLink) {
        bookNowLink.href = `https://wa.me/918700828054?text=Hi%20Fapico,%20I'd%20like%20to%20inquire%20about%20your%20${product.name.replace(/ /g, '%20')}%20service%20(ID:%20${product.id}).`;
    }

    const callUsLink = document.querySelector('.call-btn a');
    if (callUsLink) {
        callUsLink.href = "tel:+91-8700828054";
    }
});