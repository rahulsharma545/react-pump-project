import React from "react"
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import LanguageIcon from '@mui/icons-material/Language';
function App() {
    return <section >
        <div className="first-container">
            <div className="first">
                <img src="asserts/1.png" alt="trophy" />
            </div>
            <div className="second">
                <img className="logo" src="asserts/logo.png" alt="Logo" />
                <p className="second_p">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
                <ul>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
                <img className="award-img" src="../asserts/2.png" alt="winning" />
                <p className="last-p">Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>

            </div>
        </div>
        <div className="second-container">
            <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <div className="companies-logo">
                <img src="asserts/3.png" alt="companies-logo" />
            </div>
            <div className="small">
                <small>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </small>
            </div>

        </div>
        <div className="hr"></div>
        <div className="third-container">
            <p><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></p>
            <div className="another-last-p">
                <p >CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
            </div>
        </div>
        <div className="links">
            <p>  <CallRoundedIcon className="icon"/>Toll free 1800 200 1234</p>
         
            <p><FacebookSharpIcon className="icon-fb"/>logo www.facebook.com/cripumps</p>
            <p> <LanguageIcon className="icon-earth"/>logo www.crigroups.com</p>
        </div>
    </section>
}

export default App