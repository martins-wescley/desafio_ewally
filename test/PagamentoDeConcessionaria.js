let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

const urlBase = "http://localhost:3333";
const endPoint = "/boleto";

describe('Pagamento de Concessionária', () =>{
    describe('Validar o retorno de uma linha digitável válida', () =>{
        it('1ª Linha Digitável Válida', (done) => {
            let boleto = {
                line: "826500000003500101102019801111171212406651960584"
            }

            chai.request(urlBase).post(endPoint)
            .send(boleto)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('codigoBarras').eql('82650000000500101102018011111712140665196058');
                res.body.should.have.property('valor').eql('50.01');
                res.body.should.have.property('dataVencimento').eql('11/01/2018');
                res.body.should.have.property('linhaValida').eql(true);
                done();
            });
        });
    });

    describe('Validar o retorno de uma linha digitável válida', () =>{
        it('2ª Linha Digitável Válida', (done) => {
            let boleto = {
                line: "827200000004937704242018906190301208002722180052"
            }

            chai.request(urlBase).post(endPoint)
            .send(boleto)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('codigoBarras').eql('82720000000937704242019061903012000272218005');
                res.body.should.to.not.have.property('valor');
                res.body.should.have.property('dataVencimento').eql('19/06/2019');
                res.body.should.have.property('linhaValida').eql(true);
                done();
            });
        });
    });

    describe('Validar o retorno de uma linha digitável válida', () =>{
        it('3ª Linha Digitável Válida', (done) => {
            let boleto = {
                line: "848000000006199101622010803081581667671044397779"
            }

            chai.request(urlBase).post(endPoint)
            .send(boleto)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('codigoBarras').eql('84800000000199101622018030815816667104439777');
                res.body.should.have.property('valor').eql('19.91');
                res.body.should.have.property('dataVencimento').eql('08/03/2018');
                res.body.should.have.property('linhaValida').eql(true);
                done();
            });
        });
    });

    describe('Validar o retorno de uma linha digitável válida', () =>{
        it('4ª Linha Digitável Válida', (done) => {
            let boleto = {
                line: "899400000008600000010101955231622052718610138330"
            }

            chai.request(urlBase).post(endPoint)
            .send(boleto)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('codigoBarras').eql('89940000000600000010109552316220571861013833');
                res.body.should.to.not.have.property('valor');
                res.body.should.to.not.have.property('dataVencimento');
                res.body.should.have.property('linhaValida').eql(true);
                done();
            });
        });
    });
});