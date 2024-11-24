const plusIcon = document.querySelectorAll(".plus-icon");
const minusIcon = document.querySelectorAll(".minus-icon");
const questions = document.querySelectorAll(".question");
plusIcon.forEach(function(elem, idx, arr) {
    elem.addEventListener("click", function() {
        questions.forEach(function(el, index){
            if (index === idx) {
                el.classList.toggle("show-text");
            } else {
                el.classList.remove("show-text");
            }
        })
    })
})
minusIcon.forEach(function(elem, idx, arr) {
    elem.addEventListener("click", function() {
        questions[idx].classList.toggle("show-text");
    });
})