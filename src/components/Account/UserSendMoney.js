import React, { useEffect, useState } from 'react'
import './Account.scss'
import './styles.scss'
import './Account.css'
import { authentificationService } from '../Services/authentificationService'
import UserConfirmMoney from './UserConfirmMoney'
import ReceiveUserMoney from './ReceiveUserMoney'
import Validation_url from './Validation_url'
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom"



function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function UserSendMoney() {

 

    const [TransfertInfo, setTransfertInfo] = useState(false)
    const [ReceiveInfo, setRecieveInfo] = useState(false)
    const [verification, setVerification] = useState(false)
    const [initial, setInitial]=useState(1)

    let query = useQuery()
   
    console.log(query.get('status'))
    
  
    console.log(TransfertInfo)
    // console.log(ReceiveInfo)
    console.log(verification)
   
    useEffect(() => {

        if(query.get('status') !== null){
            setVerification(true)   
            setInitial(4) 
        }

        let confirmBtn = document.querySelector('#confirmBtn')
        let detailBtn = document.querySelector('#detailBtn')
        let sucessBtn = document.querySelector('#sucessBtn')
        let pills_profile = document.querySelector('#pills-profile')
        let pills_profile2 = document.querySelector('#pills-profile2') 
        let pills_profile3 = document.querySelector('#pills-profile3')
        let pills_profile4 = document.querySelector('#pills-profile4')
           
        if(initial === 2){           
            confirmBtn.classList.add('active')
            detailBtn.classList.remove('active')
            pills_profile.classList.remove('show')
            pills_profile.classList.remove('active')
            pills_profile2.classList.add('show')
            pills_profile2.classList.add('active')

            confirmBtn.addEventListener('click', () => {
                confirmBtn.classList.add('active')
                detailBtn.classList.remove('active')
                pills_profile.classList.remove('show')
                pills_profile.classList.remove('active')
                pills_profile2.classList.add('show')
                pills_profile2.classList.add('active')
              } )
        }   
        
        
        if(initial === 3){           
            confirmBtn.classList.add('active')
            detailBtn.classList.remove('active')
            pills_profile.classList.remove('show')
            pills_profile.classList.remove('active')
            pills_profile3.classList.add('show')
            pills_profile3.classList.add('active')

            confirmBtn.addEventListener('click', () => {
                confirmBtn.classList.add('active')
                detailBtn.classList.remove('active')
                pills_profile.classList.remove('show')
                pills_profile.classList.remove('active')
                pills_profile3.classList.add('show')
                pills_profile3.classList.add('active')
              } )
        }   

        if(initial === 4){           
            sucessBtn.classList.add('active')
            detailBtn.classList.remove('active')
            pills_profile.classList.remove('show')
            pills_profile.classList.remove('active')
            pills_profile4.classList.add('show')
            pills_profile4.classList.add('active')

            sucessBtn.addEventListener('click', () => {
                confirmBtn.classList.add('active')
                detailBtn.classList.remove('active')
                pills_profile.classList.remove('show')
                pills_profile.classList.remove('active')
                pills_profile4.classList.add('show')
                pills_profile4.classList.add('active')
              } )
        }


        let li = document.querySelectorAll('.nav-tabs>li>a')
        let sendMoney = document.querySelector('#send-money')
        let recieveMoney = document.querySelector('#receive-money')
        li[0].addEventListener('click', function () {
            this.classList.add('active')
            li[1].classList.remove('active')
            sendMoney.classList.add('show')
            sendMoney.classList.add('active')
            recieveMoney.classList.remove('active')
            recieveMoney.classList.remove('show')
        })
        li[1].addEventListener('click', function () {
            this.classList.add('active')
            li[0].classList.remove('active')
            sendMoney.classList.remove('show')
            sendMoney.classList.remove('active')
            recieveMoney.classList.add('active')
            recieveMoney.classList.add('show')
        })

      
        return () => {
            li[0].removeEventListener('click', null)
            li[1].removeEventListener('click', null)
            sendMoney.removeEventListener('click', null)
            recieveMoney.removeEventListener('click', null)
        }
    }, [initial])

    const [receiver_number, setReceiver_number] = useState('')
    const [amount, setAmount] = useState('')
    const [purpose, setPurpose] = useState('')
    const [email, setEmail] = useState('')
    const [account_number, setAccount_number] = useState('')
    const [bank_code, setBank_code] = useState('Select Bank')
    
    const handleSendMoney = (e) => {
        e.preventDefault()
        authentificationService.confirmNGN_XOF(receiver_number, amount, purpose, email)
            .then(result => {
                if(result.status === "000"){
                    setTransfertInfo(result)
                    setInitial(2)
                }                
            })
    }

    const handleReceiveMoney = async (e) => {
        e.preventDefault()
        console.log(account_number, amount, purpose, email, bank_code)
        authentificationService.confirmXOF_NGN(account_number, amount, purpose, email, bank_code)
        
            .then(result => {
                if(result.status === "000"){
                    setRecieveInfo(result)
                    setInitial(3)
                }  
            })
    }

   
    return (
        <div className="profile-content">
            <h3 className="admin-heading">Send Money</h3>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a id='detailBtn' className="nav-link  active" href="">Details</a>
                </li>
                <li className="nav-item">
                    <a id='confirmBtn' className="nav-link" >Confirm</a>
                </li>
                <li className="nav-item">
                    <a id='sucessBtn' className="nav-link" >Success</a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-profile" role="tabpanel"
                    aria-labelledby="pills-profile-tab">
                    <div className="banner v7">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="ban-content">
                                        <h1>Send Money Anytime, Anywhere</h1>
                                        <p></p>

                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-tab">
                                        <ul className="nav nav-tabs">
                                            <li><a className='active' data-toggle="tab" >NGN to
                                                XOF</a></li>
                                            <li><a data-toggle="tab" >XOF to NGN</a></li>
                                        </ul>
                                        <div className="tab-content currency-form">
                                            <div id="send-money" className="tab-pane fade in active show ">
                                                <form onSubmit={handleSendMoney} >
                                                    <input type="hidden" name="_token" value="nlBBtpl2Snl74zqDLdNWMnEPZQ9n8a8YjrflGnuY" />                                                                <div className="form-field">
                                                        <label>send amount <span>&#8358;</span></label>
                                                        <div className="join-field">
                                                            <input type="number"
                                                                required min="100" max="500000" name="amount"
                                                                onChange={(e) => { setAmount(e.target.value) }}
                                                                placeholder="1000" />
                                                            <input type="hidden" required
                                                                name="send_provider_id" value="3" />
                                                            <div className="curr-select">
                                                                <span className="selected"><img
                                                                    src="http://masizatech.com/assets/fend/images/flags/nigeria.png"
                                                                    alt="" />NGN &nbsp;
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-field">
                                                        <label>Receiver Number (MOOV/MTN BJ) </label>
                                                        <div className="join-field">
                                                            <input type="text" required
                                                                onChange={(e) => {setReceiver_number(e.target.value)}}
                                                                name="receiver_number"
                                                                placeholder="22990505050" />
                                                        </div>
                                                    </div>

                                                    <div className="form-field">
                                                        <label>Purpose</label>
                                                        <div className="join-field">
                                                            <input type="text" required
                                                                name="purpose"
                                                                onChange={(e) => { setPurpose(e.target.value) }}
                                                                placeholder="" />
                                                        </div>
                                                    </div>
                                                    <button type="submit"
                                                        className="btn btn-block btn-filled form-btn">
                                                        <span className="bh"></span> <span>Continue Transaction
                                                            <i className="fas fa-arrow-right"></i></span>
                                                    </button>
                                                    <span className="accept-terms">By clicking continue, i am agree
                                                        with <a href="#">Terms &amp; Policy</a></span>
                                                </form>
                                            </div>

                                            <div id="receive-money" className="tab-pane fade">
                                                <form onSubmit={handleReceiveMoney}>
                                                    <input type="hidden"  />                                                                <div className="form-field">
                                                        <label>send amount XOF</label>
                                                        <div className="join-field">
                                                            <input type="text" id="amount" required
                                                                min="100"
                                                                max="500000" name="amount"
                                                                onChange={(e) => { setAmount(e.target.value) }}
                                                                placeholder="1000" />
                                                            <div className="curr-select">
                                                                <span className="selected"><img
                                                                    src="http://masizatech.com/assets/fend/images/flags/benin.png"
                                                                    alt="" />XOF </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-field">
                                                        <label for="rcv_country">Receiver Bank</label>
                                                        <select id="rcv_country"
                                                            required name="bank_code"
                                                            onChange={(e) => { setBank_code(e.target.value) }}
                                                            defaultValue={bank_code}                           >
                                                            <option value="1">Select Bank</option>
                                                            <option value="044">
                                                                Access Bank</option>
                                                            <option value="023">
                                                                Citi Bank</option>
                                                            <option value="050">
                                                                EcoBank PLC</option>
                                                            <option value="011">
                                                                First Bank PLC</option>
                                                            <option value="214">
                                                                First City Monument Bank</option>
                                                            <option value="070">
                                                                Fidelity Bank</option>
                                                            <option value="058">
                                                                Guaranty Trust Bank</option>
                                                            <option value="076">
                                                                Polaris bank</option>
                                                            <option value="221">
                                                                Stanbic IBTC Bank</option>
                                                            <option value="068">
                                                                Standard Chaterted bank PLC</option>
                                                            <option value="232">
                                                                Sterling Bank PLC</option>
                                                            <option value="033">
                                                                United Bank for Africa</option>
                                                            <option value="032">
                                                                Union Bank PLC</option>
                                                            <option value="035">
                                                                Wema Bank PLC</option>
                                                            <option value="057">
                                                                Zenith bank PLC</option>
                                                            <option value="215">
                                                                Unity Bank PLC</option>
                                                            <option value="101">
                                                                ProvidusBank PLC</option>
                                                            <option value="082">
                                                                Keystone Bank</option>
                                                            <option value="301">
                                                                Jaiz Bank</option>
                                                            <option value="030">
                                                                Heritage Bank</option>
                                                            <option value="100">
                                                                Suntrust Bank</option>
                                                            <option value="608">
                                                                FINATRUST MICROFINANCE BANK</option>
                                                            <option value="090175">
                                                                Rubies Microfinance Bank</option>
                                                            <option value="090267">
                                                                Kuda</option>
                                                            <option value="090115">
                                                                TCF MFB</option>
                                                            <option value="400001">
                                                                FSDH Merchant Bank</option>
                                                            <option value="502">
                                                                Rand merchant Bank</option>
                                                            <option value="103">
                                                                Globus Bank</option>
                                                            <option value="327">
                                                                Paga</option>
                                                            <option value="000026">
                                                                Taj Bank Limited</option>
                                                            <option value="100022">
                                                                GoMoney</option>
                                                            <option value="090180">
                                                                AMJU Unique Microfinance Bank</option>
                                                            <option value="090393">
                                                                BRIDGEWAY MICROFINANCE BANK</option>
                                                            <option value="090328">
                                                                Eyowo MFB</option>
                                                            <option value="090281">
                                                                Mint-Finex MICROFINANCE BANK</option>
                                                            <option value="070006">
                                                                Covenant Microfinance Bank</option>
                                                            <option value="090110">
                                                                VFD Micro Finance Bank</option>
                                                            <option value="090317">
                                                                PatrickGold Microfinance Bank</option>
                                                            <option value="090325">
                                                                Sparkle</option>
                                                            <option value="305">
                                                                Paycom</option>
                                                            <option value="070001">
                                                                NPF MicroFinance Bank</option>
                                                            <option value="110001">
                                                                PayAttitude Online</option>
                                                            <option value="100027">
                                                                Intellifin</option>
                                                            <option value="100032">
                                                                Contec Global Infotech Limited (NowNow)</option>
                                                            <option value="100031">
                                                                FCMB Easy Account</option>
                                                            <option value="100030">
                                                                EcoMobile</option>
                                                            <option value="100029">
                                                                Innovectives Kesh</option>
                                                            <option value="100026">
                                                                One Finance</option>
                                                            <option value="100025">
                                                                Zinternet Nigera Limited</option>
                                                            <option value="100023">
                                                                TagPay</option>
                                                            <option value="100021">
                                                                Eartholeum</option>
                                                            <option value="100020">
                                                                MoneyBox</option>
                                                            <option value="100019">
                                                                Fidelity Mobile</option>
                                                            <option value="000019">
                                                                Enterprise Bank</option>
                                                            <option value="060001">
                                                                Coronation Merchant Bank</option>
                                                            <option value="060002">
                                                                FBNQUEST Merchant Bank</option>
                                                            <option value="060003">
                                                                Nova Merchant Bank</option>
                                                            <option value="070007">
                                                                Omoluabi savings and loans</option>
                                                            <option value="090001">
                                                                ASOSavings &amp; Loans</option>
                                                            <option value="090005">
                                                                Trustbond Mortgage Bank</option>
                                                            <option value="090006">
                                                                SafeTrust </option>
                                                            <option value="090107">
                                                                FBN Mortgages Limited</option>
                                                            <option value="100024">
                                                                Imperial Homes Mortgage Bank</option>
                                                            <option value="100028">
                                                                AG Mortgage Bank</option>
                                                            <option value="070009">
                                                                Gateway Mortgage Bank</option>
                                                            <option value="070010">
                                                                Abbey Mortgage Bank</option>
                                                            <option value="070011">
                                                                Refuge Mortgage Bank</option>
                                                            <option value="070012">
                                                                Lagos Building Investment Company</option>
                                                            <option value="070013">
                                                                Platinum Mortgage Bank</option>
                                                            <option value="070014">
                                                                First Generation Mortgage Bank</option>
                                                            <option value="070015">
                                                                Brent Mortgage Bank</option>
                                                            <option value="070016">
                                                                Infinity Trust Mortgage Bank</option>
                                                            <option value="090003">
                                                                Jubilee-Life Mortgage  Bank</option>
                                                            <option value="070017">
                                                                Haggai Mortgage Bank Limited</option>
                                                            <option value="090108">
                                                                New Prudential Bank</option>
                                                            <option value="070002">
                                                                Fortis Microfinance Bank</option>
                                                            <option value="070008">
                                                                Page Financials</option>
                                                            <option value="090004">
                                                                Parralex Microfinance bank</option>
                                                            <option value="090097">
                                                                Ekondo MFB</option>
                                                            <option value="090112">
                                                                Seed Capital Microfinance Bank</option>
                                                            <option value="090114">
                                                                Empire trust MFB</option>
                                                            <option value="090116">
                                                                AMML MFB</option>
                                                            <option value="090117">
                                                                Boctrust Microfinance Bank</option>
                                                            <option value="090118">
                                                                IBILE Microfinance Bank</option>
                                                            <option value="090119">
                                                                Ohafia Microfinance Bank</option>
                                                            <option value="090120">
                                                                Wetland Microfinance Bank</option>
                                                            <option value="090121">
                                                                Hasal Microfinance Bank</option>
                                                            <option value="090122">
                                                                Gowans Microfinance Bank</option>
                                                            <option value="090123">
                                                                Verite Microfinance Bank</option>
                                                            <option value="090124">
                                                                Xslnce Microfinance Bank</option>
                                                            <option value="090125">
                                                                Regent Microfinance Bank</option>
                                                            <option value="090126">
                                                                Fidfund Microfinance Bank</option>
                                                            <option value="090127">
                                                                BC Kash Microfinance Bank</option>
                                                            <option value="090128">
                                                                Ndiorah Microfinance Bank</option>
                                                            <option value="090129">
                                                                Money Trust Microfinance Bank</option>
                                                            <option value="090130">
                                                                Consumer Microfinance Bank</option>
                                                            <option value="090131">
                                                                Allworkers Microfinance Bank</option>
                                                            <option value="090132">
                                                                Richway Microfinance Bank</option>
                                                            <option value="090133">
                                                                AL-Barakah Microfinance Bank</option>
                                                            <option value="090134">
                                                                Accion Microfinance Bank</option>
                                                            <option value="090135">
                                                                Personal Trust Microfinance Bank</option>
                                                            <option value="090136">
                                                                Baobab Microfinance Bank</option>
                                                            <option value="090137">
                                                                PecanTrust Microfinance Bank</option>
                                                            <option value="090138">
                                                                Royal Exchange Microfinance Bank</option>
                                                            <option value="090139">
                                                                Visa Microfinance Bank</option>
                                                            <option value="090140">
                                                                Sagamu Microfinance Bank</option>
                                                            <option value="090141">
                                                                Chikum Microfinance Bank</option>
                                                            <option value="090142">
                                                                Yes Microfinance Bank</option>
                                                            <option value="090143">
                                                                Apeks Microfinance Bank</option>
                                                            <option value="090144">
                                                                CIT Microfinance Bank</option>
                                                            <option value="090145">
                                                                Fullrange Microfinance Bank</option>
                                                            <option value="090146">
                                                                Trident Microfinance Bank</option>
                                                            <option value="090147">
                                                                Hackman Microfinance Bank</option>
                                                            <option value="090148">
                                                                Bowen Microfinance Bank</option>
                                                            <option value="090149">
                                                                IRL Microfinance Bank</option>
                                                            <option value="090150">
                                                                Virtue Microfinance Bank</option>
                                                            <option value="090151">
                                                                Mutual Trust Microfinance Bank</option>
                                                            <option value="090152">
                                                                Nagarta Microfinance Bank</option>
                                                            <option value="090153">
                                                                FFS Microfinance Bank</option>
                                                            <option value="090154">
                                                                CEMCS Microfinance Bank</option>
                                                            <option value="090155">
                                                                La  Fayette Microfinance Bank</option>
                                                            <option value="090156">
                                                                e-Barcs Microfinance Bank</option>
                                                            <option value="090157">
                                                                Infinity Microfinance Bank</option>
                                                            <option value="090158">
                                                                Futo Microfinance Bank</option>
                                                            <option value="090159">
                                                                Credit Afrique Microfinance Bank</option>
                                                            <option value="090160">
                                                                Addosser Microfinance Bank</option>
                                                            <option value="090161">
                                                                Okpoga Microfinance Bank</option>
                                                            <option value="090162">
                                                                Stanford Microfinance Bak</option>
                                                            <option value="090164">
                                                                First Royal Microfinance Bank</option>
                                                            <option value="090165">
                                                                Petra Microfinance Bank</option>
                                                            <option value="090166">
                                                                Eso-E Microfinance Bank</option>
                                                            <option value="090167">
                                                                Daylight Microfinance Bank</option>
                                                            <option value="090168">
                                                                Gashua Microfinance Bank</option>
                                                            <option value="090169">
                                                                Alpha Kapital Microfinance Bank</option>
                                                            <option value="090171">
                                                                Mainstreet Microfinance Bank</option>
                                                            <option value="090172">
                                                                Astrapolaris Microfinance Bank</option>
                                                            <option value="090173">
                                                                Reliance Microfinance Bank</option>
                                                            <option value="090174">
                                                                Malachy Microfinance Bank</option>
                                                            <option value="090175">
                                                                HighStreet Microfinance Bank</option>
                                                            <option value="090176">
                                                                Bosak Microfinance Bank</option>
                                                            <option value="090177">
                                                                Lapo Microfinance Bank</option>
                                                            <option value="090178">
                                                                GreenBank Microfinance Bank</option>
                                                            <option value="090179">
                                                                FAST Microfinance Bank</option>
                                                            <option value="090188">
                                                                Baines Credit Microfinance Bank</option>
                                                            <option value="090189">
                                                                Esan Microfinance Bank</option>
                                                            <option value="090190">
                                                                Mutual Benefits Microfinance Bank</option>
                                                            <option value="090191">
                                                                KCMB Microfinance Bank</option>
                                                            <option value="090192">
                                                                Midland Microfinance Bank</option>
                                                            <option value="090193">
                                                                Unical Microfinance Bank</option>
                                                            <option value="090194">
                                                                NIRSAL Microfinance Bank</option>
                                                            <option value="090195">
                                                                Grooming Microfinance Bank</option>
                                                            <option value="090196">
                                                                Pennywise Microfinance Bank</option>
                                                            <option value="090197">
                                                                ABU Microfinance Bank</option>
                                                            <option value="090198">
                                                                RenMoney Microfinance Bank</option>
                                                            <option value="090205">
                                                                New Dawn Microfinance Bank</option>
                                                            <option value="090251">
                                                                UNN MFB</option>
                                                            <option value="090258">
                                                                Imo State Microfinance Bank</option>
                                                            <option value="090259">
                                                                Alekun Microfinance Bank</option>
                                                            <option value="090260">
                                                                Above Only Microfinance Bank</option>
                                                            <option value="090261">
                                                                Quickfund Microfinance Bank</option>
                                                            <option value="090262">
                                                                Stellas Microfinance Bank</option>
                                                            <option value="090263">
                                                                Navy Microfinance Bank</option>
                                                            <option value="090264">
                                                                Auchi Microfinance Bank</option>
                                                            <option value="090265">
                                                                Lovonus Microfinance Bank</option>
                                                            <option value="090266">
                                                                Uniben Microfinance Bank</option>
                                                            <option value="090268">
                                                                Adeyemi College Staff Microfinance Bank</option>
                                                            <option value="090269">
                                                                Greenville Microfinance Bank</option>
                                                            <option value="090270">
                                                                AB Microfinance Bank</option>
                                                            <option value="090271">
                                                                Lavender Microfinance Bank</option>
                                                            <option value="090272">
                                                                Olabisi Onabanjo University Microfinance Bank</option>
                                                            <option value="090273">
                                                                Emeralds Microfinance Bank</option>
                                                            <option value="090276">
                                                                Trustfund Microfinance Bank</option>
                                                            <option value="090277">
                                                                Al-Hayat Microfinance Bank</option>
                                                            <option value="100001">
                                                                FET</option>
                                                            <option value="100003">
                                                                Parkway-ReadyCash</option>
                                                            <option value="100005">
                                                                Cellulant</option>
                                                            <option value="100006">
                                                                eTranzact</option>
                                                            <option value="100007">
                                                                Stanbic IBTC @ease wallet</option>
                                                            <option value="100008">
                                                                Ecobank Xpress Account</option>
                                                            <option value="100009">
                                                                GTMobile</option>
                                                            <option value="100010">
                                                                TeasyMobile</option>
                                                            <option value="100011">
                                                                Mkudi</option>
                                                            <option value="100012">
                                                                VTNetworks</option>
                                                            <option value="100013">
                                                                AccessMobile</option>
                                                            <option value="100014">
                                                                FBNMobile</option>
                                                            <option value="100015">
                                                                Kegow</option>
                                                            <option value="100016">
                                                                FortisMobile</option>
                                                            <option value="100017">
                                                                Hedonmark</option>
                                                            <option value="100018">
                                                                ZenithMobile</option>
                                                            <option value="110002">
                                                                Flutterwave Technology Solutions Limited</option>
                                                            <option value="999999">
                                                                NIP Virtual Bank</option>
                                                            <option value="000025">
                                                                Titan Trust Bank</option>
                                                            <option value="303">
                                                                ChamsMobile</option>
                                                        </select>
                                                    </div>

                                                    <div className="form-field">
                                                        <label>Account Number</label>
                                                        <div className="join-field">
                                                            <input type="text" required
                                                                name="account_number"
                                                                placeholder=""
                                                                onChange={(e) => { setAccount_number(e.target.value) }} />
                                                        </div>
                                                    </div>

                                                    <div className="form-field">
                                                        <label>Purpose</label>
                                                        <div className="join-field">
                                                            <input type="text" required
                                                                name="purpose"
                                                                placeholder=""
                                                                onChange={(e) => {setPurpose(e.target.value) }} />
                                                        </div>
                                                    </div>

                                                    <div className="form-field">
                                                        <label>Receiver Email(Optional)</label>
                                                        <div className="join-field">
                                                            <input type="email" 
                                                                name="email" placeholder=""
                                                                onChange={(e) => {setEmail(e.target.value) }} />
                                                        </div>
                                                    </div>

                                                    <button type="submit"
                                                        className="btn btn-block btn-filled form-btn">
                                                        <span className="bh"></span> <span>Continue Transaction
                                                            <i className="fas fa-arrow-right"></i></span>
                                                    </button>
                                                    <span className="accept-terms">By clicking continue, i am agree
                                                        with <a href="#">Terms &amp; Policy</a></span>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
          { Boolean(TransfertInfo) && <UserConfirmMoney    TransfertInfo={TransfertInfo}/> }
          { Boolean(ReceiveInfo) &&  <ReceiveUserMoney   ReceiveInfo={ReceiveInfo}/>}
          { Boolean(verification) && <Validation_url/>}
         </div>
    )
}
export default UserSendMoney