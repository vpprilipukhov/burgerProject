import React from 'react';
import {
    Logo,
    BurgerIcon,
    CloseIcon,
    CheckMarkIcon,
    CurrencyIcon,
    DragIcon,
    EditIcon,
    HideIcon,
    InfoIcon,
    ListIcon,
    LockIcon,
    LogoutIcon,
    ProfileIcon,
    ShowIcon,
    DeleteIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    MenuIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerComponent.module.css'


function BurgerComponent(props) {


    let component = props.component.map(el => (
        <div key={el._id} className={styles.component}>
            <div className={styles.componentImage}><img src={el.image} alt={''}/></div>
            <div className={styles.componentPrice}>{el.price} <CurrencyIcon type={'primary'}/></div>
            <div className={styles.componentText}>{el.name}</div>


        </div>


    ))


    return (
        <div className={styles.componentMain}>
            {component}
        </div>
    )
}


export default BurgerComponent