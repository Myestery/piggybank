export interface JWTPayload {
    id: string;
    business_id: string;
    firstname: string;
    lastname: string;
    email: string;
    verified?: boolean;
    phone?: string;
}