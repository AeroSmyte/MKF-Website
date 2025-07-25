import "./ImageInfoBlock.css";

function ImageInfoBlock({title, contentText, img}) {
  return (
    <div className='content-container'>
        <img src={img} alt="person fighting with potential" />
        <div className='text-content'> 
            <h1>{title}</h1>
            <p>{contentText}</p>    
        </div>
        
    </div>
  )
}

export default ImageInfoBlock