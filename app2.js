let readline = require ("readline")

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question("cual es tu nombre? ", (nombre)=> {
        rl.question("cual es tu apellido? ", (apellido)=>{
            console.log("hola, ${nombre} ${apellido}!")
            process.exit()
        })
})