/* eslint-disable @typescript-eslint/no-unused-vars */
import { texts, images } from '../data/story';
import Story from '../model/Story';
export enum StoryType {
  TEXT = 1,
  IMG = 2,
  unknown = 'unknown'
}

const STORY_TYPE = {
  'create story': StoryType.TEXT,
  'create portrait': StoryType.IMG,
};


function randomRange(min:number, max:number) :number {
  return Math.floor(Math.random() * (max - min)) + min;
}

const createStory = () => {
  const randomIndex = randomRange(0, texts.length);
  return texts[randomIndex];
};

const createImg = () => {
  const randomIndex = randomRange(0, images.length);
  return images[randomIndex];
};

export const getStoryType = (text : string) => {
  return STORY_TYPE[text] || StoryType.unknown;
};

export const createStoryModel : any = (type: StoryType) => {
  if (type === StoryType.TEXT) {
    const context = createStory();
    return new Story(type, context);
  } else if (type === StoryType.IMG) {
    const context = createImg();
    return new Story(type, context);
  }
  throw new Error('参数错误');
};
