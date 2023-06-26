import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';



describe('Cities - Create', () => {

    it('Should create a new city', async () => {
        const city = await testServer.post('/cities')
            .send({ name: 'Porto Alegre' });
        expect(city.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof city.body).toEqual('number');
    });

    it('Should not create a new city with invalid name', async () => {
        const city = await testServer.post('/cities')
            .send({ name: 'Po' });
        expect(city.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(city.body).toHaveProperty('errors.body.name');
    });
});