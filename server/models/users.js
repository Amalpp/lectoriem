import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    username :String,
    password :String,
    email : String,
    phone : Number,
    password : String,
    type:String

});
const bookSchema = mongoose.Schema({
    Bookname:String,
    authorname:String,
    pic:String,
    description:String,
    category:String
    

})
const bookDetails = mongoose.Schema({
    bookname:String,
    authorname:String,
    picname:String,
    category:String,
    description:String
})

const userDetails = mongoose.model("userDetails",userSchema)
const books = mongoose.model("books",bookSchema)
const Details= mongoose.model("Details",bookDetails)

export {
    userDetails,
    books,
    Details
}
