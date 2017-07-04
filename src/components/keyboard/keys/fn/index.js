export function fnKey (is) {
    switch (is.key) {
		case 'caps': return FnCaps;
		case 'backspace': return FnBackspace;
		case 'alt': return FnAlt;
		case 'space': return FnSpace;
		case 'enter': return FnEnter;
	}
}

export default () => {
	customElements.define('fn-caps', FnCaps);
	customElements.define('fn-backspace', FnBackspace);
	customElements.define('fn-alt', FnAlt);
	customElements.define('fn-space', FnSpace);
	customElements.define('fn-enter', FnEnter);
}

class FnKey extends HTMLElement {
    get keyboard() {
    	return document.getElementById('keyboard');
    }
	constructor(fn) {
		super();
    }
    connectedCallback() {
		// this.innerHTML = this.face;
		this.classList.add('key', 'key-fn');
    }
}

class FnCaps extends FnKey {
	set caps(val) {
		this.innerHTML = (val === true)
			? '<i class="fa fa-angle-up fa-lg caps-on" style="font-weight:900;" aria-hidden="true"></i>'
			: val === 'lock'
				? '<i class="fa fa-angle-double-up fa-lg caps-lock" style="font-weight:900;" aria-hidden="true"></i>'
				: '<i class="fa fa-angle-up fa-lg" style="font-weight:900;" aria-hidden="true"></i>';
	}
	constructor(){
		super();
		this.id = 'key-caps';
	}
	connectedCallback() {
		super.connectedCallback();
		this.classList.add('key-caps');
		this.keyboard.caps = false;
		this.addEventListener('click', () => {
			this.keyboard.caps === 'false'
				? this.keyboard.caps = true
				: this.keyboard.caps === 'true'
					? this.keyboard.caps = 'lock'
					: this.keyboard.caps = false;
		});
	}
}

class FnBackspace extends FnKey {
	constructor(){
		super();
		this.id = 'key-backspace';
	}
	connectedCallback() {
		super.connectedCallback();
		this.innerHTML = '<i class="fa fa-long-arrow-left fa-lg" aria-hidden="true"></i>';
	}
}

class FnAlt extends FnKey {
	constructor(){
		super();
		this.id = 'key-alt';
	}
	connectedCallback() {
		super.connectedCallback();
		this.innerHTML = '<i style="font-weight:900;">!@#</i>';
	}
}

class FnSpace extends FnKey {
	constructor(){
		super();
		this.id = 'key-space';
	}
	connectedCallback() {
		super.connectedCallback();
		this.innerHTML = '<div style="font-weight:900">__</div>';
	}
}

class FnEnter extends FnKey {
	constructor(){
		super();
		this.id = 'key-enter';
	}
	connectedCallback() {
		super.connectedCallback();
		this.innerHTML = '<i class="fa fa-level-down fa-rotate-90 fa-lg" aria-hidden="true"></i>';
	}
}