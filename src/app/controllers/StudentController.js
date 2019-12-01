import Student from '../models/Student';

class StudentController {
   async store(req, res) {
      const studentExists = await Student.findOne({
         where: { email: req.body.email },
      });

      if (studentExists) {
         return res.status(400).json({ error: 'User already exists' });
      }

      const { id, name, email, age, weight, height } = await Student.create(
         req.body
      );

      return res.json({
         id,
         name,
         email,
         age,
         weight,
         height,
      });
   }
}

export default new StudentController();
