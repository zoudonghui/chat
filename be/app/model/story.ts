import { StoryType } from '../common/helper';
export default class Story {
  id: number;
  type: StoryType;
  context: string;
  constructor(type: StoryType, context: string) {
    this.type = type;
    this.context = context;
    this.id = Date.now();
  }
}
