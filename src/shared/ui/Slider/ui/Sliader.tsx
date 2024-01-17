import cls from './Sliader.module.scss';
import {cards} from "@/shared/ui/Slider/db/cardsReview";
import {useEffect, useState} from "react";
import {Button} from "@/shared/ui/Slider/ui/Button";

export const Sliader = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [disabledRightBtn, setDisabledRightBtn] = useState<boolean>(false);
    const [disabledLeftBtn, setDisabledLeftBtn] = useState<boolean>(false);

    useEffect(() => {
        if(currentIndex === (cards.length - 3)){
            setDisabledRightBtn(true)
        }
        if(currentIndex === 0){
            setDisabledLeftBtn(true)
        }
    }, [currentIndex]);
    const handleNextSlide = (): void => {
        if(currentIndex === (cards.length - 3)) {
            return
        }
        setDisabledLeftBtn(false)
        setCurrentIndex(prevState => (prevState + 1) % cards.length)
    }
    const handlePrevSlide = (): void => {
        if(currentIndex === 0) {
            return
        }
        setDisabledRightBtn(false)
        setCurrentIndex(prevState => (prevState - 1) % cards.length)
    }
    return (
        <section>
            <div className={cls.conteinerTitle}>
                <h2 className={cls.title}>Відгуки</h2>
            </div>
            <div className={cls.Sliader}>
                <ul className={cls.conteiner}>
                    {[...cards].slice(currentIndex, currentIndex + 3).map(item => {
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
                <Button
                    type={"button"}
                    content={'Назад'}
                    className={disabledLeftBtn ? cls.disabled : cls.button}
                    onClick={handlePrevSlide}
                />
                <Button
                    type={"button"}
                    content={'Вперед'}
                    className={disabledRightBtn ? cls.disabled : cls.button}
                    onClick={handleNextSlide}
                />
            </div>

        </section>

    );
}

