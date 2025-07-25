import './InfoBar.css';

function InfoBar() {
  return (
    <div className='info-container'>
        <div className="address-label">
            <i className="fa-solid fa-location-dot"></i>
            <div className="address-details">
                <h3>Address</h3>
                <p>1642 W. Howard St.</p>
                <p>Chicago, IL 60626</p>
            </div>
        </div>
        <div className="number-label">
            <i className="fa-solid fa-phone-volume"></i>
            <div className="number-details">
                <h3>Call/Email Us</h3>
                <p>(773)-465-8888</p>
            </div>
        </div>
    </div>
  )
}

export default InfoBar


/*
<div className="location-label">
          <i class="fa-light fa-location-dot"></i>
          <div className="location-details">
            <h3>Address</h3>
            <p>1642 W. Howard St. Chicago, IL 60626</p>
          </div>
        </div>

*/