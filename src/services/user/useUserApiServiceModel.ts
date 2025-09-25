export interface IUseUserApiServiceModel {
  createUser: ({ email, password }: IUserBody) => Promise<void>
  login: ({ email, password }: IUserBody) => Promise<void>
}

export interface IUserBody {
  email: string
  password: string
}

export interface ILoginResponse {
  token: string
  expiration: string
}
