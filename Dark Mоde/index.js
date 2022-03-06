const toggleSwitch = document.getElementById('checkbox')
const currentTheme = localStorage.getItem('theme')

if(currentTheme){
  document.documentElement.setAttribute("data-theme", currentTheme)

  if(currentTheme === "dark"){
    toggleSwitch.cheked = true
  }
}

const switchTheme = (e) => {
  if(e.target.cheked){
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("theme", "dark")
  }
  else{
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
  }
}

toggleSwitch.addEventListener("change", switchTheme, false)

console.log(toggleSwitch)