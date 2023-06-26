import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Cities - UpdateById', () => {
    it('Should update a city', async () => {
        const city = await testServer.post('/cities').send({
            name: 'São Paulo'});
        expect(city.statusCode).toEqual(StatusCodes.CREATED);

        const cities = await testServer.put(`/cities/${city.body}`).send({
            name: 'São Paulo'});
        expect(cities.statusCode).toEqual(StatusCodes.NO_CONTENT);

    });

    it('Should return 404 if city not found', async () => {
        const city = await testServer.put('/cities/99999').send({
            name: 'São Paulo'});

        expect(city.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(city.body).toHaveProperty('errors.default');
    });        
    
});