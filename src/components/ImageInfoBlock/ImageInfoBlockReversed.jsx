import "./ImageInfoBlockReversed.css";

function ImageInfoBlockReversed({title, contentText, img}) {
  return (
    <div className='content-container-reversed'>
        <div className='text-content-reversed'> 
            <h1>{title}</h1> 
            <p>{contentText}</p> 
        </div>
        <img src={img} alt="person fighting with potential" />
    </div>
  )
}

export default ImageInfoBlockReversed;