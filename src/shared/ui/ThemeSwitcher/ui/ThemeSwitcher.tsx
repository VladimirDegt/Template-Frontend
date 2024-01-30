import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/icons/theme.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import {Icon} from "@/shared/ui/Icon/Icon";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <Button
            type='button'
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            <Icon
                Svg={ThemeIcon}
                width={32}
                height={32}
            />
        </Button>
    );
}