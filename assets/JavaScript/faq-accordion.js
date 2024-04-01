const questions = document.querySelectorAll(".question");
const contents = document.querySelectorAll(".content");
const openCloseBtns = document.querySelectorAll(".open-close");


for(let i=0; i < questions.length; i++){
    questions[i].addEventListener("click", function(){
        console.log(this);
        if(this.classList.contains("active")){
            openCloseBtns[i].src="assets/img/plus.svg"
            this.classList.remove("active")
            contents[i].style.display="none"
        }
        else{
            openCloseBtns[i].src="assets/img/minus.svg"
            this.classList.add("active");
            contents[i].style.display="block"
        }
    })
}