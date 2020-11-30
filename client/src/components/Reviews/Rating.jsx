import React from 'react'
import { AiFillStar , AiOutlineStar } from 'react-icons/ai'

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
         {value >= 1
              ? <AiFillStar />
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : <AiOutlineStar />
          }
      </span>
      <span>
            {value >= 2
            ? <AiFillStar />
            : value >= 1.5
            ? 'fas fa-star-half-alt'
            : <AiOutlineStar />
            }
      </span>
      <span>
     
            {value >= 3
            ? <AiFillStar />
            : value >= 2.5
            ? 'fas fa-star-half-alt'
            : <AiOutlineStar />
        }
      </span>
      <span>
            {value >= 4
              ? <AiFillStar />
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : <AiOutlineStar />
          }
      </span>
      <span>
          {value >= 5
              ? <AiFillStar />
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : <AiOutlineStar />
          }
      </span>
      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

export default Rating