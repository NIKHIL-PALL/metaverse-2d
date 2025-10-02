const axios = require('axios');
const BACKEND_URL = 'http://localhost:3000';

describe('Sample Test Suite', () => {
  test('Sample Test Case', () => {
    expect(true).toBe(true);
  });
});

describe('Authentication', () => {
    const username = 'testUser' +Math.random().toString(36).substring(7);
    const password = 'testPass' +Math.random().toString(36).substring(7);
  
    test('User Registration', async () => {
      const response = await axios.post(`${BACKEND_URL}/api/v1/register`, {
        username,
        password,
      });
      expect(response.status).toBe(201);
      expect(response.data.message).toBe('User registered successfully');
    });

    test('User Login', async () => {
      const response = await axios.post(`${BACKEND_URL}/api/v1/login`, {
        username,
        password,
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('token');
    });

    test('Login with incorrect credentials', async () => {
      try {
        await axios.post(`${BACKEND_URL}/api/v1/login`, {
          username,
          password: 'wrongPassword',
        });
      } catch (error) {
        expect(error.response.status).toBe(401);
        expect(error.response.data.message).toBe('Invalid credentials');
      }
    });
})