import React from 'react'

function Footer() {
  return (
    <>
        <div class="site-footer">
	<div class="container">
		<div class="row">
			<div class="col-lg-6">
				<div class="widget">
					<h3>About</h3>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
				</div> 
				<div class="widget">
					<address>43 Raymouth Rd. Baltemoer, <br/> London 3910</address>
					<ul class="list-unstyled links">
						<li><a href="tel://11234567890">+1(123)-456-7890</a></li>
						<li><a href="tel://11234567890">+1(123)-456-7890</a></li>
						<li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
					</ul>
				</div> 
			</div> 
			
			<div class="col-lg-6">
				<div class="widget">
					<h3>Quick Links</h3>
					<ul class="list-unstyled links mb-4">
						<li><a href="#">Home</a></li>
						<li><a href="#">Courses</a></li>
						<li><a href="#">Contact us</a></li>
					</ul>

					<h3>Let's Connect</h3>
					<ul class="list-unstyled social">
						<li className='p-2'><a href="#"><span class="icon-instagram"><i class="bi bi-facebook"></i></span></a></li>
						<li className='p-2'><a href="#"><span class="icon-twitter"><i class="bi bi-linkedin"></i></span></a></li>
						<li className='p-2'><a href="#"><span class="icon-facebook"><i class="bi bi-instagram"></i></span></a></li>
						<li className='p-2'><a href="#"><span class="icon-linkedin"><i class="bi bi-twitter-x"></i></span></a></li>
						<li className='p-2'><a href="#"><span class="icon-pinterest"><i class="bi bi-youtube"></i></span></a></li>
					</ul>
				</div>
			</div> 
		</div> 

		<div class="row mt-5">
			<div class="col-12 text-center">

            <p>Copyright &copy;All Rights Reserved. Designed by Ebenezer Nwolisa</p>
          </div>
        </div>
      </div> 
    </div>
    </>
  )
}

export default Footer