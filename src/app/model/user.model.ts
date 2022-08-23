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
    dateOfBirth: new Date('2001-09-25'),
    image: '1.png'
  },
  {
    id: 2,
    lastName: 'Hoàng Nguyễn Quang',
    firstName: 'Huy',
    dateOfBirth: new Date('2001-10-03'),
    image: '2.png'
  },
  {
    id: 3,
    lastName: 'Huỳnh Văn Hữu',
    firstName: 'Ân',
    dateOfBirth: new Date('2001-10-03'),
    image: '3.jpg'
  }
];

export class AppUser {
  id: number
  username: string
  password: string
  email: string
  phone: string
  appRole: AppRole
  userInfo: UserInfo
  enabled: boolean
}

export let appUsers: AppUser[] = [
  {
    id: 1,
    username: 'huynhhuuan',
    password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    email: '19130002@st.hcmuaf.edu.vn',
    phone: '0987609675',
    appRole: APP_ROLE_USER,
    userInfo: userInfos.find(userInfo => userInfo.id === 1)!,
    enabled: true
  },
  {
    id: 2,
    username: 'hoangnguyenquanghuy',
    password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    email: '19130085@st.hcmuaf.edu.vn',
    phone: '0412414123',
    appRole: APP_ROLE_USER,
    userInfo: userInfos.find(userInfo => userInfo.id === 2)!,
    enabled: true
  },
  {
    id: 3,
    username: 'huynhvanhuuan',
    password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    email: '19130003@st.hcmuaf.edu.vn',
    phone: '0787782050',
    appRole: APP_ROLE_USER,
    userInfo: userInfos.find(userInfo => userInfo.id === 3)!,
    enabled: true
  }
];
