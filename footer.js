const footerHTML = `
  <footer class="section-footer">
      <div class="footer-container container">
        <div class="content_1">
          <img src="public/Images/Fapico.jpg" alt="logo" />
          <p>
            Welcome to Fapico, your ultimate destination for
            best pest control and cleaning services!
          </p>
        </div>
        <div class="content_2">
          <h4>Services</h4>
          <a href="#">Pest Control</a>
          <a href="#">Deep Cleaning</a>
        </div>
        <div class="content_3">
          <h4>Experience</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="" target="_blank">Adress</a>
          <a href="" target="_blank">Instagram</a>
        </div>
        <div class="content_4">
          <h4>NEWSLETTER</h4>
          <p>Be the first to know about new<br />arrivals, sales & promos!</p>
          <div class="f-mail">
            <input type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div class="f-design">
        <div class="f-design-txt">
          <p>Fapico</p>
        </div>
      </div>
    </footer>`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);