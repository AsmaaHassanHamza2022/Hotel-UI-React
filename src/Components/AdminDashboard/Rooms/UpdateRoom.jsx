import React, { Fragment ,useEffect,useState} from 'react';
import styles from '../../Register/Form.module.scss';
import {Link,useParams,useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

function UpdateRoom(){
    const {register,handleSubmit,formState:{errors},reset,setValue} = useForm({
        mode: "onTouched"
    });
    let param=useParams().id;
    let [file,setfile]=useState('');
    let setImageFile=(event)=>{
            setfile(event.target.files[0]);
        }
    let [hotels,setHotel]=useState([]);
    let [service,setService]=useState([]);
    let hotelURL='https://localhost:7298/api/Hotels';
    let serviceURL='https://localhost:7298/api/Services';
    
    useEffect(()=>{
         // fetch data
        
        fetch(`https://localhost:7298/api/Rooms/${param}`)
        .then(data => data.json())
        .then((res)=>{
            // reset feilds by target hotel
            console.log(res)
            const fields = ['type', 'roomNumber', 'maxPeople', 'description', 'Price','HotelId','Services'];
            fields.forEach(field => setValue(field, res[field]));
        })
        axios.get(hotelURL)
          .then(res=>{
            //console.log(res.data);
            setHotel(res.data)
          })
          .catch(err=>{console.log(err)})  
          axios.get(serviceURL)
          .then(res=>{setService(res.data)})
          .catch(err=>{console.log(err)})
       
          
    },[])
    let [selectValue ,setselectValue]=useState([]);
    let [selectedBox ,setselectBox]=useState(null);
    let handleChange =(selectBox)=>{
        setselectBox(selectBox);
    }
   //====================================================
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
  const onSuccess=()=> {  
    Swal.fire({   
      text: 'Room Updated Successfully',  
      icon: 'success',   
      confirmButtonColor: '#478e9a',  
      confirmButtonText: 'OK'  
    });  
  } 
   let navigate=useNavigate();
    const onSubmit=async(data)=>{ 
        
        let selectedData=getSelectValues(selectedBox);
        setselectValue([...selectedData]);
        if(selectValue.length !=0){
           console.log(selectValue)
        const url=`https://localhost:7298/api/Rooms/Update/${param}`;
        const formData = new FormData();
        formData.append('type',data.type);
        formData.append('roomNumber',data.roomNumber);
        formData.append('maxPeople',data.maxPeople);
        formData.append('description',data.description);
        formData.append('Price',data.Price);
        formData.append('ImagesFile',file);  
        formData.append('HotelId',data.HotelId);  
        formData.append('Services',JSON.stringify(selectValue)); 

        const config = { 
            method: 'PUT', 
            body: formData,    
        };    
    
        fetch(url,config)
        .then((data)=>data.json())
        .then((res)=>{
            navigate('/admin/rooms');
            onSuccess();
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
                                        <h3>Update Room</h3>
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm"
                                        placeholder="Type" name="type"
                                        {...register("type",{required:"Type is required"})}
                                        />
                                    </div>
                                    <p>{errors.type?.type==='required'&&
                                     <div className={styles.validate}>
                                        <span>Type is required</span>
                                     </div>}
                                    </p>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm" 
                                        placeholder="Room Number" name="roomNumber"
                                        {...register("roomNumber",{required:"Room Number is required"})}
                                        />
                                    </div>
                                    <p>{errors.roomNumber?.type==='required'&& 
                                       <div className={styles.validate}>
                                        <span>Room Number is required</span>
                                       </div>}
                                    </p>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm" 
                                        placeholder="Max People" name="maxPeople"
                                        {...register("maxPeople",{required:"Max People is required"})}
                                        />
                                    </div>
                                    <p>{errors.maxPeople?.type==='required'&& 
                                       <div className={styles.validate}>
                                        <span>Max People is required</span>
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
                                        placeholder="Price" name="Price" 
                                        {...register("Price",{required:"Price is required"})}
                                        />
                                    </div>
                                    <p>{errors.Price?.type==='required'&& 
                                       <div className={styles.validate}>
                                        <span>Price is required</span>
                                       </div>}
                                    </p>
                                    <div className='mb-3'>
                                        <select className='form-control'
                                        onChange={(e)=>{handleChange(e.target)}}
                                        >
                                            <option>HotelId</option>
                                            {hotels.map(item=>{
                                                return(
                                                    <option key={item.hotelData.hotelId} value={item.hotelData.hotelId}>
                                                    {item.hotelData.name}==&gt;{item.hotelData.hotelId}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm" 
                                        placeholder="HotelId" name="HotelId"
                                        {...register("HotelId",{required:"HotelId is required"})}
                                        />
                                    </div>
                                    <p>{errors.HotelId?.type==='required'&& 
                                        <div className={styles.validate}>
                                            <span>hotelId is required</span>
                                         </div>}
                                    </p>
                                    <div className='mb-3'>
                                        <select className='form-control' 
                                        onChange={(e)=>{handleChange(e.target)}}
                                        multiple
                                        >
                                            <option >ServiceId</option>
                                            {service.map((item,index)=>{
                                                return(
                                                    <option key={index} value={item.serviceId}
                                                    >{item.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <input class="form-control" type="file" id="formFile"
                                        name="img"
                                        onChange={e => setImageFile(e)}
                                        // {...register("img",{required:"Image is required"})}
                                        />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <button  className="btn shadow-lg">Update</button>
                                    </div>
                                    <div className="mt-3">
                                        <Link to='/admin/rooms' className={styles.link}>Back to List</Link>
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

export default UpdateRoom;