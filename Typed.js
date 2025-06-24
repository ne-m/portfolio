 document.addEventListener("DOMContentLoaded", function () {
    const typedElement = document.querySelector(".typed");
    const items = typedElement.getAttribute("data-typed-items").split(", ");

    new Typed(".typed", {
      strings: items,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });
  });