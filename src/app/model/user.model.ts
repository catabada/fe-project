import {AppRole, APP_ROLE_USER} from "./app-role.model";

export class UserInfo {
  id: number
  lastName: string
  firstName: string
  dateOfBirth: Date
  image: string
}

export let userInfos: UserInfo[] = [
  {
    id: 1,
    lastName: 'Huỳnh Hữu',
    firstName: 'Ân',
    dateOfBirth: new Date('01/01/1990'),
    image: 'avatar.png'
  },
  {
    id: 2,
    lastName: 'Hoàng Nguyễn Quang',
    firstName: 'Huy',
    dateOfBirth: new Date('01/01/1990'),
    image: 'avatar.png'
  },
  {
    id: 3,
    lastName: 'Huỳnh Văn Hữu',
    firstName: 'Ân',
    dateOfBirth: new Date('03/10/2001'),
    image: 'avatar.jpg'
  }
];

export class AppUser {
  id: number
  username: string
  password: string
  email: string
  phone: string
  appRoles: AppRole
  userInfo: UserInfo
  enabled: boolean
}

export let appUsers: AppUser[] = [
  {
    id: 1,
    username: 'huynhhuuan',
    password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    email: '19130002@st.hcmuaf.edu.vn',
    phone: '0123456789',
    appRoles: APP_ROLE_USER,
    userInfo: userInfos.find(userInfo => userInfo.id === 1)!,
    enabled: true
  },
  {
    id: 2,
    username: 'hoangnguyenquanghuy',
    password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    email: '19130085@st.hcmuaf.edu.vn',
    phone: '0412414123',
    appRoles: APP_ROLE_USER,
    userInfo: userInfos.find(userInfo => userInfo.id === 2)!,
    enabled: true
  },
  {
    id: 3,
    username: 'huynhvanhuuan',
    password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    email: '19130003@st.hcmuaf.edu.vn',
    phone: '0787782050',
    appRoles: APP_ROLE_USER,
    userInfo: userInfos.find(userInfo => userInfo.id === 3)!,
    enabled: true
  }
];
