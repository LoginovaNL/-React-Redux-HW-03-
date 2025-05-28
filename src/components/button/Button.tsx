import css from './button.module.scss';


export const Button = () => {
    return (
        <button className={css.button}><h3>Загрузить еще билеты</h3></button>
    )
}

export default Button;