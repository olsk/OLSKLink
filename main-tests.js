const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

describe('OLSKLinkRelativeURL', function test_OLSKLinkRelativeURL() {

	it('throws if param1 not string', function () {
		throws(function () {
			mod.OLSKLinkRelativeURL(null, Math.random().toString());
		}, /EASErrorInputNotValid/);
	});

	it('throws if param2 not string', function () {
		throws(function () {
			mod.OLSKLinkRelativeURL(Math.random().toString(), null);
		}, /EASErrorInputNotValid/);
	});

	it('returns string', function () {
		const url = 'https://example.com';
		const path = Math.random().toString();
		deepEqual(mod.OLSKLinkRelativeURL(url, path), url + '/' + path);
	});

	it('returns param2 if complete', function () {
		const path = 'https://alfa.bravo/' + Math.random().toString();
		deepEqual(mod.OLSKLinkRelativeURL('https://example.com', path), path);
	});

	it('completes slash', function () {
		const url = 'https://example.com';
		const path = '/' + Math.random().toString();
		deepEqual(mod.OLSKLinkRelativeURL(url, path), url + path);
	});

});
