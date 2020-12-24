const express = require('express');
const router = express.Router();


// RETORNA TODOS OS PEDIDO
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de PEDIDOS'
    });
});

// INSERE UM PEDIDO
router.post('/', (req, res, next) => {

    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: 'O pedido foi criado',
        pedidoCriado: pedido
        
    })

    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de PEDIDO'
    })
});


// RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    
        res.status(200).send({
            mensagem: 'Detalhes do pedido',
            id_pedido: id
        });
});

// DELETANDO UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluido'
    })
});

module.exports = router;