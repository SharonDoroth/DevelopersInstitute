function myMove() {
  let left = 0;
  const endPosition = 350;
  const intervalId = setInterval(() => {
    let animateDiv = document.getElementById("animate");
    left += 1;
    animateDiv.style.transition = "all 1s";
    animateDiv.style.left = left +"px";

    if (left >= endPosition) {
        clearInterval(intervalId);
    }
}, 1);
}