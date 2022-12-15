const About = () => {
  return (
    <div className="about-page">
      <h1>
        <u> About Game Over </u>
      </h1>
      <div className="team">
        {/* <h2>
          <u>Meet the Team</u>
        </h2> */}
        <p className="about-blurb">
          {' '}
          Game Over is the perfect app for anyone looking to check out video
          games and get an idea of what games to buy today. If you are
          interested in a certain video game, then Game Over is the right place
          for you. Browse through the list of games and find the right game for
          you.
        </p>
        <h2>Tyler Caillet</h2>
        <a href="https://www.linkedin.com/in/tyler-caillet/" target="_blank">
          LinkedIn |
        </a>
        <a href="https://github.com/tylercaillet" target="_blank">
          {' '}
          GitHub{' '}
        </a>
      </div>
    </div>
  )
}
export default About
