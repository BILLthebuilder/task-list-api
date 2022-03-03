const chai = require('chai');
const asserttype = require('chai-asserttype');
const chaiHttp = require('chai-http');
const should = require('chai').should();
const server = require('../bin/www');

chai.use(chaiHttp);
chai.use(asserttype);

describe('APPLICATION REQUESTS', () => {
    it('Invalid Urls should return 404', (done) => {
        chai.request(server)
            .get('/')
            .end((err, result) => {
               result.should.have.status(404);
                done(err);
            });
    });

    // it('Incomplete Urls should return 404', (done) => {
    //     chai.request(server)
    //         .get('/api/v1')
    //         .end((err, result) => {
    //             result.should.have.status(404);
    //             done(err);
    //         });
    // });
});
