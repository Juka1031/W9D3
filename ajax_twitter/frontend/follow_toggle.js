const APIUtil = require('./api_util');

class FollowToggle {
    constructor(el) {
        this.el = $(el);
        this.userId = this.el.data('user-id');
        this.followState = this.el.data('initial-follow-state');
        this.render();
        this.el.on('click', this.handleClick.bind(this));
    };
    render() {
        if (this.followState === "Following") {
            this.el.html('Unfollow');
        } else if (this.followState === "Not following") {
            this.el.html('Follow');
        }
    };    
    handleClick(e) {
        e.preventDefault();
        let that = this;
        if (this.followState === "Following") {
            APIUtil.unfollowUser(this.userId)
                .then(function () {
                    that.followState = "Not following";
                    that.render();
                });
        } else if (this.followState === "Not following") {
            APIUtil.followUser(this.userId)
                .then(function () {
                    that.followState = "Following";
                    that.render();
                });
        }
    };
}
// if (this.followState === "Following") {
//     APIUtil.unfollowUser(this.userId)
//         .then(function () {
//             that.followState = "Not following";
//             that.render();
//         });
// } else if (this.followState === "Not following") {
//     APIUtil.followUser(this.userId)
//         .then(function () {
//             that.followState = "Following";
//             that.render();
//         });
// }

module.exports = FollowToggle;