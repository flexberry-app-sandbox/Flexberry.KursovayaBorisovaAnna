import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-borisova-anna-запись-визита', 'Unit | Serializer | i-i-s-kursovaya-borisova-anna-запись-визита', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-borisova-anna-запись-визита',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-borisova-anna-единицы',
    'transform:i-i-s-kursovaya-borisova-anna-пол',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
