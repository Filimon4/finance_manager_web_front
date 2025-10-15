export interface SignUpRequest {
  email: string;
  password: string;
}

export interface SignUpResponse {
  accessToken: string;
}
