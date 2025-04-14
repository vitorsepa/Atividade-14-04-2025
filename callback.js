//ligar fogao 1 seg
//ferver agua 3 seg
//colocar macarrao 2 seg
//escorrer macarrao 4 seg
//servir macarrao 5 seg

function ligarFogao(callback){
    console.log(`Ligando o fogão...`)
    setTimeout(
        callback, 1000
    )
}

function ferverAgua(callback){
    console.log(`Colocando a água para ferver...`)
    setTimeout(
        callback, 3000
    )
}

function colocarMacarrao(callback){
    console.log(`Colocando o macarrão na água fervente...`)
    setTimeout(
        callback, 2000
    )
}

function escorrerMacarrao(callback){
    console.log(`Escorrendo macarrão...`)
    setTimeout(
        callback, 4000
    )
}

function servirMacarrao(){
    console.log(`O macarrão está servido!`)
    setTimeout(
        5000
    )
}

ligarFogao(() => {
    ferverAgua(() => {
        colocarMacarrao(() => {
            escorrerMacarrao(() => {
                servirMacarrao(() => {
                });
            });
        });
    });
});