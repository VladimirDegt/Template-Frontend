export interface Profile {
    banned: boolean;
    banReason: string;
    roles: string[];
    posts: string[];
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}