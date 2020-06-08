// Write your code here!
let element = document.getElementById("main");
element.remove();

// Create an <h1> with id "victory"
let newHeader = document.createElement('h1');
newHeader.className = "victory";
newHeader.id = "victory"
newHeader.innerHTML = "Chris is the champion";
document.body.appendChild(newHeader); 