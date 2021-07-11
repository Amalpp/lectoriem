import React from 'react'
// import Image from '../../../../images/Mask.png'
// import iphoneImage from '../../../../images/—Pngtree—cartoon hand-painted student learning design_3597205.png'
// import macAdvertisement from '../../../../images/buyIcon.png'
// import sonyBraviaBanner from '../../../../images/buyIcon.png'
import iphoneBanner from '../../../../Images/amal-book-cover.png'

import './MainBanner.css'

export default function MainBanner() {
    return (
        <div>
            {/* <img id='bannerImage' src={Image}></img>
            <div className="content-left">
             <h1>GET THE NEW IPHONE 12</h1>
            </div> */}
                
                <div id="carouselExampleCaptions" class="carousel slide carousel-fade mainBanner" data-bs-ride="carousel">
                  
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={iphoneBanner} class="d-block w-100 bannerImage img-fluid" alt="..."/>
                           
                        </div>
                        
                    </div>
                    
                </div>
                        
        </div>
    )
}