import { Application } from 'express';
import status from './status';
import todos from './todos';

export default (app: Application): void => {
  app.use('/api/status', status);
  app.use('/api/todos', todos);
};
