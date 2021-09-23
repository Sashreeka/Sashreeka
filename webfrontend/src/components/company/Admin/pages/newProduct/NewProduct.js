import React,{useState,useEffect} from 'react';
import "./newProduct.css";
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';
import NewForm from './NewForm';
import { Paper ,makeStyles} from '@material-ui/core';
import { HdrOffRounded, Publish } from '@material-ui/icons';
import {Image} from 'cloudinary-react';


const useStyles=makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)

    }

   
}))



export default function NewProduct() {
    const [s,setS]=useState('');

    useEffect(()=>{
        // axios.get("http://localhost:4000/getImage").then((res)=>{

        //     console.log(res.data[0].photo);
        //     setS(res.data[0].photo);

        // })


    },[])

    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [offer,setOffer]=useState('');
    const [unitPrice,setUnitPrice]=useState('');
    const [unitWeight,setUnitWeight]=useState('');
    const [stock,setStock]=useState('');
    const [reOrderLevel,setReOrderLevel]=useState('');
    const [measurementUnit,setMeasurementUnit]=useState('Kg');
    const [image,setImage]=useState('');
    
    const [caption,setCaption]=useState('');

    const [filePreview,setFilePreview]=useState(null);


    const [data,setData]=useState([]);

    const classes=useStyles();

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

    
    const changeIma= async(e)=>{

        const files=e.target.files;
        const data=new FormData();

        data.append('file',files[0])
        setFilePreview(URL.createObjectURL(e.target.files[0]));
        data.append('upload_preset','uploadimages')

        const res=await fetch("https://api.cloudinary.com/v1_1/do1sv3tbt/image/upload",
        {
            method:'POST',
            body:data
        });

        const file=await res.json();
        console.log(file.secure_url);

        setImage(file.secure_url);



        // const reader=new FileReader();
        // reader.onload=()=>{
        //     if(reader.readyState===2){

        //         setImage(reader.result);
        //       //  console.log(reader.result)
        //     }
        // }
        // reader.readAsDataURL(e.target.files[0])
      
        //  setImage(e.target.files[0]);
        



    }

    const sendData=(e)=>{
        e.preventDefault();



        // const formdata=new FormData();
        // formdata.append('name',name);
        // formdata.append('image',image);
        // formdata.append('description',description);
        // formdata.append('offer',offer);
        // formdata.append('unitPrice',unitPrice);
        // formdata.append('unitWeight',unitWeight);
        // formdata.append('stock',stock);
        // formdata.append('reOrderLevel',reOrderLevel);
        // formdata.append('measurementUnit',measurementUnit);
        // formdata.append('caption',caption);

        const formdata={
            name:name,
            image:image,
            description:description,
            offer:offer,
            unitPrice:unitPrice,
            unitWeight:unitWeight,
            stock:stock,
            reOrderLevel:reOrderLevel,
            measurementUnit:measurementUnit,
            caption:caption
        }
        // const config = {     
        //     headers: { 'content-type': 'multipart/form-data' }
        // }

        // const onInputChange = (e)=>{
            
        
        //     }


        console.log(formdata)
         
       
        axios.post("/addFertilizer",formdata
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
            if(response.status===200)
            {
                alert('Fertilizer Item added Successfully.');
                window.location.href="/products"
            }
           console.log('SUCCESS');
           console.log()
        }).catch((e)=>{
            console.log("Errr"+e);
        })

     

       

    }



    return (
        <div className='newProductCon'>
            <Sidebar title="products"/>

            {/* <img src={image} style={{width:"100px"}} alt=""/> */}
          
       
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
            }  */}




            <form>
            <div className="mb-3 productUpload">
             {
                 filePreview!==null ?<img src={filePreview}
                                alt="uploadImage"
                                className="productUploadImg"
                            />:<img src="https://www.stones4homes.co.uk/wp-content/uploads/2021/04/Farmyard-Manure-1-004.jpg"
                                alt="uploadImage"
                                className="productUploadImg"
                            />
             }
                            

                            <label  for="file">
                                <Publish/>

                            </label>
                            {/* accept="image/*" */}
                            <input type="file" id="file" className="form-control" name="image" onChange={changeIma} style={{display:'none'}} />

                        </div>  

                        {/* <div class="form-outline">
                            <input type="text" id="form1" class="form-control" />
                            <label class="form-label" for="form1">Example label</label>
                      </div> */}
                      
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
              
          

                

               

              

               

                <div class="mb-3">
                  
                    <input type="text" class="form-control" name="caption" placeholder="caption" onChange={(e)=>{setCaption(e.target.value)}}/>
                   
                </div>
               
                <button type="submit" class="btn btn-primary" onClick={sendData }>Submit</button>
            </form>

{/* 
            <Image
            cloudName="do1sv3tbt"
            publicId={image}



            />

            <Image
                cloudName="do1sv3tbt"
                publicId={s}
            /> */}





           

            {/* <div className="card w-80">
           
                <div className="card-body">
                <input type="text" placeholder="enter name"/>
                </div>

                <div className="card-body">
                <input type="text" placeholder="enter name"/>
                </div>

                <div className="card-body">
                <input type="text" placeholder="enter name"/>
                </div>

            </div> */}
           {/* <Paper className={classes.pageContent} elevation={3}>
             <NewForm/>
           </Paper> */}
            
        </div>
        </div>
    )
}
