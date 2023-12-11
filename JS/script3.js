function myFunction (){
    alert ('Olá');
}
var myVar = setInterval(myTimer, 1000);
function myTimer(){
    var d = new Date();

    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    document.getElementById("dia").innerHTML = d.toLocaleDateString();
    document.getElementById("mili").innerHTML = d.getMilliseconds();
}
function mostrarHoras(){
    let d = new Date();
    document.body.innerHTML = d.getHour() + d.getMinutes() + d.getSeconds() + d.getMilliseconds()
}
mostrarHoras();

function Hora(){
    const tempo = new Date();
    const hora = tempo.getHours();
    const min = tempo.getMinutes();
    const seg = tempo.getSeconds();
    console.log(`Hora ${hora}:${min}:${seg}`);
    document.body.innerHTML = `Hora ${hora}:${min}:${seg}`;
    setInterval(Hora, 1000)

    Hora();

}
function essaFunction(){
        document.body.style.backgroundImage = "url(IMG/19355.jpg)";
}