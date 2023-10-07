import { sql } from '@vercel/postgres';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { query } = req.body;
    try {
		console.log(arr)
		const arr = await sql`SELECT _raid, _name, _mname, _fname, _mobile, created_on  FROM cards WHERE _name LIKE {%query%} OR  _mname LIKE {%query%} OR _fname  LIKE {%query%} OR _mobile  LIKE {%query%} LIMIT 20`;
      res.status(200).send({ status: 'success', data: arr });
    } catch (err) {
      res.status(500).send({ status: 'failed', error: err.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
