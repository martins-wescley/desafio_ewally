let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('Exceções da API', () => {
    describe('Validar retorno de uma linha digitável inválida', () => {
        describe('Título Bancário', () =>{
            let linhaTituloInvalida = [{line: "23793380295022813380255006333300371210000100001"}, {line: "23783380295022813380255006333300371210000100000"}]

            linhaTituloInvalida.forEach(function (run) {
                it('Linha digitável inválida', (done) => {
                    chai.request('http://localhost:3333').post('/boleto')
                    .send(run)
                    .end((err, res) => {
                        res.should.have.status(400);
                        res.body.should.have.property('error').eql('Linha digitada é inválida');
                        done();
                    });
                });
            });
        });

        describe('Pagamento de Concessionária', () => {
            let linhaConcessionariaInvalida = [{line: "848000000006199101622010803181581667671044397779"}, {line: "848000000006199101622010803081581667671054397779"}]

            linhaConcessionariaInvalida.forEach(function (run) {
                it('Linha digitável inválida', (done) => {
                    chai.request('http://localhost:3333').post('/boleto')
                    .send(run)
                    .end((err, res) => {
                        res.should.have.status(400);
                        res.body.should.have.property('error').eql('Linha digitada é inválida');
                        done();
                    });
                });
            });
        });
    });

    describe('Validar o retorno de uma linha digitável com caracteres inválidos', () => {
        //Massa de Teste [Titúlo Bancário, Pagamento de Concessionária]
        let linhaCaracterInvalido = [{line: "2A783380295022813380255006333300371210000100000"}, {line: "82650000000350010110201980111117121240665196058A"}]
        
        linhaCaracterInvalido.forEach(function (run) {
            it('Caracteres Inválidos', (done) => {
                chai.request('http://localhost:3333').post('/boleto')
                .send(run)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('error').eql('Caracteres inválidos');
                    done();
                });
            });
        });
    });

    describe('Validar o retorno de uma linha digitável com tamanho inválido', () => {
        //Massa de Teste [Titúlo Bancário, Pagamento de Concessionária]
        let linhaTamanhoInvalido = [{line: "3419175009011556720490014827000270000000000000"}, {line: "8265000000035001011020198011111712124066519658"}]
        
        linhaTamanhoInvalido.forEach(function (run) {
            it('Tamanho Inválido', (done) => {
                chai.request('http://localhost:3333').post('/boleto')
                .send(run)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('error').eql('Tamanho da linha é inválida');
                    done();
                });
            });
        });
    });
});