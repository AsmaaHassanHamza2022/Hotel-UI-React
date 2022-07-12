import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import styles from '../AdminHome.module.scss';
import img from '../../../Images/5.jpg'


function ListRooms(){
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
                                <th>Actions</th>     
                            </tr>
                        </thead>
                        <tbody className={styles.body}>
                            <tr>
                                <td><img src={img}/></td>
                                <td>Single</td>
                                <td>120</td>
                                <td>2</td>
                                <td> 
                                    <Link to='/admin/editRoom/100' className={styles.edit}>
                                       <i class="fa-solid fa-file-pen"></i>
                                    </Link>  
                                    <button className={styles.del}>
                                        <i class="fa-solid fa-trash"></i>
                                    </button>    
                                </td>   
                            </tr>
                            <tr>
                                <td><img src={img}/></td>
                                <td>Double</td>
                                <td>121</td>
                                <td>3</td>
                                <td>    
                                    <Link to='/admin/editRoom/200' className={styles.edit}>
                                       <i class="fa-solid fa-file-pen"></i>
                                    </Link>  
                                    <button className={styles.del}>
                                        <i class="fa-solid fa-trash"></i>
                                    </button>     
                                </td>    
                            </tr>
                            <tr>
                                <td><img src={img}/></td>
                                <td>Suite</td>
                                <td>125</td>
                                <td>4</td>
                                <td>    
                                    <Link to='/admin/editRoom/300' className={styles.edit}>
                                       <i class="fa-solid fa-file-pen"></i>
                                    </Link>  
                                    <button className={styles.del}>
                                        <i class="fa-solid fa-trash"></i>
                                    </button>     
                                </td>   
                            </tr>      
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>

    </Fragment>
   )
}

export default ListRooms;