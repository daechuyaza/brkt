export type UserType = {
  id: number;
  nickname: string;
  email: string;
  pasword: string;
  profileImage: string;
  introduction: string;
  role: 'admin' | 'user';
};
