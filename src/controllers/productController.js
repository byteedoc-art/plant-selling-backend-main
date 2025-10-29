import Items from "../modals/itemModal.js";

const addProducts = async (req, res) => {

    try {
        const { name, description, price, images, stock, category, subcategory, seller } = req.body;

        if (!name || !description || !images || !stock || !category) {
            return res.json({ message: 'All field is required!!' });
        }

        console.log(name)
      
        const items = new Items({
            name: name,
            description: description,
            price: price,
            images: images,
            stock: stock,
            category: category,
            subcategory: subcategory,
            seller: seller
        })

        await items.save();
        return res.json({ message: "Item created successfully!!" })
    }
    catch (e) {
        console.log(e)
        res.json({ message: "Error is occuring...", e })
    }

}

const getAllItems = async (req,res) => {
    const data = await Items.find();
    return res.json({ success: true, message: "All items fetched successfully!!", data: data })
}

const editItems = async (req,res)=>{
    console.log("idididididdidijskfnksn")
   const { id } = req.params;

   console.log(id)

    const { name, description, price, images, stock, category, subcategory, seller } = req.body;

    console.log(name)

   if(!id)
   {
    return res.json({message:"To edit item provide ItemId"});
   }

   console.log("sfkjslkj")

   await Items.findByIdAndUpdate(id,{name:name});





   return res.json({message:"Edit successfully!!"})
} 

export { addProducts, getAllItems,editItems };