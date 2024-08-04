let palavra;

function setup() {
  createCanvas(400, 400);
  
 palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["Caminhante", "Caminho", "Caminha"];
  return random(palavras);                
}

//Função que indica as cores, tamanho e alinhamento das letras e fundo

function inicializaCores() {
  background("#B1DAD6")
  fill ("rgb(98,4,130)");  
  textSize(64);
  textAlign(CENTER,CENTER);
} 

function palavraParcial (minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial =  palavra.substring(0, quantidade);
  return parcial;
}

 function draw() { 
  inicializaCores();
   let texto = palavraParcial(0,width);
   text(texto, 200, 200);
   }
   
function modoNoturno(horario) {
     if (horario > 18) {
       console.log("Você pracisa ligar o modo noturno!");
     } else {
       console.log("Modo noturno não é necessário neste momento.");
     }
   }
   
modoNoturno(15);
modoNoturno(20);


//function filmesParaAssistir(diaDeSemana, genero)

//...

 //return sugestaoFilme;
   
   //onde armazena informações
  //let maximo = width;
  //let minimo = 0;
  //mouseX, 0, width => 0, palavra.length
  
   
  //let quantidade = map(mouseX, 0, width, 1, palavra.length);
 //console.log(quantidade);
 //let parcial = palavra.substring(0, quantidade);
 // text(parcial, 200,200);

