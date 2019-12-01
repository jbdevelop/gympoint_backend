import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
   async store(req, res) {
      const { email, password } = req.body;

      console.log(req.body);

      const user = await User.findOne({ where: { email } });

      // Usuário não existe, logo não consegue logar
      if (!user) {
         return res.status(401).json({ error: 'User not found' });
      }

      // Senha do Adm não confere
      if (!(await user.checkPassword(password))) {
         return res.status(401).json({ error: 'Password does not match' });
      }

      const { id, name } = user;

      return res.json({
         user: {
            id,
            name,
            email,
         },
         token: jwt.sign({ id }, '7cfa07ea4e4e24586e1969c02cefb007', {
            expiresIn: '7d',
         }),
      });
   }
}

export default new SessionController();
