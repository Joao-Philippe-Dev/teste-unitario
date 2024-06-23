const app = require('../../index');
const request = require('supertest');
 
describe('Teste de API para multiplicar', () => {
 
    test('POST /api/multiplicar (ISSO DEVE MULTIPLICAR OS DOIS NUMEROS)', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({ num1: 5, num2: 5 });
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ result: 25})
    })
})