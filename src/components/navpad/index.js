import util from '../util';
// Define the element
class Navpad extends HTMLElement {
	get mode() {
		return this.getAttribute('mode');
	}
	set mode(m) {
		this.setAttribute('mode', m)
	}
    constructor() {
        super();
        this.id = 'navpad';
        this.innerHTML = require('./navpad.pug');
    }
    connectedCallback() {
    }
	callToKodi(call) {
	}
    keyClick(call) {
    	switch (this.mode) {
    		case 'kodi':
    			this.callToKodi(call);
    			break;
    		default:
		        // util.callLirc(call, cb);
    			break;
    	}
    }
}
// Finish defining, and export the new element
export default () =>
	customElements.define('nav-pad', Navpad);