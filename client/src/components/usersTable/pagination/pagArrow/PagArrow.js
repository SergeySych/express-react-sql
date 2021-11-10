import React from 'react'
import './pagArrow.sass'

const PagArrow = ({right, left, disable, handleClick}) => {
    let classNames =
        (right && 'PagArrow PagArrow-right')
        ||
        (left && 'PagArrow PagArrow-left')

    classNames = disable ? classNames + ' PagArrow-disable' : classNames
    return (
        disable ?
            <i className={classNames}></i>
            :
            <i className={classNames}
                onClick={handleClick}
            ></i>
    )
}

export default PagArrow