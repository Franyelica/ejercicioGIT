function generateRandomInt(max){
    return Math.floor(Math.random() * max);
}

function isPar(number) {
    if(number %2==0){
        return "Par"
    }else{
        return"Impar"
    }
}

function main() {
    for (let index = 0; index < 5; index++) {
        const number = generateRandomInt(100)
        console.log(number, isPar(number))
    }

}

main()

