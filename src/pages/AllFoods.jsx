import axios from "axios";
import { useState, useEffect } from "react";
import SingleFood from "../components/SingleFood";
import Title from "../utility/Title";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllFoods = () => {
  const [allFood, setAllFood] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFood, setFilteredFood] = useState([]);


//   Pagination state
const [itemPerPage, setItemPerPage]= useState(10)
const [currentPage, setCurrentPage] = useState(0)
const  {count}  = useLoaderData();

  const totalPage = Math.ceil(count / itemPerPage);
  console.log(totalPage)

  const pages =[...Array(totalPage).keys()];
  console.log(pages)
  


  useEffect(() => {
    axios.get(`https://restaurent-server.vercel.app/api/v1/foods?page=${currentPage}&size=${itemPerPage}`).then((res) => {
      setAllFood(res.data);
      // Initialize filteredFood with allFood
      setFilteredFood(res.data);
    });
  }, [currentPage, itemPerPage ]);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    // Filter the allFood array based on the search query
    const filteredResults = allFood.filter((food) =>
      food.name.toLowerCase().includes(query)
    );
    setFilteredFood(filteredResults);
  };

  const handleItemPerPage =(e)=>{
    const val = parseInt(e.target.value)
    setItemPerPage(val)
    setCurrentPage(0)
  }


  return (
    <div className="container mx-auto max-w-7xl">
      <Helmet><title> All Foods </title></Helmet>
      <div className="py-10">
        {/* <SearchInput onChange={handleSearchInputChange} value={searchQuery} /> */}
        {/* Srarch Box start */}
        <div>
          <div className="flex px-5">
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
              style={{zIndex: 1}}
            >
              All categories{" "}
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mockups
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Templates
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Design
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logos
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                onChange={handleSearchInputChange}
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required=""
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>
        {/* Srarch Box end */}
      </div>

      <Title> All Foods: {count} </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center">
        {filteredFood?.map((food) => (
          <SingleFood key={food.foodname} food={food}></SingleFood>
        ))}
      </div>


      {/* Pagination  */}
      <p className="mt-20 flex items-center justify-center">current page: {currentPage}</p>
      <div className=" flex flex-wrap mt-5  justify-center items-center ">
       
        <button onClick={()=>currentPage>0 && setCurrentPage(currentPage-1)} className="mr-10 btn btn-success">prev</button>
        {pages?.map((page) => (
          <button
          onClick={()=>setCurrentPage(page)} 
          className={`w-10 h-10 rounded-full mr-5 bg-base-300 ${currentPage === page && 'active'} `}
          key={page}>
            {page}
          </button>
        ))}
        <button onClick={()=> currentPage < pages.length-1 && setCurrentPage(currentPage+1)} className="btn btn-success mr-5">next</button>
        <div className="ml-10">
            <select value={itemPerPage} onChange={handleItemPerPage}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
