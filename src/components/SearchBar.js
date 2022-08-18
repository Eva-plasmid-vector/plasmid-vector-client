import React, {useState} from 'react'


const SearchBar = ( {placeholder, pastRelease} ) => {

    const [filteredData, setFilteredData] = useState([])

    const handleFilter = (event) => {
        const searchWord = event.target.value.toLowerCase();

        const newFilter = pastRelease.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord);
        })
        if (searchWord === ''){
            setFilteredData([])
        }else{
            setFilteredData(newFilter);
        }
    }

  return (
    <div className='search-bar' >
        <div className='search-bar-container'>
            <input id='search' type="search" name='search' 
                placeholder={placeholder} 
                onChange={handleFilter} 
            />

            { filteredData.length !== 0 && 

                <div className='search-result'>
                    {
                        filteredData.map((value, key)=>{
                            return <a 
                            className='asearch-result-item' 
                            href={value.link}>  
                            {value.title} 
                            </a>
                        })
                    }
                </div>
            }
            

        </div>

        {/* <input id='search-submit' type="submit" value='GO' /> */}
    </div>
  )
}

export default SearchBar