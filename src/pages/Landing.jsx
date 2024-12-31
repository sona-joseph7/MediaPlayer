import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/music.avif'
// importing necessary images for feature page
import feature1 from '../assets/img1.webp'
import feature2 from '../assets/img2.jpeg'
import feature3 from '../assets/img3.jpeg'
import { Card, Button } from 'react-bootstrap'
//rafce
const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      {/* landing part */}
      <div className='row align-item-center'>

        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'./home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col"></div>
        {/* Landing image */}
        <div className="col-lg-6">
        <img src={LandingImg} className='img-fluid' alt="" />
        </div>
      </div>
      {/* feature part */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>

          <div className='col-lg-4'>
            <Card style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload, view and remove videos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-4'>
            <Card style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Categorise videos</Card.Title>
                <Card.Text>
                  Users can categorise videos by drag and drop features
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-4'>
            <Card style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Users can manage watch history of all videos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* last */}
      <div className='my-5 row align-items-center border rounded p-5'>
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Play Everything:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam exercitationem perferendis consequatur ex reprehenderit </p>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Categorise videos:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam exercitationem perferendis consequatur ex reprehenderit </p>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Managing History:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam exercitationem perferendis consequatur ex reprehenderit </p>

        </div>
        <div className="col"></div>

        <div className="col-lg-6">        <iframe width="100%" height="375" src="https://www.youtube.com/embed/g0eO74UmRBs" title="Kal Ho Naa Ho Full Video - Title Track|Shah Rukh Khan,Saif Ali,Preity|Sonu Nigam|Karan J" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </div>
      </div>
    </div>
    
  )
}

export default Landing