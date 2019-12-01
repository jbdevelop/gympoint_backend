import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
// import Student from './app/models/Student';

const routes = new Router();

routes.post('/students', StudentController.store);
routes.post('/sessions', SessionController.store);

/*
routes.get('/', async (req, res) => {
   const student = await Student.create({
      name: 'Alberto Roberto',
      email: 'albertor@gmail.com',
      age: 20,
      weight: 82,
      height: 1.88,
   });

   return res.json(student);
});
*/

export default routes;
