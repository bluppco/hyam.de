// IMPORTS USESTATE FROM REACT
import { useState } from "react"

const WinksCounter = ( props ) => {

    const [ count, setCount ] = useState(0)

    const handleImageClick = () => {

        setCount( count + 1 )

    }

    return(
        <div className="flex gap-2 items-center">
            <div className="cursor-pointer" onClick={ handleImageClick }>
                <svg class="css-1cqphp8" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15.5" stroke="#111111"></circle><path d="M8 18.9512C9.22626 22.1754 12.3456 24.4665 16.0001 24.4665C19.6546 24.4665 22.774 22.1754 24.0002 18.9512" stroke="#111111"></path><circle cx="10.375" cy="13.875" r="1.625" fill="#111111"></circle><circle cx="21.625" cy="13.875" r="1.625" fill="#111111"></circle></svg>
            </div>
            <p className="font-lausanne uppercase font-light">{ count } WINKS</p>
        </div>
    )

}

export default WinksCounter
