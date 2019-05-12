var fs = require('fs')
var request = require('request')

module.exports = {
    pwd: function(file) {
    process.stdout.write((`${process.cwd()}`));
    process.stdout.write('\nprompt > ')
    },
    date: function(file) {
            process.stdout.write(Date());
            process.stdout.write('\nprompt > ')
    
    },
    ls: function(file){
        fs.readdir('.', function(err, file) {
            if (err) throw err;
            file.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          });
    },
    echo: function(file){
        process.stdout.write(file);
        process.stdout.write('\nprompt > ')

    },
    cat: function(file){
        const fileName = file
        fs.readFile(fileName, (err, data)=> {
            if (err) throw err
            process.stdout.write(data)
            process.stdout.write('\nprompt > ')
        })
    },
    head: function(file){
            const fileName = file
            fs.readFile(fileName, (err,data)=>{
                if (err) throw err    
                var txtcompr = (((data.toString()).split("\n")).slice(0,5)).join("\n")
                process.stdout.write(txtcompr)
                process.stdout.write('\nprompt > ')
            })  
            
    },
    tail: function(file){
        const fileName = file
        fs.readFile(fileName, (err,data)=>{
            if (err) throw err    
            var txtcompr = (data.toString()).split("\n")

            var textcomprimido = txtcompr.slice(txtcompr.length - 5).join("\n")

            process.stdout.write(textcomprimido)
            process.stdout.write('\nprompt > ')
        })  
        
},
    sort: function(file){
        const fileName = file
        fs.readFile(fileName, (err,data)=>{
            if (err) throw err    
            var txtcompr = (data.toString()).split("\n")
            var txtsort = txtcompr.sort()
            var txtord = txtsort.join("\n")
            process.stdout.write(txtord)
            process.stdout.write('\nprompt > ')
        }) 
        
    },
    wc: function(file){
        const fileName = file
        fs.readFile(fileName, (err,data)=>{
            if (err) throw err    
            var txtcompr = (data.toString()).split("\n")

            process.stdout.write("el archivo tiene " + txtcompr.length + " lineas")
            process.stdout.write('\nprompt > ')
        })
    },
    uniq: function(file){
        const fileName = file
        fs.readFile(fileName, (err,data)=>{
            if (err) throw err
            var newArr = []    
            var txtArr = (data.toString()).split("\n")
            for (var i = 0 ; i < txtArr.length ; i++) {
                if (!newArr.includes(txtArr[i])) {
                    newArr.push(txtArr[i])
                }
            }            
            process.stdout.write(newArr.join("\n"))
            process.stdout.write('\nprompt > ')
        })

},  curl: function(file){
    request(file, function(err, res, body) {  
        if (err) throw err
        process.stdout.write(body)
        process.stdout.write('\nprompt > ')
        console.log(body)
});
    
}

}