
import React from 'react'
import Banner from './Banner'
import RowPost from './RowPost'
import RowCard from './RowCard'


const SingleViewPage = () => {
  return (
    <div style={{maxWidth:"550px", margin:"0  auto"}} >
     <Banner />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="outerline mx-auto"></div>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </div>
          </div>
        </div>
      </section>
      <RowPost />
      <RowCard />
 
    </div>
  )
}

export default SingleViewPage
