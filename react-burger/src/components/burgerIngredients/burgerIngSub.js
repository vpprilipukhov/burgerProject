import React from 'react';
import {
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerIngrSub.module.css'


function BurgerIngSub(props) {

    const handelStateChoice = (e) => {
        props.onChange(e.currentTarget.id)
    }

    const getIdIngredients = (e) => {
        props.getIdIngredients(e)
    }

    const component = props.component.map(el => (
        <div key={el._id} className={styles.component}>
            <div className={styles.componentImage}>
                <button id={el._id} onClick={getIdIngredients} className={styles.currencyIconButton}><img src={el.image}
                                                                                                          alt={''}/>
                </button>
            </div>
            <div className={styles.componentPrice}>{el.price} <CurrencyIcon type={'primary'}/></div>
            <button id={el._id} onClick={handelStateChoice} className={styles.componentText}>{el.name}</button>


        </div>

    ))

    return (
        <div className={styles.componentMain}>
            {component}
        </div>
    )
}


export default BurgerIngSub