import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import styles from '../AdminHome.module.scss';
import img from '../../../Images/5.jpg'


function Features(){
   return(
    <Fragment>
        <div className='container mt-5 mb-5'>
               <div className='mb-5'>
                 <Link to='/admin/addFeature' className={styles.add}>Add Feature</Link>
               </div>
                <div className={styles.container}>
                    <div className='row w-md-75 w-sm-100'>
                        <table className={styles.table}>
                        <thead className={styles.head}>
                            <tr>
                                <th>Hotel Name</th>
                                <th>Features</th>
                                <th>Actions</th>     
                            </tr>
                        </thead>
                        <tbody className={styles.body}>
                            <tr>
                                <td >Hotel1</td>
                                <td>
                                    <select className='form-select w-50'>
                                        <option>F1</option>
                                        <option>F2</option>
                                        <option>F3</option>
                                        <option>F4</option>
                                    </select>       
                                </td>  
                                <td>
                                    <Link to='/admin/editFeature/100' className={styles.edit}>
                                       <i class="fa-solid fa-file-pen"></i>
                                    </Link>  
                                    <button className={styles.del}>
                                        <i class="fa-solid fa-trash"></i>
                                    </button>  
                                </td>
                            </tr>
                            <tr>
                                <td >Hotel2</td>
                                <td>
                                    <select className='form-select w-50'>
                                        <option>F1</option>
                                        <option>F2</option>
                                        <option>F3</option>
                                        <option>F4</option>
                                    </select>       
                                </td> 
                                <td>
                                    <Link to='/admin/editFeature/100' className={styles.edit}>
                                       <i class="fa-solid fa-file-pen"></i>
                                    </Link>  
                                    <button className={styles.del}>
                                        <i class="fa-solid fa-trash"></i>
                                    </button>  
                                </td> 
                            </tr>
                            <tr>
                                <td >Hotel3</td>
                                <td>
                                    <select className='form-select w-50'>
                                        <option>F1</option>
                                        <option>F2</option>
                                        <option>F3</option>
                                        <option>F4</option>
                                    </select>       
                                </td> 
                                <td>
                                    <Link to='/admin/editFeature/100' className={styles.edit}>
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

export default Features;