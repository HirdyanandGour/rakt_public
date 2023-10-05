import { sql } from '@vercel/postgres';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { raid, name, mname, fname, mobile } = req.body;
    // Add your logic to store data or do any other API tasks
    // This example will just echo back the received data
		try {
			const {arr} = await sql`INSERT INTO cards (_raid, _name, _mname, _fname, _mobile ) VALUES (${raid}, ${name}, ${mname}, ${fname}, ${mobile});`;
      res.status(200).send({ status: 'Success' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ status: 'Failed', error: err.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
