const mod = {

	OLSKLinkRelativeURL (url, path) {
		if (typeof url !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof path !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		return (new URL(path, url)).href;
	},

	OLSKLinkCompareURL (inputData) {
		if (typeof inputData !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		return inputData.toLowerCase().replace(/^https/, 'http').replace('www.', '').replace(/\/$/, '');
	},

};

Object.assign(exports, mod);
