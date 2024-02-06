export interface LoginType {
  id: string;
  pw: string;
}

export interface FormValues {
  email: string;
  password: string;
  rePassword: string;
  name: string;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
}
