let btnPlus = document.getElementsByClassName("fa-plus-circle")
let btnMinus = document.getElementsByClassName("fa-minus-circle")
let btnPrice= document.getElementsByClassName("Price")
//  function testNum() {
//      if (quantity > 0) {
//        alert('confirmé votre commande')
//      } else {
//          alert('la quentité doit etre > 0')
//      }
//    }
//    testNum()   
 for (let key of btnPlus) {
     /*console.log(btnPlus);*/
  key.addEventListener("click", function () {
      this.nextElementSibling.innerHTML ++;
      console.log(this.parentNode.previousElementSibling.innerHTML[1].innerHTML.split('&nbsp;')[0].replace(',','.'))
  })  
 }
 //lorsque on clic sur le plus on ajoute +1 quantity//

 for (let key of btnMinus) {
     //console.log(btnMinus);
  key.addEventListener("click", function () {
     
      if (this.previousElementSibling.innerHTML <= 0) {
           return 0
      }
      this.previousElementSibling.innerHTML --
  })  
 }
//lorsque on clic sur le moins il faut que la quantity ne soit pas négative//

// for (let key of btnMinus) {
//     //console.log(btnMinus);
//  key.addEventListener("click", function () {
//      if (typeof this.previousElementSibling.innerHTML == "string") {
//         this.previousElementSibling.innerHTML = 0
//      }
//  })  
// }


// var e = document.querySelector("p:last-of-type");
// e.parentElement.removeChild(e);
// //pour effacer le paragraphe du bloc N° :1//
let btnTrash = document.getElementsByClassName("fa-trash-alt")
for (const key of btnTrash) {
    key.addEventListener("click", function(){
      this.parentNode.parentNode.parentNode.parentNode.remove()
    })
        
}

// const removeTag = (data) =>{
//     document.getElementById(data).remove()
// }

let btnHeart = document.getElementsByClassName("fa-gratipay")
for(let key of btnHeart){
    key.addEventListener("click",function(){
        console.log(this.style.color)
        if(this.style.color==""){
            this.style.color = "red";
        }else{
            this.style.color = "";
        }
    })
}

