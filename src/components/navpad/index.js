import { kodiInput } from '../util';
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
        this.mode = 'kodi';
        this.innerHTML = require('./navpad.pug');
    }
    connectedCallback() {
        let buttons = this.querySelectorAll('[data-input]');
        buttons.forEach((btn) => {
            let method = btn.getAttribute('data-input');
            btn.addEventListener('click', () => this.sendInput(method));
        });
    }
    sendInput(method) {
    	switch (this.mode) {
    		case 'kodi':
    			kodiInput(method);
    			break;
    		default:
		        // util.callLirc(method);
    			break;
    	}
    }
}
// Finish defining, and export the new element
export default () =>
	customElements.define('nav-pad', Navpad);