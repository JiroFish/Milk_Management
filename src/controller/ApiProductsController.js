import apiProductService from "../service/apiProductService";
const getAPageOfProducts = async (req, res) => {
    try {
        console.log("check req", req.query.page)
        if (req.query.page) {
            const data = await apiProductService.getAPageProductsService(req.query.page);
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Lỗi server ở ApiProductsController...",
            EC: "-1",
            DT: ""
        });
    }
}
module.exports = {
    getAPageOfProducts
}
