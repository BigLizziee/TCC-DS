const prisma = require('../connect');

const create = async (req, res) => {
    const { nome, email, senha } = req.body;
    console.log('Dados recebidos:', req.body);

    try {
        const paciente = await prisma.paciente.create({
            data: { nome, email, senha },
        });
        console.log('Usuário criado:', paciente);
        res.status(201).json(paciente);
    } catch (err) {
        console.error('Erro ao criar usuário:', err);
        res.status(400).json(err);
    }
};

const login = async (req, res) => {
    const { email, senha } = req.body;
    console.log('Tentativa de login:', req.body);

    try {
        const paciente = await prisma.paciente.findUnique({
            where: { email },
        });

        if (paciente) {
            if (paciente.senha === senha) {
                console.log('Login bem-sucedido:', paciente);
                res.status(200).json({ message: 'Login bem-sucedido' });
            } else {
                console.log('Senha incorreta');
                res.status(401).json({ message: 'Senha incorreta' });
            }
        } else {
            console.log('Usuário não encontrado');
            res.status(401).json({ message: 'Usuário não encontrado' });
        }
    } catch (err) {
        console.error('Erro no login:', err);
        res.status(400).json(err);
    }
};

module.exports = {
    create,
    login,
};