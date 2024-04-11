import {
  useLoaderData,
  useParams
} from "react-router-dom"

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id)
  //  console.log(idInt)

  const singleData = data.find(item => item.id === idInt);
  //  console.log(singleData)
  const {
    category_Name,
    estate_title,
    image_url,
    description,
    price,
    status,
    area,
    location,
    segment_name,
    facilities } = singleData;


  return (
    <>
      <div className="card card-side bg-base-100 mt-20 shadow-xl ">
        <figure ><img className="w-[600px] h-full rounded-xl" src={image_url} alt={estate_title} /></figure>
        <div className="card-body ">
          <h2 className="card-title text-3xl">{estate_title}</h2>
          <div className="text-xl text-gray-600 font-semibold">
            <p>{description}</p>
            <p>{category_Name}</p>
            <p>Price: <span className="text-red-600">{price}</span> </p>
            <p>Status: {status}</p>
            <p>Location: {location}</p>
            <p>Segmenet: {segment_name}</p>
            <p>{facilities.join(', ')}</p>
          </div>


          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;