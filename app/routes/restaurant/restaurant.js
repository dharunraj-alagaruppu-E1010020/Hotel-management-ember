import Ember from 'ember';

export default Ember.Route.extend({

  model(){

    let user_obj = JSON.parse(sessionStorage.getItem('user_obj'));
    let user_id = user_obj.id

    return this.store.query('restaurant', {
      params: {
        id: user_id
      }
    })

    // const ans =  Ember.$.ajax({
    //     url: `http://localhost:3000/restaurant/${user_id}/list_of_restaurant`,
    //     type:'GET',
    //     contentType: 'application/json',
    //     sucess: (response) => {
    //         return response;
    //     }
    // })
    // console.log(ans);
    // return ans;

    // return this.store.findAll('restaurants');
  }
});
