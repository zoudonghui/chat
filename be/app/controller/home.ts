import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async createStory() {
    console.log('jjjjj');
    const { ctx } = this;
    const { msg } = ctx.request.body;
    ctx.body = await ctx.service.story.create(msg);
  }
}
