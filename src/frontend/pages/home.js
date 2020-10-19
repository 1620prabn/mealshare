window.handleHomeRequest = () => {
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
        <a href="/contact" class="w3-button w3-round-xlarge w3-hover-red ">CONTACT</a>
      </div>
      
    </div>
  </div>

 <!-- Header with image -->
    <header class="bgimg w3-display-container " id="home">
      
      </div>
      
    </header>

     <!-- About Container -->
      <div class="w3-container" id="about">
        <div class="w3-content" style="max-width: 300rem w3-flat-pumpkin">
          <h5 class="w3-center w3-padding-20 ">
         <strong>Most people are familiar with sushi and Japanese cuisine's predilection for fresh fish - fewer people know that Peruvian cuisine is at least as obsessed with fish and good ingredients. The Japanese found out when they started immigrating to Peru at the end of the 19th century - and before long there was sweet music in the air as the two peoples' kitchens began to merge and create what is today nikkei. A mix of the Japanese sashimi and sushi with the at least equally amazing ceviche from Peru.
          </h5></strong>
          <div class="w3-panel w3-leftbar w3-red w3-padding-2px">
           
           </div>

       <div class="w3-row-padding w3-padding-20 w3-center" id="food">
      <div class="w3-quarter " class ="border1">
        <img src="../assets/img6.jpg" style="width:100%; border: 1px solid tomato;" class="w3-hover-opacity ">
          
      </div>
      <div class="w3-quarter">
        <img src="../assets/img1.jpg"  style="width:100%; border: 1px solid tomato;"class="w3-hover-opacity ">
      </div>
      <div class="w3-quarter">
        <img src="../assets/img2.jpg"  style="width:100%; border: 1px solid tomato;"class="w3-hover-opacity ">
      </div>
      <div class="w3-quarter">
        <img src="../assets/img4.jpg"  style="width:100%; border: 1px solid tomato;"class="w3-hover-opacity ">
      </div>
    </div>

     <div class="w3-row-padding w3-padding-20 w3-center" id="food">
      <div class="w3-quarter">
        <img src="../assets/img10.jpg" style="width:100%; border: 1px solid tomato; "class="w3-hover-opacity ">
      </div>
      <div class="w3-quarter">
        <img src="../assets/img11.jpg"  style="width:100% ; border: 1px solid tomato;"class="w3-hover-opacity " >
      </div>
      <div class="w3-quarter">
        <img src="../assets/img13.jpg"  style="width:100% ; border: 1px solid tomato;"class="w3-hover-opacity " >
      </div>
      <div class="w3-quarter">
        <img src="../assets/img7.jpg"  style="width:100% ; border: 1px solid tomato;"class="w3-hover-opacity ">
      </div>
    </div>
    <h5 class="w3-center w3-padding ">
         <strong>Over the years, we have created different designs with respect for the local environment and history, so that our local guests will love their "own"</h5></strong>
      
   <!-- Menu Container -->
      <div class="w3-container" id="menu">
        <div class="w3-content" style="max-width: 700px">
          <h5 class="w3-center w3-padding-4">
           </h5>
           
</div>

      </div>
       
<p1><strong>CREATE</strong>  YOUR NEW SUSHI !</p1>
          <form action="/action_page.php" target="_blank" id="myForm">
            <p>
              <input
                class="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="Title"
                id="title"
                required
                
              />
            </p>
            <p>
              <input
                class="w3-input w3-padding-16 w3-border"
                type="number"
                placeholder="Price"
                id="price"
                required
               
              />
            </p>
            <p>
              <input
                class="w3-input w3-padding-16 w3-border"
                type="number"
                placeholder="max reservation"
                id="max-reservation"
                required
                
              />
            </p>
            <p>
              <input
                class="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="Location"
                id="location"
                required
               
              />
            </p>
            
            <p>
              <button class="w3-button w3-black w3-round-xlarge w3-hover-red" type="submit">
                Add Meal
              </button>
            </p>
          </form>
        </div>
      </div>

      <!-- End page content -->
<footer class="w3-center  w3-padding-38 w3-large">
<a href="https://www.facebook.com/1620prabn" target="_blank">
<i class="fa fa-facebook-official w3-hover-opacity"></i></a>
<a href="https://www.linkedin.com/in/prabinmaharjan/" target="_blank">
<i class="fa fa-linkedin w3-hover-opacity"></i></a>
<a href="https://github.com/1620prabn" target="_blank">
<i class="fa fa-github w3-hover-opacity"></i></a>   <br>       

<p>   © 2020 Copyright :
     Prabin Maharjan</p>
  </div>
  </footer>`;

  const myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const location = document.getElementById("location").value;
    const maxReservation = document.getElementById("max-reservation").value;

    const data = {
      title: title,
      price: price,
      max_reservations: maxReservation,
      location: location,
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("/api/meals/", options)
      .then((response) => response.json())
      .then((result) => {
        alert("you just added a new meal");
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  router.updatePageLinks();
};
