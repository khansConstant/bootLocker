import React from 'react'
import Products from './Products'

export default function
    () {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white border-0">
                <img src="/assests/1.jpg" class="card-img" alt="Background" height="550px" />
                <div className="container">
                    <div class="card-img-overlay d-flex flex-column justify-content">
                        <h5 class="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
                        <p class="card-text">CHECK OUT NEW TRENDS</p>
                    </div>
                </div>

            </div>
            <Products />
        </div>
    )
}
