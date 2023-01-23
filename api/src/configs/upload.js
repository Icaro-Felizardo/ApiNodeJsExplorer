const path = require("path");
const multer = require("multer");
const crypton = require("crypto");

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLPADS_FOLDER = path.resolve(__dirname, "uploads"); 

const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename(request, file, callback){
            const fileHash = crypto.randomBytes(10).toString("hex")
            const filename = `${fineHash}-${file.originalname}`;

            return callback(null,filename);
        },
    }),
};

module.exports = {
    TMP_FOLDER,
    UPLPADS_FOLDER,
    MULTER
}