import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import styles from '../AdminHome.module.scss';
import img from '../../../Images/5.jpg'


function Services(){
   return(
    <Fragment>
        <div className='container mt-5 mb-5'>
               <div className='mb-5'>
                 <Link to='/admin/addService' className={styles.add}>Add Service</Link>
               </div>
                <div className={styles.container}>
                    <div className='row w-md-75 w-sm-100'>
                        <table className={styles.table}>
                        <thead className={styles.head}>
                            <tr>
                                <th>Room</th>
                                <th>Services</th>
                                <th>Actions</th>     
                            </tr>
                        </thead>
                        <tbody className={styles.body}>
                            <tr>
                                <td >Room1</td>
                                <td>
                                    <select className='form-select w-50'>
                                        <option>S1</option>
                                        <option>S2</option>
                                        <option>S3</option>
                                        <option>S4</option>
                                    </select>       
                                </td>  
                                <td>
                                    <Link to='/admin/editService/100' className={styles.edit}>
                                       <i class="fa-solid fa-file-pen"></i>
                                    </Link>  
                                    <button className={styles.del}>
                                        <i class="fa-solid fa-trash"></i>
                                    </button>  
                                </td>
                            </tr>
                            <tr>
                                <td >Room2</td>
                                <td>
                                    <select className='form-select w-50'>
                                        <option>S1</option>
                                        <option>S2</option>
                                        <option>S3</option>
                                        <option>S4</option>
                                    </select>       
                                </td> 
                                <td>
                                    <Link to='/admin/editService/200' className={styles.edit}>
                                       <i class="fa-solid fa-file-pen"></i>
                                    </Link>  
                                    <button className={styles.del}>
                                        <i class="fa-solid fa-trash"></i>
                                    </button>  
                                </td> 
                            </tr>
                            <tr>
                                <td >Room3</td>
                                <td>
                                    <select className='form-select w-50'>
                                        <option>S1</option>
                                        <option>S2</option>
                                        <option>S3</option>
                                        <option>S4</option>
                                    </select>       
                                </td> 
                                <td>
                                    <Link to='/admin/editService/300' className={styles.edit}>
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

export default Services;