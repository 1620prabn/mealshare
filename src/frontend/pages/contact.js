window.handleContactRequest = (params) => {
  document.body.innerHTML = `
 
  <!-- Links (sit on top) -->
  <div class="w3-top ">
    <div class="w3-row w3-padding w3-bar-item">
    <div class="w3-col s3  ">
    <a href="/" class=" w3-block w3-padding ">
    <img src="../assets/logo-susu-sushi.png"
       style="height:5rem; width:5rem"> </a>
      </div>
      <div class="w3-col s2 ">
        <a href="/meals" class="w3-button w3-round-xlarge w3-hover-red ">MEALS</a>
      </div>
      <div class="w3-col s2">
        <a href="/reservations" class="w3-button w3-round-xlarge w3-hover-red">RESERVATION</a>
      </div>
      <div class="w3-col s2">
        <a href="/review" class="w3-button w3-round-xlarge w3-hover-red ">REVIEWS</a>
      </div>
      <div class="w3-col s2">
        <a href="/contact" class="w3-button w3-round-xlarge w3-hover-red ">CONTACT</a>
      </div>
      
    </div>
  </div>

  <!-- Contact Section -->
<div class="bgco">
<div class="w3-container " style="padding:50px 16px" id="contact">
  <h3 class="w3-center">CONTACT</h3>
  <p class="w3-center w3-large">Here you can write to us and find phone numbers of our restaurants.

If your inquiry is about your takeaway order, please call the restaurant directly, so we can help you as soon as possible. You will find an overview at the bottom of this page.
  </p>
  </div>
  </div>
  <div class="w3-row-padding  w3-center" id="food">
      <div class="w3-quarter">
        <img src="../assets/img10.jpg" style="width:100%;border: 1px solid tomato;"  class="w3-hover-opacity">
      </div>
      <div class="w3-quarter">
        <img src="../assets/img11.jpg"  style="width:100%;border: 1px solid tomato;"  class="w3-hover-opacity" >
      </div>
      <div class="w3-quarter">
        <img src="../assets/img13.jpg"  style="width:100%;border: 1px solid tomato;"  class="w3-hover-opacity" >
      </div>
      <div class="w3-quarter">
        <img src="../assets/img7.jpg"  style="width:100%;border: 1px solid tomato;"  class="w3-hover-opacity">
      </div>
  <div style="margin-top:48px">
    <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>  COPENHAGEN</p>
    <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +45 222222</p>
    <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: sushi123@gmail.com</p>
    <br>
    <form action="/action_page.php" target="_blank">
      <p><input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"></p>
      <p><input class="w3-input w3-border" type="text" placeholder="Email" required name="Email"></p>
      <p><input class="w3-input w3-border" type="text" placeholder="Subject" required name="Subject"></p>
      <p><input class="w3-input w3-border" type="text" placeholder="Message" required name="Message"></p>
      <p>
        <button class="w3-button w3-black" type="submit">
        <a href="nuhanajah90@gmail.com" target="_blank">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE</a>
        </button>
      </p>
      </div>
    </form>`;
};
