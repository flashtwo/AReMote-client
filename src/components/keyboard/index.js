import util from '../util';
import layout from './keyboard.layout';
import { define } from './keys';
import { keyMaker, createKeyRef } from './keyboard.modules';
// Define the element
class Keyboard extends HTMLElement {
	get mode() {
		return this.getAttribute('mode');
	}
	set mode(m) {
		this.setAttribute('mode', m)
	}
	get caps() {
		return this.getAttribute('caps');
	}
	set caps(val) {
		let capsKey = document.getElementById('key-caps');
		this.setAttribute('caps', val);
		this.qwertyKeys.forEach((k) =>
			k.caps = !!val);
		capsKey.caps = val;
	}
	get alt() {
		return this.getAttribute('alt');
	}
	set alt(val) {
		let altKey = document.getElementById('key-alt');
		this.setAttribute('alt', val)
		this.qwertyKeys.forEach((k) =>
			k.alt = !!val);
		altKey.alt = val;
	}
	get qwertyKeys() {
		let collection = this.keys.getElementsByTagName('qwerty-key');
		let arr = Array.prototype.slice.call(collection);
		return arr;
	}
    constructor() {
        super();
        this.id = 'keyboard';
        this.mode = 'kodi';
		this.keys = keyMaker(layout);
		this.appendChild(this.keys);
    }
    normalizeKeys() {
    	this.caps = false;
		// this.alt = false;
    }
	callToKodi(call) {
		let isDone = call === 'enter',
        	str = this.kodiStringMaker(call, isDone);
		return util.kodiSendText(str, done, callback);
	}
	kodiStringMaker(call, done) {
		let str = this.str,
			backspace = call === 'backspace';
		if (!done) str && backspace
			? str.slice(0, -1)
			: str
				? str += call.kodi
				: str  = call.kodi;
		return str;
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
export default () => {
	customElements.define('qwerty-keyboard', Keyboard);
	require('./keys').default();
}