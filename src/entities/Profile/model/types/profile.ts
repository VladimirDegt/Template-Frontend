import {Currency} from "@/entities/Currency";
import {Country} from "@/entities/Country";

export interface Profile {
    banned?: boolean;
    banReason?: string;
    roles?: string[];
    posts?: string[];
    avatar?: string;
    first?: string;
    lastname?: string;
    age?: string;
    currency?: Currency | string;
    country?: Country | string;
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