import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | intersection-observer', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:intersection-observer');
    assert.ok(route);
  });
});
