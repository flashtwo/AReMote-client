export class QwertyKey extends HTMLElement {
    get keyboard () {
    	return document.getElementById('keyboard');
    }
	set caps(on) {
		on
			? this.setKey('caps')
			: this.setKey();
	}
	set alt(on) {
		on
			? this.setKey('alt')
			: this.setKey();
	}
	set disabled(val) {
		val
	    	? this.classList.add('disabled')
	    	: this.classList.remove('disabled');
	}
	constructor(cfg) {
		super();
	    this.config = cfg;
    }
    connectedCallback() {
    	this.setKey();
		this.classList.add('key', 'key-qwerty');
	    this.addEventListener('click', () => {
	    	let kb = this.keyboard,
	    		caps = kb.caps === 'true',
	    		alt = kb.alt === 'true';
	    	// kb.keyClick(this.call);
	    	// normalize keys if alternate setting is active and not locked
    		if (caps || alt) kb.normalizeKeys();
	    });
    }
	setKey(which) {
		let c;
		which // which key setting to use
			? (c = this.config[which])
			: (c = this.config); // default
		c
			? ( this.innerText = this.face = c.face,
				this.call = c.call,
				this.disabled = false
			// disable if chosen setting is null in layout file
			) : this.disabled = true;
	}
}

export default () =>
	customElements.define('qwerty-key', QwertyKey);