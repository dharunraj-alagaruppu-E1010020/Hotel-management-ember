import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        updateRestaurant(e){
            e.preventDefault();
            console.log(this.model);
            this.model.save()
            .then(() =>{
              this.transitionToRoute('restaurant');
            console.log('finish');
            })
        },
    }
});
