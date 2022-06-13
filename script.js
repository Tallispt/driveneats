function select(){
    let meal = document.querySelector(".meal-individual")
    let icon = document.querySelector(".meal-individual ion-icon")
    let iconIsSelected = icon.classList.contains("icon-not-selected")
    meal.classList.toggle("selected")
if(iconIsSelected) {
    icon.classList.remove("icon-not-selected")
    icon.classList.add("icon-selected")
} else {
    icon.classList.add("icon-not-selected")
    icon.classList.remove("icon-selected")
}
    
}