import express from 'express';
import LivroController from '../controllers/livrosController.js';
import livros from '../models/Livro.js';

const router = express.Router();

router.get('/livros',LivroController.listarLivros)
router.get('/livros/busca',LivroController.listarLivroPorEditora)
router.get('/livros/:id',LivroController.getId)
router.post('/livros',LivroController.cadastrarLivro)
router.put('/livros/:id',LivroController.atualizarLivro)
router.delete('/livros/:id',LivroController.excluirLivro)

export default router;

