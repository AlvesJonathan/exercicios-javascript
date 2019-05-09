// ------------------- Exercicio 1 ----------------------------
function abrir(){
    var link;
    
   link=document.getElementById("link").value;
    
    window.open("https://"+link);
    
   }

// ------------------- Exercicio 2 ----------------------------
function selecionar(){
    location.href = select.value;
}

// ------------------- Exercicio 3 ----------------------------
function verificador(){
    var usuario;
    var senha;
                
    usuario = document.getElementById("usuario").value;
    senha = document.getElementById("senha").value;
                
    if(usuario == "SENAI" && senha == "SENAI"){
        alert("USUARIO VALIDO");
    }
    else{
        alert("USUARIO INVALIDO");
    }
}

// ------------------- Exercicio 4 ----------------------------
function calc(){
    var valor;
    var percent;
    var cont;
    var total;
    
    valor = document.getElementById("valor").value;
    percent = document.getElementById("percent").value;
    
    cont = parseFloat(valor)*parseFloat(percent);
    total = cont/100;
    
    alert("O valor do percentual é: "+total);   
}

// ------------------- Exercicio 5 ----------------------------

function contaprazo(){
    var valor;
    var calculo;
    var total;
    
        valor = document.getElementById("valor").value;
    
        calculo = ((valor*5)/100);
        total = parseFloat(calculo) + parseFloat(valor);
        alert("O valor a prazo é: " + total);
}

function contavista(){
    var valor;
    var calculo;
    var total;
    
        valor = document.getElementById("valor").value;
    
        calculo = ((valor*5)/100);
        total = parseFloat(valor) - parseFloat(calculo);
        alert("O valor a vista é: " + total);
}

// ------------------- Exercicio 6 ----------------------------
function calcular(){
    var valor;
    var qtd;
    var calc;
    var banheiro;
    var banheira;
    var tv;
    var net;
    
    valor = document.getElementById("valor").value;
    qtd = document.getElementById("qtd").value;
    
    banheiro = document.getElementById("banheiro").checked;
    banheira = document.getElementById("banheira").checked;
    tv = document.getElementById("tv").checked;
    net = document.getElementById("net").checked;
    
    calc = parseInt(qtd)*parseInt(valor);
    
    if(banheiro==true){
       calc+=30;
       }
    
    if(banheira==true){
       calc+=100;
       }
    
    if(tv==true){
       calc+=40;
       }
    
    if(net==true){
       calc+=80;
       }
    
    alert("O valor total é: "+calc);
    
}

// ------------------- Exercicio 7 ----------------------------
function enviarmens(){
    var texto;
    
    texto = document.getElementById("coment").value;
    if(texto == ""){
        alert("Digite um comentário");
    }
    else{
       alert("Obrigado por enviar seu comentário");
    }
}