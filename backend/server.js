const app = require("./src/app")
const MONGODB = require("./src/config/database")

const PORT = process.env.PORT || 3000;

MONGODB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})