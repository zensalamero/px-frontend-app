export interface IAccount {
    id: string;
    type: string;
    attributes: {
        id: string;
        email: string;
        full_name: string;
        first_name: string;
        last_name: string;
        gender: string;
        contact_no: number;
        country: string;
        country_code: string;
        state_region: string;
        primary_type: string;
        adult_minor: string;
        age_range_from: string;
        age_range_to: string;
        birth_date: string;
        representation: boolean;
        preferred_contact_method: string;
        created_at: number;
        updated_at: number;
    };
}

export interface IAccountResponsePayload {
    data: IAccount;
}

export interface IAccountUpdatePayload {
    email: string;
    full_name: string;
    first_name: string;
    last_name: string;
    gender: string | undefined | null;
    contact_no: number | null;
    country: string;
    country_code: string;
    state_region: string | undefined;
    primary_type?: string | undefined | null;
    adult_minor?: string;
    age_range_from?: string | undefined | null;
    age_range_to?: string | undefined | null;
    birth_date?: string;
    representation: boolean;
    preferred_contact_method?: string | undefined | null;
}