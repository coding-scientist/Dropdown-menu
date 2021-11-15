const hamburger = document.querySelector(`.fa-bars`)
const dropdownMenu = document.querySelector(`.mobile-dropdown-menu`)
let isActive

hamburger.addEventListener(`click`, () => { 
   if (!isActive) { 
      drop()
      isActive = true
      return
   } 
      retract()
      isActive = false
})

function drop() {
   hamburger.style.transform = `rotate(-90deg)`
   hamburger.style.color = `rgb(63, 63, 138)`
   dropdownMenu.style.transform = `translate(0, 180px)`
}

function retract() {
   hamburger.style.transform = `rotate(0deg)`
   hamburger.style.color = `initial`
   dropdownMenu.style.transform = `translate(0, 0)`
}