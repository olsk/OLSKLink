const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

describe('OLSKLinkRelativeURL', function test_OLSKLinkRelativeURL() {

	it('throws if param1 not string', function () {
		throws(function () {
			mod.OLSKLinkRelativeURL(null, Math.random().toString());
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if param2 not string', function () {
		throws(function () {
			mod.OLSKLinkRelativeURL(Math.random().toString(), null);
		}, /OLSKErrorInputNotValid/);
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

describe('OLSKLinkCompareURL', function test_OLSKLinkCompareURL() {

	it('throws if not string', function () {
		throws(function () {
			mod.OLSKLinkCompareURL(null);
		}, /OLSKErrorInputNotValid/);
	});

	it('returns input', function () {
		const item = Math.random().toString();
		deepEqual(mod.OLSKLinkCompareURL(item), item);
	});

	it('lowers case', function () {
		const item = Math.random().toString();
		deepEqual(mod.OLSKLinkCompareURL(item + 'ALFA'), item + 'alfa');
	});

	it('replaces protocol', function () {
		const item = Math.random().toString();
		deepEqual(mod.OLSKLinkCompareURL(uRandomElement('http', 'https') + item), 'http' + item);
	});

	it('replaces www.', function () {
		const item = Math.random().toString();
		deepEqual(mod.OLSKLinkCompareURL('www.' + item), item);
	});

	it('replaces trailing slash', function () {
		const item = Math.random().toString();
		deepEqual(mod.OLSKLinkCompareURL(item + '/'), item);
	});

});

describe('OLSKLinkValid', function test_OLSKLinkValid() {

	it('throws if not string', function () {
		throws(function () {
			mod.OLSKLinkValid(null);
		}, /OLSKErrorInputNotValid/);
	});

	it('returns false if no protocol', function () {
		deepEqual(mod.OLSKLinkValid('example.com'), false);
	});

	it('returns false if no host', function () {
		deepEqual(mod.OLSKLinkValid('https://'), false);
	});

	it('returns true', function () {
		deepEqual(mod.OLSKLinkValid('http' + uRandomElement('s', '') + '://example.com'), true);
	});

});
