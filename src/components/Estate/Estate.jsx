import React from 'react';
import { Link } from 'react-router-dom';

const Estate = ({ item }) => {
    // console.log(item)
    const { id,
        category_Name,
        estate_title,
        image_url,
        description,
        price,
        status,
        area,
        location,
        segment_name,
        facilities } = item;
    return (
        <>
            <div className="card border-2 border-green-400 bg-base-100 shadow-xl">
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
                    <div  className="card-actions justify-end">
                        <Link to={`/details/${id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Estate;