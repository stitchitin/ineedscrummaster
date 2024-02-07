import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
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
								<a class="nav-links" aria-current="page" href="#">Home</a>
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

			<div class="hero overlay">
				<img src="images/blob.svg" alt="" class="img-fluid blob" />
				<div class="container">
					<div class="row align-items-center justify-content-between pt-5">
						<div class="col-lg-6 text-center text-lg-start pe-lg-5">
							<h1 class="heading text-white mb-3" data-aos="fade-up">Unleash the Power of Agile Methodology</h1>
							<p class="text-white mb-5" data-aos="fade-up" data-aos-delay="100">Empower Your Team to Navigate Complexity, Respond Efficiently to Change, and Consistently Deliver High-Quality Outcomes on Time.</p>
							<div class="align-items-center mb-5 mm" data-aos="fade-up" data-aos-delay="200">
								<Link to='/Register' class="btn btn-outline-white-reverse me-4">Register</Link>
								<Link to='/Login' class="text-white glightbox">Login</Link>
							</div>
						</div>
						<div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
							<div class="img-wrap">
								<img src="/womanon.jpg" alt="Image" class="img-fluid rounded" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header