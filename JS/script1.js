    /*var pessoas = ["maria","josé","carlos","ana"];
    var objetos = ["colher","garfo"];
    var frutas = ["uva","maça","abacaxi"];
    pessoas[0]; //representa maria
    pessoas.length; //resultado igual a 4
    objetos[objetos.length] = "faca"; //add um elemento ao array
    frutas.indexOf("uva"); //resultado 0
    window.document.write("<br>Pessoa: "+ pessoas[0]);
    window.document.write("<br>Quantidade de pessoas: "+ pessoas.length);
    window.document.write("<br>Objeto adicionado: "+ objetos[2] );
    window.document.write("<br>Possição da uva: "+ frutas.indexOf("uva"));

    window.document.write("<br><br><br>")

    var luvas = ["default"," diamante"," zzz"," brick"," extendido"," ghost"," bull"]
    luvas.length;
    luvas[0];
    luvas[luvas.length] = " god hand";
    luvas[luvas.length] = " the flex";

    window.document.write("<br>Quantidade de luvas: "+ luvas.length);
    window.document.write("<br>Pimeira luva: "+ luvas[0]);
    window.document.write("<br>Luva adicionada: "+ luvas[7] );
    window.document.write("<br>Luva adicionada: "+ luvas[8] );
    window.document.write("<br>Quantidade de luvas depois da autualização: "+ luvas.length);
    window.document.write("<br>Luvas: "+ luvas );*/

    /*var d = new Date("October 13, 2014 11:13:00");
    document.getElementById("D1").innerHTML = d;

    d = new Date(0);
    document.getElementById("D2").innerHTML = d;

    var d = new Date(99,5,24,11,33,30,0);
    document.getElementById("D3").innerHTML = d;
    //o mês vai para 0 (janeiro) a 11 (dezembro)

    var d = new Date("2014,7,20");//20 de agosto e 2014
    document.getElementById("D4").innerHTML = d;

    d = new Date();
    document.write("<br>" + d.toUTCString());//"Fri, 03 Mar 2023 02:11:00 GMT"
    document.write("<br>" + d.toDateString());//"Thu 02 2023"
    document.write("<br>" + d.toLocaleDateString());//"02/03/2023"
    document.write("<br>" + d.toLocaleTimeString('pt-PT', {hour12: false}));//"23:11:00"*/
    
    /*var hoje, prazo;
    hoje = new Date();
    prazo = new Date();
    
    prazo.setFullYear(2023, 10,28);
    var dia = ["domingo","segunda","terça","quarta","quinta","sexta","sabado","domingo"];
    
    document.write("<p>Hoje é: "+ dia[hoje.getDay()] + ", "+ hoje.getDate() + "/" + (hoje.getMonth()) + "/" + hoje.getFullYear() + "</p>");

    document.write("<p>O prazo é: " + dia[prazo.getDay()]+ ", "+ prazo.getDate() + "/" + (prazo.getMonth() + 1) + "/" + prazo.getFullYear() + "</p>");*/

    /*try {
        var x;

        if (x == "") throw "Null";
        if (isNaN(x)) throw "não é um numero";
        if (x == 10) throw x;
        console.log(x);
        document.write(x);
    }catch(err){
        console.log("Input is "+ err);
        document.write("Imput is "+ err);
    }  */

    /*try {
        if(divisor == 0){
            throw new 
            Error("Erro: Divisão por zero não é permitida")
        }
        var resultado = dividendo/divisor;
        console.log("Resultado: ", resultado);
    }
    catch(err) {
        console.log = err.message;
    }
        alert("ERRO!!! Vírus baixado com sucesso-Obrigado pelo seu PIX");*/

/*function myFunction(){
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x <5) throw "too low";
        if(x > 10) throw "too high"
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }}*/

    /*try {
        adddlet("Erro!!!");
    }catch(err) {
        document.write = ("<br>" + err.message);
    }finally{
        document.write("<br>Será mostrado mesmo com o Erro");
    }*/
