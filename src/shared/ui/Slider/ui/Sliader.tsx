import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Sliader.module.scss';
import { useState } from 'react';
import ImgReviewsOne from '@/shared/assets/image/reviews_1.jpg';
import ImgReviewsTwo from '@/shared/assets/image/reviews_2.jpg';
import ImgReviewsThree from '@/shared/assets/image/reviews_3.jpg';

interface SliaderProps {
    className?: string;
}

const cards = [
    { id: 0, card: ImgReviewsOne},
    { id: 1, card: ImgReviewsTwo},
    { id: 2, card: ImgReviewsThree }
];

export const Sliader = ({ className }: SliaderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleNextSlide = () => {
        setCurrentIndex(prevState => (prevState + 1) % cards.length)
    }
    return (
        <section>
            <div className={cls.conteinerTitle}>
                <h2 className={cls.title}>Відгуки</h2>
            </div>
            <div className={classNames(cls.Sliader, {}, [className])}>
                <ul className={cls.conteiner}>
                    {[...cards, ...cards].slice(currentIndex, currentIndex + 3).map(item => {
                        return <li key={item.id} className={cls.slide}>
                            <div>
                                <img
                                    src={item.card}
                                    alt='review'
                                    width='357'
                                    height='349'
                                />
                            </div>
                        </li>
                    })}
                </ul>
                <button
                    type='button'
                    className={cls.button}
                    onClick={handleNextSlide}
                >
                    <span className={cls.btnText}>Більше відгуків</span>
                </button>
            </div>

        </section>

    );
}

