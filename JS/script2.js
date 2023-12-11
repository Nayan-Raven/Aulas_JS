function blurFunction(){
    document.getElementById("myInput").style.background="red"
}
function myFunction(val){
    alert("mudou para " + val);
}
function LoadFunction(){
    //alert("Página Carregada!!!")
}
function mouseDown(){
    document.getElementById("myP").style.color="red";
}
function mouseUp(){
    document.getElementById("myP").style.color="green";
}
function coordenadasFigura(e){
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordenadas: ("+ x +", "+ y +")";
    document.getElementById("demo3").innerHTML = coor;
}
function clearcoor(){
    document.getElementById("demo3").innerHTML = "";
}
function submitFunction(cmp1,cmp2){
    if(cmp1.value == null || cmp1.value == ""){
    alert("Falta preencher o campo 1")
    }else if(cmp2.value == null || cmp2.value == ""){
        alert("Falta preencher o campo 2");
    } else{
        alert("Tudo certo");
    } 
    
    window.onbeforeunload = function(){
        return 'Manda Salve';
    }
       
}
