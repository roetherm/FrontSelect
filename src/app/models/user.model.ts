export interface User {
  key: string;
  uid: string;
  email: string;
  displayName: string;
  phoneNumber: string;
  photoURL: string;
  password?: string;
  loading?: boolean;
  error?: string;
}
