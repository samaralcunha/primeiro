const fs = require("fs")
// //criar arquivo
// fs.appendFile("texto.txt", "texto foda", (erro) => {
//     if(erro) {
//         throw erro
//     } else {
//         console.log("deu certo")
//     }
// }) 
// mudar nome arquivo
// fs.rename("texto.txt", "novo.txt", (erro) => {
//     if(erro) {
//         throw erro
//     } else {
//         console.log("deu")
//     }
// })
// mudar conteudo arquivo
// fs.writeFile("novo.txt", "jk", (erro) => {
//     if(erro) {
//         throw erro
//     } else {
//         console.log("deu")
//     }
// })

// const http = require("http")
// http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/html") 
//     fs.readFile("index.html", (erro, data) => {
//         if(erro) {
//             throw erro
//         } else {
//             res.end(data)
//         }
//     })
//     res.end(`
//    <h1> cole mano </h1>
//    <p> :) </p>
//     `)
// }).listen(8000)

const express = require("express")
const app = express()
app.get("/novo/:nome", (req, res) => {
    const nome = req.params.nome
    fs.appendFile("nomes.txt", `\n${nome}`, (erro) => {
        if(erro) {
            throw erro
        } else {
            res.send("deu")
        }
    })
})
app.get("/listar", (req, res) => {
    let nomes = ""
    fs.readFile("nomes.txt","utf8",(erro, data) => {
        if (erro) {
            throw erro
        } else {
            data.split("\n").forEach((nome) => {
              nomes += `<li>${nome}</li>`
            })
            res.send(nomes)
        }
    })
    
})
app.listen(8000)
