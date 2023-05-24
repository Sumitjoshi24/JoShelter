fetch("../../data.json")
  .then(function (response) {
    return response.json();
  })
  .then((data: any[]) => {
    var container = document.getElementById("dataContainer");

    // Loop through the JSON data and create HTML elements for each item
    data.forEach(function (item) {
      var div = document.createElement("div");
      div.classList.add("pets");
      div.setAttribute("id", item.id);

      div.innerHTML = `
      <span class="effect">
      <img src="../../${item.imagePath}" alt="${item.name}" />
      </span>
      <p>${item.name}</p>
      <button>Know More</button>     
      `;
      container?.appendChild(div);
    });
  })
  .catch(function (error) {
    console.log("Error:", error);
  });
