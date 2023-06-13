import { Application } from 'express';
import status from './status';
import todos from './todos';
import ErrorHandler from '../middlewares/ErrorHandler';

export default (app: Application): void => {
  app.use('/api/status', status);
  app.use('/api/todos', todos);
  app.use(ErrorHandler);
};
