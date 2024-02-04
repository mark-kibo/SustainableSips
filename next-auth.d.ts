import 'next-auth'

declare module 'next-auth' {
  interface User {
    userToken?: string;
    role?: string;
  }
}
