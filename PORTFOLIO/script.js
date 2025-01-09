document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const profile = document.querySelector(".profile");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
