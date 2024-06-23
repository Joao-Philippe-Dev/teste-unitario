const app = require('../../index');
const request = require('supertest');
 
describe('Teste de API para dividir', () => {
 
    test('POST /api/dividir (ISSO DEVE DIVIDIR OS DOIS NUMEROS)', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 20, num2: 2 });
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ result: 10})
    })
})