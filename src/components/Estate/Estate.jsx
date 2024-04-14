import React from 'react';
import { Link } from 'react-router-dom';

const Estate = ({ item }) => {
    // console.log(item)
    const { id,
        estate_title,
        image_url,
        description,
        price,
        status,
        area,
        segment_name,
    } = item;
    return (
        <>
            <div className="card border-2   bg-base-100 shadow-xl border-gray-300 mt-10">
                <figure><img className='w-full h-[250px]' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <div className='flex gap-5'>
                        <h5>Price: {price}</h5>
                        <h5>Status:{status}</h5>
                    </div>
                    <div className='flex gap-5'>
                        <h5>Area: {area}</h5>
                        <h5>Sagment: {segment_name}</h5>
                    </div>
                    <div className="card-actions justify-end mt-3">
                        <Link to={`/details/${id}`} className="btn btn-primary">View Property</Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Estate;