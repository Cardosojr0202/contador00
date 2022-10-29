let valor = 0

// diminui um valor
const diminuir = document.getElementById("diminuir");
diminuir.addEventListener("click", function(){
    valor = valor - 1
    atualiza_contador()
})

// zera o contador
const redefinir = document.getElementById("redefinir");
redefinir.addEventListener("click", function(){
    valor = 0
    atualiza_contador()
})

// aumenta um valor
const aumentar = document.getElementById("aumentar")
aumentar.addEventListener("click", function(){
    valor = valor + 1
    atualiza_contador()
})

// atualiza o volor 
function atualiza_contador(){
    document.getElementById("placar").innerHTML = valor
}