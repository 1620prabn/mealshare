window.handleReviewsRequest = (params) => {
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
  <!-- Header with image -->
    <header class="bgimg w3-display-container " id="home">
      <div class="w3-display-middle w3-container  ">
      <h1 class="main-text">Meal Sharing</h1>
      
      </div>
    </header>
    
    <ul id="meals" ></ul>
  
    <div class="review-wrapper">

    
  <form id="myForm" class="review-form">
  <div class="review-input-feilds">
  
  <input type="number" id="mealId" class="input" placeholder="Meal Id:" value=${params.id}></input>
 <input type="text" type="number" id="stars" class="input" placeholder="Rating :" required ></input>
 <textarea name="w3review" rows="4" cols="50" placeholder="Enter your comment :" id="description"></textarea>
 
  <button type="submit" class="btn-review">Add Review</button>
  </div>
  </form>
  </div>
 `;
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

    const description = document.getElementById("description").value;
    const stars = document.getElementById("stars").value;
    const mealId = document.getElementById("mealId").value;

    const data = {
      description: description,
      stars: stars,
      meal_id: mealId,
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("/api/reviews/", options)
      .then((response) => response.json())
      .then((result) => {
        alert(`thank you for your review !`);
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
};
