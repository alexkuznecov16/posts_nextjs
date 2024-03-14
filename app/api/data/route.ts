import mysql from 'mysql2/promise';

export async function GET(req: any, res: any) {
  const db = await mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'sho0O-a+z1#Lpd(./y%f',
    database: 'posts'
  });

  try {
    const query = 'SELECT * FROM postsdata';
    const [data] = await db.execute(query);
    return new Response(JSON.stringify(data));
  } catch(error: any) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  } finally {
    db.end();
  }
}
