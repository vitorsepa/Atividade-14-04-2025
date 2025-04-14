function func1 () {
    return new Promise((resolve, reject) => {
        let resultado = 0
        setTimeout(() => { resultado = Math.floor(Math.random()*10)
        if (resultado>5){
            resolve('a conta deu certo')
        } else {
            reject('algo deu errado')
        }
        }, 2000)
    })
}

async function verificarValor() {
try{
    const resposta = await (func1)
    console.log(resposta)
} catch (e){
    console.log(e)
}
}
verificarValor()
console.log('teste')