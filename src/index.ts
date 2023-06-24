import { server } from "./server/server";

server.listen(3333, () => {
    console.log('Server is listening on port 3333')
});