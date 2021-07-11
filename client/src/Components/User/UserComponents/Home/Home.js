// import React from 'react'
// import Banner from './Banner'
// import RowPost from './RowPost'
// import RowCard from './RowCard'


// const Home = () => {
//   return (
//     <div >
//      <Banner />
//       <section className="section">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <h3 className="main-heading">Our Company</h3>
//               <div className="outerline mx-auto"></div>
//               <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <RowPost />
//       <RowCard />
 
//     </div>
//   )
// }

// export default Home



import React from 'react'
// import Header from '../Header/Header'
import CategoriesBanner from './CategoriesBanner'
import MainBanner from './MainBanner'
import PopularProducts from './PopularProducts'
import poster from '../../../../Images/Mi-TV-4A-Banner.png'
import miLedAd1 from '../../../../Images/Mi-TV-4A-Banner.png'
import miLedAd2 from '../../../../Images/Xiaomi-Mi-TV-4-Buy-Online.png'
import './Home.css'

export default function Home() {
    document.body.style.backgroundColor = 'white'
    return (    
        <div id='home'>
           
            <CategoriesBanner/> 
            <MainBanner/>
            <PopularProducts/>
            <div className='adContainer'>
                <img src={poster} className='img-fluid ads' alt="imag"></img>
                <img src={miLedAd1} className='img-fluid ads' alt="imag"></img>
                <img src={miLedAd2} className='img-fluid ads'alt="imag"></img>
                <img src={miLedAd1} className='img-fluid ads' alt="imag"></img>
            </div>
        </div>
    )
}