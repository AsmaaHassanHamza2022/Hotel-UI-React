import React, { Fragment,useEffect,useState  } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles  from './Places.module.scss';
import img from '../../Images/4.jpg';


function Places(){
    // prep variable for carry top rated hotel
    let [topRatedHotels,settopRatedHotels]=useState([])

    // catch top rated hotels
    useEffect(()=>{
        fetch("https://localhost:7298/api/Hotels/Top Rating")
        .then((data)=>data.json())
        .then((res)=>settopRatedHotels(res))
    })

    const setting={    
        // autoplay:true,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
            }
        }
    return(
        <Fragment>
            <div className='container'>
                <div className={styles.container}>
                    <div className='row'>
                        <div className='mt-5 col-12 text-center'>
                        <h2 className={styles.h2}>Top Rated Rentals </h2>
                        </div>
                    </div>
                    <div className='row w-md-75 w-sm-100 mx-auto mt-4'>
                    <OwlCarousel className='owl-theme' loop margin={10} nav {...setting}>
                    {
                        topRatedHotels.map((TopRatedhotel,i)=>{

                            return(
                            <div key={i} className={styles.items}>
                                <div className="card" style={{"width":'18rem'}}>
                                    <img src={img} className="card-img-top" alt="hotel-name" />
                                    <div class="card-body">
                                        <h5 className="card-title">{TopRatedhotel.hotel.name}</h5>
                                        <div className="starts w-50 my-3 d-flex justify-content-between">
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        </div>
                                
                                        <p className="card-text">
                                            <i style={{"color":'#327885'}} class="fa-solid fa-city me-3"></i>
                                            {TopRatedhotel.hotel.city}</p>
                                        <p className="card-text">
                                        <i style={{"color":'#327885'}} class="fa-solid fa-globe me-3"></i>
                                            {TopRatedhotel.hotel.country}
                                            </p>
                                        
                                    </div>
                                   <div className="card-footer">
                                    <div className="d-flex  justify-content-between">
                                        <div className="description">
                                        <p className="lead">{TopRatedhotel.hotel.description}</p>
                                        </div>
                                        <div className="book-btn d-flex align-items-center">
                                        <div className="data">
                                        <h4 className="my-3  text-center">{TopRatedhotel.hotel.cheapestPrice
                                        } $</h4>
                                        <a href="#" className="btn btn-primary custom-btn">Book now</a>
                                        </div>
                                        
         
                                        </div>
         
                                    </div>
                                   </div>
                                    </div>
                                    {/* <img src={img} className={styles.img}/>
                                    <div className={styles.overlay}>
                                        <h4>Cairo</h4>
                                    </div> */}
                                </div>
                                )
                        }
                            )
                         
                           
                    }
 
                    </OwlCarousel>
                    </div>
                </div>
          
                <div className={styles.divider}></div>
  
            </div>
        </Fragment>
    )
}
export default Places;