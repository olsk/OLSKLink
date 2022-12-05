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

	OLSKLinkValid (inputData) {
		if (typeof inputData !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		try {
			if (new URL('', inputData).hostname) {
				return true;
			}
		} catch (err) {
			return false;
		}
	},

	OLSKEmailValid (inputData) {
		if (typeof inputData !== 'string') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (!inputData.match('@')) {
			return '';
		}

		if (!inputData.split('@').shift().trim()) {
			return '';
		}

		if (!inputData.split('@').pop().match(/\./)) {
			return '';
		}

		if (inputData.split('@').pop().split('.').pop().trim().length < 2) {
			return '';
		}

		if (!inputData.split('@').pop().split('.').shift().trim()) {
			return '';
		}

		if (inputData.trim().match(/\s/)) {
			return '';
		}

		return inputData.trim();
	},

};

Object.assign(exports, mod);
