const APIUtil = {
    followUser: id => {
      return $.ajax({
        url: `/users/${id}/follow`,
        dataType: 'json',
        method: 'post'
      });
    },
  
    unfollowUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            dataType: 'json',
            method: 'delete'
          });
    }
  };
  
  module.exports = APIUtil;