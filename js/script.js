const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
  })
);

const boxes = document.querySelectorAll(".box");
const headers = document.querySelectorAll(".header");
const goUp = document.querySelector("#goUp");

checkBoxes();

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    }
  });

  headers.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    }
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.innerWidth <= 1200) {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      document.getElementById("goUp").style.display = "block";
    } else {
      document.getElementById("goUp").style.display = "none";
    }
  } else {
    document.getElementById("goUp").style.display = "none";
  }
}
