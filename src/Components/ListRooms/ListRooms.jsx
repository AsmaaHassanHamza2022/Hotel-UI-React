import React, { Fragment } from 'react';
import styles from './ListRooms.module.scss';
import img1 from '../../Images/17.webp';
import img2 from '../../Images/18.jpg';
import img3 from '../../Images/19.jpg';
import img4 from '../../Images/48.jpg';
import {Link,useParams} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function ListRooms(){
    let id=useParams().id;
    let url='https://localhost:7298/api/BookingRoomToUsers/ChooseRoom';
    let [roomData,setRooms]=useState([]);
    useEffect(()=>{
        axios.post(url+'?'+"id="+id)
        .then(res=>{
            console.log(res.data);
            setRooms(res.data);
            console.log("room data",roomData)
        })
        .catch(err=>{console.log(err)})
       
    },[])
 
    let[service,setService]=useState([]);
    let urlservice='https://localhost:7298/api/Services';
    const getServices=(id)=>{
        let arr=[];
        console.log(id[0]);
        axios.get(urlservice+'/'+id[0])
        .then(res=>{
            arr.push(res.data);
            setService(arr);
            console.log(arr)
        })
        .catch(err=>{
            console.log(err);
        })
    }
   
    return(
        <Fragment>
            <div className='container mt-5 p-3'>
                <div className={styles.container}>
                    <div className='row d-flex justify-content-around' >
                        {roomData.length===0?<div><h2>No Matching Data</h2></div>:
                           
                           <div>
                              {roomData.map((item,index)=>{
                            return(
                               <div className='col-md-3 col-9 mb-3' key={item.roomId}>
                                   <div className="card " style={{overflow: 'hidden'}}>
                                       <img src={img1} />
                                       <div className="card-body">
                                           <h5 className="card-title">{item.room.description}</h5>
                                           <p className="card-text"><strong>Max People: </strong>{item.room.maxPeople}</p>
                                           <p className="card-text"><strong>price: </strong>
                                           {item.room.roomsInHotel?.map(item=>{
                                                  return(
                                                   <div>
                                                      <span key={item.roomId}>${item.price}</span>
                                                        <div className='mt-3'>
                                                            <Link to={`/payment/${item.roomId}`} className='btn btn-primary'>Reserve</Link>
                                                        </div>
                                                   </div>
                                                  )
                                           })}
                                           
                                           </p>
                                           <div className='d-flex flex-column'>
                                               <Link to='' onClick={()=>{getServices(item.room.roomServices.map(item=>{return(item.serviceId)}))}}
                                               style={{textDecoration:'none'}}
                                               >
                                                   Show Service!
                                               </Link>
                                              
                                           </div>
                                           
                                       </div>
                                   </div>   
                               </div>
                            )
                            
                       })}
                               

                           </div>
                        
                        
                        }
                    </div>
                    <div className={styles.service}>
                        {service.map(item=>{
                            return(
                                <p key={item.serviceId}>{item.name}</p>
                            )
                        })}
                    </div>
                   
                    
                </div>
            </div>
        </Fragment>
    )
}
export default ListRooms;