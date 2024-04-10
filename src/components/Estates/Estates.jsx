import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Estate from "../Estate/Estate";


const Estates = ({ }) => {
    const [category, setCategory] = useState([])
    const [showAll, setShowAll] = useState(false)
    console.log(category);
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([])
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
        <>
            <div className="my-5 flex flex-wrap gap-5">
                <button
                    className={`btn ${activeCategory === "All" ? 'text-white rounded-xl h-[20px] bg-[#B89146] border-none font-[400] text-[15px]' : ''}`}
                    onClick={() => handleCategoryClick("All")}
                >
                    All
                </button>
                {
                    category.map(data => <Link onClick={() => handleCategoryClick(data.category_Name)}    className={`btn ${activeCategory === category.category_Name ? 'text-white rounded-xl h-[20px] bg-[#B89146] border-none font-[400] text-[15px]' : ''}`}>{data.category_Name} </Link>)
                }
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    displayedRooms.map(item => <Estate
                        key={item.id}
                        item={item}
                    />)
                }
            </div>
        </>
    );
};

export default Estates;