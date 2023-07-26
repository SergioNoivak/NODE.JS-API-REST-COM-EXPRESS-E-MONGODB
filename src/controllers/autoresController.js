import autorSchema from '../models/Autor.js'

class AutorController {
    static listarAutores =  async (req,res)=>{
            const e = await autorSchema.find();
            res.status(200).send(e)
        }
    static getId = async (req,res)=>{
        const {id} = req.params;
        const e = await autorSchema.findById(id)
        res.status(200).json(e)
    }
    static cadastrarAutor = async (req,res)=>{
        const autor = new autorSchema(req.body);
        const saved = autor.save()
        res.status(200).json(autor)

    }
    static atualizarAutor = async (req,res)=>{
        const {id} = req.params;
        await autorSchema.findByIdAndUpdate(id,{$set:req.body})
        res.status(200).send({"message":"autor atualizado com sucesso"})
    }
    static excluirAutor = async (req,res)=>{
        const {id} = req.params;
        await autorSchema.findByIdAndDelete(id,{$set:req.body})
        res.status(200).send({"message":"autor excluido com sucesso"})
    }
    }

export default AutorController;