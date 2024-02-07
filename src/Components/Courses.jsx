import React from 'react'

function Courses() {
    return (
        <>
            <div class="section sec-news">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-lg-7">
                            <h1 class="heading text-primary">Our Courses</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card post-entry">
                                <a href="single.html"><img src="/surface-8HPLpr3hebU-unsplash.jpg" class="card-img-top" alt="Image"/></a>
                                <div class="card-body">
                                    <div><span class="text-uppercase font-weight-bold date">Course Duration</span></div>
                                    <h5 class="card-title"><a href="single.html">Project Management</a></h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque aliquam animi debitis molestias obcaecati!</p>
                                    <p class="mt-5 mb-0"><a href="#">View Course</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="card post-entry">
                                <a href="single.html"><img src="/womanon.jpg" class="card-img-top" alt="Image"/></a>
                                <div class="card-body">
                                    <div><span class="text-uppercase font-weight-bold date">Course Duration</span></div>
                                    <h5 class="card-title"><a href="single.html">Scrum Mastery</a></h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum magni quod! Lorem ipsum dolor sit amet conse.</p>
                                    <p class="mt-5 mb-0"><a href="#">View Course</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Courses