import React, { Fragment,useState,useEffect } from 'react';
import styles from '../../Register/Form.module.scss';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

function AddHotel(){
    const {register,handleSubmit,formState:{errors},reset} = useForm({
        mode: "onTouched"
    });

    //===========load all feature for hotel==========
    let [hotelFeatures,sethotelFeatures]=useState([]);
    useEffect(
    ()=>{
    fetch('https://localhost:7298/api/Features')
    .then(data => data.json())
    .then((res)=>{
     sethotelFeatures(res);
    })
    },[]);

    // catch selectBox and prepare its value

    let [selectValue ,setselectValue]=useState([]);
    let [selectedBox ,setselectBox]=useState(null);

   let handleChange =(selectBox)=>{
    setselectBox(selectBox);
   }

   // get all values from  select box
   function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(Number(opt.value));
      }
    }
    return result;
  }
    //===========================file handling===========================
    let [file,setfile]=useState('');

     let setImageFile=(event)=>{
        // console.log(event)
        setfile(event.target.files[0]);
    }

// add hotel 
    const onSubmit=async(data)=>{ 
        
        // selected feature for hotel
        let selectedData=getSelectValues(selectedBox);
         setselectValue([...selectedData]);
         if(selectValue.length !=0){
            console.log(selectValue)

            const url = `https://localhost:7298/api/Hotels/Add`;    
            const formData = new FormData(); 
             formData.append('name',data.name);    
             formData.append('city',data.city);    
             formData.append('country',data.country);    
             formData.append('description',data.description);    
             formData.append('cheapestPrice', data.cheapestPrice);        
             formData.append('ImagesFile',file);        
             formData.append('Features',JSON.stringify(selectValue));    
             formData.append('rating',"0"); 
             
            
            const config = { 
                method: 'POST', 
                body: formData,    
            };    
        
            fetch(url,config)
            .then((data)=>data.json())
            .then((res)=>{
                console.log(res);
            })
         }else{
            alert("Please Try Again.......!")
         } 
       
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
                                        <select 
                                        className="form-control shadow-sm" 
                                         name="hotelFeature"
                                         onChange={(e)=>{handleChange(e.target)}}
                                         multiple
                                        // {...register("hotelFeature",{required:"hotel feature is required"})}
                                        >
                                           
                                            {
                                                hotelFeatures.map((feature,i)=>{

                                                    return(
                                                        <option key={i} value={feature.featureId}>
                                                        {feature.name}   
                                                       </option>
                                                    )
                                                  
                                                  
                                                })
                                            }

                                        </select>
                                    </div>
                                    <p>{errors.hotelFeature?.type==='required'&& 
                                      <div className={styles.validate}>
                                        <span>hotelFeature is requird</span>
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