const boxes = document.querySelectorAll(".box");
//scroll event listener
window.addEventListener("scroll", checkBoxes);

checkBoxes();
//checks the height of the page
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  //checks the box top of the element
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    //if loop to add or remove show class
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
