import {Currency} from "@/entities/Currency";

export interface Profile {
    banned?: boolean;
    banReason?: string;
    roles?: string[];
    posts?: string[];
    avatar?: string;
    first?: string;
    lastname?: string;
    age?: string;
    // currency?: Currency;
    // country?: Country;
    city?: string;
    username?: string;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}