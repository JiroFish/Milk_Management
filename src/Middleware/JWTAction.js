import jwt from 'jsonwebtoken';
require("dotenv").config();

const CreateJWTToken = (payload) => {
    let secretKey = process.env.JWTKEY;
    try {
        let token = jwt.sign(payload, secretKey, { expiresIn: process.env.JWT_EXPIRES_IN });
        console.log("created Token JWT", token);
        return token;
    } catch (error) {
        console.log(error);
        return;
    }
}

const EncodeJWT = (token) => {
    let secretKey = process.env.JWTKEY;
    try {
        let decodedData = jwt.verify(token, secretKey);
        console.log("thông tin đã giải mã", decodedData);
        return decodedData;
    } catch (err) {
        console.log(err);
        return;
    }
}

module.exports = {
    CreateJWTToken, EncodeJWT
}