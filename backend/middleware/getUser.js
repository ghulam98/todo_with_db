
var jwt = require('jsonwebtoken');

const getUser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    console.log("inside middleware")
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, "JWT_SECRET");
        req.user = data;
        console.log(data,"kkk")
        next();
    } catch (error) {
        console.log("inside CATCH")
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    console.log("END")

}

module.exports = getUser;