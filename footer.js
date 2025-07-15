const footerHTML = `
  <div class="footer-container container">
    <div class="content_1">
      <img src="public/Images/Fapico.jpg" alt="logo" />
      <p>
        Welcome to Fapico, your ultimate destination<br>
        for best pest control and cleaning services!
      </p>
    </div>
    <div class="content_2">
      <h4>Services</h4>
      <a href="./trending.html" target="_blank">Pest Control</a>
      <a href="./trending.html" target="_blank">Commercial Pest Control</a>
      <a href="./trending.html" target="_blank">Deep Cleaning</a>
      <a href="./trending.html" target="_blank">House Cleaning</a>
    </div>
    <div class="content_3">
      <h4>Experience</h4>
      <a href="./contact.html" target="_blank">Contact Us</a>
      <a href="https://www.linkedin.com/in/fapico-fapico-613aa3371/?originalSubdomain=in" target="_blank">LinkedIn</a>
      <a href="https://www.instagram.com/fapico_/" target="_blank">Instagram</a>
      <a href="https://www.facebook.com/people/Fapico/61577772155917/#" target="_blank">Facebook</a>
    </div>
    <div class="content_4">
      <h4>E-Mail</h4>
      <p>Feel free to get in touch with us for<br />services, prices & bookings!</p>
      <a href="mailto:contact@fapico.com">Email Us: contact@fapico.com</a>
      <hr />
    </div>
  </div>
  <div class="f-design">
    <div class="f-design-txt">
      <p>Fapico</p>
    </div>
  </div>
`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);