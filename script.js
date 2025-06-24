const nav = document.querySelector("nav");

function toggleDarkMode(){
    nav.classList.toggle("dark")

    if (localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark")
    } else {
        localStorage.setItem("theme","light")
    }
}


if (localStorage.getItem("theme") == "light") {
    nav.classList.remove("dark");
    // document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
    nav.classList.add("dark");
    // document.body.classList.add("dark-theme");    
} else{
    localStorage.setItem("theme", "light");
}

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Highlight active link
const currentPage = window.location.pathname.split("/").pop(); // e.g. 'about.html'
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
if (link.getAttribute("href") === currentPage) {
    link.classList.add("text-blue-600", "underline");
} else {
    link.classList.remove("text-blue-600", "underline");
}
});

//show top link
const toplink= document.querySelector('.top-link');
window.addEventListener('scroll', (event)=>{
    event.preventDefault()
    const scrollHeight = window.pageYOffset;

    // console.log(scrollHeight);
    
    if(scrollHeight > 65){
        toplink.classList.add("show-link");
    } else {
        toplink.classList.remove("show-link");
    }
    
});

toplink.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});


const date = document.querySelector(".date")
const year = new Date().getFullYear()
date.textContent = year

