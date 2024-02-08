import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  phone_number: DS.attr(),
  password: DS.attr(),
  role_id: DS.attr()
});