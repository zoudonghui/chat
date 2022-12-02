// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportStory from '../../../app/model/story';

declare module 'egg' {
  interface IModel {
    Story: ReturnType<typeof ExportStory>;
  }
}
