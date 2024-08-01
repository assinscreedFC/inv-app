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
const deleteitem=async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleteQuery = 'DELETE FROM items WHERE id = $1 RETURNING *';
      const result = await client.query(deleteQuery, [id]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      res.status(200).json(result.rows[0]);
    } catch (err) {
      console.error('Error deleting item', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  const updateItems = async (req, res) => {
    try {
      const { id, title, units, des, categories } = req.body;
      console.log(req.body)
      
      const query = `
        UPDATE items 
        SET title = $1, units = $2, description = $3, categories_id = $4 
        WHERE id = $5 
        RETURNING *;
      `;
      
      const values = [title, units, des, categories, id];
      const result = await client.query(query, values);
      console.log(result)
      res.status(200).json(result.rows[0]);
    } catch (err) {
      console.error('Error updating item', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports={
    Postcategorie,
    GetTableCat,
    GetTableItem,
    postItems,updateItems,
    deleteitem
}