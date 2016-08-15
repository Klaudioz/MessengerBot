'use strict';

var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAPCnjgJAvkBACZBidHZBZACz35igIGqULElTntgiAgVzIxVxAX7Y38Eb1N2FD2bKGZBT8OlL6a6F0qEJsWhYdWeZCdsbaZCTd13HT8QEwNPRa3owTNuAeqLG5HZAAzkOC1jiGhR90Nlb8mk3cylI0FsuZBf6lWWzMB5ZA3cXXVzgCQZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

var FB_APP_SECRET = process.env.FB_APP_SECRET || 'bfa6cb1b38ce8125990352fe18001560'

module.exports = {
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
  FB_APP_SECRET: FB_APP_SECRET
}