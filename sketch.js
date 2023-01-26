//criar variáveis
var gremio;
var gremioImg;
var chao;


//função que carrega imagens
function preload()
{
    //carregar imagens
    gremioImg = loadImage("img/escudo-gremio.png");
}

//função que inicializa o arquivo
function setup()
{
    //cria tamanho do fundo da tela
    createCanvas(1000,600);
    //criar sprites
    gremio = createSprite(500,300,100,100);
    //carregar imagem
    gremio.addImage("gremio", gremioImg);
    //altera o tamanho
    gremio.scale = 0.5;
    chao = createSprite(500,500,100,5);       

}
//função que executa o programa até que seja parado
function draw()
{
    //colocar cor de fundo
    background("#6959CD");
    //condição para pular
    //movimento pro chão e renicia o chão
    //o que acontece se a condição for verdadeira
    //adicionar gravidade ao tRex
    if(keyDown("space")){
        gremio.velocityY = -7;
        }
        gremio.velocityY = gremio.velocityY + 1;
        gremio.collide(chao);
        //altera o tamanho
        //alterar um posição esepecífica
        //configurações o chão
        chao.visible = false;   
        //exibir texto de instrução
        //comando que desenha sprites
        drawSprites();
}
