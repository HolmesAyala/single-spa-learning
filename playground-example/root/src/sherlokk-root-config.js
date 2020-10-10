import { registerApplication, start } from 'single-spa';

registerApplication({
	name: '@sherlokk/to-do-app',
	app: () => System.import('@sherlokk/to-do-app'),
	activeWhen: '/',
});

start();
