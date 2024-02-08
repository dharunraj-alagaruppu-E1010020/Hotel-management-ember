import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return{
            roles: this.store.findAll('role'),
            phone_number: '',
            password:'',
            role_id: ''
        }
    }
});
