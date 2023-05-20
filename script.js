document.getElementById("yes").addEventListener("click", opacity)
img = document.getElementById("img")
cnt = 0
function opacity() {
  if (cnt == 0) {
    img.style.opacity = 1
    cnt = 1
  }
  else {
    img.style.opacity = 0
    cnt = 0
  }
  
}
