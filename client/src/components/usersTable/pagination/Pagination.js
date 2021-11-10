import React, {useState} from 'react'
import './pagination.sass'
import {Link} from 'react-router-dom'
import PagArrow from './pagArrow/PagArrow'


const Pagination = ({pagesLength, activePage, count = 50}) => {
    const ITEM_WIDTH = 56
    const CAROUSER_WIDTH = ITEM_WIDTH * pagesLength
    const TRACK_WIDTH = 280

    const pagesNumbers = []
    for(let i = 1; i <=pagesLength; i++){
        pagesNumbers.push(i)
    }

    const [position, setPosition] = useState(0 - ITEM_WIDTH * (activePage - 1))
    const [isFistSlide, setIsFirstSlide] = useState(position >= 0)
    const [isLastSlide, setIsLastSlide] = useState(position <= -CAROUSER_WIDTH + TRACK_WIDTH )

    const handleNext = () => {
        setIsFirstSlide(false)
        setPosition(prev => prev - ITEM_WIDTH)
        setIsLastSlide(position - ITEM_WIDTH <= -CAROUSER_WIDTH + TRACK_WIDTH)
    }
    const handlePrev = () => {
        setIsLastSlide(false)
        setPosition(prev => prev + ITEM_WIDTH)
        setIsFirstSlide(position + ITEM_WIDTH >= 0)
    }

    return (
        <div className="Pagination-container">
            <PagArrow left
                      disable={isFistSlide}
                      handleClick={handlePrev}
            />
            <div className="Pagination-track">
                <div className="Pagination-carousel"
                    style={{transform: `translateX(${position}px)`}}
                >
                    {
                        pagesNumbers.map((number, idx) => (
                            <Link to={`/usersList/${number}?count=${count}`}
                                  key={number}
                                  className={
                                     activePage === idx + 1 ?
                                         'Pagination-item Item-active'
                                         :
                                         'Pagination-item'
                                  }>
                                {number}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <PagArrow right
                      disable={isLastSlide}
                      handleClick={handleNext}
            />
        </div>
    )
}

export default Pagination