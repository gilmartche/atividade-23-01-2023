//criar variáveis
var gremio;


//função que carrega imagens
function preload()
{
    //carregar imagens

    gremio=loadImage("img/gremio.png");

}

//função que inicializa o arquivo
function setup()
{
    //cria tamanho do fundo da tela
    createCanvas(600,200);
    //criar sprites
    gremio = createSprite(100,100,20,20);
    //carregar imagem
    //colocar tamanho

}


//função que executa o programa até que seja parado
function draw()
{
    //colocar cor de fundo
    //condição para pular
    //exibir texto de instrução
    //comando que desenha sprites
    background("BFBFBF");
    //if(keyDown("space"))
 //       {
            //o que acontece se a condição for verdadeira
  //          gremio.velocityY = -10;
  //      }
    drawSprites();
}
