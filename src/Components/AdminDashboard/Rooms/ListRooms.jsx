import React, { Fragment, useState,useEffect  } from 'react';
import {Link} from 'react-router-dom'
import styles from '../AdminHome.module.scss';
import axios from 'axios';
import img from '../../../Images/5.jpg'




function ListRooms(){
    let [rooms,setRooms]=useState([]);
    let roomURL='https://localhost:7298/api/Rooms';
    const listData=()=>{
        axios.get(roomURL)
        .then(res=>{
            //console.log(res.data)
            setRooms(res.data)
        })
        .catch(err=>{console.log(err)});  

    }
    useEffect(()=>{
        listData();
    },[])
    const deleteRoom=(roomId)=>{
        let confirmResult=window.confirm("Are you sure You Want to delete this item");
        if(confirmResult ==true){
            axios.delete(roomURL+'/'+roomId)
            .then(res=>{
                listData();
            })
            .catch(err=>{console.log(err)})
        }    
 }
   return(
    <Fragment>
        <div className='container mt-5 mb-5'>
               <div className='mb-5'>
                 <Link to='/admin/addRoom' className={styles.add}>Add Room</Link>
               </div>
                <div className={styles.container}>
                    <div className='row'>
                            <table className={styles.table}>
                            <thead className={styles.head}>
                                <tr>
                                    <th>Img</th>
                                    <th>Type</th>
                                    <th>Room no</th>
                                    <th>maxPeople</th>
                                    <th>Desc</th>
                                    <th>Price</th>
                                    <th>Actions</th>     
                                </tr>
                            </thead>
                            <tbody className={styles.body}>
                                {rooms.map((item,index)=>{
                                    return(
                                        <tr key={item.roomId}>
                                            <td><img src={img}/></td>
                                            <td>{item.room.type}</td>
                                            <td>{item.room.roomNumber}</td>
                                            <td>{item.room.maxPeople}</td>
                                            <td>{item.room.description}</td>
                                           
                                            <td> 
                                                <Link to={"/admin/editRoom/" + item.roomId }className={styles.edit}>
                                                    <i class="fa-solid fa-file-pen"></i>
                                                </Link>  
                                                <button onClick={(()=>deleteRoom(item.roomId))} className={styles.del}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>    
                                            </td>   
                                        </tr>
                                    )

                                })}
                              </tbody>
                            </table>
                        
                    </div>
                </div>
            </div>

    </Fragment>
   )
}

export default ListRooms;