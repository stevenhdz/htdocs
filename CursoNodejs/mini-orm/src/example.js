// src/example.js
const User = require('./models/User');

function logSection(title) {
  console.log('\n==============================');
  console.log(title);
  console.log('==============================');
}

async function main() {
  // Limpia y sincroniza tabla
  User.drop();
  User.sync();

  logSection('insertOne');
  const u1 = User.insertOne({
    name: 'Steven',
    email: 'steven@example.com',
    age: 25,
    created_at: new Date().toISOString()
  });
  console.log('Insertado (insertOne):', u1);

  logSection('insertMany');
  const many = User.insertMany([
    {
      name: 'Laura',
      email: 'laura@example.com',
      age: 30,
      created_at: new Date().toISOString()
    },
    {
      name: 'Carlos',
      email: 'carlos@example.com',
      age: 28,
      created_at: new Date().toISOString()
    }
  ]);
  console.log('Insertados (insertMany):', many);

  logSection('bulkInsert');
  const bulk = User.bulkInsert(
    Array.from({ length: 5 }).map((_, i) => ({
      name: `BulkUser_${i + 1}`,
      email: `bulk${i + 1}@example.com`,
      age: 20 + i,
      created_at: new Date().toISOString()
    }))
  );
  console.log('Insertados (bulkInsert):', bulk);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
