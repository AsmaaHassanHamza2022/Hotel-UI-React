import React, { Fragment } from 'react';
import styles from '../../Register/Form.module.scss';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

function UpdateFeature(){
    const {register,handleSubmit,formState:{errors},reset} = useForm({
        mode: "onTouched"
    });
    const onSubmit=async(data)=>{   
        reset();    
    }
  return(
    <Fragment>
        <div className={styles.container} style={{height:'100%',backgroundImage:'none'}}>
                <div className="container" >
                     <div className={styles.form} style={{backgroundColor:'#F2F5FC',marginTop:'150px'}} >
                        <div className="row" >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-12">
                                    <div className="input-group mb-4 d-flex justify-content-center">
                                        <h3>Update Feature</h3>
                                    </div>
                                    <div className='mb-3'>
                                        <select className='form-select'>
                                            <option>--Select--</option>
                                            <option>Hotel1</option>
                                            <option>Hotel2</option>
                                            <option>Hotel3</option>
                                        </select>  
                                    </div>
                                    <div className='mb-3'>
                                        <select className='form-select' multiple size={2}>
                                            <option>F1</option>
                                            <option>F2</option>
                                            <option>F3</option>
                                            <option>F4</option>
                                        </select>  
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <button  className="btn shadow-lg">Update</button>
                                    </div>
                                    <div className="mt-3">
                                        <Link to='/admin/features' className={styles.link}>Back to List</Link>
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

export default UpdateFeature;