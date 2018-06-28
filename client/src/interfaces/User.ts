export interface User {
  id: string
  username: string
  nickname: string
  email: string
  bio: string
  avatar: string
  rating: number
  longitude?: string
  latitude?: string
  googleId?: string
  twitterId?: string
}
