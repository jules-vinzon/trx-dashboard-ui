import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const secret = process.env.SECRETKEY;

export default async function login(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { username, password } = req.body;

  const user = {
    id: 1,
    username: 'admin',
    passwordHash: await bcrypt.hash('password123', 10)
  };

  if (username !== user.username || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, secret, {
    expiresIn: '15m'
  });

  return res.status(200).json({ token });
}
