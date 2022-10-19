const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
console.log(hamburger);



hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
})

document.querySelectorAll(".nav-list").forEach(n => n.addEventListener("click",()=> {
  hamburger.classList.remove("active");
  navList.classList.remove("active");
}))

console.log(hamburger);