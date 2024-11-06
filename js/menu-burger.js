document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const navList = document.querySelector(".nav-list");

    burger.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});
