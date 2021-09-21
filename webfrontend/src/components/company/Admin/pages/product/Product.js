import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { Image } from "cloudinary-react";
import { Tooltip } from "recharts";
import { IconButton } from "@material-ui/core";

export default function Product(props) {
  const fertilizerId = props.match.params.fertilizerId;
  console.log("id=" + fertilizerId);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [offer, setOffer] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [unitWeight, setUnitWeight] = useState("");
  const [stock, setStock] = useState("");
  const [reOrderLevel, setReOrderLevel] = useState("");
  const [measurementUnit, setMeasurementUnit] = useState("Kg");
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [filePreview, setFilePreview] = useState(null);

  const changeIma = async (e) => {
    setImage("");
    const files = e.target.files;
    const data = new FormData();

    data.append("file", files[0]);
    setFilePreview(URL.createObjectURL(e.target.files[0]));
    data.append("upload_preset", "uploadimages");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/do1sv3tbt/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log(file.secure_url);

    setImage(file.secure_url);
  };

<<<<<<< Updated upstream
  useEffect(() => {
    axios
      .get("http://localhost:4000/getfertilizeritem/" + fertilizerId)
      .then((response) => {
=======


    



}


//    const changeIma=(e)=>{
//        const data=new FormData();
//        data.append('file',e.target.files[0]);
//        console.log(e.target.files[0]);
//     //   console.log(image) 
     
       
//        data.append('upload_preset','uploadimages');

//        axios.post("https://api.cloudinary.com/v1_1/do1sv3tbt/image/upload",{data}).then((response)=>{
//            console.log(response);

//           // setImage(response.secure_url);
//        })
       



//   //  setImage(e.target.files[0]);



// }

    useEffect(()=>{

        // axios.get('http://localhost:4000/getfertilizer').then((response)=>{
        //     setNewData(response.data);
        //     console.log(response.data);
        // })

        axios.get('/getfertilizeritem/'+fertilizerId).then((response)=>{
        //setData(response.data[0]);
>>>>>>> Stashed changes
        setName(response.data[0].name);
        setDescription(response.data[0].description);
        setOffer(response.data[0].offer);
        setUnitPrice(response.data[0].unitPrice);
        setUnitWeight(response.data[0].unitWeight);
        setImage(response.data[0].photo);
        setStock(response.data[0].stock);
        setReOrderLevel(response.data[0].reOrderLevel);
        setMeasurementUnit(response.data[0].measurementUnit);
        setCaption(response.data[0].caption);
      });
  }, []);
  const submitform = (e) => {
    e.preventDefault();

    const formdata = {
      name: name,
      image: image,
      description: description,
      offer: offer,
      unitPrice: unitPrice,
      unitWeight: unitWeight,
      stock: stock,
      reOrderLevel: reOrderLevel,
      measurementUnit: measurementUnit,
      caption: caption,
    };

    console.log(formdata);

    axios
      .put(
        "http://localhost:4000/updateFertilizerItem/" + fertilizerId,
        formdata
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Fertilizer Item Updated Successfully.");
          window.location.href = "/products";
        }
<<<<<<< Updated upstream
      })
      .catch((e) => {
        console.log("Errr" + e);
      });
  };

  return (
    <div className="productCon">
      <Sidebar title="products" />
      <div className="product">
        <h2>Fertilizer</h2>
        <div className="productTop">
          <div className="productTopRight">
            <form onSubmit={submitform}>
              <div className="maindiv">
                <div
                  className="leftdiv"
                  style={{ padding: 30, paddingRight: 40 }}
                >
                  <div className="feilddiv">
                    <span className="label">Fertilizer Name</span>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      value={name}
                      placeholder="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="feilddiv">
                    <span className="label">Description</span>
                    <textarea
                      class="form-control"
                      type="text"
                      placeholder="description"
                      value={description}
                      id="floatingTextarea2"
                      style={{ height: 145 }}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>

                  <div>
                    {/* <div className="productUpload"> */}
                    <p className="label">Upload Image</p>
                    {/* npm install react-scripts@latest */}
                    {filePreview === null ? (
                      <Image
=======
        // const config = {     
        //     headers: { 'content-type': 'multipart/form-data' }
        // }

        // const onInputChange = (e)=>{
            
        
        //     }


        console.log(formdata)
         
       
        axios.put("/updateFertilizerItem/"+fertilizerId,formdata
        
        ).then((response)=>{
            if(response.status===200)
            {
                alert('Fertilizer Item Updated Successfully.');
                window.location.href="/products"
            }
        //    console.log('SUCCESS');
        //    console.log(response)
        }).catch((e)=>{
            console.log("Errr"+e);
        })

     

       

    }


//https://res.cloudinary.com/do1sv3tbt/image/upload/v1632037082/uploadimages/avyv9bbncxeeuv3kcqz9.png
//https://res.cloudinary.com/do1sv3tbt/image/upload/v1632037182/uploadimages/dmdy1mwj3vbku3t6b9uw.png


    //   const submitform=(e)=>{
    //     e.preventDefault();

    //     const formdata=new FormData();
    //     formdata.append('name',name);
    //     formdata.append('image',image);
    //     formdata.append('description',description);
    //     formdata.append('offer',offer);
    //     formdata.append('unitPrice',unitPrice);
    //     formdata.append('unitWeight',unitWeight);
    //     formdata.append('stock',stock);
    //     formdata.append('reOrderLevel',reOrderLevel);
    //     formdata.append('measurementUnit',measurementUnit);
    //     formdata.append('caption',caption);

    //     const config = {     
    //         headers: { 'content-type': 'multipart/form-data' }
    //     }

    //     // const onInputChange = (e)=>{
            
        
    //     //     }


         
       
    //     axios.put("http://localhost:4000/updateFertilizerItem/"+fertilizerId,formdata,config
    //     // {
    //     //     name:name,
    //     //     // description:description,
    //     //     // offer:offer,
    //     //     // unitPrice:unitPrice,
    //     //     // unitWeight:unitWeight,
    //     //     // stock:stock,
    //     //     // reOrderLevel:reOrderLevel,
    //     //     // measurementUnit:measurementUnit,
    //     //     image:image,
    //     //     // caption:caption


    //     // }
    //     ).then((response)=>{
    //        console.log('SUCCESS');
    //        console.log(response);
    //     }).catch((e)=>{
    //         console.log("Errr"+e);
    //     })

     

       

    // }
  
    //const sample=require("./image/image_1630955080724.png");

    return (
        <div className="productCon">
        <Sidebar title="products"/>
        <div className="product">
            {/* <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">

                    <button className="productAddButton">Create</button>

                </Link>

            </div> */}
            <h2>Fertilizer</h2>

            <div className="productTop">
               
                <div className="productTopRight">




                <form
                  onSubmit={submitform} 
                 >
            <div className="mb-3 productUpload">
            {/* npm install react-scripts@latest */}
            {
                 filePreview===null ? <Image
>>>>>>> Stashed changes
                        cloudName="do1sv3tbt"
                        publicId={image}
                        className="productUploadImg"
                      />
                    ) : (
                      <img
                        src={filePreview}
                        alt="uploadImage"
                        className="productUploadImg"
                      />
                    )}
                    <label for="file">
                      {/* <Tooltip title="upload image"> */}
                      <IconButton>
                        <Publish />
                      </IconButton>
                      {/* </Tooltip> */}
                    </label>
                    <input
                      type="file"
                      id="file"
                      className="form-control"
                      name="image"
                      onChange={changeIma}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div
                  className="rightdiv"
                  style={{ padding: 20, paddingLeft: 40 }}
                >
                  <div style={{ marginTop: 30 }}>
                    <div className="feilddiv" style={{ display: "flex" }}>
                      <div style={{ marginRight: 30 }}>
                        <span className="label">Unit Weight</span>
                        <input
                          type="number"
                          min="0"
                          class="form-control"
                          value={unitWeight}
                          placeholder="unitWeight"
                          aria-label="unitWeight"
                          name="unitWeight"
                          onChange={(e) => {
                            setUnitWeight(e.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <span className="label">Mesurement Unit</span>
                        <br />
                        <select
                          name="measurementUnit"
                          id="measurementUnit"
                          value={measurementUnit}
                          onChange={(e) => {
                            setMeasurementUnit(e.target.value);
                          }}
                        >
                          <option value="Kg">Kg</option>
                          <option value="g">g</option>
                          <option value="L">L</option>
                          <option value="ml">ml</option>
                        </select>
                      </div>
                    </div>
                    <div className="feilddiv">
                      <span className="label">Price (Per Unit) LKR</span>
                      <input
                        type="number"
                        min="0"
                        class="form-control"
                        value={unitPrice}
                        placeholder="unitPrice"
                        aria-label="unitPrice"
                        name="unitPrice"
                        onChange={(e) => {
                          setUnitPrice(e.target.value);
                        }}
                      />
                    </div>
                    <div className="feilddiv" style={{ display: "flex" }}>
                      <div>
                        <span className="label">Offer(%)</span>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          class="form-control"
                          value={offer}
                          placeholder="offer"
                          aria-label="offer"
                          name="offer"
                          onChange={(e) => {
                            setOffer(e.target.value);
                          }}
                        />
                      </div>
                      <div style={{ paddingLeft: 40, marginTop: 20 }}>
                        {offer != 0 ? (
                          <div>
                            <p className="actualPrice">
                              Updated Price:{" "}
                              {unitPrice - (offer * unitPrice) / 100}
                            </p>
                          </div>
                        ) : (
                          <p className="actualPrice">No Offer</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: 30,
                      display: "flex",
                      float: "right",
                    }}
                  >
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
              {/* 
              <div class="form-outline flex-fill mb-3"></div>
              <div class="mb-3"></div> */}
              {/* 
              <div class="row g-3 mb-3">
                <div class="col">
                  <input
                    type="number"
                    min="0"
                    class="form-control"
                    value={offer}
                    placeholder="offer"
                    aria-label="offer"
                    name="offer"
                    onChange={(e) => {
                      setOffer(e.target.value);
                    }}
                  />
                </div>
                <div class="col"></div>
              </div> */}

              {/* <div class="row g-3 mb-3">
                <div class="col"></div>
                <div class="col">
                  <input
                    type="number"
                    class="form-control"
                    min="0"
                    value={stock}
                    placeholder="stock"
                    aria-label="stock"
                    name="stock"
                    onChange={(e) => {
                      setStock(e.target.value);
                    }}
                  />
                </div>
              </div> */}

              {/* <div class="row g-3 mb-3">
                <div class="col">
                  <input
                    type="number"
                    class="form-control"
                    min="0"
                    value={reOrderLevel}
                    placeholder="reOrderLevel"
                    aria-label="reOrderLevel"
                    name="reOrderLevel"
                    onChange={(e) => {
                      setReOrderLevel(e.target.value);
                    }}
                  />
                </div>

                <div class="col">
                  <label style={{ marginRight: "10px" }}>measurementUnit</label>
                </div>
              </div> */}

              {/* <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="caption"
                  value={caption}
                  placeholder="caption"
                  onChange={(e) => {
                    setCaption(e.target.value);
                  }}
                />
              </div> */}
            </form>
          </div>

          {/* <div className="productTopLeft">
            <Chart
              data={productData}
              dataKey="Sales"
              title="Sales Performance"
            />
          </div> */}
        </div>
        <div className="productBottom"></div>
      </div>
    </div>
  );
}
