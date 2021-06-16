import React, { useState } from 'react'
import './Account.css'
import { authentificationService } from '../Services/authentificationService'
import { useEffect } from 'react'
import { FaCheckCircle, FaSave } from "react-icons/fa";

function Account() {

    const[user,setUser]= useState('')
    console.log(user)
    useEffect(() => {
        authentificationService.getUser().then(result =>setUser(result))
        let li = document.querySelectorAll('.nav-tabs>li>a')
        let content = document.querySelector('#menu1')
        let content2 = document.querySelector('#menu2')
        li[0].addEventListener('click', function () {
            this.classList.add('active')
            li[1].classList.remove('active')
            content.classList.add('active')
            content.classList.add('show')
            content2.classList.remove('active')
            content2.classList.remove('show')
        })

        li[1].addEventListener('click', function () {
            this.classList.add('active')
            li[0].classList.remove('active')
            content2.classList.add('active')
            content2.classList.add('show')
            content.classList.remove('active')
            content.classList.remove('show')
        })

        let updateBtn = document.querySelector('.btn-link ')
        let accord = document.querySelector('.accord')
        let close = document.querySelector('.close')
        updateBtn.addEventListener('click', function () {
            this.classList.add('disabled')
            accord.classList.add('personDetails_active')
        })

        close.addEventListener('click', function () {
            accord.classList.remove('personDetails_active')
            updateBtn.classList.remove('disabled')
        })

        return () => {
            li[0].removeEventListener()
            li[1].removeEventListener()
            content.removeEventListener()
            content2.removeEventListener()
            updateBtn.removeEventListener()
            accord.removeEventListener()
            close.removeEventListener()
        }
    }, [])

    const name = user.name
    const [fullname, setFullname] = useState('')
    const [msisdn, setMsisdn] = useState('')
    const [address, setAddress] = useState('')
    const [existing_password, setExisting_password] = useState('')
    const [confirm_password, setConfirm_password] = useState('')
    const [new_password, setNew_password] = useState('')

    const handleProfileChange = async (e) => {
        e.preventDefault()
        authentificationService.updateProfile(name, fullname, msisdn, address)
        console.log(name, fullname, msisdn, address)
    }

    const handlePasswordChange = async (e) => {
        e.preventDefault()
        authentificationService.updatePassword(name, fullname, msisdn, address, existing_password, confirm_password, new_password)
        console.log(name, fullname, msisdn, address, existing_password, confirm_password, new_password)

    }
    return (
        <div className="profile-area">
            <h3 className="admin-heading bg-offwhite">
                <a className="btn-link pbtn " data-id="edit-personal-details"><i className="fas fa-edit mr-1"></i>Update</a>
                <p>Personal Profile</p>
                <span>Your Personal information</span>
            </h3>

            <div id="edit-personal-details" className="accord bg-offwhite shadow "  >
                <div className="content-edit-area">
                    <div className="edit-header">
                        <h5 className="title">Personal Information</h5>
                        <button type="button" className="close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="edit-content">
                        <form onSubmit={handleProfileChange} id="personaldetails" >

                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label for="Name"><b>Full Name</b></label>
                                        <input type="text" name="fullname" className="form-control" data-pr-form="firstName" id="firstName" placeholder="Full Name" onChange={e => setFullname(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label for="Number"><b>Mobile <span className="text-muted font-weight-500">(Primary)</span></b></label>
                                        <input id="Number" name="msisdn" type="text" className="form-control" data-pr-form="numberid" id="" onChange={e => setMsisdn(e.target.value)} required placeholder="Number" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="mobile-number">About/Address</label>
                                                <input type="text" name="address" className="form-control" data-pr-form="mobile-number" id="mobile-number" onChange={e => setAddress(e.target.value)} required />
                                            </div>
                                        </div>
                                    </div>

                                    <button className="btn btn-default" type="submit"><FaSave />Save Changes</button>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>


                <div className="content-edit-area">
                    <div className="edit-header">
                        <h5 className="title">Change Password | Security</h5>
                    </div>
                    <div className="edit-content">
                        <form onSubmit={handlePasswordChange} id="change-password">
                            <input type="hidden" name="_token" value="1fZZzqWC0fx1NLr2ZRD0D4kx8fC0jsDz5ysBgGsy" />
                            <div className="form-group">
                                <label for="Current-pass">Confirm Current Password</label>
                                <input type="password" name="existing_password" className="form-control" data-pr-form="Current-pass" id="Current-pass" required onChange={e => setExisting_password(e.target.value)} placeholder="Confirm Current Password" />
                            </div>
                            <div className="form-group">
                                <label for="new-password">New Password</label>
                                <input type="password" name="new_password" className="form-control" data-pr-form="new-password" id="new-Password" required onChange={e => setNew_password(e.target.value)} placeholder="Enter New Password" />
                            </div>
                            <div className="form-group">
                                <label for="confirmPassword">Confirm New Password</label>
                                <input type="password" name="confirm_password" className="form-control" data-pr-form="confirmg-password" id="confirm-Password" required onChange={e => setConfirm_password(e.target.value)} placeholder="Enter Confirm New Password" />
                            </div>
                            <button className="btn btn-default" type="submit"><FaSave /> Update Password</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="infoItems shadow">
                <ul className="nav nav-tabs">
                    <li><a data-toggle="tab" href="#menu1" className="active">Personal information</a></li>
                    <li><a data-toggle="tab" href="#menu2">Login and security</a></li>
                </ul>

                <div className="tab-content">
                    <div id="menu1" className="tab-pane fade in active show ">
                        <div className="row">
                            <p className="col-sm-3"><b>Full Name</b></p>
                            <p className="col-sm-9">{user.name}</p>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm-3"><b>Email</b></p>
                            <p className="col-sm-9">{user.email}</p>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm-3"><b>Mobile</b></p>
                            <p className="col-sm-9">{user.msisdn}</p>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm-3"><b>Address</b></p>
                            <p className="col-sm-9">{user.address}</p>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm-3"><b>Account Status</b></p>
                            <p className="col-sm-9"><span className="text-success" data-toggle="tooltip" data-original-title="Active"><FaCheckCircle color='green' /></span></p>
                        </div>
                    </div>

                    <div id="menu2" className="tab-pane fade">
                        <div className="row">
                            <p className="col-sm-3"><b>Active Login Time</b></p>
                            <p className="col-sm-9"> {user.active_login_at} </p>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm-3"><b>Active Login IP</b></p>
                            <p className="col-sm-9">{user.active_login_ip} </p>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm-3"><b>Last Login Time</b></p>
                            <p className="col-sm-9">{user.last_login_at} </p>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm-3"><b>Last Login IP</b></p>
                            <p className="col-sm-9">{user.last_login_ip} </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
