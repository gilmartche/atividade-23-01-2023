//criar variáveis
var gremio;
var gremioImg;
var chao;
var chaoImg;
var estadoJogo = "play";
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
    createCanvas(800,400);
    //criar sprites
    gremio = createSprite(200,200,10,10);
    //carregar imagem
    gremio.addImage("gremio", gremioImg);
    //altera o tamanho
}
//função que executa o programa até que seja parado
function draw()
{
    //colocar cor de fundo
    background("#6959CD");
    //condição para pular
    if (estadoJogo==="play")
    {
        //movimento pro chão e renicia o chão
        gremio.velocityX = -2;
            if(gremio.x<0)
            {
                gremio.x = gremio.width/2;
            } 
        if(keyDown("space"))
        {
        //o que acontece se a condição for verdadeira
        gremio.velocityY = -5;
        //adicionar gravidade ao tRex
        gremio.velocityY = gremio.velocityY + 0.5;
        //altera o tamanho
        gremio.scale = 1;
        //alterar um posição esepecífica
        gremio.x = 300;
        //configurações o chão
        chao = createSprite(100,140,150,20);
        //chao.addImage("chao", chaoImg);
        chaoInvisivel = createSprite(80, 155, 100, 20);
        chaoInvisivel.visible = false;
        }
        else if(estadoJogo==="end")
        {
            //parar a velocidade
            gremio.velocityX = 0;
            gremio.velocityY = 0;
        }    
        //configurações o chão
        // chao = createSprite(100,140,150,20);
        // chao.addImage("chao", chaoImg);
        //chaoInvisivel = createSprite(80, 155, 100, 20);
        //chaoInvisivel.visible = false;
        
        //exibir texto de instrução
        //comando que desenha sprites
        drawSprites();
    }
}
