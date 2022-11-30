//Funcion que se inicializa al abrir la ventana

window.onload = function calcular(){

    pantalla=document.getElementById("textoSuperior");
    document.onkeydown = teclado;
 }
 
 //Usaremos esta variable para guardar el valor mostrado en pantalla.
 
 numPantalla="0";
 
 //Variable para validar operaciones.
 
 numIniciar=1;
 
 //Usaremos esta variable como booleano para saber si ya hemos puesto una coma.
 
 coma=0;
 
 //Numero hecho para poner en espera.
 
 numTemporal=0;
 
 //Variable de operacion en curso
 
 operacionCurso="0";
 
 //Variable para guardar la operación como String
 
 operacionString="";
 
 //Funcion para in
 
 function numero (num){
    if(numPantalla=="0" || numIniciar==1){
       pantalla.innerHTML=num;
       numPantalla=num;
       if(num=="."){
          pantalla.innerHTML="0.";
          numPantalla=num;
          coma=1;
       }
    }
    else{
       if(num =='.' && coma==0){
          pantalla.innerHTML+=num;
          numPantalla+=num;
          coma=1;
       }else if(num =='.' && coma==1){
          //No hará nada, para evitar que haya dos comas.
       }else{
          pantalla.innerHTML+=num;
          numPantalla+=num;
       }
    }
    numIniciar=0;
 }
 
 //Funcion que añade un operador al numero actual guardado para luego continuar escribiendo el siguiente operando.
 
 function operacion(operador){
    resolver();
    numTemporal=numPantalla;
    operacionCurso=operador;
    pantalla.innerHTML+=operador;
    numIniciar=1;
 }
 
 //Funcion que nos resuelve la operacion en curso al pulsar la tecla igual.
 
 function resolver(){
    if(operacionCurso=="0"){
       pantalla.innerHTML=numPantalla;
    }else{
       console.log(numTemporal);
       console.log(operacionCurso);
       console.log(numPantalla);
       operacionString=numTemporal+operacionCurso+numPantalla;
       solucion=eval(operacionString);
       pantalla.innerHTML=solucion;
       numPantalla=solucion;
       operacionCurso="0";
    }
 }
 
 
 //Funcion para borrar el ultimo digito en el que pondremos un 0 en pantalla cuando no queden mas numeros que borrar.
 
 function retroceso(){
    cifras=numPantalla.length;
    ultimaCifra=numPantalla.substr(cifras-1,cifras);
    numPantalla=numPantalla.substr(0,cifras-1);
    if(numPantalla==""){
       numPantalla="0";
    }
    if(ultimaCifra=="."){
       coma=0;
    }
    pantalla.innerHTML=numPantalla;
 }


 //Funcion para resetear la calculadora completamente.
 
 function borradoCompleto(){
    pantalla.innerHTML=0;
    numPantalla="0";
    coma=0;
    numTemporal=0;
    operacionCurso="0";
 }
 
 //Funcion para que el teclado agarre la key que está siendo pulsada y dependiendo de la que sea ocurra lo mismo que ocurriría al clicar
 //en su respectiva tecla
 
 function teclado(accion){
    evento=accion || window.event;
    tecla=evento.keyCode;
    if(tecla>47 && tecla<58){
       numTeclado=tecla-48;
       numTeclado=String(numTeclado);
       numero(numTeclado);
    }
    if(tecla>95 && tecla<106){
       numTeclado=tecla-96;
       numTeclado=String(numTeclado);
       numero(numTeclado);
    }
    if (tecla==110 || tecla==190) {
       numero(".")
    }
    if (tecla==106) {
       operacion('*')
    }
    if (tecla==107) {
       operacion('+')
    }
    if (tecla==109) {
       operacion('-')
    }
    if (tecla==111) {
       operacion('/')
    }
    if (tecla==32 || tecla==13) {
       resolver()
    }
    if (tecla==46) {
       borradoCompleto()
    }
    if (tecla==8) {
       retroceso()
    }
    if (tecla==36) {
       borradoParcial()
    }
 }