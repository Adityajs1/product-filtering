const getAllProductsStatic = (req, res) => {
    res.status(200).json({ msg: "Products Testing Route" })
}

const getAllProducts = (req, res) => {
    res.status(200).json({ msg: "Products Route" })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}