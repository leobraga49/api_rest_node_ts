import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Cities - GetById', () => {
    it('Should return a city', async () => {
        const city = await testServer.post('/cities').send({
            name: 'São Paulo',
        });
        expect(city.statusCode).toEqual(StatusCodes.CREATED);

        const cities = await testServer.get(`/cities/${city.body}`).send();

        expect(cities.statusCode).toEqual(StatusCodes.OK);
        expect(cities.body).toHaveProperty('name');
    });

    it('Should not return a city when id is invalid', async () => {

        const city = await testServer.get('/cities/99999').send();
        expect(city.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(city.body).toHaveProperty('errors.default');
    });
    
});