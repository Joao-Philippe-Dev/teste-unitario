const app = require('../../index');
const request = require('supertest');
 
describe('Teste de API para subtrair', () => {
 
    test('POST /api/subtrair (ISSO DEVE SUBTRAIR OS DOIS NUMEROS))', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: 20, num2: 10 });
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ result: 10})
    })
})