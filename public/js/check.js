(function() {
    $(document).ready(function(){
        $("#a-submit").click(function(event){
            let feedback = document.getElementById("feedback");
            let img = document.getElementById("imagem");
            let confetti = document.getElementById("confetti");
            let buttonSend = this;
            event.preventDefault();
            checkFeedback(feedback, img, confetti, buttonSend);
        });
      });
 })();

function checkFeedback(feedback, img, confetti, buttonSend){
    fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(result => {
        console.log(result);
        if(result.isPositive === true){
            console.log("*click* noice")
            img.src = "img/thumb-up.png";
            confetti.removeAttribute("hidden");
            resetFeedback(feedback, buttonSend, img, confetti);
        }else{
            console.log("too bad..")
            img.src = "img/thumb-down.png";
            resetFeedback(feedback, buttonSend, img, confetti);
            moveAnimation();
        }
    })
    .catch(err => {
    // trata se alguma das promises falhar
    console.error('Failed retrieving information', err);
    });
}

function hideThumb(confetti, img, buttonSend){
    confetti.setAttribute("hidden", true);
    img.src = "";
    buttonSend.removeAttribute("disabled");
}

function resetFeedback(feedback, buttonSend, img, confetti){
    buttonSend.setAttribute("disabled", true);
    setTimeout(hideThumb, 1500, confetti, img, buttonSend);
    feedback.value = "";
}

function moveBackgroundLeft(){
    let x = 10;
    document.body.style.backgroundPositionX = x +'px';
    document.body.style.backgroundColor = 'red';
}

function moveBackgroundCenter(){
    let x = 0;
    document.body.style.backgroundPosition = x +'px'
    document.body.style.backgroundColor = '#220036';
}

function moveBackgroundRight(){
    let x = -10;
    document.body.style.backgroundPosition = x +'px';
    document.body.style.backgroundColor = 'red';
}

function moveAnimation(){
    for (let i = 100; i < 1500; i+=80) {
        (function (i) {
          setTimeout(moveBackgroundLeft, i);
          setTimeout(moveBackgroundCenter, i + 20);
          setTimeout(moveBackgroundRight, i + 40);
          setTimeout(moveBackgroundCenter, i + 60);
          })(i);
    };
}