import Ember from 'ember';

export default Ember.Component.extend({

    selectedRoleId: null,

    actions: {
        handleRoleSelection(e) {
            console.log(e.target.value);
            this.set('selectedRoleId', e.target.value);
          }
    }
});