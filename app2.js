const  boxes  = document.querySelectorAll("#boxes")
const value = boxes.getAttribute("data-val")



for(const box of boxes){

  box.addEventListener("click", function(){
    console.log(this.value)
})
}

