import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Reviews from './Reviews'
import { DestroyVideoGame } from '../services/Auth'
import { BASE_URL } from '../globals'

const VideoGameDetails = ({user}) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const [videoGame, setVideoGame] = useState([])

  const getVideoGameById = async () => {
    const response = await axios.get(`${BASE_URL}/games/${id}`)
    setVideoGame(response.data)
  }

  const handleDelete = async () => {
        await DestroyVideoGame({ id })
        setVideoGame()
        navigate('/games')
      }

  const [reviews, setReviews] = useState(null)

  const getReviews = async () => {
    const response = await axios.get(`${BASE_URL}/reviews/`)
    setReviews(response.data)
  }

  useEffect(() => {
    getVideoGameById()
    getReviews()
  }, [])

  return (
    <div className="details-container">
        <header className='details-header'>
            <h1></h1>
        </header>
        <button onClick={handleDelete} id="delete-edit-button1">
              Delete Game
            </button> 
    <main className='details-main'>
        <div className='details-card'>
          <h2 className='details-name'><span className='details-title'>Title:&nbsp;</span> {videoGame.title}</h2>
          <img src={videoGame.Image} alt='game-image' id='details-pic'></img>
          <h3><span className='details-title'>Rating:</span> &nbsp;{videoGame.rating}</h3>
          <div>
          <button
              id="view-game-button"
              onClick={() => navigate(`/games`)}
            >
              Go Back
            </button>
            {/* <button
              id="view-pet-button"
              onClick={() => navigate(`/games/${id}/edit_listing`)}
            >
              Edit Info
            </button> */}
            </div>
        </div>
    </main>
    <header className='comment-header'>
    <h1 className=''>Reviews</h1>
    </header>
      <section>
        {reviews?.map((review) => (
            <Reviews
            id={review?.id}
            key={review?.id}
            userId={review?.userId}
            gameId={review?.gameId}
            review={review?.review}
            getReviews={getReviews}
            />
            ))}
      </section>
        <button
            id="view-game-button"
            // onClick={() => navigate(`/new_comment/user/${user.id}/listing/${id}`)}
            >
            Add A Review
        </button>
    </div>
        
  )
}

export default VideoGameDetails