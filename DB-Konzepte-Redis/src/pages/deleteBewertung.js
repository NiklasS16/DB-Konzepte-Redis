// In /pages/api/deleteBewertung.js

import { deleteBewertung } from '../app/actions/delete'

export default async (req, res) => {
  if (req.method === 'DELETE') {
    const { titel } = req.query;
    const result = await deleteBewertung(titel);

    if (result?.error) {
      res.status(400).json({ error: result.error });
    } else {
      res.status(200).json({ message: 'Bewertung deleted successfully' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}