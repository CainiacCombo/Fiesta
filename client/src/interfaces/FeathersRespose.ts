export interface FeathersPayload<T> {
  total: number
  limit: number
  skip: number
  data: Array<T>
}
