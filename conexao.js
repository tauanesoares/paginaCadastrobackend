import mongoose from "mongoose";

const endereco = "mongodb+srv://tauanesoares:PcRSdYiZyF9yrhT@cluster0.p2cvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const configuracao = {useNewUrlParser: true, useUnifiedTopology: true}

await mongoose.connect(endereco, configuracao)
console.log("CONECTADO COM O BANCO DE DADOS")

mongoose.Promise = global.Promise