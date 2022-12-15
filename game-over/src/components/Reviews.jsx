import React from 'react'
import { DestroyReview  } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Reviews = ({id, userId, gameId, review, getReviews}) => {

    // let navigate = useNavigate()

    const handleDelete = async () => {
        await DestroyReview({id})
         getReviews()
       }
     
    return (
    <div className='comment-container'>
        <h3 className='comment-comment'><span className='anonymous-posted'>Anonymous posted:</span> {review}</h3>
        <div id='button-container'>
        <button id='delete-edit-button'
        //  onClick={() => navigate(`/edit_comment/user/${userId}/listing/${listingId}/comment/${id}`)}
         >Edit</button>
        <span className='comment-link-divider'>&nbsp;&nbsp;or&nbsp;&nbsp;</span>
        <button onClick={handleDelete}  id='delete-edit-button'>Delete</button>
        </div>
    </div>
  )
}

export default Reviews