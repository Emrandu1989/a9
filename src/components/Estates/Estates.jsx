import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Estate from "../Estate/Estate";

import Aos from 'aos';
import 'aos/dist/aos.css'


const Estates = () => {

    useEffect(()=>{
         Aos.init({duration: 1000})
    },[])

    const [category, setCategory] = useState([])
    const [showAll, setShowAll] = useState(false)
    console.log(category);
    const [data, setData] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All')

    //   console.log(data)
    useEffect(() => {
        fetch("/MainData.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        fetch("/Category.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setShowAll(false)

    }

    const displayedRooms = showAll ? data : activeCategory === "All" ? data : data.filter(item => item.category_Name === activeCategory);







    return (
        <div className="p-4 md:p-0">
            <div className="my-5 flex flex-wrap gap-5">
                <button
                    data-aos="fade-right"
                    className={`btn ${activeCategory === "All" ? 'text-white rounded-xl h-[20px] bg-[#B89146] border-none font-[400] text-[15px]' : ''}`}
                    onClick={() => handleCategoryClick("All")}
                >
                    All
                </button>
                {
                    category.map(data => <Link 
                        key={data.id} data-aos="fade-right"
                        onClick={() => handleCategoryClick(data.category_Name)} className={`btn ${activeCategory === data.category_Name ? 'text-white rounded-xl h-[20px] bg-[#B89146] border-none font-[400] text-[15px]' : ''}`}>{data.category_Name} </Link>)
                }
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-5">
                {
                    displayedRooms.map(item => <Estate
                        key={item.id}
                        item={item}
                    />)
                }
            </div>
        </div>
    );
};

export default Estates;