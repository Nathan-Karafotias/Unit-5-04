//This code tells the function to operate after the button is clicked.
document.getElementById('check').addEventListener('click',buttonon)

//This function sends an alert to the user when the button is clicked, it also changes the color of the background to purple when the button is clicked.
function buttonon() { 
  alert(document.getElementById('input').value)
  document.getElementById("background").style.backgroundColor = "blueviolet"
}