import { User } from './User';

export interface FriendRequest {
  id: number
  from_user_id: string
  to_user_id: string
  to: User
  from: User
}
