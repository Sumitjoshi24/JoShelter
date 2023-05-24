fetch("../../data.json")
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    var container = document.getElementById("dataContainer");
    // Loop through the JSON data and create HTML elements for each item
    data.forEach(function (item) {
        var div = document.createElement("div");
        div.classList.add("pets");
        div.setAttribute("id", item.id);
        div.innerHTML = "\n      <span class=\"effect\">\n      <img src=\"../../".concat(item.imagePath, "\" alt=\"").concat(item.name, "\" />\n      </span>\n      <p>").concat(item.name, "</p>\n      <button>Know More</button>     \n      ");
        container === null || container === void 0 ? void 0 : container.appendChild(div);
    });
})
    .catch(function (error) {
    console.log("Error:", error);
});
