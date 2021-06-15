const mod = {

	OLSKLinkRelativeURL (url, path) {
		if (typeof url !== 'string') {
			throw new Error('EASErrorInputNotValid');
		}

		if (typeof path !== 'string') {
			throw new Error('EASErrorInputNotValid');
		}

		return (new URL(path, url)).href;
	},

};

Object.assign(exports, mod);
