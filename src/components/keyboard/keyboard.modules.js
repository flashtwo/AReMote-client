import { keys } from './keys';

export function keyMaker (layout) {
	const container = document.createElement('div');
	container.classList.add('key-container');
	// iterate over each row
	layout.forEach((row, index, arr) => {
		let r = document.createElement('div');
		r.classList.add(`key-row-${++index}`);
		// populate each row with its keys
		for (let key of row) {
			let thisKey = key.is === 'qwerty'
				? new keys.QwertyKey(key)
				: new keys.FnKey(key);
			if (thisKey) r.appendChild(thisKey);
		}
		// push current row into view
		container.appendChild(r);
	});
	return container;
}