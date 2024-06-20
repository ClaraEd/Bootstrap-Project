document.addEventListener("DOMContentLoaded", () => {
  // Set header height dynamically
  const header = document.querySelector(".header");
  const setHeaderHeight = () => {
    header.style.height = window.innerHeight + "px";
  };
  setHeaderHeight();
  window.addEventListener("resize", setHeaderHeight);

  // Smooth scroll for navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top:
          targetElement.offsetTop -
          document.querySelector(".navbar").offsetHeight,
        behavior: "smooth",
      });
    });
  });

  // Example of dynamic content loading
  const moreInfoButton = document.querySelector(".description button");
  moreInfoButton.addEventListener("click", () => {
    alert("More information will be added soon!");
  });
});
