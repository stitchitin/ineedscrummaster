import React, { useState } from 'react'
import '../Styles/Forms.css'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone:'',
        password:'',
        confirm_password:'',
        full_name:'',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('/ineeds/add_user.php', {
            method: 'POST',
            header: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Data sent successfully!');
            navigate("/Services")

          } else {
            console.error('Failed to send data:', response.statusText);
          }
        } catch (error) {
          console.error('Error sending data:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
    

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
                        <div class="col-lg-7 col-md-12 col-sm-12" id="form-side">
                            <h3 class="join">Join for the <br />Best Scrum Experience</h3>
                            <p class="form-p">Sign up to embark on an unforgettable learning experience.</p>
                            <div class="container" id="form1">
                                <form onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="col-lg-6" id="input-field">
                                            <label for="">Username</label><br />
                                            <input type="text" name="username" class="form-control" value={formData.username} onChange={handleChange}/>
                                        </div>
                                        <div class="col-lg-6" id="input-field">
                                            <label for="">Fullname</label><br />
                                            <input type="text" name="full_name" class="form-control" value={formData.full_name} onChange={handleChange}/>
                                        </div>
                                        <div class="col-lg-6" id="input-field">
                                            <label for="">Email Address</label><br />
                                            <input type="email" name="email" class="form-control" value={formData.email} onChange={handleChange}/>
                                        </div>
                                        <div class="col-lg-6" id="input-field">
                                            <label for="">Phone Number</label><br />
                                            <input type="number" name="phone" class="form-control" value={formData.phone} onChange={handleChange}/>
                                        </div>
                                        <div class="col-lg-6" id="input-field">
                                            <label for="">Password</label><br />
                                            <input type="password" name="password" class="form-control" value={formData.password} onChange={handleChange}/>
                                        </div>
                                        <div class="col-lg-6" id="input-field">
                                            <label for="">Confirm Password</label><br />
                                            <input type="password" name="confirm_password" class="form-control" value={formData.confirm_password} onChange={handleChange}/>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                By signing up, you agree to our Terms and Conditions.
                                            </label>
                                        </div>
                                        <div class="centered-btns">
                                            <button class="submit-btn" type='submit'>Sign Up</button>
                                            <p class="already-signed">Already registered? <Link to='/Login'>Login</Link></p>
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

export default Register
