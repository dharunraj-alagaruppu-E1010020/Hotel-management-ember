import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  user_id: DS.attr(),
  available_start_time: DS.attr(),
  available_end_time: DS.attr()
});
