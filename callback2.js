function soma (a, b, callback){
    const resultado = a + b
    callback(resultado)
}

soma(4,7,(res) => {console.log(`O valor da soma é ${res}`)})