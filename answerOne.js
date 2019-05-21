function getMiddle(str){
    var result = []
    for(var i = 0; i < str.length; i++){
        if(str.length % 2 == 0){
            result.push(str[str.length / 2 - 1] + str[str.length / 2])
        } else if(str.length % 2 == 1){
            result.push(str[str.length / 2 - 0.5])
        }
    }

    return result[0]
}
console.log(getMiddle('test')) // 'es'
console.log(getMiddle('testing')) // 't'
console.log(getMiddle('middle')) // 'dd'
console.log(getMiddle('A')) // 'A'


