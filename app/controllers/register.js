import Ember from 'ember';

export default Ember.Controller.extend({

  attributeBindings: ['onchange'],

    actions: {
      create_user(e) {
        e.preventDefault();
        let newUser = this.store.createRecord('user', {
          name: this.model.name,
          phone_number: this.model.phone_number,
          password: this.model.password,
          role_id: this.model.selectedRoleId
        });
      
        newUser.save().then(() => {
          this.transitionToRoute('login');
        });
      },
    }
  });