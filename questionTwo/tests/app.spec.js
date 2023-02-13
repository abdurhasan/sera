
const supertest = require('supertest');
const app = require('../app');
const db = require('../models');

const request = supertest(app);

describe('Test /customers routes', () => {
 
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  // Test suite for testing the index route
  describe('index route', () => {
    test('should respond with 200 for GET request', async () => {
      const response = await request.get('/');
      expect(response.status).toBe(200);
    });

    test('should respond with 404 for requesting bogus routes', async () => {
      const response = await request.get('/foobar');
      expect(response.status).toBe(404);
    });
  });


  describe('/customers/upsert route', () => {
    test('should return status success  true', async () => {

      const response = await request
        .post('/customers/upsert')
        .send({
          name: "hasan",
          phone: "08123123123",
          email: "hasan@mail.com"
        })

      expect(response.status).toBe(200);      
      expect(response.body.success).toBe(true);

    });


  });


  // Clear users table and close db connection
  afterAll(async () => {
    await db.User.truncate();
    await db.sequelize.close();
  });
});
