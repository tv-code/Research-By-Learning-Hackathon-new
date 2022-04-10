mybutton = document.getElementById("myBtn");
prev = document.getElementById("prev");
next = document.getElementById("next");
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
  document.documentElement.scrollIntoView({
    behavior: 'smooth'
  });
}