import React from 'react'
import './EventCard.css';

const EventCard = ({ title, description, location, image, isFree }) => {
    return (
        <div className='firstbox'>
            <div className="event-card">
                {isFree && <div className="free-tag">Free</div>}
                
                <img src={image?image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qdvtT10hehHKT30f62OgC4o-EgLI39bSuNZVx5WTjy_UFI_xVUQZ_4yX05ZfBMPx5gE&usqp=CAU'} alt={title} />

                <div className="event-info">
                    <h3>{title?title:'No Name'}</h3>
                    <p>
                        {location ? location : 'India'} 
                    </p>
                    <p>
                        {description}
                    </p>
                    <h6>Currently Available </h6>
                </div>

            </div>
        </div>


    )
};

export default EventCard;