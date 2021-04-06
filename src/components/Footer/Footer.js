import React, { Fragment } from 'react'
import './Footer.css'

function Footer() {
    return (
        <Fragment>
                <div className="footer">
    
                <div className="foo-btm">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="foo-navigation">
                        <ul>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Privacy & Policy</a></li>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Notice</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="copyright">Copyright &copy; <a href="https://qosic.com">QOS</a> 2021</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Footer
