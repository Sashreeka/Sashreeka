import React,{useState,useEffect} from 'react';
import "./newProduct.css";
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';
import NewForm from './NewForm';
import { Paper ,makeStyles} from '@material-ui/core';
import { Publish } from '@material-ui/icons';


const useStyles=makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)

    }

   
}))
export default function NewProduct() {

    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [offer,setOffer]=useState('');
    const [unitPrice,setUnitPrice]=useState('');
    const [unitWeight,setUnitWeight]=useState('');
    const [stock,setStock]=useState('');
    const [reOrderLevel,setReOrderLevel]=useState('');
    const [measurementUnit,setMeasurementUnit]=useState('');
    const [image,setImage]=useState(null);
    const [caption,setCaption]=useState('');


    const [data,setData]=useState([]);

    const classes=useStyles();

    // const dataset = [
    //     {
    //       id: "1",
    //       name: "ishan",
    //       age: 23,
    //      item:[
    //          {itemname:"f1",quantity:10},
    //          {itemname:"f2",quantity:30},
    //          {itemname:"f3",quantity:20},

    //      ]
    //     },
    //     {
    //       id: "2",
    //       name: "ishan1",
    //       age: 23,
    //       item:[
    //         {itemname:"f1",quantity:30},
    //         {itemname:"f2",quantity:30},
          

    //     ]
    //     },
    //     {
    //       id: "3",
    //       name: "ishan2",
    //       age: 23,
    //       item:[
    //         {itemname:"f1",quantity:10},
           

    //     ]
    //     },
    //     {
    //       id: "4",
    //       name: "ishan3",
    //       age: 23,
    //       item:[
    //         {itemname:"f1",quantity:10},
    //         {itemname:"f2",quantity:30},
    //         {itemname:"f3",quantity:20},

    //     ]
    //     },
       
    //   ];

    // const data=[
    //     {"id":1,"name":"ishan","item":[{"iname":"f1"},{"iname":"f2"}]},
    //     {"id":2,"name":"ishan","item":[{"iname":"f1"}]}
    // ];


    // useEffect(()=>{

    //     axios.get("http://localhost:4000/getImage").then((response)=>{
    //         setData(response.data);

    //     })
    // },[])

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

    
    const changeIma=(e)=>{
        setImage(e.target.files[0]);



    }

    const submitform=(e)=>{
        e.preventDefault();

        const formdata=new FormData();
        formdata.append('name',name);
        formdata.append('image',image);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }

        // const onInputChange = (e)=>{
            
        
        //     }


         
       
        axios.post("http://localhost:4000/addFertilizer",formdata,config
        // {
        //     name:name,
        //     // description:description,
        //     // offer:offer,
        //     // unitPrice:unitPrice,
        //     // unitWeight:unitWeight,
        //     // stock:stock,
        //     // reOrderLevel:reOrderLevel,
        //     // measurementUnit:measurementUnit,
        //     image:image,
        //     // caption:caption


        // }
        ).then((response)=>{
           console.log('SUCCESS');
        }).catch((e)=>{
            console.log("Errr"+e);
        })

     

       

    }



    return (
        <div className='newProductCon'>
            <Sidebar title="products"/>
          
       
        <div className="newProduct">
            <h1 className="addProductTitle">Add Fertilizer Item</h1>
            {/* {
                dataset.map((item)=>(
                    <div key={item.id}>
                        <p>{item.name}-{item.age}</p>

                        
                     {
                        item.item.map((second)=>(
                            <div>
                                <p>{second.itemname}-{second.quantity}</p>
                            </div>
                           
                           ))
                     }

                       

                    </div>
                ))
            } */}



            <form onSubmit={submitform} >
            <div className="mb-3 productUpload">
                            <img src="https://www.stones4homes.co.uk/wp-content/uploads/2021/04/Farmyard-Manure-1-004.jpg"
                                alt=""
                                className="productUploadImg"
                            />

                            <label  for="file">
                                <Publish/>

                            </label>
                            <input type="file" id="file" className="form-control" name="image" onChange={changeIma} style={{display:'none'}} />

                        </div>    
                <div class="form-outline flex-fill mb-3">
                   
                    <input type="text" name="name" class="form-control" placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
                    
                  
                </div>
                <div class="mb-3">
                   
                    <input type="text"  class="form-control" name="description" placeholder="description" onChange={(e)=>{setDescription(e.target.value)}} />
                   
                </div>

                <div class="row g-3 mb-3">
                    <div class="col">
                        <input type="number" min="0" class="form-control" placeholder="offer" aria-label="offer" name="offer" onChange={(e)=>{setOffer(e.target.value)}}/>
                    </div>
                    <div class="col">
                        <input type="number" min="0" class="form-control" placeholder="unitPrice" aria-label="unitPrice" name="unitPrice"onChange={(e)=>{setUnitPrice(e.target.value)}}/>
                    </div>
                </div>

                <div class="row g-3 mb-3">
                    <div class="col">
                        <input type="number" min="0" class="form-control" placeholder="unitWeight" aria-label="unitWeight" name="unitWeight"onChange={(e)=>{setUnitWeight(e.target.value)}}/>
                    </div>
                    <div class="col">
                        <input type="number" class="form-control" min="0" placeholder="stock" aria-label="stock" name="stock"onChange={(e)=>{setStock(e.target.value)}}/>
                     </div>
                </div>

                <div class="row g-3 mb-3">
                    <div class="col">
                        <input type="number" class="form-control" min="0" placeholder="reOrderLevel" aria-label="reOrderLevel" name="reOrderLevel"onChange={(e)=>{setReOrderLevel(e.target.value)}}/>
                    </div>


                    <div class="col">
                        <label style={{marginRight:"10px"}}>measurementUnit</label>
                        <select name="measurementUnit" id="measurementUnit"
                        onChange={(e)=>{setMeasurementUnit(e.target.value)}}
                        // onChange={(ddl)=>{setsName(ddl.target.value)}}
                        >

                            <option  value="Kg">Kg</option>
                            <option  value="g">g</option>
                            <option  value="L">L</option>
                            <option  value="ml">ml</option>

                        </select>
                        {/* <input type="text" class="form-control" placeholder="measurementUnit" aria-label="measurementUnit" name="measurementUnit" onChange={(e)=>{setMeasurementUnit(e.target.value)}}/> */}
                    </div>
                </div>
              
            {/* <img src={image} alt=""/> */}
               
               
                {/* <div class="mb-3">
                    <label class="form-label">photo</label>
                    <input type="file" class="form-control" name="image"onChange={changeIma}/>
                   
                </div> */}

                

               

              

               
{/* 
                <div class="mb-3">
                  
                    <input type="text" class="form-control" name="caption" placeholder="caption" onChange={(e)=>{setCaption(e.target.value)}}/>
                   
                </div> */}
               
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

{/* 
{
    data.map((item)=>(
        <div key={item.id}>
            <p>{item.name}</p>

            <img src={"http://localhost:3000/image/"+item.image} alt="" width="20%" height="20%"/>
        </div>
    ))
} */}

{/*            
            <img src={require("./../../../../../../../../Backend/image/$`item.image`")  } alt=""/> */}
            
            {/* <img src="./../../image/image_1630947896098.PNG" alt="" width="20%" height="20%"/> that's correct 



            
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

            <div className="card w-80">
           
                <div className="card-body">
                <input type="text" placeholder="enter name"/>
                </div>

                <div className="card-body">
                <input type="text" placeholder="enter name"/>
                </div>

                <div className="card-body">
                <input type="text" placeholder="enter name"/>
                </div>

            </div>
           <Paper className={classes.pageContent} elevation={3}>
             <NewForm/>
           </Paper>
            
        </div>
        </div>
    )
}
