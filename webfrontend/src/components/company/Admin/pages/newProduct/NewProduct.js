import React,{useState,useEffect} from 'react';
import "./newProduct.css";
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';
import NewForm from './NewForm';
import { Paper ,makeStyles} from '@material-ui/core';


const useStyles=makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(10)

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
            <h1 className="addProductTitle">New Product</h1>
            <form onSubmit={submitform} >
                <div class="form-outline flex-fill mb-3">
                   
                    <input type="text" name="name" class="form-control" placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
                    
                  
                </div>
                {/* <div class="mb-3">
                   
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
                </div> */}
              
               
               
                <div class="mb-3">
                    <label class="form-label">photo</label>
                    <input type="file" class="form-control" name="image"onChange={changeIma}/>
                   
                </div>

                

               

              

               
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
            {/* <img src="./../../image/image_1630947896098.PNG" alt="" width="20%" height="20%"/> that's correct */}



            
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

{/* 


            <section class="vh-100" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3c"
                    />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

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
