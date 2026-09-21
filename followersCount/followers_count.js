let count = 0; // Initialize count to 0
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function resetCount() {
    count = 0;
    alert("Your followers has been reset to 0")
    displayCount();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

document.getElementById('resetCount').addEventListener('click', resetCount);