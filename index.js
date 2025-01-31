const sndHalf = document.getElementsByClassName("sndhalf")[0]
const toggle = document.getElementsByClassName("toggle")[0]
const body = document.querySelector("body")
const button = document.getElementsByClassName("Send")[0]
const titleTwo = document.getElementsByClassName("title2")[0]
const email = document.querySelector("input[type='email']")
const message = document.querySelector("textarea")
function isDarkModeActive() {
    return (
        sndHalf.classList.contains("dark") &&
        body.classList.contains("dark") &&
        button.classList.contains("dark") &&
        titleTwo.classList.contains("dark") &&
        email.classList.contains("dark") &&
        message.classList.contains("dark")
    );
}

// Load mode from localStorage
if (localStorage.getItem("mode") === "dark") {
    toggle.classList.add("active");
    sndHalf.classList.add("dark");
    body.classList.add("dark");
    button.classList.add("dark");
    titleTwo.classList.add("dark");
    email.classList.add("dark");
    message.classList.add("dark");
}

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    sndHalf.classList.toggle("dark");
    body.classList.toggle("dark");
    button.classList.toggle("dark");
    titleTwo.classList.toggle("dark");
    email.classList.toggle("dark");
    message.classList.toggle("dark");
   if (isDarkModeActive()) {
        return localStorage.setItem("mode", "dark");
   }else{
    localStorage.setItem("mode", "light");
    }
   
});