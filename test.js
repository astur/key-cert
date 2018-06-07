const test = require('ava');
const m = require('.');
const mockser = require('mockser');
const got = require('got');

test('key-cert', async t => {
    const server = mockser(await m());
    server.on('/', (req, res) => {
        res.end('ok');
    });
    await server.listen(1704);
    await got('https://localhost:1704').then(() => t.pass(), e => t.fail(e));
    await server.close();
});
