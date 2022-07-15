import React, { Fragment ,useEffect,useState} from 'react';
import styles from '../../Register/Form.module.scss';
import {Link,useParams} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';

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
    let hotelURL='https://localhost:7298/api/Hotels';
    useEffect(()=>{
         // fetch data
        fetch(`https://localhost:7298/api/Rooms/${param}`)
        .then(data => data.json())
        .then((res)=>{
            // reset feilds by target hotel
            const fields = ['type', 'roomNumber', 'maxPeople', 'description', 'Price'];
            fields.forEach(field => setValue(field, res[field]));
        })
       
          
    },[])
    const onSubmit=async(data)=>{ 
        const url=`https://localhost:7298/api/Rooms/Update/${param}`;
        const formData = new FormData();
        formData.append('type',data.type);
        formData.append('roomNumber',data.roomNumber);
        formData.append('maxPeople',data.maxPeople);
        formData.append('description',data.description);
        formData.append('Price',data.Price);
        formData.append('ImagesFile',file);  
        formData.append('HotelId',4);  
        formData.append('Services',1); 

        const config = { 
            method: 'PUT', 
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
                                    <div class="mb-3">
                                        <input class="form-control" type="file" id="formFile"
                                        name="img"
                                        onChange={e => setImageFile(e)}
                                        // {...register("img",{required:"Image is required"})}
                                        />
                                    </div>
                                    <p>{errors.img?.type==='required'&& 
                                      <div className={styles.validate}>
                                        <span>Image is required</span>
                                      </div>}
                                    </p>
                                    {/* <div className='mb-3'>
                                        <select className='form-control'>
                                            <option>HotelId</option>
                                            {hotels.map(item=>{
                                                return(
                                                    <option>
                                                    {item.hotel.hotelId}==&gt;{item.hotel.name}
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
                                    </p> */}
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