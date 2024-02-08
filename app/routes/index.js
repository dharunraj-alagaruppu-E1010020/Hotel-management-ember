import Ember from 'ember';

export default Ember.Route.extend({
    model(){ // hook
        return this.store.findAll('user');
    }
});
