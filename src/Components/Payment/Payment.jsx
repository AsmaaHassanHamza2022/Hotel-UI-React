import React, { Fragment } from "react";
import styles from '../Register/Form.module.scss';
import  style  from "./Payment.module.scss";
import {Link,useParams,useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useEffect } from "react";
import Swal from 'sweetalert2';



function Payment(){
    const {register,handleSubmit,formState:{errors},reset} = useForm({
        mode: "onTouched"
    });
    let id=useParams().id;
    console.log(id);
    const [data,setData]=useState([]);
    const [filterData,setFilterData]=useState([]);
    const [userData,setUserData]=useState([]);
    const[object,setObject]=useState([]);
    useEffect(()=>{
       let mydata=JSON.parse(localStorage.getItem('data'))
       setData(mydata);
       console.log("data",data);
       //========================
       let myFilterData=JSON.parse(localStorage.getItem('filterData'))
       let filterArr=[];
       filterArr.push(myFilterData)
       setFilterData(filterArr);
       console.log("Filter",filterData);
       //================================
       let myUserData=JSON.parse(localStorage.getItem('userLogin'));
       let userArr=[];
       userArr.push(myUserData);
       setUserData(userArr);
       console.log("User",userData);
       //=================================


       
    },[])
    const onSuccess=()=> {  
        Swal.fire({   
          text: 'Book Success',  
          icon: 'success',   
          confirmButtonColor: '#478e9a',  
          confirmButtonText: 'OK'  
        });  
      } 
    let navigate=useNavigate();
    const onSubmit = () => {
        // let newObj={...object};
        // newObj[e.target.id]=e.target.value;
        // setObject(newObj);
        // localStorage.setItem('visa',JSON.stringify(object));
        onSuccess();
        navigate('/home')
       
        
    };
    return(
        <Fragment>
            <div className={styles.container}>
                <div className="container">
                     <div className={styles.form}>
                       <form onSubmit={handleSubmit(onSubmit)}>
                       <div className="row">
                            <div className="col-12">
                                <div className="input-group mb-4 d-flex justify-content-center">
                                    <h3>Payment</h3>
                                </div>
                                {userData.map((item,index)=>{
                                    return(
                                        <div className="input-group mb-4" key={index}>
                                            <input type="text" className="form-control shadow-sm" placeholder="UserName"
                                            {...register("UserName")}
                                            name="UserName" value={item.UserName}
                                            />
                                        </div>
                                    )
                                })}
                                {
                                    data.map((item,index)=>{
                                        return(
                                            <div key={index}>
                                                <div className="input-group mb-4">
                                                    <input type="text" className="form-control shadow-sm" placeholder="Hotel Id"
                                                    name="hotelId"  value={item.hotelId}
                                                    {...register("hotelId")}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="input-group mb-4">
                                    <input type="text" className="form-control shadow-sm" placeholder="Room Id"
                                    name="roomId" value={id}
                                    {...register("roomId")}
                                    />
                                </div>
                                {
                                    filterData.map((item,index)=>{
                                        return(
                                            <div key={index}>
                                                <div className="input-group mb-4">
                                                    <input type="text" className="form-control shadow-sm" placeholder="No of rooms"
                                                    name="numberOfRooms" value={item.NumberOfRooms}
                                                    {...register("numberOfRooms")}
                                                    />
                                                </div>
                                                <div className="input-group mb-4">
                                                    <input type="text" className="form-control shadow-sm" placeholder="No of Adults"
                                                    name="numberOfAdult" value={item.NumberOfAdult}
                                                    {...register("numberOfAdult")}
                                                    />
                                                </div>
                                                <div className="input-group mb-4">
                                                    <input type="text" className="form-control shadow-sm" placeholder="No of Children"
                                                    name="numberOfChildren" value={item.NumberOfChildren}
                                                    {...register("numberOfChildren")}
                                                    />
                                                </div>
                                                <div className="input-group mb-4">
                                                    <input type="text" className="form-control shadow-sm" placeholder="Start Date"
                                                    name="startDate"  value={item.StartDate}
                                                    {...register("startDate")}
                                                    />
                                                </div>
                                                <div className="input-group mb-4">
                                                    <input type="text" className="form-control shadow-sm" placeholder="End Date"
                                                    name="endDate"  value={item.EndDate}
                                                    {...register("endDate")}
                                                />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <h5 className="mb-4" style={{color:'#327885'}}>Enter Visa Info</h5>
                                <div className="input-group mb-4">
                                    <input type="text" className="form-control shadow-sm" placeholder="Visa Number"
                                    id="visaNo"   name="visaNo" value={object.visaNo}
                                    {...register("visaNo")}
                                    />
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control shadow-sm" placeholder="Visa Password"
                                    id="visaPass" name='visaPass' value={object.visaPass}
                                    {...register("visaPass")}
                                    />
                                </div>
                                <div className="mb-5">
                                     <button className="btn shadow-lg" >Book</button>
                                </div>
                            </div>
                        </div>
                       </form>
                     </div>
                </div>
            </div>
            <div className={style.notify}>
                <ToastContainer position="bottom-left"/>
            </div>
        </Fragment>
    )
}

export default Payment;