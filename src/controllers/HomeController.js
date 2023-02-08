import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gilvan',
      sobrenome: 'Neto',
      email: 'gilvan@email.com',
      idade: 20,
      peso: 80,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
