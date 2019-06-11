import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | h-scroll-window', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:h-scroll-window');
    assert.ok(route);
  });
});
