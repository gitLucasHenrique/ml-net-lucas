(function() {
    $(document).ready(function(){
        $("#a-submit").click(function(event){
            event.preventDefault();
            checkFeedback();
        });
      });
 })();

function checkFeedback(){
    var feedback = document.getElementById("feedback");
    var img = document.getElementById("imagem");
    var confetti = document.getElementById("confetti");

    fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(result => {
        console.log(result);
        if(result.isPositive === true){
            console.log("*click* noice")
            img.src = "./assets/images/thumb-up.png";
            confetti.removeAttribute("hidden");
            resetFeedback(feedback);
        }else{
            console.log("too bad..")
            img.src = "./assets/images/thumb-down.png";
            resetFeedback(feedback);
            moveAnimation();
        }
    })
    .catch(err => {
    // trata se alguma das promises falhar
    console.error('Failed retrieving information', err);
    });
}

function hideThumb(){
    var confetti = document.getElementById("confetti");
    var img = document.getElementById("imagem");
    var buttonSend = document.getElementById("a-submit");

    buttonSend.removeAttribute("disabled");
    confetti.setAttribute("hidden", true);
    img.src = "";
    }

function resetFeedback(feedback){
    var buttonSend = document.getElementById("a-submit");
    buttonSend.setAttribute("disabled", true);
    setTimeout(hideThumb,1500);
    feedback.value = "";
}

function moveBackgroundLeft(){
    var x = 10;
    document.body.style.backgroundPositionX = x +'px';
    document.body.style.backgroundColor = 'red';
}

function moveBackgroundCenter(){
    var x = 0;
    document.body.style.backgroundPosition = x +'px'
    document.body.style.backgroundColor = '#220036';
}

function moveBackgroundRight(){
    var x = -10;
    document.body.style.backgroundPosition = x +'px';
    document.body.style.backgroundColor = 'red';
}

function moveAnimation(){
    setTimeout(moveBackgroundLeft,100);
    setTimeout(moveBackgroundCenter,120);
    setTimeout(moveBackgroundRight,140);
    setTimeout(moveBackgroundCenter,160);
    setTimeout(moveBackgroundLeft,180);
    setTimeout(moveBackgroundCenter,200);
    setTimeout(moveBackgroundRight,220);
    setTimeout(moveBackgroundCenter,240);
    setTimeout(moveBackgroundLeft,260);
    setTimeout(moveBackgroundCenter,280);
    setTimeout(moveBackgroundRight,300);
    setTimeout(moveBackgroundCenter,320);
}