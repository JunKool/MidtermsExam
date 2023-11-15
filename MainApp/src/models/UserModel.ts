export interface UserModel {
    id: string;
    firstname: string;
    lastname: string;
    street: string;
    country: string;
    isMarketingSent: string;
    marketingDateSent: string;
    emailAddress: string;
}

export default UserModel