var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.getPlaceTypes', function () {

	it('returns a Request instance', function () {
		var req = flickr.places.getPlaceTypes({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
