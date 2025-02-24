// Function that plays sound based on the key provided
function playSound(key) {
    switch (key) {
      case "w":
        new Audio("./sounds/kick-bass.mp3").play();
        break;
      case "a":
        new Audio("./sounds/snare.mp3").play();
        break;
      case "s":
        new Audio("./sounds/crash.mp3").play();
        break;
      case "d":
        new Audio("./sounds/tom-1.mp3").play();
        break;
      case "j":
        new Audio("./sounds/tom-2.mp3").play();
        break;
      case "k":
        new Audio("./sounds/tom-3.mp3").play();
        break;
      case "l":
        new Audio("./sounds/tom-4.mp3").play();
        break;
      default:
        console.log("Key not assigned to a sound.");
    }
  }
  
  // Add click event listeners to all elements with class "drum"
  const drumElements = document.querySelectorAll(".drum");
  drumElements.forEach(function(drum) {
    drum.addEventListener("click", function() {
      // Retrieve the key from the data-key attribute
      const key = this.innerHTML;
      playSound(key);
      animation(key);
    });
  });
  
  // Add keydown event listener to the whole document
  document.addEventListener("keydown", function(event) {
    // Convert key to lowercase just in case
    const key = event.key.toLowerCase();
    playSound(key);
    animation(key);
  });
  
  function animation(key) {
    var activeButton = document.querySelector("." + key);
    if(activeButton){ // Check if element exists
      activeButton.classList.add("pressed");
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
    }
  }
  