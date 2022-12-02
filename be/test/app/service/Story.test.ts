
import assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/Story.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('should get data when create story', async () => {
    const result = await ctx.service.story.create('create story');
    assert(!!result.data);
  });
});
