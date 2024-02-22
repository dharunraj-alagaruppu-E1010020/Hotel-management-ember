import Ember from 'ember';

export default Ember.Component.extend({
  user_name: Ember.computed(function() {
    let user_obj = JSON.parse(sessionStorage.getItem('user_obj'));
    console.log(user_obj.name);
    return user_obj.name;
  })
});
