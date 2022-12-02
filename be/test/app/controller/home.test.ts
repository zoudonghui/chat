import assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('should POST /api/v1/send_msg', async () => {
    const result = await app.httpRequest().post('/api/v1/send_msg').send({ msg: 'create story' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    assert(JSON.parse(result.text).errorCode === 0);
  });
});
