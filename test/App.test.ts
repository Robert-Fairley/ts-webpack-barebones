const jsdom = require('jsdom');
const Home  = require('../src/App');

const { JSDOM } = jsdom;

describe('Home Page', function() {
    const dom = new JSDOM(`<!DOCTYPE html><main id="root"></main>`);
    const APP_ROOT = dom.window.document.querySelector('#root');

    it('#render()', function() {
        it('renders without crashing', function(done) {
            try {
                const H = new Home();
                APP_ROOT.appendChild(H.render());
                done();
            } catch(err) {
                done(err);
            }
        });
    });

    it('#increaseCount()', function() {
        it('should increase the state count by 1', function(done) {
            const H = new Home();
            let countState = H.state.count;
           
            countState.should.equal(0);
            H.increaseCount();
            countState.should.equal(1);
        });
    });

    it('#decreaseCount()', function() {
        it('should decrease the state count by 1', function(done) {
            const H = new Home();
            let countState = H.state.count = 1;

            countState.should.equal(1);
            H.decreaseCount();
            countState.should.equal(0);
        });
    });
});
