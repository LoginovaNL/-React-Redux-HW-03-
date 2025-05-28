import css from './header.module.scss';
import { HeaderIcon } from '../icons/Header-icon';

export const Header = () => {
    return (
        <header className={css.header}>
            <HeaderIcon/>
            <h1>Поиск авиабилетов</h1>
        </header>
    )
}