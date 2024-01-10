export {ProfileCard} from "./ui/ProfileCard/ProfileCard";

export {
    fetchProfileData
} from './model/services/fetchProfileData';

export type {
    Profile,
    ProfileSchema
} from './model/types/profile';

export {
    profileActions,
    profileReducer
} from './model/slice/profileSlice';

