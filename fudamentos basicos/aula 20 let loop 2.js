var funes = [];

for (var i = 0; i <10; i++){
    funes.push(function(){
        console.log(i)
    })

}

funes[2]()
funes[8]()