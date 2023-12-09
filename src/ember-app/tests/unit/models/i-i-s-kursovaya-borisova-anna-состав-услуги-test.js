import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-borisova-anna-состав-услуги', 'Unit | Model | i-i-s-kursovaya-borisova-anna-состав-услуги', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-borisova-anna-визит',
    'model:i-i-s-kursovaya-borisova-anna-должности',
    'model:i-i-s-kursovaya-borisova-anna-запись-визита',
    'model:i-i-s-kursovaya-borisova-anna-клиент',
    'model:i-i-s-kursovaya-borisova-anna-состав-услуги',
    'model:i-i-s-kursovaya-borisova-anna-сотрудник',
    'model:i-i-s-kursovaya-borisova-anna-товар',
    'model:i-i-s-kursovaya-borisova-anna-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
