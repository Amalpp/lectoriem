import React,{useState} from "react";
import { Button } from "@material-ui/core";
import { Form } from "react-bootstrap";
import "./AddBook.css";
import axios from "axios";

const AddBooks = () => {
 const [addBook,setaddBook]=useState()
 const [selectedFile, setSelectedFile] = useState();
 const [imgPreview,setImgPreview] = useState()


  const imageHandler = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    
    reader.onload = function () {
      console.log(reader.result);
      setImgPreview(reader.result)
    };

    setSelectedFile(e.target.files[0])
  };
 
 function changeHandler(e) {
     setaddBook({
         ...addBook,
         [e.target.name] : e.target.value

     });
     console.log("addbook",addBook);
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("name", addBook);
  formData.append("files", selectedFile);
  

    axios({
      method: "post",
      url: "http://localhost:5000/addBook",
      headers: {
        'Content-Type': 'multipart/form-data;'
    },
      
      data:formData
    }).then((res)=>{
      console.log("res",res)
    })
}
  return (
    <div className="contianer">
      <div className="content">
        <Form onSubmit={handleSubmit} className="form" style={{ color: "GrayText" }}>
          <h3 className="main-heading">ADD BOOKs</h3>
          <div className="outerline mx-auto"></div>

          <Form.Group>
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              className="formControl"
              type="text"
              name="bookname"
              placeholder="book name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              className="formControl"
              name="authorname"
              type="text"
              onChange={changeHandler}
              placeholder="author name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              className="formControl"
              type="text"
              name="category"
              onChange={changeHandler}
              placeholder="Category"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Discription</Form.Label>
            <Form.Control
              className="formControl"
              type="text"
              name="description"
              onChange={changeHandler}
              placeholder="Discription"
            />
          </Form.Group>

          <div className="container">
					<h1 className="heading">Add your Image</h1>
					<div className="img-holder">
						<img src={imgPreview} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
						<i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
          </div>
				</div>

          <Button
         type="submit"
            varient="primary"
            style={{
              color: "ButtonText",
              backgroundColor: "rgb(37,37,37,40)",
              margin:"30px"

            }}
          >
            Edit Profile
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddBooks;
