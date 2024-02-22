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
  }
});
