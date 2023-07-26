import express from "express"
import db from './config/dbConnect.js';
import livroSchema from './models/Livro.js'
import routes from './routes/index.js'

const app = express()
routes(app)
// app.use(express.json())
// db.on('error',console.log.bind(console,'Erro de conexão'));
// db.once('open',()=>{
//     console.log('Conexão com o banco feita com sucesso');
// })

// app.get('/',(req,res)=>{
//     res.status(200).send('Curso de node')
// });

// // app.get('/livros',async (req,res)=>{
// //     const e = await livros.find();
// //     res.json(e);

// // })
// app.get('/livros/:id',async (req,res)=>{
//     const {id} = req.params;
//     const e = await livroSchema.findById(id)
//     res.status(200).json(e)
// })
// app.post('/livros',(req,res)=>{
//     livroSchema.push(req.body)
//     res.status(201).send("cadastrado com sucesso")
// })
// app.put('/livros/:id',(req,res)=>{
//     const index = livroSchema.findIndex(x=>x.id==req.params.id)
//     livroSchema[index].titulo = req.body.titulo
//     res.json(livroSchema)
// })
// app.delete('/livros/:id',(req,res)=>{
//     const {id} = req.params;
//     const index = livroSchema.findIndex(x=>x.id==id)
//     livroSchema.splice(index,1);
//     res.status(201).send(`Livro ${id} removido com sucesso`)

// })

export default app;
