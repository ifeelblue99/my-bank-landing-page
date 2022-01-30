const menuIcon = document.querySelector("#menu-icon")
const navigation = document.querySelector("#navigation")

let isClickedToMenuIcon = false
menuIcon.addEventListener("click", ()=>{
    if(!isClickedToMenuIcon){
        navigation.style.top = -100+"%"
        isClickedToMenuIcon = true
    }else{
        navigation.style.top = 0
        isClickedToMenuIcon = false
    }
})
