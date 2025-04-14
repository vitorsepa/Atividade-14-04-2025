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

async function prepararMacarrao () {
    const resposta1 = await ligarFogao()
    console.log(resposta1)
    const resposta2 = await ferverAgua()
    console.log(resposta2)
    const resposta3 = await colocarMacarrao()
    console.log(resposta3)
    const resposta4 = await escorrerMacarrao()
    console.log(resposta4)
    const resposta5 = await servirMacarrao()
    console.log(resposta5)
}