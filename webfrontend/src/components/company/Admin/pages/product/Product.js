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
     const [sname,setsName]=useState("");
     const [newdata,setNewData]=useState([]);
     const [	offer,setoffer]=useState("");
    // const [	unitPrice,setunitPrice]=useState("");
    // const [	unitWeight,setUnitWeight]=useState("");
    // const [	photo,setphoto]=useState("");
    // const [	stock,setstock]=useState("");



    useEffect(()=>{

        axios.get('http://localhost:4000/getfertilizer').then((response)=>{
            setNewData(response.data);
            console.log(response.data);
        })

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
                            <span className="productInfoValue">{data.stock}</span>

                        </div>

                        <div className="productInfoItem">

                            <span className="productInfokey">active</span>  
                            {
                                data.stock > 0 ?( <div> <span className="productInfoValue">yes</span></div>):( <div> <span className="productInfoValue">no</span></div>)
                            }  

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


                        <select name="inStock" id="idStock" onChange={(ddl)=>{setoffer(ddl.target.value)}}>
                            {
                                
                                newdata.map((item)=>(
                                   
                                    <option  value={item.name}>{item.name}</option>
                                   
                                    

                                ))
                            }
                           
                           
                        </select>

                        <p>{offer}</p>

                       

                        <label>Active</label>
                        <select name="active" id="active" onChange={(ddl)=>{setsName(ddl.target.value)}}>

                            <option  value="yes">Yes</option>
                            <option  value="no">No</option>

                        </select>
                        <p>state ishannnnnnnn{sname}</p>

                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={data.photo}
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
