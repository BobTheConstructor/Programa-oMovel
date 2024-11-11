const express = require('express');
const session = require('express-session');
const { getUsuarioPorNome, adicionarUsuario, atualizarUsuario } = require('./database/usuarios');
const { getProdutos, adicionarProduto, atualizarProduto, deletarProduto } = require('./database/produtos');
const authenticate = require('./middleware/authMiddleware');

const app = express();

app.use(express.json());
app.use(session({ secret: 'CHAVE_SECRETA', resave: false, saveUninitialized: true }));

// Função para verificar se o usuário é admin
const verificarAdmin = (nomeUsuario, senha) => {
  // Se for admin, a senha é 'admjkm3108'
  return nomeUsuario === 'JKMPNEUS' && senha === 'admjkm3108';
};

// Registro de usuário
app.post('/register', async (req, res) => {
  const { nomeUsuario, senha } = req.body;

  try {
    const usuarioExistente = await getUsuarioPorNome(nomeUsuario);  // Usando await para esperar a resposta
    if (usuarioExistente) {
      return res.status(400).json({ message: 'Usuário já registrado' });
    }

    const novoUsuario = await adicionarUsuario(nomeUsuario, senha);  // Usando await para esperar a inserção
    res.status(201).json({ message: 'Usuário registrado com sucesso', novoUsuario });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Login de usuário
app.post('/login', async (req, res) => {
  const { nomeUsuario, senha } = req.body;

  try {
    let usuario;
    
    if (nomeUsuario === 'JKMPNEUS') {
      // Verifica se o login é o do administrador e se a senha está correta
      if (verificarAdmin(nomeUsuario, senha)) {
        usuario = { nomeUsuario, senha };  // Admin é um caso especial
      } else {
        return res.status(401).json({ message: 'Usuário ou senha incorretos' });
      }
    } else {
      // Para outros usuários, a verificação é normal
      usuario = await getUsuarioPorNome(nomeUsuario);  // Usando await para buscar o usuário
      if (!usuario || usuario.senha !== senha) {
        return res.status(401).json({ message: 'Usuário ou senha incorretos' });
      }
    }

    // Verificar se o usuário é admin
    const isAdmin = nomeUsuario === 'JKMPNEUS';  // Se o nome de usuário for 'JKMPNEUS', ele é admin

    req.session.user = { nomeUsuario, isAdmin };  // Salvando a sessão com a informação do cargo
    res.status(200).json({ message: 'Login bem-sucedido', nomeUsuario, isAdmin });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Atualizar perfil do usuário
app.put('/update-profile', authenticate, async (req, res) => {
  const { nomeUsuario, novoNomeUsuario, novaSenha } = req.body;

  try {
    const usuario = await atualizarUsuario(nomeUsuario, novoNomeUsuario, novaSenha);  // Usando await
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ message: 'Perfil atualizado com sucesso', usuario });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Lista de produtos
app.get('/produtos', authenticate, async (req, res) => {
  try {
    const produtos = await getProdutos();  // Usando await para buscar os produtos
    res.json(produtos);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Adicionar produto (somente admin)
app.post('/produtos', authenticate, async (req, res) => {
  const { tipo, descricao } = req.body;

  try {
    if (!req.session.user.isAdmin) {
      return res.status(403).json({ message: 'Acesso negado. Somente administradores podem adicionar produtos.' });
    }

    const novoProduto = await adicionarProduto(tipo, descricao);  // Usando await
    res.status(201).json(novoProduto);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// Atualizar produto (somente admin)
app.put('/produtos/:id', authenticate, async (req, res) => {
  const { id } = req.params;
  const { tipo, descricao } = req.body;

  try {
    if (!req.session.user.isAdmin) {
      return res.status(403).json({ message: 'Acesso negado. Somente administradores podem atualizar produtos.' });
    }

    const produtoAtualizado = await atualizarProduto(parseInt(id), tipo, descricao);  // Usando await
    if (!produtoAtualizado) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(produtoAtualizado);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// Deletar produto (somente admin)
app.delete('/produtos/:id', authenticate, async (req, res) => {
  const { id } = req.params;

  try {
    if (!req.session.user.isAdmin) {
      return res.status(403).json({ message: 'Acesso negado. Somente administradores podem deletar produtos.' });
    }

    const produtosAtualizados = await deletarProduto(parseInt(id));  // Usando await
    res.json(produtosAtualizados);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});
