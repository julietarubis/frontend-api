const expect = require('chai').expect;
const request = require('supertest');
const app = require('./server');

describe('POST /calculate', () => {
    it('should calculate sum, average, and standard deviation', (done) => {
        request(app)
            .post('/calculate')
            .send({ data: '1,2,3' })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property('sum');
                expect(body).to.contain.property('average');
                expect(body).to.contain.property('standardDeviation');
                done();
            })
            .catch((err) => done(err));
    });
});
