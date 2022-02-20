/* o jogo conciste em controlar um personagem e resolver problemas matematicos, na tela iram aparecer monstros com numeros em suas cabeças e o ninja terá que atacar aquele que tiver o numero correto em relação a pergunta feita. */
var tela = 1;
var altura = 50;
var largura = 200;
var xtextoMenu = 250
var ytextoMenu = 220
var xmenu = 150;
var ymenu1 = 185;
var ymenu2 = 240;
let ymenu3 = 300;
var xVoltar = 390
var yVoltar = 430
var xsom = 450
var ysom = 400
let x = 0;
let y = 0;
var yJedi = 500
var kx = 0;
var qx = 190
var qy = 330
let fundo1;
var ffloresta;
var Minecraft;
var som01;
var ninjaidle = []
var ninjaidleesq = []
var ninja = [];
var runE = []
var ninjaata = []
var ninjaataesq = []
var ninjasub = 0
var contninja = 0;
var kunailancamento = []
var monstroZumbi = []
var monstroGoblin = []
var aluno;
var prof;
var lancamento = []
var kunai;
var csom;
var ssom;
var xJogador = 215
var yJogador = 315
var xMonstro = 500
var xMonstro2 = -80
var yMonstro = 315
var yMonstro2 = 315
var lNinja = 70
var aNinja = 80
var direcao = 0
let colisaovit = 0
var contVit = -1
var rNinja = [90, 50, 100, 93]
var rMonstro = 80
var colistest = false
var carregou = false
var itenscarregados = 0
var level = 0
var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var num3 = [11, 22, 52, 36, 12, 55, 48, 14, 16, 18, 25, 26, 34, 52, 62, 82, 90, 100]
var aleatorio1 
var aleatorio2 
var aleatorio3 
var aleatorio4
var operacao
var operacaolvl2
var operacaolvl3
var operacaoFalse
var operacaoTest = 0
function setup() {
  createCanvas(500, 500);
  frameRate(30)
  soundFormats('mp3', 'ogg');
  button = createButton("Play")
  button.position(20, 460)
  button.mousePressed(playpause)
  aluno = loadImage('./chars/aluno.png', carregando)
  csom = loadImage('./icones/csom.png', carregando)
  ssom = loadImage('./icones/ssom.png', carregando)
  prof = loadImage('./chars/prof.png', carregando)
  quadro = loadImage('quadro.png', carregando)
  fundo2 = loadImage('fundo2.jpg', carregando)
  fmenu = loadImage('fmenu.jpg',carregando)
  ffloresta2 = loadImage('./fundos/fundofloresta2.jpg', carregando)
  Minecraft = loadFont('Minecraft.ttf', carregando)
  som01 = loadSound('som01', carregando)
  kunai = loadImage('./lancamentodekunai/Kunai.png', carregando)
  for (i=0; i < 10; i++){
    ninja[i]= loadImage('./chars/Run__00'+i+'.png', carregando)
    lancamento[i]= loadImage('./lancamentodekunai/Throw__00'+i+'.png', carregando)
    ninjaidle[i] = loadImage('./charidle/Idle__00'+i+'.png', carregando)
    ninjaidleesq[i] = loadImage('./charidleesq/IdleEsq__00'+i+'.png', carregando)
    runE[i]= loadImage('./RunEsq/RunE__00'+i+'.png', carregando)
    ninjaata[i] = loadImage('./ninjaataque/Attack__00'+i+'.png', carregando)
    ninjaataesq[i]= loadImage('./ninjaataqueesq/ninjaesq00'+i+'.png.png', carregando)
  }
  for (i=0; i < 6; i++){
    monstroZumbi[i]= loadImage('./monstro/amarelito__00'+i+'.png',carregando)
    monstroGoblin[i] = loadImage('./monstro/monstroesq1/golbinesq_'+i+'.png', carregando)
  }
  operacoes()
}
function draw() {
  if(carregou == true){
  textStyle(NORMAL);
// Tela Menu
  if(tela == 1){
    background(215);
    //Menu com 3 opções
    // Iniciar jogo
    textAlign(CENTER);
    textSize(26);
    image(fmenu, 0, 0, 500, 500)

//animacao do ninja correndo na tela de menu
    for(contninja++; contninja >= 9; contninja = 0){}
    image(ninja[contninja], y, 290, 70, 70);
    y = y+3
    if (y >500){
      y = 0
    }
    
//nome do jogo 
    textSize(40);
    fill(255,215,0)
    noStroke();
    textFont(Minecraft)
    stroke(0, 0, 255)
    strokeWeight(2);
    text("Combatendo", 150, 50);
    text("A", 250, 100);
    text("Matematica", 350, 150);
    botoes()
  }
  
//tela do iniciar
    if(tela == 2){
    if(yJedi < 0){
    estilotela2()
    movimentacao()
    monstro()
    ganharperder()
    voltar()
    }else{
    background('white')
    frameRate(45)
    fill('Black')
    textSize(20)
    textAlign(CENTER, TOP)
    text('O poderoso mago Baskaras esta tentando \nconquistar o mundo!\nMas so voce o Incrivel Ninja Regradetres\n pode dete-lo, resolva os problemas que o mago espalhou e salve a humanidade', 0, yJedi, width)  
  yJedi = yJedi-1
      if(keyIsDown(32)){
        yJedi = yJedi - 10
      }
    }
  }
//tela de informações
  if(tela == 3){
    image(quadro, 50, 50, 400, 400)
    textAlign(CENTER)
    textFont('Arial')
    fill(20)
    textSize(40)
    text('Instruções', 300, 90)
    textSize(30)
    fill(255)
    text('Para alunos do 4º ano', 220, 130)
    textSize(25)
    textFont('Arial')
    text('Desenvolver habilidades de \n soma e subtração atacando ', 230, 170)
    text('o resultado de uma operação\nmatemática que ira aparecer', 240, 230)
    text('na tela.', 120, 290)
    voltar() 
  }
//tela de creditos
  if(tela == 4){
    image(aluno, 10, 150, 240, 250)    
    image(prof, 245,150, 240,250)
    textAlign(CENTER);
    textSize(20);
    voltar()           
}  
// tela da vitoria
  if(tela == 5){
    background('Green')
    fill('Gold')
    rect(5, 125, 490, 225, 20)
    textSize(40)
    fill('White')
    textAlign(CENTER)
    text("Voce esta mais perto de derrotar o grande mago Baskaras", 10, 180, width)
    voltar() 
  }  
// tela da derrota
  if(tela == 6){
    background('Gray')
    fill('Gold')
    rect(5, 125, 490, 225, 20)
    textSize(40)
    fill('White')
    textAlign(CENTER)
    text("Voce falhou em sua missao", 10, 180, width)
    voltar()
  }
}else {
  fill('black')
  rect( 100, 300, 400, 50, 20)
  fill('Gold')
  rect( 100, 300, itenscarregados*(400/93), 50, 20)
  textSize(30)
  fill('White')
  text('Carregando...', 200, 340)
  
}
}
function carregando(){
  itenscarregados++
  console.log('Carregou...'+ itenscarregados)
  if(itenscarregados == 93){
    carregou = true
  }
}
function botoes(){
  //botao de acesso a tela do jogo 
    fill(250);
    noStroke();
    textSize(25);
    text("Iniciar", xtextoMenu, ytextoMenu);
    textAlign(CENTER);
    if(mouseX > xmenu && mouseX < xmenu+largura && mouseY > ymenu1 && mouseY < ymenu1+altura){  
    stroke(20); 
    fill(x+25,y+215,x+y);
      x = map(mouseX, xmenu, ymenu1, largura, altura)
    rect(xmenu, ymenu1, largura, altura, 30);
    fill(250);
    noStroke();
    text("Iniciar", xtextoMenu, ytextoMenu);
    textAlign(CENTER);
      if(mouseIsPressed) {
      tela = 2
    }
   }

//botão de Informações
    textAlign(CENTER);
    textSize(20);
    fill(250);
    noStroke();
    textSize(25)
    text("Informacoes", 250, 275)
    if(mouseX > xmenu && mouseX < xmenu+largura && mouseY > ymenu2 && mouseY < ymenu2 + altura){
    stroke(200);
    fill(xmenu,ymenu2,x+y);
      x = map(mouseX, xmenu, ymenu2, largura, altura)
    rect(xmenu, ymenu2, largura, altura, 30);
    fill(250);
    noStroke();
    textSize(25)
    text("Informacoes", 250, 275)
      if (mouseIsPressed){
        tela = 3
      }
    }
  
//botao de creditos
    textAlign(CENTER);
    textSize(20);
    fill(250);
    noStroke();
    text("Creditos", 250, 335)
    if(mouseX > xmenu && mouseX < xmenu+largura && mouseY > ymenu3 && mouseY < ymenu3 + altura){
    stroke(200);
    fill(x+255,215,100);
      x = map(mouseX, xmenu, ymenu3, largura, altura)
    rect(xmenu, ymenu3, largura, altura, 30);
    fill(250);
    noStroke();
    text("Creditos", 250, 335)
      if(mouseIsPressed){
        tela = 4
      }
    }
}
function voltar(){
  if(mouseX > 390 && mouseX < 390+largura -100 && mouseY > 430 && mouseY < 430+altura){
    fill('Gold')
    stroke(255)
    rect(xVoltar, yVoltar, largura - 100, altura, 30)
      if(mouseIsPressed){
      tela = 1
    }
    }
    textSize(26)
    noStroke()
    textFont(Minecraft)
    fill(255, 120, 125)
    text('Voltar', 443, 463)
}
function movimentacao(){
  frameRate(45)
      for(contninja++; contninja >= 9; contninja = 0){}
    if(keyIsDown(RIGHT_ARROW)){
      xJogador = xJogador+4
      direcao = 1
      colistest = false
      if(xJogador > 435){
        xJogador = 434
      }
      image(ninja[contninja], xJogador, yJogador, 70, 82)
    }else{ if(keyIsDown(LEFT_ARROW)){
      xJogador = xJogador-4
      direcao = 2
      colistest = false
        if(xJogador < -8){
          xJogador = -5
        }
      image(runE[contninja], xJogador, yJogador, rNinja[0], 83)
      colistest = false
    }else{
      if(keyIsDown(32)){
        if(direcao == 1){
      image(ninjaata[contninja], xJogador, yJogador, rNinja[2], 90)
          colistest = true
          redraw()
        }else{
          if(direcao == 2){
            image(ninjaataesq[contninja], xJogador, yJogador, rNinja[2], 90)
            colistest = true
            redraw()
          }
        }
    }else{
      if(direcao == 1){
        image(ninjaidle[contninja], xJogador, yJogador, rNinja[1], 80)
        colistest = false
      }else{
        image(ninjaidleesq[contninja], xJogador, yJogador, rNinja[3], 80)
        colistest = false
      }
    }
    }
         }
  if(keyIsDown(65)){
    image(kunai, kx, 330, 30, 30)
    kx=xJogador+5
     /* if(kx < 435){
        kx = xJogador 
      } */
  }
}
function monstro(){
  if(level == 0){
  frameRate(20)
  textSize(40)
  fill('White')
  text(`Quanto e\n${aleatorio1} x ${aleatorio2}`, 0,170, width)
  for(contninja++; contninja >= 6; contninja = 0){}
  image(monstroZumbi[contninja], xMonstro, yMonstro, rMonstro, 80)
  textSize(20)
  text(operacao,xMonstro, yMonstro)
  if(xMonstro < - 50){
    xMonstro = 550
  }else{
    xMonstro = xMonstro - 0.5
  }
  image(monstroGoblin[contninja], xMonstro2, yMonstro2, rMonstro, 80)
  textSize(20)
  text(operacaoFalse, xMonstro2+80, yMonstro2)
  if(xMonstro2 > 500){
    xMonstro2 = -50
  }else{
    xMonstro2= xMonstro2 + 0.5
  } 
    operacaoTest = 1
}
  if(level == 1){
  frameRate(20)  
  textSize(40)
  text('o grande mago chegou')
  fill('White')
  text(`Quanto e\n${aleatorio1} x ${aleatorio2}`, 0,170, width)
  for(contninja++; contninja >= 6; contninja = 0){}
  image(monstroZumbi[contninja], xMonstro, yMonstro, rMonstro, 80)
  textSize(20)
  text(operacaoFalse,xMonstro, yMonstro)
  if(xMonstro < - 50){
    xMonstro = 550
  }else{
    xMonstro = xMonstro - 0.5
  }
  image(monstroGoblin[contninja], xMonstro2, yMonstro2, rMonstro, 80)
  textSize(20)
  text(operacao, xMonstro2+80, yMonstro2)
  if(xMonstro2 > 500){
    xMonstro2 = -50
  }else{
    xMonstro2= xMonstro2 + 0.5
  } 
    operacaoTest = 2
}
  if(level == 2){
  frameRate(20)  
  textSize(40)
  fill('White')
  text('Vejo que você é um pouco inteligente\n mas nunca irá me vencer')
  text(`Quanto e\n${aleatorio1} x ${aleatorio2}`, 0,170, width)
  for(contninja++; contninja >= 6; contninja = 0){}
  image(monstroZumbi[contninja], xMonstro, yMonstro, rMonstro, 80)
   textSize(20)
  text(operacaoFalse,xMonstro, yMonstro)
  if(xMonstro < - 50){
    xMonstro = 550
  }else{
    xMonstro = xMonstro - 0.5
  }
  image(monstroGoblin[contninja], xMonstro2, yMonstro2, rMonstro, 80)
  textSize(20)
  text(operacao, xMonstro2+80, yMonstro2)
  if(xMonstro2 > 500){
    xMonstro2 = -50
  }else{
    xMonstro2= xMonstro2 + 0.5
  } 
    operacaoTest = 2
}
  if(level == 3){
  frameRate(20)  
  textSize(40)
  fill('White')
  text('Vejo que você é um pouco inteligente\n mas nunca irá me vencer')
  text(`Quanto e\n${aleatorio1} x ${aleatorio2}`, 0,170, width)
  for(contninja++; contninja >= 6; contninja = 0){}
  image(monstroZumbi[contninja], xMonstro, yMonstro, rMonstro, 80)
   textSize(20)
  text(operacao,xMonstro, yMonstro)
  if(xMonstro < - 50){
    xMonstro = 550
  }else{
    xMonstro = xMonstro - 0.5
  }
  image(monstroGoblin[contninja], xMonstro2, yMonstro2, rMonstro, 80)
  textSize(20)
  text(operacaoFalse, xMonstro2+80, yMonstro2)
  if(xMonstro2 > 500){
    xMonstro2 = -50
  }else{
    xMonstro2= xMonstro2 + 0.5
  } 
    operacaoTest = 1
}
  if(level == 4){
  frameRate(20)  
  textSize(40)
  fill('White')
  text('Você só pode estar me enganando')
  text(`Quanto e\n${aleatorio1} x ${aleatorio2}`, 0,170, width)
  for(contninja++; contninja >= 6; contninja = 0){}
  image(monstroZumbi[contninja], xMonstro, yMonstro, rMonstro, 80)
   textSize(20)
  text(operacaoFalse,xMonstro, yMonstro)
  if(xMonstro < - 50){
    xMonstro = 550
  }else{
    xMonstro = xMonstro - 0.5
  }
  image(monstroGoblin[contninja], xMonstro2, yMonstro2, rMonstro, 80)
  textSize(20)
  text(operacao, xMonstro2+80, yMonstro2)
  if(xMonstro2 > 500){
    xMonstro2 = -50
  }else{
    xMonstro2= xMonstro2 + 0.5
  } 
    operacaoTest = 2
}
  if(level == 5){
  frameRate(20)  
  textSize(40)
  fill('White')
  text('Esse nivel de dificuldade é simplesmente impossivel')
  text(`Quanto e\n${aleatorio1} x ${aleatorio2}`, 0,170, width)
  for(contninja++; contninja >= 6; contninja = 0){}
  image(monstroZumbi[contninja], xMonstro, yMonstro, rMonstro, 80)
   textSize(20)
  text(operacao,xMonstro, yMonstro)
  if(xMonstro < - 50){
    xMonstro = 550
  }else{
    xMonstro = xMonstro - 0.5
  }
  image(monstroGoblin[contninja], xMonstro2, yMonstro2, rMonstro, 80)
  textSize(20)
  text(operacaoFalse, xMonstro2+80, yMonstro2)
  if(xMonstro2 > 500){
    xMonstro2 = -50
  }else{
    xMonstro2= xMonstro2 + 0.5
  } 
    operacaoTest = 1
}
  if(level == 6){
  frameRate(20)  
  textSize(40)
  fill('White')
  text('A partir de agora usarei todo\n todo meu poder')
  text(`Quanto e\n${aleatorio1} x ${aleatorio2} +${aleatorio3}`, 0,170, width)
  for(contninja++; contninja >= 6; contninja = 0){}
  image(monstroZumbi[contninja], xMonstro, yMonstro, rMonstro, 80)
   textSize(20)
  text(operacaoFalse2,xMonstro, yMonstro)
  if(xMonstro < - 50){
    xMonstro = 550
  }else{
    xMonstro = xMonstro - 0.5
  }
  image(monstroGoblin[contninja], xMonstro2, yMonstro2, rMonstro, 80)
  textSize(20)
  text(operacaolvl2, xMonstro2+80, yMonstro2)
  if(xMonstro2 > 500){
    xMonstro2 = -50
  }else{
    xMonstro2= xMonstro2 + 0.5
  } 
    operacaoTest = 2
}
  if(level == 7){
  frameRate(20)  
  textSize(40)
  fill('White')
  text('Minha vitoria já está garantida')
  text(`Quanto e\n${aleatorio1} x ${aleatorio2} +${aleatorio3}`, 0,170, width)
  for(contninja++; contninja >= 6; contninja = 0){}
  image(monstroZumbi[contninja], xMonstro, yMonstro, rMonstro, 80)
   textSize(20)
  text(operacaoFalse2,xMonstro, yMonstro)
  if(xMonstro < - 50){
    xMonstro = 550
  }else{
    xMonstro = xMonstro - 0.5
  }
  image(monstroGoblin[contninja], xMonstro2, yMonstro2, rMonstro, 80)
  textSize(20)
  text(operacaolvl2, xMonstro2+80, yMonstro2)
  if(xMonstro2 > 500){
    xMonstro2 = -50
  }else{
    xMonstro2= xMonstro2 + 0.5
  } 
    operacaoTest = 2
}
  if(level == 8){
  frameRate(20)  
  textSize(40)
  fill('White')
  text('Renda-se agora e sua humilhação\n não será vista')
  text(`Quanto e\n${aleatorio1} x ${aleatorio2} +${aleatorio3}`, 0,170, width)
  for(contninja++; contninja >= 6; contninja = 0){}
  image(monstroZumbi[contninja], xMonstro, yMonstro, rMonstro, 80)
   textSize(20)
  text(operacaoFalse2,xMonstro, yMonstro)
  if(xMonstro < - 50){
    xMonstro = 550
  }else{
    xMonstro = xMonstro - 0.5
  }
  image(monstroGoblin[contninja], xMonstro2, yMonstro2, rMonstro, 80)
  textSize(20)
  text(operacaolvl2, xMonstro2+80, yMonstro2)
  if(xMonstro2 > 500){
    xMonstro2 = -50
  }else{
    xMonstro2= xMonstro2 + 0.5
  } 
    operacaoTest = 2
}
  if(level == 9){
  frameRate(20)  
  textSize(40)
  fill('White')
  text('Eu não consigo acreditar que\n você chegou aqui')
  text(`Quanto e\n${aleatorio1} x ${aleatorio2} +${aleatorio3}`, 0,170, width)
  for(contninja++; contninja >= 6; contninja = 0){}
  image(monstroZumbi[contninja], xMonstro, yMonstro, rMonstro, 80)
   textSize(20)
  text(operacaolvl2,xMonstro, yMonstro)
  if(xMonstro < - 50){
    xMonstro = 550
  }else{
    xMonstro = xMonstro - 0.5
  }
  image(monstroGoblin[contninja], xMonstro2, yMonstro2, rMonstro, 80)
  textSize(20)
  text(operacaoFalse2, xMonstro2+80, yMonstro2)
  if(xMonstro2 > 500){
    xMonstro2 = -50
  }else{
    xMonstro2= xMonstro2 + 0.5
  } 
    operacaoTest = 1
}
  if(level == 10){
  frameRate(20)  
  textSize(40)
  fill('White')
  text('Esse desafio contem todo meu conhecimento\n você nunca irá supera-lo')
  text(`Quanto e\n${aleatorio1} x ${aleatorio2} + ${aleatorio3} + ${aleatorio4}`, 0,170, width)
  for(contninja++; contninja >= 6; contninja = 0){}
  image(monstroZumbi[contninja], xMonstro, yMonstro, rMonstro, 80)
   textSize(20)
  text(operacaoFalse3,xMonstro, yMonstro)
  if(xMonstro < - 50){
    xMonstro = 550
  }else{
    xMonstro = xMonstro - 0.5
  }
  image(monstroGoblin[contninja], xMonstro2, yMonstro2, rMonstro, 80)
  textSize(20)
  text(operacaolvl3, xMonstro2+80, yMonstro2)
  if(xMonstro2 > 500){
    xMonstro2 = -50
  }else{
    xMonstro2= xMonstro2 + 0.5
  } 
    operacaoTest = 2
}
}
function ganharperder(){
    colisaovit = dist(xJogador, yJogador, xMonstro, yMonstro)
    if(colisaovit > 0 && colisaovit < rNinja[2]-10 && colistest == true && operacaoTest == 1){
      contVit++
      console.log(contVit)
      level = contVit
      xMonstro = 500
      xMonstro2 = -50
      operacoes(redraw)
      if(contVit == 10 ){
        tela = 5
      }
      }else{
        colisaovit = dist(xJogador, yJogador, xMonstro2, yMonstro2)
        if(colisaovit > 0 && colisaovit < rNinja[2]-10 && colistest == true && operacaoTest == 1)
            tela = 6
      }
    colisaovit = dist(xJogador, yJogador, xMonstro2, yMonstro2)
    if(colisaovit > 0 && colisaovit < rNinja[2]-10 && colistest == true && operacaoTest == 2){
      contVit++
      console.log(contVit)
      level = contVit
      xMonstro = 500
      xMonstro2 = -50
      operacoes(redraw)
      if(contVit == 10 ){
        tela = 5
      }
    }else{
      colisaovit = dist(xJogador, yJogador, xMonstro, yMonstro)
    if(colisaovit > 0 && colisaovit < rNinja[2]-10 && colistest == true && operacaoTest == 2){
        tela = 6
    }
    }
    colisaovit = dist(xJogador, yJogador, xMonstro, yMonstro)
    if(colisaovit > 0 && colisaovit < rNinja[0]-50 - 60 && colistest == false){
      tela = 6
    }
    colisaovit = dist(xJogador, yJogador, xMonstro2, yMonstro2)
    if(colisaovit > 0 && colisaovit < rNinja[0]-50 && colistest == false){
      tela = 6

}
}
function estilotela2(){
  image(ffloresta2, 0, 150) //background 
  fill(211, 250, 211)
  rect(0, 0, 500, 150) 
  rect(0, 395, 500, 125)
}
function playpause() {
  if (!som01.isPlaying()) {
    som01.play()
    som01.setVolume(0.3)
    button.html('Pause')
  } else {
    som01.pause()
    button.html('Play')
  }
}
function operacoes(){
  num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  num3 = [11, 22, 52, 36, 12, 55, 48, 14, 16, 18, 25, 26, 34, 52, 62, 82, 90, 100]
  aleatorio1 = (Math.floor(Math.random() * num1.length))
  aleatorio2 = (Math.floor(Math.random() * num2.length))
  aleatorio3 = (Math.floor(Math.random() * num2.length + num3.length))
  aleatorio4 = (Math.floor(Math.random() * num2.length + num3.length - num2.length))
  operacao = aleatorio1 * aleatorio2
  operacaolvl2 = aleatorio1 * aleatorio2 + aleatorio3
  operacaolvl3 = aleatorio1 * aleatorio2 + aleatorio3+aleatorio4
  operacaoFalse = aleatorio1 * aleatorio2 - aleatorio1
  operacaoFalse2 = aleatorio1 * aleatorio2 + aleatorio3-aleatorio2
  operacaoFalse3 = aleatorio1 * aleatorio2 + aleatorio3
  
}
