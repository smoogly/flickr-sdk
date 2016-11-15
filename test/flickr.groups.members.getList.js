var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.groups.members.getList', function () {

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.members.getList({});
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.members.getList({ group_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
