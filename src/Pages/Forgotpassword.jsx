import React from 'react'
import '../Styles/Forms.css'
import { Link } from 'react-router-dom'

function Forgotpassword() {
    return (
        <>
            <section class="head-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-5 col-md-12 col-sm-12" id="img-side">
                            <div class="texts">
                                <h1>The Best Scrum Experience</h1>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12 col-sm-10" id="form-side">
                            <div className="go-down"></div>
                            <h3 class="join">Forgot Password?</h3>
                            <p class="form-p">Please, enter your email</p>
                            <div class="container" id="form1">
                                <form action="">
                                    <div class="row">
                                        <div className="sign-row">
                                            <div class="col-lg-8 col-md-12 col-sm-12" id="input-field">
                                                <label for="">Email Address</label><br />
                                                <input type="email" name="Email" class="form-control" id='emaill' />
                                            </div>
                                        </div>
                                        <div class="centered-btns">
                                            <button class="mt-4 submit-btn">Login</button>
                                            <p class="already-signed">Don't have an account? <Link to='/Register'>Register</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Forgotpassword