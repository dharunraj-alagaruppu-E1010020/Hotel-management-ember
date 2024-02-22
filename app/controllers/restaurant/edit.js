import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        updateRestaurant(e){
            e.preventDefault();
            this.model.save()
            .then(() =>{
              this.transitionToRoute('restaurant');
            })
        },
    }
});
