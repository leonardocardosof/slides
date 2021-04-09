$(function(){
    var indiceAtual = 0;
    var todos = $('img').length
    //mostrarPrimeiro();
    inicio();
    

    /*function mostrarPrimeiro(){
        setInterval(function(){
            restante()
        },2000)
    }

    function restante(){
        $('img').eq(indiceAtual).fadeOut();
        indiceAtual+=1;
        if(indiceAtual == todos){
            indiceAtual = 0;
        }
        $('img').eq(indiceAtual).fadeIn();
    }*/

    function inicio(){
        setInterval(function(){
            resto();
        },2000)
    }

    function resto(){
        $('img').eq(indiceAtual).fadeOut();
        indiceAtual+=1;
        if(indiceAtual == todos){
            indiceAtual = 0;
        }
        $('img').eq(indiceAtual).fadeIn();
    }
})