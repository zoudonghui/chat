import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('/api/v1/send_msg', controller.home.createStory);
};
