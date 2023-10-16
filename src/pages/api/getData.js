import { sql } from '@vercel/postgres';
export default async function handler(req, res) {
  if (req.method === 'GET') {
    	const query = req.query;
		const qq = ``+query?.query?.toLowerCase()+`%` 
		const client = await sql.connect();
    	try {
			const arrr = await client.sql`SELECT _raid, _name, _mname, _fname, _mobile FROM cards WHERE _name LIKE ${qq} OR  _mname LIKE ${qq} OR _fname LIKE ${qq} OR _mobile LIKE ${qq}  AND _cstatus='1' LIMIT 20`;
			if( arrr?.rows?.length > 0 ) {
				console.log("arrr?.rows",arrr?.rows)
				res.status(200).json({ status: "success", data: arrr.rows, message: "data retrived."});
			} else{
				res.status(200).json({ status: "success", data: [], message: "data empty."});
			}
		} catch (err) {
			res.status(500).json({ status: 'failed', error: err.message });
		} finally {
			await client.end();
		}
  } else {
    res.status(405).end();
  }
}
