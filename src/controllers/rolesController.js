

const RolesControllers = (req, res) => {

    const { name } = req.body;
    console.log(name);
    return res.json({
        name: name,
        meassage: " add backend pages"
    })
}
export default RolesControllers;