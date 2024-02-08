import Ember from 'ember';
import restaurant from '../../routes/restaurant/restaurant';

export default Ember.Controller.extend({
  actions: {
    add_restaurant(e) {
      e.preventDefault();
      const user_obj_string = sessionStorage.getItem("user_obj");
      const user_obj = JSON.parse(user_obj_string);

      const user_id = user_obj.id;

      let restaurant = this.store.createRecord('restaurant', {
        name: this.get('name'),
        description: this.get('description'), 
        available_start_time: this.get('start_time'),
        available_end_time: this.get('end_time'),
        user_id: user_id,
      });

      restaurant.save().then(() => {
        console.log('Restaurant saved successfully');
        location.reload();
      }).catch((error) => {
        console.error('Error saving restaurant:', error);
      });
    },

    deleteRestaurant(restaurant){
      console.log(restaurant);
      restaurant.destroyRecord().then(() => {
        this.transitionToRoute('restaurant');
      })


    },


  }
});