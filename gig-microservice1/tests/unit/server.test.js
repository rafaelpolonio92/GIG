const request = require('supertest');
const server = require('../../src/server');

afterAll(() => {
  server.close();
  console.log('Server closed');
});

describe('Testing server connection', () => {
  it('should access home page', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('<title>Real Time Message</title>\n');
  });
});
