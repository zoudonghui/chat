import { Service } from 'egg';
import { getStoryType, createStoryModel, StoryType } from '../common/helper';

export default class Story extends Service {
  public async create(msg: string) {
    const storyType = getStoryType(msg);
    if (storyType === StoryType.unknown) {
      throw new Error('params error');
    }
    const story = createStoryModel(storyType);
    // 验证有效
    return {
      errorCode: 0,
      data: story,
    };
  }
}
