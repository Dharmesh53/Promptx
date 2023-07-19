const { Schema, model, models } = require("mongoose");

const Promptschema = new Schema({
    creater:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    prompt:{
        type:String,
        required:[true,'Prompt is Required']        
    }
});

const PromptModel = models.Prompt || model("Prompt", Promptschema);

module.exports = UserModel;
