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

	OLSKLinkCompareURL (inputData) {
		if (typeof inputData !== 'string') {
			throw new Error('EASErrorInputNotValid');
		}

		return inputData.toLowerCase().replace(/^https/, 'http').replace('www.', '').replace(/\/$/, '');
	},

};

Object.assign(exports, mod);
