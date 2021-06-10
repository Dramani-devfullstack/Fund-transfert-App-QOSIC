import React from 'react'

function ResetPassword() {
    return (
        <div>
   
    <div class="header03">  
        <div class="header-main">
          <div class="container d-flex align-items-center">
              <a class="logo d-inline-flex" href="http://masizatech.com">
                  <img src="http://masizatech.com/assets/logo.png" alt=""/>
              </a>
              <nav class="primary-menu ml-auto">
                  <a id="mobile-menu-toggler" href="#"><i class="fas fa-bars"></i></a>
                  <ul>
                      <li class="current-menu-item"><a href="http://masizatech.com">Home</a></li>
                      <li><a href="http://masizatech.com/locale/fr">FR<span class="flag-icon flag-icon-fr text-dark"></span></a> </li>
                      <li><a href="http://masizatech.com/locale/en">EN<span class="flag-icon flag-icon-us text-dark"></span></a> </li>
                      
                    </ul>
              </nav>
          </div>
      </div>  
    </div>

    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Reset Password</div>
                <div class="card-body">       
                    <form>
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control " name="email" value="" required autocomplete="email" autofocus/>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Send Password Reset Link
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <br/>
        </div>
    </div>
</div>
</div>
)
}

export default ResetPassword
