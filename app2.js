



const  boxes  = document.querySelectorAll("#boxes")
//const value = boxes.getAttribute("data-val")
 
const questionBox1 = document.getElementById("qb1");
const answerBox_1 = document.getElementById("ab1");
  //answerBox_1.addEventListener("click", , false);
  
  const answerBox_2 = document.getElementById("ab2");
  //answerBox_2.addEventListener("click", c, false);
  
  const answerBox_3 = document.getElementById("ab3");
 // answerBox_3.addEventListener("click", , false);
  
  const answerBox_4 = document.getElementById("ab4");
  //answerBox_4.addEventListener("click", , false);

function newQuestion(question, answer1, answer2, answer3, correct){
results.question = question
results.incorrect_answers[0] =answer1
results.incorrect_answers[1] =answer2
results.incorrect_answers[2] =answer3
results.correct_answers = correct
}


  for(const box of boxes){
 
  
  box.addEventListener("click", function(){
   const  dataAt = this.getAttribute("data-val")
    const freeClass = document.querySelectorAll(".free")
     const inPlay = document.querySelector(".inPlay")
      let className1 = (this.className)
    //console.log(dataAt)
 
 for(i=0; i<freeClass.length ; i++){
if(className1 === "free"){
 this.className = "inPlay"
className1.className = "inPlay2"
}
if(className1 ==="inPlay") {
   
  console.log("hi")
 }
}
   
  /*if(this.className === "free"){
       this.className = "inPlay"
       
  }

   if(className1 ==="inPlay"){
    this.className = "inPlay2"
    console.log("can't move")
   }*/
})
}

