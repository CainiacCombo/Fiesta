interface FeathersPayload<T> {
  total: number
  limit: number
  skip: number
  data: Array<T>
}

export type FeathersResponse<T> = Promise<FeathersPayload<T>>
