import React, { Fragment,useState,useEffect } from 'react';
import styles from '../../Register/Form.module.scss';
import {Link,useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Swal from 'sweetalert2'

function AddHotel(){
    const {register,handleSubmit,formState:{errors},reset} = useForm({
        mode: "onTouched"
    });

    let [hotelFeatures,sethotelFeatures]=useState([]);
    useEffect(
    ()=>{
    fetch('https://localhost:7298/api/Features')
    .then(data => data.json())
    .then((res)=>{
     sethotelFeatures(res);
    })
    },[]);

    let [file,setfile]=useState('');
     let setImageFile=(event)=>{
        setfile(event.target.files[0]);
    }
    const onSuccess=()=> {  
        Swal.fire({   
          text: 'Feature Added Successfully',  
          icon: 'success',   
          confirmButtonColor: '#478e9a',  
          confirmButtonText: 'OK'  
        });  
      } 
    let navigate=useNavigate();
// add hotel 
    const onSubmit=async(data)=>{ 
            const url = `https://localhost:7298/api/Hotels/Add`;    
            const formData = new FormData(); 
             formData.append('name',data.name);    
             formData.append('city',data.city);    
             formData.append('country',data.country);    
             formData.append('description',data.description);    
             formData.append('cheapestPrice', data.cheapestPrice);        
             formData.append('ImagesFile',file);        
             formData.append('Features',data.Features);    
             formData.append('rating',data.rating); 
             
            
            const config = { 
                method: 'POST', 
                body: formData,    
            };    
        
            fetch(url,config)
            .then((data)=>data.json())
            .then((res)=>{
                //onSuccess();
                //navigate('/admin/hotels');
                console.log(res);
            })
         
       
        reset();    
    }

  return(
    <Fragment>
        <div className={styles.container} style={{height:'100%',backgroundImage:'none'}}>
                <div className="container" >
                     <div className={styles.form} style={{backgroundColor:'#F2F5FC'}}>
                        <div className="row">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-12">
                                    <div className="input-group mb-4 d-flex justify-content-center">
                                        <h3>Add Hotel</h3>
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm"
                                        placeholder="Name" name="name"
                                        {...register("name",{required:"Name is required"})}
                                        />
                                    </div>
                                    <p>{errors.name?.type==='required'&&
                                     <div className={styles.validate}>
                                        <span>Name is required</span>
                                     </div>}
                                    </p>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm" 
                                        placeholder="City" name="city"
                                        {...register("city",{required:"City is required"})}
                                        />
                                    </div>
                                    <p>{errors.city?.type==='required'&& 
                                       <div className={styles.validate}>
                                        <span>City is required</span>
                                       </div>}
                                    </p>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm" 
                                        placeholder="Country" name="country"
                                        {...register("country",{required:"Country is required"})}
                                        />
                                    </div>
                                    <p>{errors.UserName?.type==='required'&& 
                                       <div className={styles.validate}>
                                        <span>Country is required</span>
                                       </div>}
                                    </p>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm" 
                                        placeholder="Description" name="description"
                                        {...register("description",{required:"Description is required"})}
                                        />
                                    </div>
                                    <p>{errors.description?.type==='required'&& 
                                       <div className={styles.validate}>
                                        <span>description is required</span>
                                       </div>}
                                    </p>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm" 
                                        placeholder="Min Price" name="cheapestPrice"
                                        {...register("cheapestPrice",{required:"cheapest price is required"})}
                                        />
                                    </div>
                                    <p>{errors.cheapestPrice?.type==='required'&& 
                                      <div className={styles.validate}>
                                        <span>Min Price is required</span>
                                      </div>}
                                    </p>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm" 
                                        placeholder="Rating" name="rating"
                                        {...register("rating",{required:"Rating is required"})}
                                        />
                                    </div>
                                    <p>{errors.rating?.type==='required'&& 
                                       <div className={styles.validate}>
                                        <span>Rating is required</span>
                                       </div>}
                                    </p>
                                    <div className="input-group mb-4">
                                        <select className='form-control'>
                                            <option>Features</option>
                                            {hotelFeatures.map(item=>{
                                                return(
                                                    <option key={item.featureId}>{item.name}==&gt;{item.featureId}</option>
                                                )
                                            })}

                                        </select>
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm" 
                                        placeholder="Enter Features in form [1,2,3]" name="Features"
                                        {...register("Features",{required:"Features is required"})}
                                        />
                                    </div>
                                    <p>{errors.Features?.type==='required'&& 
                                      <div className={styles.validate}>
                                        <span>Features is required</span>
                                      </div>}
                                    </p>
                                    <div class="mb-3">
                                        <input class="form-control" type="file" id="formFile"
                                        onChange={e => setImageFile(e)}
                                        name="img"
                                        // {...register("img",{required:"Image is required"})}
                                        />
                                    </div>
                                    <p>{errors.img?.type==='required'&& 
                                      <div className={styles.validate}>
                                        <span>Image is required</span>
                                      </div>}
                                    </p>
                                    <div className="mb-3 mt-3">
                                        <button  className="btn shadow-lg">Add</button>
                                    </div>
                                    <div className="mt-3">
                                        <Link to='/admin/hotels' className={styles.link}>Back to List</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                     </div>
                </div>
            </div>
    </Fragment>
  )
}

export default AddHotel;