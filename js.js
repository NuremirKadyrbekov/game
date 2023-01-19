let character = document.getElementById('character');
let block = document.getElementById('block');
let block1 = document.getElementById('block1');
function jump() {
    if(character.classList != "animate"){
        character.classList.add("animate")
    }

    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");

    },500)
    
}
let checkDead = setInterval(function(){
    let characterTop = parseInt( window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt( window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft< 20 && blockLeft> 0 && characterTop >=130){
        block.style.animation = "none";
        block.style.display = "none";

        alert(`В вас попала стрела :(`)
    }
},10)
let checkDead2 = setInterval(function(){
    let characterTop = parseInt( window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft1 = parseInt( window.getComputedStyle(block1).getPropertyValue("left"));
    if(blockLeft1< 20 && blockLeft1> 0 && characterTop >=130){
        block1.style.animation = "none";
        block1.style.display = "none";

        alert("Вы взорваны :(")
    }
},10)

       
             window. onload= function () {
    let  i = 0;
    let timer = setInterval(function () {
        i--;
        document.getElementById('timer').innerHTML = 'Ваш счет: ' + i;
        if (i == 1000) {
            document.getElementById('example').style.color = '';
            document.getElementById('timer').style.color = '';
            document.getElementById('timer').style.fontSize = '';
            clearInterval(timer);
        }
    }, 500)
}

 