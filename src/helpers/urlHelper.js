export const apiUrl = {
	// development: "http://localhost:6565/v1",
	// production: "http://localhost:6565/v1",
	development: "https://apitestherostaging.testhero.in.th/testdepthfirstapp-1.0.0/v1",
	production: "https://apitestherostaging.testhero.in.th/testdepthfirstapp-1.0.0/v1",
};

export const socketUrl = {
	// development: "http://localhost:4000/", //localhost: xxxx
	// development: "https://backend-socket.herokuapp.com/", //localhost: xxxx
	// production: "https://backend-socket.herokuapp.com/", //production server
};

export function extraUrl(params) {

	let extra_url = '?';

	for (let key in params) {
		if (params.hasOwnProperty(key)) {
			extra_url = extra_url + key + "=" + params[ key ] + "&";
		}
	}

	if (extra_url.length <= 1) {
		extra_url = "";
	} else {
		extra_url = extra_url.slice(0, -1);
	}

	return extra_url;

}
