var element = document.querySelectorAll(".element");

var count = 1;
setInterval(() => {
  count++;
  var current = document.querySelector(".page");
  current.classList.remove("page");
  if (count > element.length) {
    element[0].classList.add("page");
    count = 1;
  } else {
    current.nextElementSibling.classList.add("page");
  }
}, 1500);
