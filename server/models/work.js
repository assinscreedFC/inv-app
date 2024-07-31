const client=require("../db.js")

const Postcategorie= async (req,res)=>{
    const {name}=req.body
        try {
            const postcategorie = await client.query("INSERT INTO categories (name) VALUES ($1) RETURNING *", [name]);
            res.status(201).json(postcategorie.rows[0]);
          } catch (err) {
            console.error('Error inserting category', err);
          }
   
}
const postItems= async (req,res)=>{
    try{
        const { title, units, des, categories }=req.body;
        const result = await client.query(
            `INSERT INTO items (title, units, description,categories_id) 
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [title, units, des,categories]
        );
    res.status(201).json(result.rows[0]);
    }catch (err) {
        console.error('Error inserting category', err);
      }
    
}
const GetTableCat= async (req,res)=>{
    const rid= await client.query("SELECT * FROM categories");
    res.send(rid);
}
const GetTableItem= async (req,res)=>{
    const rid= await client.query("SELECT * FROM items");
    res.send(rid);
}

module.exports={
    Postcategorie,
    GetTableCat,
    GetTableItem,
    postItems,
}