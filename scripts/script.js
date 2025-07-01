/* -----------DARKMODE BEGINNING------------- */
const html = document.documentElement;

function toggleDarkMode() {
  html.classList.toggle("dark");
  const theme = html.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
  localStorage.setItem("theme", "light");
}
/* -----------DARKMODE ENDING------------- */

/* MOBILE NAVIGATION MENU BEGINNING*/
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
/* MOBILE NAVIGATION MENU ENDING*/

/* HIGHLIGHT ACTIVE LINK BEGINNING*/ 
const currentPage = window.location.pathname.split("/").pop(); // e.g. 'about.html'
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
      link.classList.add("text-blue-600", "underline");
      if(link.getAttribute("href") ==="about.html"){
        showTopLink()
      }      
  } else {
      link.classList.remove("text-blue-600", "underline");
  }
});
/* HIGHLIGHT ACTIVE LINK ENDING*/ 

/* SHOW TOP LINK BEGINNING */
function showTopLink(){
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
}

/* SHOW TOP LINK ENDING */

/* YEAR */
const date = document.querySelector(".date")
const year = new Date().getFullYear()
date.textContent = year
/* YEAR */
