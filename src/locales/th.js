import { localKeyCheck } from './localExport';

export function returnLanguage(tkey, variable = {}) {

	const tkeys = tkey.split(".");

	const en = {
		"menu": {
			"app_name": "TestHero",
			"fine_course": "Dashboard (TH)",
			"dashboard": "Dashboard (TH)",
			"training": "Training (TH)",
			"login": "Login (TH)"
		}
	};

	return localKeyCheck(tkeys, en);
}