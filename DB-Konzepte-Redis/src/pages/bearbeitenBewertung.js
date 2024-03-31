// In /pages/api/bearbeitenBewertung.js

import { bearbeitenBewertung } from '../app/actions/bearbeiten'

export default async (req, res) => {
  if (req.method === 'PUT') {
    const { id } = req.query;
    const formData = req.body;
    const result = await bearbeitenBewertung(id, formData);

    if (result?.error) {
      res.status(400).json({ error: result.error });
    } else {
      res.status(200).json({ message: 'Bewertung updated successfully' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}