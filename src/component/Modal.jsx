import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./css/modal.css"
import Emoji from "./img/emoji.png"

function ModalWin({show,hide,modalTitle,submitForm,getInput,setImage,imagePreview,btnTxt,name}) {

  return (

    <>

      <Modal show={show} onHide={hide} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="post-top-flex">
            <div className="profile">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QCEUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGgcAigAYkZCTUQwYTAwMGE2YjAxMDAwMGI4MDEwMDAwMGEwMjAwMDAzYjAyMDAwMDc4MDIwMDAwZTYwMjAwMDAzMTAzMDAwMDYyMDMwMDAwOTUwMzAwMDBjYzAzMDAwMDNjMDQwMDAwAP/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/CABEIACgAKAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAABgIFBwT/xAAXAQEBAQEAAAAAAAAAAAAAAAACAQAD/9oADAMBAAIQAxAAAAHynePq0xjv81HnAtcQ9VpSTNZy7PPxEpwqunCKND5//8QAHhAAAQUAAgMAAAAAAAAAAAAAAwECBAUQABESEyL/2gAIAQEAAQUC4mLoRuI4sLpZEYoUypVgRwlYKssJKmDkBvtCDpz7mGGPDyvd4LG+jXZEIzn/xAAaEQACAwEBAAAAAAAAAAAAAAABAgAQEQMx/9oACAEDAQE/AZo3KwnydlBYNSxq/8QAGhEAAgIDAAAAAAAAAAAAAAAAAREAEAMhQf/aAAgBAgEBPwERadMdmMlKjBX/xAAoEAACAQIDBgcAAAAAAAAAAAABAhEAAxAhQQQSEyIyYSAjMVGxwfD/2gAIAQEABj8C8QVBJoW7RD3h1gH0qbixjxCPNYQg+6cvnuNkNZ/TR5YGOocAx3p9kKLwQAwOtE2t6ctcdm7k0T7cvzXUcmYRh//EACIQAQABBAEDBQAAAAAAAAAAAAERABAhQVExYYEgkaGx8f/aAAgBAQABPyH1aY3wBTlucg48VIQLm5Wh4XE36p4pAEDyZ60FXMEZ73LMyNHT9rB8TdSmGfeoKEsGW7+QH4KiAaS7SihDFC6sNv/aAAwDAQACAAMAAAAQ7C8vj8ih8//EABoRAAEFAQAAAAAAAAAAAAAAAAEAEBExUSH/2gAIAQMBAT8QKimPWkbRgjAGuqt//8QAGxEBAAICAwAAAAAAAAAAAAAAAQAQETEhUWH/2gAIAQIBAT8QjJwHFAeIBF7a1m9f/8QAHxABAQACAQUBAQAAAAAAAAAAAREAITEQQVFhgXHR/9oACAEBAAE/EMGTDOqAJAaq8Ysl09K8fMQfdwnSo3s3zx1CjBXlGxN3h2XAoR8oB1HguYjlv9uTR3e+OoUERGqUKsANIH7ksIMpuNXIR774U0VpFge2+rmNfeH+GChoU+Avwp8MssC+wHb729P/2Q==" alt="" />
              <div className='profile-name-center'>
                <p className='profile-name'>{name}</p>
              </div>
            </div>

          </div>
          <form onSubmit={submitForm}>
            <textarea name="" id="creatPostTextArea" placeholder='Whats in your mind?' onChange={
              getInput
            }></textarea>

            <div className="imagePreview">
              <img src={imagePreview} alt="" />
            </div>


            <div className='modalemoji'>
              <div className="image-icon">
                <img src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" />
              </div>
              <div className="emoji-flex">
                <img src={Emoji} alt="" />
              </div>
            </div>


            <div className="modaliconBox">
              <div className="modalIconBoxHeading">
                Add to you post
              </div>
              <div className="modal-icons">
                <div className="icon-box-modal-view">
                  <div className="photoImageIcon">
                  <label for="inputTag" className='hiddenInput'>
               <input type="file" id='inputTag'
                  onChange={setImage}
                /> 
                    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" className="x1lliihq x1k90msu x2h7rmj x1qfuztq xdb1l0v xxk0z11 xvy4d1p"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z" transform="translate(352 156.5)"></path><path fill-rule="nonzero" d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z" transform="translate(352 156.5)"></path></g></g></svg>
                    </label>
                  </div>
                </div>
                <div className="icon-box-modal-view">
                  <div className="people">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div></div><div className="icon-box-modal-view">
                  <div className="smile">
                    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" className="x1lliihq x1k90msu x2h7rmj x1qfuztq xedzdh8 xxk0z11 xvy4d1p"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z" transform="translate(353.5 156.5)"></path><path fill-rule="nonzero" d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z" transform="translate(353.5 156.5)"></path><path d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192" transform="translate(353.5 156.5)"></path></g></g></svg>
                  </div></div><div className="icon-box-modal-view">
                  <div className="location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </div></div><div className="icon-box-modal-view">
                  <div className="flag">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-flag-fill" viewBox="0 0 16 16">
                      <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
                    </svg>
                  </div>

                </div>
                <div className="icon-box-modal-view">
                  <div className="three-dot">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </div>

                </div>


              </div>
            </div>
            
          </form>

          {/* <button onClick={props.uploadImage} >submit</button> */}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={submitForm}>
           {btnTxt}
          </Button>
        </Modal.Footer>
      </Modal>































    </>
  );
}
export default ModalWin;