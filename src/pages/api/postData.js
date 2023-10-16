import { sql } from '@vercel/postgres';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    var {raid, mobile, name, mname, fname } = req.body;
		name = name.toLowerCase()
		mname = mname.toLowerCase()
		fname= fname.toLowerCase();
		const date = new Date();
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const created_on = day +'-'+ month+'-'+year;
		// if( !(Number.isInteger(raid) && Number.isInteger(mobile) )){
		// 	res.status(500).send({ status: 'failed', message: "wrong mobile or card no."});
		// }
		const client = await sql.connect();
		try {
			const arr = await client.sql`INSERT INTO cards (_raid, _name, _mname, _fname, _mobile, created_on ) VALUES (${raid}, ${name}, ${mname}, ${fname}, ${mobile}, ${created_on} );`;
      res.status(200).json({ status: 'success', message: "data inserted.", data: arr?.rows });
    } catch (err) {
      res.status(500).json({ status: 'failed', message: "something went wrong!!", error: err.message });
    } finally {
			await client.end();
		}
  } else {
    res.status(405).end(); //
  }
}
