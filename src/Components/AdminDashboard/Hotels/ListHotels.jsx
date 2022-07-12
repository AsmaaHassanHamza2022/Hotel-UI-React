import React, { Fragment, useEffect,useState } from 'react';

import {Link} from 'react-router-dom'
import styles from '../AdminHome.module.scss';
import img from '../../../Images/5.jpg'


function ListHotels(){
//=========================pick data from Api =============================
    let [hotelsData,sethotelsData]=useState([]);
    let [deleteFlag,setdeleteFlag]=useState(false);
    useEffect(()=>{
        fetch('https://localhost:7298/api/Hotels')
       .then(data => data.json())
       .then((res)=>{
        sethotelsData(res);
    });

    },[deleteFlag]);
//==============================================================================

//===============================delete hotel======================================
function deleteHotel(hotelId){
    let confirmResult=window.confirm("Are you sure You Want to delete this item");
    if(confirmResult ==true){
        fetch( `https://localhost:7298/api/Hotels/${hotelId}`, { method: 'DELETE' })
        .then((massage)=>{
            setdeleteFlag(true);
            alert(massage);
        })
    }
    
}

   return(
    <Fragment>
        <div className='container mt-5 mb-5'>
               <div className='mb-5'>
                 <Link to='/admin/add' className={styles.add}>Add Hotel</Link>
               </div>
                <div className={styles.container}>
                    <div className='row'>
                        <table className={styles.table}>
                        <thead className={styles.head}>
                            <tr>
                                <th>Img</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Desc</th>
                                <th>Min Price</th>
                                <th>Actions</th>     
                            </tr>
                        </thead>
                        <tbody className={styles.body}>

                          {hotelsData.map((hotel)=>{
                           return (
                           <tr>
                                    <td><img src={img}/></td>
                                    <td >{hotel.name}</td>
                                    <td>{hotel.city}</td>
                                    <td>{hotel.country}</td>
                                    <td>{hotel.description}</td>
                                    <td>{hotel.description}$</td>
                                    <td> 
                                        <Link to='/admin/edit/100' className={styles.edit}>
                                        <i class="fa-solid fa-file-pen"></i>
                                        </Link>  
                                        <button onClick={(()=>deleteHotel(hotel.hotelId))} className={styles.del}>
                                            <i class="fa-solid fa-trash"></i>
                                        </button>    
                                    </td>   
                                </tr> )

                        })}

                           
                            
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>

    </Fragment>
   )
}

export default ListHotels;