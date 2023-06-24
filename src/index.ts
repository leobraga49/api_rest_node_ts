import { server } from './server/server';

server.listen(process.env.PORT || 3333, () => {
    console.log('Server is listening on port 3333');
});