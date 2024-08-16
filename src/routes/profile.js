import { Router } from 'express';

const router = Router();

router.get('/myprofile', (req, res) => {
  const name = 'Van Ariel';
  const gender = 'male';
  const email = 'vanariel@mail.com';
  res.status(200).send({ name, gender, email });
});

export default router;
