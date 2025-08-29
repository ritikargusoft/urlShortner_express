
// import { readFile, writeFile } from "fs/promises";
// import path from "path";

// const DATA_FILE = path.join("data", "links.json");

// export const loadLinks = async () => {
//   try {
//     const data = await readFile(DATA_FILE, "utf-8");
//     return JSON.parse(data);
//   } catch (error) {
//     if (error.code === "ENOENT") {
//       await writeFile(DATA_FILE, JSON.stringify({}));
//       return {};
//     }
//     throw error;
//   }
// };

// export const saveLinks = async (links) => {
//   await writeFile(DATA_FILE, JSON.stringify(links));
// };

// import { dbClient } from "../config/db-client.js";
// import { env } from "../config/env.js";

// const db = dbClient.db(env.MONGODB_DATABASE_NAME);
// const db = dbClient.db("urlShortener");
// const shortenerCollection = db.collection("shorteners")

import {db} from "../config/db-client.js"

export const loadLinks = async ()=>{
  // return shortenerCollection.find().toArray()
 const rows =await db.execute(`select * from short_links`)
 return rows;
}

export const saveLinks = async ({url, shortCode}) =>{
  // return shortenerCollection.insertOne(link)
  const [result]= await db.execute(
    "insert into short_links(short_code,url) values(?,?)",
  [shortCode, url]
);
return result;
}

export const  getLinkByShortCode = async (shortcode) =>{
  // return await shortenerCollection.findOne({ shortCode: shortcode})

  const [rows]= await db.execute
  (`select * from short_links where short_code = ?`,
    [shortcode]
  );
  console.log(rows)
  if(rows.length>0){
    return rows[0];
  } else{
    return null;
  }
}
