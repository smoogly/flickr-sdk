var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.people.getLimits', function () {

	it('returns a Request instance', function () {
		var req = flickr.people.getLimits({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
