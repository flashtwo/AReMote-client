import { urls } from '../../config';

export function kodiSendText(str, done, cb) {
	return kodiPost('Input.SendText', {
		'text': str,
		'done': done || false
	}, cb);
}

export function kodiPost (method, params, cb) {
    const data = JSON.stringify({
		'jsonrpc': '2.0',
		'method' : method,
		'params' : params,
		'id'	 : 1
	});

	let xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener('readystatechange', () => {
		if (this.readyState === 4) {
	    	if (cb) cb(this.responseText);
		}
	});

	xhr.open('POST', urls.kodiApi);
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.send(data);
}