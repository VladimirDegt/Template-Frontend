import { Suspense } from 'react';
import { Loader } from '@/shared/ui/Loader/ui/Loader';
import { Modal } from '@/shared/ui/Modal/Modal';
import { RegisterFormAsync } from '../RegisterForm/RegisterFormAsync';

interface RegisterFormProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const RegisterModal = ({ isOpen, onClose }: RegisterFormProps) => {

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <RegisterFormAsync onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
}




