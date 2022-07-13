import React, { Fragment } from 'react';
import styles from '../../Register/Form.module.scss';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

function AddService(){
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
                                        <h3>Add Service</h3>
                                    </div>
                                    <div className='mb-3'>
                                        <select className='form-select'>
                                            <option>--Select--</option>
                                            <option>Service1</option>
                                            <option>Service2</option>
                                            <option>Service3</option>
                                        </select>  
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" name="Service" placeholder='Service'/>  
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <button  className="btn shadow-lg">Add</button>
                                    </div>
                                    <div className="mt-3">
                                        <Link to='/admin/services' className={styles.link}>Back to List</Link>
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

export default AddService;