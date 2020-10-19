window.handleReservationsRequest = (params) => {
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
  
  
  <ul class="reservations"></ul>`;

  function fetchUrls(url) {
    return fetch(url).then((res) => res.json());
  }

  Promise.all([fetchUrls("/api/meals"), fetchUrls("/api/reservations")]).then(
    (data) => {
      let meals = data[0];
      let reservations = data[1];
      const map = meals.map((meal) => {
        const ul = document.querySelector(".reservations");
        reservations.filter((reservation) => {
          if (meal.id === reservation.meal_id) {
            const li = document.createElement("li");
            let x = Math.floor(Math.random() * 10 + 1);
            li.innerHTML = `
        <img src="../assets/img${x}.jpg"  style=" border: 1px solid tomato;" class="resImages ">
        <h3>one <strong> ${meal.title}</strong></h3>
        <h3>for ${reservation.contact_name}</h3>
        `;
            ul.appendChild(li);
          }
        });
      });
    }
  );
};
