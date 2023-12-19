import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateScheme';
import { createReduxStore } from '../config/store';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema
}
export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    const navigate = useNavigate()
    
    const store = createReduxStore(initialState, navigate,);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}