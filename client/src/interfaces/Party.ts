import { Media } from './Media';

export interface Party {
  id: string
  start_date: string
  end_date: string
  name: string
  location: string
  longitude: string
  latitude: string
  rating: number
  is_private: boolean
  user_count: number
  media: Media[]
}
