import React from 'react'
import { UpdateComment, UpdateReview } from '../services/Auth'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const EditReviewForm = () => {
  let navigate = useNavigate()
  let { gamesId } = useParams()
  let { userId } = useParams()
  let { reviewId } = useParams()

  const initialState = {
    userId: userId,
    gamesId: gamesId,
    review: ''
  }

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getReviewById = async () => {
      const response = await axios.get(`${BASE_URL}/review/${reviewId}`)
      setFormState(response.data)
    }
    getReviewById()
  }, [reviewId])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await UpdateReview({ ...formState })
    navigate(`/games/${gamesId}`)
  }

  return (
    <div className="center">
      <h1>Have An Update For This Video Game?</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          <input
            type="description"
            id="review"
            cols="55"
            rows="10"
            onChange={handleChange}
            value={formState.comment}
            required
            placeholder="Leave a review"
            className="input"
          />
        </div>
        <button id="form-button" onClick={() => navigate(`/games/${gamesId}`)}>
          Go Back
        </button>
        <button type="submit" id="form-button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditReviewForm
