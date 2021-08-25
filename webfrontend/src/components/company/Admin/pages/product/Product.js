import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';

export default function Product(props) {
    const fertilizerId=props.match.params.fertilizerId
    console.log("id="+fertilizerId);

   
    const [data,setData]=useState([]);
    // const [name,setName]=useState("");
    // const [description,setDescription]=useState("");
    // const [	offer,setoffer]=useState("");
    // const [	unitPrice,setunitPrice]=useState("");
    // const [	unitWeight,setUnitWeight]=useState("");
    // const [	photo,setphoto]=useState("");
    // const [	stock,setstock]=useState("");



    useEffect(()=>{

        axios.get('http://localhost:4000/getfertilizeritem/'+fertilizerId).then((response)=>{
        setData(response.data[0]);})
      },[])

  

    return (
        <div className="productCon">
        <Sidebar/>
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">

                    <button className="productAddButton">Create</button>

                </Link>

            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={data.photo}
                            alt=""
                            className="productInfoImg"
                        />
                        <span className="productName">{data.name}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfokey">id</span>
                            <span className="productInfoValue">{fertilizerId}</span>

                        </div>

                        <div className="productInfoItem">
                            <span className="productInfokey">Sales</span>
                            <span className="productInfoValue">$123</span>

                        </div>

                        <div className="productInfoItem">
                            <span className="productInfokey">active</span>
                            <span className="productInfoValue">yes</span>

                        </div>


                        <div className="productInfoItem">
                            <span className="productInfokey">in stock:</span>
                            <span className="productInfoValue">no</span>

                        </div>
                    </div>
                </div>

            </div>
            <div className="productBottom">
                <form className="productForm">

                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpods"/>
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option  value="yes">Yes</option>
                            <option  value="no">No</option>

                        </select>


                        <label>Active</label>
                        <select name="active" id="active">
                            <option  value="yes">Yes</option>
                            <option  value="no">No</option>

                        </select>

                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.unsplash.com/photo-1607203391514-b001be773a22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                alt=""
                                className="productUploadImg"
                            />

                            <label  for="file">
                                <Publish/>

                            </label>
                            <input type="file" id="file" style={{display:'none'}}/>

                        </div>
                        <button className="productButton">Update</button>
                       

                    </div>

                </form>

            </div>
            
        </div>
        </div>
    )
}
