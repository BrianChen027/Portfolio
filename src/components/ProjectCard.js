import React, { useState } from 'react';
import { Col, Modal, Button } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, imgUrl_bg, intro_1, intro_2, intro_3, intro_skills, intro_5, githubUrl}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // 更新 handleShow 函數以接收事件參數
  const handleShow = (event) => {
    // 防止事件在 DOM 樹中進一步傳播
    event.stopPropagation();
    setShow(true);
  };

  return (
    <>
      {/* 為了避免冒泡，這裡不直接在 Col 上調用 handleShow，而是在內部元素上調用 */}
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx" onClick={handleShow}> {/* 現在這裡處理點擊事件 */}
          <img src={imgUrl} alt="Project" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      {/* Modal 定義 */}
      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal2" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* 图片容器，使用 justify-content: center; 使图片水平居中 */}
          <div style={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px', marginBottom: '40px', marginLeft: 'auto', marginRight: 'auto'}}>
            <img
              src={imgUrl_bg} // 替换成您希望显示的图片地址
              alt="Img 1"
              style={{width: '100%', borderRadius: '10px', maxWidth: '500px' }} // 根据需要调整图片大小
            />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            
            <div>
              <p className='custom-modal2_text'>{intro_1}</p>
              <p className='custom-modal2_text'>{intro_2}</p>
              <p className='custom-modal2_text'>{intro_3}</p>
              <p className='custom-modal2_skills'>{intro_skills}</p>
              <p className='custom-modal2_text'>{intro_5}</p>
            </div>
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* GitHub 链接按钮 */}
          <Button variant="primary" href={githubUrl} target="_blank">
            Know More
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
