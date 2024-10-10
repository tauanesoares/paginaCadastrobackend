import mongoose from "mongoose";

const endereco = process.env.MONGO_URI
const configuracao = {useNewUrlParser: true, useUnifiedTopology: true}

await mongoose.connect(endereco, configuracao)
console.log("CONECTADO COM O BANCO DE DADOS")

mongoose.Promise = global.Promise