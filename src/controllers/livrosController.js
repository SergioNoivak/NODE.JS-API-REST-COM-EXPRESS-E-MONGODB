import livroSchema from '../models/Livro.js'

class LivroController {
    static listarLivros =  async (req,res)=>{
            const e = await livroSchema
            .find()
            .populate('autor')
            .exec()
            res.status(200).send(e)
        }
    static getId = async (req,res)=>{
        const {id} = req.params;
        const e = await livroSchema.findById(id).populate({
            path:'autor',
            select: 'nacionalidade nome _id'

        })
        res.status(200).json(e)
    }
    static cadastrarLivro = async (req,res)=>{
        const livro = new livroSchema(req.body);
        const saved = livro.save()
        res.status(200).json(livro)

    }
    static atualizarLivro = async (req,res)=>{
        const {id} = req.params;
        await livroSchema.findByIdAndUpdate(id,{$set:req.body})
        res.status(200).send({"message":"Livro atualizado com sucesso"})
    }
    static excluirLivro = async (req,res)=>{
        const {id} = req.params;
        await livroSchema.findByIdAndDelete(id,{$set:req.body})
        res.status(200).send({"message":"Livro excluido com sucesso"})
    }

    static listarLivroPorEditora = async (req,res)=>{
        const {editora} = req.query;
        const livros  = await livroSchema.find({
            'editora':editora
        })
        res.status(200).json(livros)
        }

    }

export default LivroController;