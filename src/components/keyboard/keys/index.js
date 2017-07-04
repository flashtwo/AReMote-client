import { QwertyKey } from './qwerty';
import { fnKey } from './fn';

export const keys = {
	QwertyKey: QwertyKey,
	FnKey: (is) => {
		let c = fnKey(is);
		return new c;
	}
};

export default () => {
	require('./qwerty').default();
	require('./fn').default();
}