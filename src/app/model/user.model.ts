import {AppRole, APP_ROLE_ADMIN, APP_ROLE_USER} from "./app-role.model";

export class AppUser {
  id: number
  username: string
  password: string
  email: string
  phone: string
  enabled: boolean
  appRoles: AppRole
  userInfo: UserInfo
}

export class UserInfo {
  userId: number
  username: string
  email: string
  phone: string
  firstName: string
  lastName: string
  image: string
}

export let userInfos: UserInfo[] = [
  {
    userId: 1,
    username: 'admin',
    email: 'admin@example.com',
    phone: '0123456789',
    firstName: 'Admin',
    lastName: 'Admin',
    image: 'assets/images/avatar.png'
  },
  {
    userId: 2,
    username: 'user',
    email: 'user@example.com',
    phone: '0787782050',
    firstName: 'User',
    lastName: 'User',
    image: 'assets/images/avatar.png'
  }
];

export let appUsers: AppUser[] = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    email: 'admin@example.com',
    phone: '0123456789',
    enabled: true,
    appRoles: APP_ROLE_ADMIN,
    userInfo: userInfos.find(userInfo => userInfo.userId === 1)!
  },
  {
    id: 2,
    username: 'user',
    password: 'user',
    email: 'user@example.com',
    phone: '0787782050',
    enabled: true,
    appRoles: APP_ROLE_USER,
    userInfo: userInfos.find(userInfo => userInfo.userId === 2)!
  }
];
