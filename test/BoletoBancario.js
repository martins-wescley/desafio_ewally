let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('Boleto Bancário', () => {
    describe('Validar o retorno de uma linha digitável válida', () => {
        it('1ª Linha Digitável Válida', (done) =>{
            let boleto = {
                line: "07791000151100282017000071951503670630000005023"
            }

            chai.request('http://localhost:3333').post('/boleto')
            .send(boleto)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('dataVencimento').eql('07/02/2017');
                res.body.should.have.property('valor').eql('50.23');
                res.body.should.have.property('codigoBarras').eql('07796706300000050231000111002820170007195150');
                res.body.should.have.property('linhaValida').eql('true');
                done();
            })
        })

        it('2ª Linha Digitável Válida', (done) =>{
            let boleto = {
                line: "34191750090115567204900148270002700000000000000"
            }

            chai.request('http://localhost:3333').post('/boleto')
            .send(boleto)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('dataVencimento').eql('07/10/1997');
                res.body.should.to.not.have.property('valor');
                res.body.should.have.property('codigoBarras').eql('34197000000000000001750001155672040014827000');
                res.body.should.have.property('linhaValida').eql('true');
                done();
            })
        })
    });
});