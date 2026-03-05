function esperals(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ("2")
        }, 10000);
    })
}

async function asyncWait() {
    console.log("1")

const mensagem = await esperals()
console.log(mensagem)

console.log("3")
}
asyncWait()