import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

const settings= {
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive:[
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ]
}

  return <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
        <p>Bharat Go made our family vacation truly unforgettable! The itinerary was perfect, the accommodations were great, and their support was fantastic. We can't wait to plan our next adventure with them!   </p>
    
    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
    </div>
    <h6 className='mb-0 mt-3'>Abhishek Jaiswal</h6>
    <p>Customer</p>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>As a regular client, I can confidently say that Bharat Go consistently delivers exceptional service. They understand my travel preferences and always suggest amazing options. Trustworthy and reliable</p>
    
    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
    </div>
    <h6 className='mb-0 mt-3'>Nikkita Sharma</h6>
    <p>Customer</p>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>Living in Ludhiana, it's great to have such a professional and friendly travel agency right here. They helped me plan my dream trip abroad, and it was even better than I imagined. Thank you, Bharat Go!</p>
    
    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
    </div>
    <h6 className='mb-0 mt-3'>Neeraj Khanna</h6>
    <p>Customer</p>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>I was a bit nervous about booking online, but Bharat Go made the process so easy and stress-free. Their team was always available to answer my questions, and the trip itself was flawless. Highly impressed!</p>
    
    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
    </div>
    <h6 className='mb-0 mt-3'>Sahil Malhan</h6>
    <p>Customer</p>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>The personalized attention I received from Bharat Go was outstanding. They listened to what I wanted and crafted a unique itinerary that perfectly matched my interests. It felt like they truly cared about making my trip special. </p>
    
    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
    </div>
    <h6 className='mb-0 mt-3'>Jia Chhopra</h6>
    <p>Customer</p>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>I've recommended Bharat Go to all my family and friends. Their service is consistently outstanding, and they always go above and beyond to ensure a smooth and enjoyable travel experience. Whether it's a domestic getaway or an international escapade, they handle everything with professionalism and a personal touch.</p>
    
    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
    </div>
    <h6 className='mb-0 mt-3'>Neha Kapoor</h6>
    <p>Customer</p>
    </div>
  </Slider>
}

export default Testimonials
