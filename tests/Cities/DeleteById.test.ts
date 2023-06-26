import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Cities - DeleteById', () => {

    it('Should delete a city', async () => {
        const city = await testServer.delete('/cities/1').send();
        expect(city.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });
    it('Should not delete a city with invalid id', async () => {
        const city = await testServer.delete('/cities/99999').send();

        expect(city.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(city.body).toHaveProperty('errors.default');
    });
});