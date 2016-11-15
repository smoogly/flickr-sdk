var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.auth.oauth.checkToken', function () {

	it('requires "oauth_token"', function () {

		assert.throws(function () {
			flickr.auth.oauth.checkToken({});
		}, function (err) {
			return err.message === 'Missing required argument "oauth_token"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.auth.oauth.checkToken({ oauth_token: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
