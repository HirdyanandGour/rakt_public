import { sql } from '@vercel/postgres';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { query } = req.body;
    try {
		const {arr} = await sql`SELECT _raid, _name, _mname, _fname, _mobile, created_on  FROM cards LIMIT 20`;
      res.status(200).send({ status: 'success', data: arr });
    } catch (err) {
      console.error(err);
      res.status(500).send({ status: 'failed', error: err.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
