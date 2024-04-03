import { AuthRegisterDTO } from '../../auth/dto/auth-register.dto';

export const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG4gV2ljayIsImVtYWlsIjoiam9obkBlbWFpbC5jb20iLCJpYXQiOjE3MDk1ODc1MjYsImV4cCI6MTcxMDE5MjMyNiwiYXVkIjoidXNlciIsImlzcyI6ImxvZ2luIiwic3ViIjoiMSJ9.amRPW1jVwr70wlm--ZKU5dhY8T34bbDAgkxrwNWnFWk';

export const jwtPayload = {
  id: 1,
  name: 'John Wick',
  email: 'john@email.com',
  iat: 1672197163,
  exp: 1672801963,
  aud: 'users',
  iss: 'login',
  sub: '1',
};

export const resetToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsIm5hbWUiOiJBRE1JTiBUaGFpcyIsImVtYWlsIjoidGhhaXNAYWRtaW4uY29tIiwiaWF0IjoxNzA4NjM4OTU3LCJleHAiOjE3MDkyNDM3NTcsImF1ZCI6InVzZXIiLCJpc3MiOiJsb2dpbiIsInN1YiI6IjEyIn0.lP_WXr3xVN0EOlF4q-bVb-kabwMH2UKyH4FXEsIUDl4';

export const authRegisterDTO: AuthRegisterDTO = {
  name: 'John Wick',
  email: 'john@email.com',
  password: 'Senh@123',
};
