import React from 'react';
import { Link } from 'react-router-dom';
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Product() {
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
                        <img src="https://images.unsplash.com/photo-1607203391514-b001be773a22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            alt=""
                            className="productInfoImg"
                        />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfokey">id</span>
                            <span className="productInfoValue">123</span>

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
