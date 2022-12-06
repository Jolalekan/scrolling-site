const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");
const containerEl = document.querySelector(".container");
const popupContainerEl = document.querySelector('.popup-container');
const closeIconEl = document.querySelector(".close-icon");
const btnEl = document.querySelector(".btn");

window.addEventListener("scroll", ()=>{
   if( window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50 
) {
    navbarEl.classList.add("active");
}else{
    navbarEl.classList.remove("active")
};
});


btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
})
closeIconEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active")
})
