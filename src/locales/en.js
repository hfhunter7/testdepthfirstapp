import { localKeyCheck } from './localExport';

export function returnLanguage(tkey, variable = {}) {

	const tkeys = tkey.split(".");

	const en = {
		"menu": {
			"app_name": "TestHero",
			"fine_course": "Dashboard",
			"dashboard": "Dashboard",
			"training": "Training",
			"login": "Login"
		}
	};

	return localKeyCheck(tkeys, en);
}