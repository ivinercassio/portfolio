let i = 0;
let message = "Desenvolvedor Fullstack Júnior 💻";
typing();

function typing(){
    if(i < message.length)
        document.getElementById('type').innerHTML += message.charAt(i);
    i++;
    setTimeout(typing, 100);
}