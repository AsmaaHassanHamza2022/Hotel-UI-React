import React, { Fragment } from 'react';
import styles from '../../Register/Form.module.scss';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function AddRoom(){ 
    const {register,handleSubmit,formState:{errors},reset} = useForm({
        mode: "onTouched"
    });
    let [hotels,setHotel]=useState([]);
    let [service,setService]=useState([]);
    let hotelURL='https://localhost:7298/api/Hotels';
    let serviceURL='https://localhost:7298/api/Services';
    useEffect(()=>{
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
   
    let [file,setfile]=useState('');

     let setImageFile=(event)=>{
        // console.log(event)
        setfile(event.target.files[0]);
    }
    const onSubmit=async(data)=>{   
        console.log(data)
        const url=`https://localhost:7298/api/Rooms/Add`
        const formData = new FormData();
        formData.append('type',data.type);
        formData.append('roomNumber',data.roomNumber);
        formData.append('maxPeople',data.maxPeople);
        formData.append('description',data.description);
        formData.append('Price',data.Price);
        formData.append('ImagesFile',file);  
        formData.append('HotelId',data.HotelId);  
        formData.append('Services',data.Services); 

        const config = { 
            method: 'POST', 
            body: formData,    
        };    
    
        fetch(url,config)
        .then((data)=>data.json())
        .then((res)=>{
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
                                        <h3>Add Room</h3>
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
                                    <p>{errors.img?.type==='required'&& 
                                        <div className={styles.validate}>
                                        <span>Image is required</span>
                                    </div>}
                                    </p>
                                    <div className='mb-3'>
                                        <select className='form-control'>
                                            <option>HotelId</option>
                                            {hotels.map(item=>{
                                                return(
                                                    <option key={item.hotelData.hotelId}>
                                                    {item.hotelData.name}==&gt;{item.hotelData.hotelId}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm" 
                                        placeholder="Enter Hotel Id" name="HotelId"
                                        {...register("HotelId",{required:"HotelId is required"})}
                                        />
                                    </div>
                                    <p>{errors.HotelId?.type==='required'&& 
                                       <div className={styles.validate}>
                                        <span>Hotel Id is required</span>
                                       </div>}
                                    </p>
                                    <div className='mb-3'>
                                        <select className='form-control'>
                                            <option >ServiceId</option>
                                            {service.map((item,index)=>{
                                                return(
                                                    <option key={index}>{item.name}==&gt;{item.serviceId}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="text" 
                                        className="form-control shadow-sm" 
                                        placeholder="Enter Serivce in form [1,2,3]" name="Services"
                                        {...register("Services",{required:"Services is required"})}
                                        />
                                    </div>
                                    <p>{errors.Services?.type==='required'&& 
                                       <div className={styles.validate}>
                                        <span>Service Id is required</span>
                                       </div>}
                                    </p>
                                    <div class="mb-3">
                                        <input class="form-control" type="file" id="formFile"
                                        onChange={e => setImageFile(e)}
                                        name="img"
                                        // {...register("img",{required:"Image is required"})}
                                        />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <button  className="btn shadow-lg">Add</button>
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

export default AddRoom;