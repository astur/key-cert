process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const pem = require('pem');
const promisify = require('util').promisify;
const createCertificate = promisify(pem.createCertificate);

module.exports = async () => {
    const {serviceKey: key, certificate: cert} = await createCertificate({days: 1, selfSigned: true});
    return {key, cert};
};
