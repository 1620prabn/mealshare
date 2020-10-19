window.handleMealRequest = (params) => {
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
      <div class="w3-display-middle w3-container  ">
      <h1 class="main-text">Meal Sharing</h1>
      </div>
      
    </header>
    
<ul id="meals"></ul>
 
  <div class="wrapper">
 <h2 class="w3-center w3-padding-4 w3-white w3-opacity-min">BOOK A MENU</h2>
  
  <form id="myForm" class="form w3-opacity-mini"">
  <div class="input-feilds">
  
  <input type="number" id="mealId" class="input" placeholder="Meal Id:" value=${params.id}></input>
 
  <input type="text" id="name1" class="input" placeholder="Name:" required ></input>
 
  <input type="text" id="email" class="input" placeholder="Email:" required ></input>
 
  <input type="number" id="phone-number" class="input" placeholder="Phone Number:" required></input>
  <button type="submit" class="btn">Book Seat</button>
  </div>
  </form>
  </div>`;

  fetch(`/api/meals/${params.id}`)
    .then((response) => response.json())
    .then((meals) => {
      meals.find((meal) => {
        const ul = document.getElementById("meals");
        const li = document.createElement("li");
        li.innerHTML = `<div class="meal-id-li">
        <h1 class="h4 card-title pt-4">${meal.title}</h1>
        <p class="card-text">Location: ${meal.location}</p>
        <p class="card-text">Max Reservation: ${meal.max_reservations}</p>
        <p class="card-text">Price: ${meal.price}</p>
       </div>
        `;
        ul.appendChild(li);
      });
    });

  const myForm = document.getElementById("myForm");

  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name1 = document.getElementById("name1").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const mealId = document.getElementById("mealId").value;

    const data = {
      contact_name: name1,
      contact_email: email,
      contact_phonenumber: phoneNumber,
      meal_id: mealId,
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("/api/reservations/", options)
      .then((response) => response.json())
      .then((result) => {
        alert(`you have reserved this meal`);
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
};
