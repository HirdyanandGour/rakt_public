import { sql } from '@vercel/postgres';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { raid, name, mname, fname, mobile } = req.body;
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const created_on = day +'-'+ month+'-'+year;
    console.log(created_on)
		try {
			const {arr} = await sql`INSERT INTO cards (_raid, _name, _mname, _fname, _mobile, created_on ) VALUES (${raid}, ${name}, ${mname}, ${fname}, ${mobile}, ${created_on} );`;
      res.status(200).send({ status: 'Success' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ status: 'Failed', error: err.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
