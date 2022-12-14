import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ user, authenticated }) => {
  const navigate = useNavigate()
  return user && authenticated ? (
    <div>
      <header id="showcase">
        <h1>Welcome to Game Over</h1>
        <p>
          There are plenty of video games that you can find that you'll enjoy.
        </p>
        <p>
          If you click on Video Games, you should be able to see a listing of
          all video games avaiable.
        </p>
        <p>
          create a review to let other video games enthusiast decide if a
          certain video game is right for them
        </p>
        <button id="read-me-button" onClick={() => navigate('/about_us')}>
          Read More
        </button>
      </header>
      <h2 id="games">List of Video Games</h2>
      <div className="gallery">
        <img src="./images/frenchie-pic.png" alt="frenchie" />
        <img src="./images/dogs-reunited.png" alt="dogs-reunited" />
        <img src="./images/dogs-reunited2.png" alt="dogs-reunited2" />
        <img src="./images/dogs-on-fence.png" alt="dogs-on-fence" />
        <img src="./images/cat-photo.png" alt="cat-photo" />
        <img src="./images/two-pitbulls.png" alt="pitbulls-photo" />
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3 className="please-signin">
        Oops! You must be logged in to have access to the community!
      </h3>
      <button className="form-button" onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  )
}

export default Home
