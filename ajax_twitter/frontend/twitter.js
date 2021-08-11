const FollowToggle = require('./follow_toggle');

$(function () {

    $('.follow-toggle').each(function (idx, el) {
        return new FollowToggle(el);
    });
});