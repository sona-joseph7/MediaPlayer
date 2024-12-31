//rafce
import { Button, Modal, FloatingLabel, Form } from 'react-bootstrap';
import React, { useState } from 'react'
import { saveVideoAPI } from '../services/allAPI';


const Add = ({setAddResonseFromHome}) => {

  const [invalidYoutubeLink, setInvalidYoutubeLink] = useState(false)
  
  const [videoDetails,setVideoDetails]=useState({
    caption:"", imgUrl:"", youtubeLink:""
  })
  console.log(videoDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractEmbedLinkFromYoutubeLink = (userInputYoutubeLink) =>{
    // steps to create embed code from youtube link
    if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
      console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));
      const videoId = userInputYoutubeLink.split("v=")[1].slice(0,11)
      setInvalidYoutubeLink(false)
      setVideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})

      
    }else{
      setInvalidYoutubeLink(true)
      setVideoDetails({...videoDetails,youtubeLink:""})
    }
  }

  const handeUploadVideo = async ()=>{
    //Object destructuring...
    const {caption, imgUrl, youtubeLink} = videoDetails
    if(caption && imgUrl && youtubeLink){
      // alert("Proceed storing data...")
      try{
        const result = await saveVideoAPI(videoDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          alert("Video Uploaded Successful...!!!")
          handleClose()
          // Pass the result to view component
          setAddResonseFromHome(result)
        }else{
          console.log(result);
          
        }
      }catch(err){
        console.log(err);
      }
      
    }else{
      alert("Please fill the Form...!!!")
    }
  }


  return (
  <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
          <FloatingLabel controlId="floatingCaption" label="Video Caption">
            <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image Url">
            <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgUrl:e.target.value})} type="text" placeholder="Video Image Url" />
          </FloatingLabel>
          <FloatingLabel className='mt-2' controlId="floatingLink" label="Video YouTube Link">
            <Form.Control onChange={e=>extractEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video YouTube Link" />
          </FloatingLabel>
          {
            invalidYoutubeLink && 
            <div className='text-danger fw-bolder'>Invalid Youtube Link....</div>
          }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handeUploadVideo} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
  </>
  )
}

export default Add