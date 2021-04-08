import React, {Fragment} from 'react'

function Account() {
    return (
        <Fragment>
           
    <div class="header03">
    
        <div class="header-main">
          <div class="container d-flex align-items-center">
              <a class="logo d-inline-flex" href="http://masizatech.com">
                  <img src="http://masizatech.com/assets/logo.png" alt=""/>
              </a>
              <nav class="primary-menu ml-auto">
                  <a id="mobile-menu-toggler" href="#"><i class="fas fa-bars"></i></a>
                  <ul>
                      <li class="current-menu-item"><a href="http://masizatech.com">Home</a>
                      <li><a href="http://masizatech.com/locale/fr">FR<span class="flag-icon flag-icon-fr text-dark"></span></a> </li>
                      <li><a href="http://masizatech.com/locale/en">EN<span class="flag-icon flag-icon-us text-dark"></span></a> </li>
                      
                        <li class="has-menu-child pro-menu-drop">
                          <a href="http://masizatech.com/account">
                              <div class="header-pro-thumb">
                                    <img class="rounded-circle" src="http://masizatech.com/assets/avatar.png" alt=""/>
                                     </div>Hello, Faizou <i class="fas fa-chevron-down"></i>
                          </a>
                          <ul class="dropdown-menu-md sub-menu profile-drop">
                              <li class="dropdown-header">
                                  <div>
                                      <h5 class="hidden-xs m-b-0 text-primary text-ellipsis"></h5>
                                      <div class="small text-muted"><span></span></div>
                                  </div>
                              </li>
                              <li>
                                  <hr class="mx-n3 mt-0"/>
                              </li>
                              <li class="nav__create-new-profile-link">
                                  <a href="http://masizatech.com/account/profile">
                                      <span>View personal profile</span>
                                  </a>
                              </li>
                              <li class="nav__create-new-profile-link">
                                <a href="http://masizatech.com/account/successful/transactions">
                                    <span>View transactions</span>
                                </a>
                            </li>
                              <li class="divider"></li>
                              
                              <li class="nav__dropdown-menu-items">
                                  <a href="http://masizatech.com/logout" onclick="event.preventDefault();
                                  document.getElementById('userlogout-form').submit();"><i class="icon icon-logout"></i>
                                  <span>
                                      <span class="fas fa-sign-out-alt" style='color:red'></span> Logout
                                 </span></a>
                             </li>
                             <form id="userlogout-form" action="http://masizatech.com/logout" method="POST" style="display: none;">
                                <input type="hidden" name="_token" value="XjildUhQRlq6MUZXhgbOsbqQdAFOMIqXWWZmTLHV"/>                             
                             </form>
                          </ul>
                      </li>
                      
                      <li><a class="current-menu-item" onclick="event.preventDefault(); document.getElementById('userlogout-form').submit();">
                        <i class="fas fa-sign-out-alt" style='color:red'></i>
                        </a></li>
                        </li>
                    </ul>
              </nav>
          </div>
        </div>
      </div>
      
         <div class="profilebar">
          <div class="container">
              <div class="row">
                  
                  <div class="col">
                      <div class="local-time">
                          <p><b>Local Time:</b> 2021-04-08 11:45:14</p>
                      </div>
                  </div>
                  <div class="col">
                      <div class="local-time">
                          <p><b>Last Visit:</b> 2021-04-08 11:45:14</p>
                      </div>
                  </div>
                  <div class="col">
                    <div class="local-time">
                        <p><b>Last Visit IP:</b> 41.138.90.87</p>
                    </div>
                </div>
                  <div class="col notify-col text-right">
                      <div class="notify-btn"><a href=""><i class="fas fa-shield-alt"></i></a></div>
                  </div>
              </div>
          </div>
      </div>

        <div id="content" class="py-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 sidebar">
                        <div class="widget admin-widget p-0">
    <div class="Profile-menu">
        <ul class="nav secondary-nav">
            <li class="nav-item  active "><a class="nav-link" href="http://masizatech.com/account"><i class="fas fa-tachometer-alt"></i>Dashboard</a></li>
            <li class="nav-item "><a class="nav-link" href="http://masizatech.com/account/profile"><i class="fab fa-autoprefixer"></i>Account</a></li>
            <li class="nav-item "><a class="nav-link" href="http://masizatech.com/account/payment/details"><i class="far fa-paper-plane"></i>Send Money</a></li>
            <li class="nav-item "><a class="nav-link" href="http://masizatech.com/account/successful/transactions"><i class="fas fa-list-ul"></i>Transactions</a></li>
            
        </ul>
    </div>
</div>
        
        </div>
                    
                    <div class="col-lg-9">
                        <div class="profile-content">
                            
        
                            <div class="bg-light shadow-sm rounded p-4 mb-4">
                                <h3 class="text-5 font-weight-400 text-warning mb-4">Recent Payment Statistics<span class="text-muted text-4"></span></h3>
                                <div class="row">
                                       <div class="col col-sm col-lg">
                                    
                                    <table class="table table-striped">
                                      <thead>
                                        <tr>
                                          <th>Service</th>
                                          <th>Value</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Today Transaction Count</td>
                                          <td>0</td>
                                        </tr>
                                        <tr>
                                          <td>Today Transaction Amount</td>
                                          <td>0FCFA | 0NGN</td>
                                        </tr>
                                      
                                      </tbody>
                                    </table>
                    
                                  </div>
                                  
                    
                                  
                    
                                </div>
                              </div>

                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
       
<footer class="footer">
    
    <div class="foo-btm">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="foo-navigation">
              <ul>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy & Policy</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Notice</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="copyright">Copyright &copy; <a href="https://qosic.com">QOS</a> 2021</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
          
    </Fragment>
    )
}

export default Account
