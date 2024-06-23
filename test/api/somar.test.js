const app = require('../../index');
const request = require('supertest');
 
describe('Teste de API para somar', () => {
 
    test('POST /api/somar (ISSO DEVE SOMAR OS DOIS NUMEROS))', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num1: 10, num2: 10 });
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ result: 20})
    })
})