export interface Address {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    country: string;
}
