import React from 'react';

import { MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


import "./Home.css"

export default function RowCard() {
 

  return (
    <div>
    <MDBCard style={{ maxWidth: '540px' }}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid />
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>
  </div>

    
  );
}
