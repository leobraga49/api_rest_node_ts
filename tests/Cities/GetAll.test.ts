import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Cities - GetAll', () => {
    it('Should return all cities', async () => {
        const city = await testServer.post('/cities').send({
            name: 'São Paulo',
        });
        expect(city.statusCode).toEqual(StatusCodes.CREATED);

        const cities = await testServer.get('/cities').send();

        expect(Number(cities.headers['x-total-count'])).toBeGreaterThan(0);
        expect(cities.statusCode).toEqual(StatusCodes.OK);
        expect(cities.body.length).toBeGreaterThan(0);
    });
});