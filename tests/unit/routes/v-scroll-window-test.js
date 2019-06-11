import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | v-scroll-window', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:v-scroll-window');
    assert.ok(route);
  });
});
