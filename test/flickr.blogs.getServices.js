var flickr = require('..')();
var assert = require('assert');

describe('flickr.blogs.getServices', function () {

	it('returns a Request instance', function () {
		var req = flickr.blogs.getServices({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
