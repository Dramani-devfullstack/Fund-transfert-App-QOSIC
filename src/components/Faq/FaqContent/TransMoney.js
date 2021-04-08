import React, { Fragment } from 'react'
import '../../MoneyTransfert/MoneyTransfert.css'

function TransMoney() {
  return (
    <Fragment>

            <div id="trasn-money" className="tab-pane fade in active show">
                          <div className="accordion" id="accordion1">
                            <div className="accordion-item">
                              <h5 className="collapsed" data-toggle="collapse" data-target="#tm-1" aria-expanded="true">
                                Access Your Mobile Wallet
                              </h5>
                              <div id="tm-1" className="collapse" data-parent="#accordion">
                                <div className="acr-body">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscied do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspen disse ultrices gravida.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h5 className="collapsed" data-toggle="collapse" data-target="#tm-2" aria-expanded="false">
                                Input Wallet Informations
                              </h5>
        
                              <div id="tm-2" className="collapse show" data-parent="#accordion">
                                <div className="acr-body">
                                  <p>Molestie eu blandit eu sodales, nulla vitae nulla tempor et porta, ante nec commodo. Nulla non fringilla urna dolor vivamus, vulputate eu neque vivamus lacus in, imperdiet id sed malesuada per.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h5 className="collapsed" data-toggle="collapse" data-target="#tm-3" aria-expanded="false">
                                Confirm information and payover 
                              </h5>
        
                              <div id="tm-3" className="collapse" data-parent="#accordion">
                                <div className="acr-body">
                                  <p>Blandit eu sodales, nulla vitae nulla tempor et porta, ante nec commodo. Nulla non fringilla urna dolor vivamus, vulputate eu neque vivamus lacus in, imperdiet id sed malesuada per.</p>
                                </div>                    
                              </div>
                            </div>
                          </div>
                        </div>

      
    </Fragment>
  )
}

export default TransMoney
