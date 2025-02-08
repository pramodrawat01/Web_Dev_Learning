
import React from 'react'

const Filter = ({filterData}) =>{

    let category = filterData.category
    let setCategory = filterData.setCategory

    function onFilterHandler(title){
        setCategory(title)
    }

    return (
        <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
            {
                filterData.map( (data) => {
                    return (
                        <div key={data.id}>
                            <button className={`text-lg px-2 py-1 rounded-md font-medium
                                text-white bg-black hover:bg-opacity-80 border-2 transition-all duration-300`}
                                onClick={ () => onFilterHandler(data.title)}>
                                {data.title}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Filter