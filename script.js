/* 
==============================
  PART 1: Demonstrating Scope
==============================
*/
let globalMessage = "This is a global variable";

function showScope() {
    let localMessage = "This is a local variable";
    console.log(globalMessage); // Accessible
    console.log(localMessage);  // Accessible here only
}
showScope();

/* 
==============================
  PART 2: Parameters & Return Values
==============================
*/
function greetUser(name) {
    return `Hello, ${name}! Welcome to the animation demo.`;
}

/* 
==============================
  PART 3: Animation Trigger
==============================
*/
const box = document.getElementById("animatedBox");
document.getElementById("animateBtn").addEventListener("click", () => {
    box.classList.toggle("bouncing");
    box.style.backgroundColor = box.classList.contains("bouncing") ? "lightgreen" : "coral";
});

/* 
==============================
  PART 4: Form Event Handling & Custom Validation
==============================
*/
document.getElementById("userForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submit

    const nameInput = document.getElementById("name").value.trim();

    if (nameInput === "") {
        alert("Please enter your name before submitting.");
        return;
    }

    // Use return value from greetUser function
    document.getElementById("greeting").textContent = greetUser(nameInput);
});
