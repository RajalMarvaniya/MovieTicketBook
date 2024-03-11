// import React from 'react';
// import './MovieCard.css'; // Import your CSS file
// import { useNavigate } from 'react-router-dom';
// const TheaterCard = ({ theaterName, imageUrl }) => {
//     const Navigate = useNavigate();
//     const handleCardClick = () => {
//         // Navigate to the booking form with the theaterId as a parameter
//         navigate(`/movie-booking-form/${theaterId}`);
//     };
//     return (
//         <div className="card">
            
//             <img src={imageUrl} className="card-img-top" alt="Movie" />
//             <div className="card-body">
//                 <h5 className="card-title">{theaterName}</h5>
//             </div>
//         </div>
//     );
// };

// export default TheaterCard;


import React from 'react';
import './MovieCard.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const TheaterCard = ({ theaterName, imageUrl, theaterId }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        // Navigate to the booking form with the theaterId as a parameter
        navigate(`/movietbookingform`,{state : theaterId});
    };

    return (
        <div className="card" onClick={handleCardClick}> {/* Add onClick event */}
            <img src={imageUrl} className="card-img-top" alt="Movie" />
            <div className="card-body">
                <h5 className="card-title">{theaterName}</h5>
            </div>
        </div>
    );
};

export default TheaterCard;
