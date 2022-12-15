import Client from './api'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get(`/session`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateReview = async (data) => {
  try {
    const res = await Client.post(
      `/reviews/new_reviews/user/${data.userId}/game/${data.gamesId}`,
      data
    )
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateReview = async (data) => {
  try {
    const res = await Client.put(`/reviews/${data.id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DestroyReview = async (data) => {
  try {
    const res = await Client.delete(`/reviews/${data.id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateVideoGame = async (data) => {
  try {
    const res = await Client.post(`/games/new_game`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
export const UpdateVideoGame = async (data) => {
  try {
    const res = await Client.put(`/games/${data.id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DestroyVideoGame = async (data) => {
  try {
    const res = await Client.delete(`/games/${data.id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
