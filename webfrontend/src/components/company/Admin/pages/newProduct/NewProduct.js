import React,{useState} from 'react';
import "./newProduct.css";
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';

export default function NewProduct() {

    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [offer,setOffer]=useState('');
    const [unitPrice,setUnitPrice]=useState('');
    const [unitWeight,setUnitWeight]=useState('');
    const [stock,setStock]=useState('');
    const [reOrderLevel,setReOrderLevel]=useState('');
    const [measurementUnit,setMeasurementUnit]=useState('');
    const [photo,setPhoto]=useState('');
    const [caption,setCaption]=useState('');

    // const [data,setData]=useState({
    //     name:'',
    //     description:'',
    //     offer:'',
    //     unitPrice:'',
    //     unitWeight:'',
    //     stock:'',
    //     reOrderLevel:'',
    //     measurementUnit:'',
    //     photo:''
    // });


    const submitform=()=>{
        axios.post("http://localhost:4000/addFertilizer",{
            name:name,
            description:description,
            offer:offer,
            unitPrice:unitPrice,
            unitWeight:unitWeight,
            stock:stock,
            reOrderLevel:reOrderLevel,
            measurementUnit:measurementUnit,
            photo:photo,
            caption:caption


        }).then((response)=>{
            if(response)
            {
                window.location.href="/products";
            }
        })

     

       

    }

 

    return (
        <div className='newProductCon'>
            <Sidebar title="products"/>
       
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form>
                <div class="mb-3">
                   
                    <input type="text" name="name" class="form-control" placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
                    
                  
                </div>
                <div class="mb-3">
                   
                    <input type="text" class="form-control" name="description" placeholder="description" onChange={(e)=>{setDescription(e.target.value)}} />
                   
                </div>

                <div class="row g-3 mb-3">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="offer" aria-label="offer" name="offer" onChange={(e)=>{setOffer(e.target.value)}}/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="unitPrice" aria-label="unitPrice" name="unitPrice"onChange={(e)=>{setUnitPrice(e.target.value)}}/>
                    </div>
                </div>

                <div class="row g-3 mb-3">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="unitWeight" aria-label="unitWeight" name="unitWeight"onChange={(e)=>{setUnitWeight(e.target.value)}}/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="stock" aria-label="stock" name="stock"onChange={(e)=>{setStock(e.target.value)}}/>
                    </div>
                </div>

                <div class="row g-3 mb-3">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="reOrderLevel" aria-label="reOrderLevel" name="reOrderLevel"onChange={(e)=>{setReOrderLevel(e.target.value)}}/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="measurementUnit" aria-label="measurementUnit" name="measurementUnit" onChange={(e)=>{setMeasurementUnit(e.target.value)}}/>
                    </div>
                </div>
              
               
               
                <div class="mb-3">
                    <label class="form-label">photo</label>
                    <input type="file" class="form-control" name="photo"onChange={(e)=>{setPhoto(e.target.value)}}/>
                   
                </div>

              

               

              

               

                <div class="mb-3">
                  
                    <input type="text" class="form-control" name="caption" placeholder="caption" onChange={(e)=>{setCaption(e.target.value)}}/>
                   
                </div>
               
                <button type="submit" class="btn btn-primary" onClick={submitform}>Submit</button>
            </form>






            
            {/* <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="file"/>

                </div>


                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpods"/>

                </div>

                <div className="addProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="123"/>

                </div>

               




                <div className="addProductItem">
                    <label>Active</label>
                    <select className="" name="active" id="active">
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>

                    </select>

                </div>
                <button className="addProductButton">Create</button>



            </form> */}
            
        </div>
        </div>
    )
}
