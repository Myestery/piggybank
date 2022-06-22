export interface IUser {
  id: string;
  business_id: string;
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
  phone: string;
  verified?: boolean;
  email_verified_at?: Date;
  verification_code?: string;
  verification_code_expires?: Date;
}
