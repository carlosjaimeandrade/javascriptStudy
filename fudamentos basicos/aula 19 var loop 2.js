var funes = [];

for (let i = 0; i <10; i++){ //com let funcimona
    funes.push(function(){
        console.log(i)
    })

}

funes[2]()
funes[8]()