import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function ServHeader() {
    return (
        <>

            <nav class="navbar navbar-expand-lg" aria-label="Ninth navbar example">
                <div class="container-xl">
                    <img src="/whitelogo.png" alt="BrandLogo" className='img-fluid logo' />
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample07XL">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/' class="nav-links" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-links active" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <Link to='/Services' class="nav-links active" aria-current="page">Services</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-links active" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                        <a href="#" class="call-us d-flex align-items-center">
                            <span class="icon-phone"><i class="bi bi-envelope-at-fill"></i></span>
                            <span>123-489-9381</span>
                        </a>
                    </div>
                </div>
            </nav>
            <div class="hero overlay inner-page">
                <div class="container">
                    <div class="row align-items-center justify-content-center text-center pt-5">
                        <div class="col-lg-6">
                            <h1 class="heading text-white mb-3" data-aos="fade-up">Our Services</h1>
                            <p>We’ll Guide You On A Journey Of Clear Communication, Team Empowerment AND Timely Project Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServHeader