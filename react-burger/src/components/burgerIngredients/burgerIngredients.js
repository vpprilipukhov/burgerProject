import React from 'react';
import styles from './burgerIngredients.module.css'

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

function BurgerIngredients(props) {

    let choiceBunTop = props.choice.filter(el => el.type === "bun").map(el => (

        <div key={el._id} className={styles.choiceComponent}>
            <div className={styles.dragIcon}><DragIcon type={'primary'}/></div>
            <div className={styles.choiceComponentInnerTop}>
                <div className={styles.choiceComponentImage}><img src={el.image} alt={''}
                                                                  className={styles.choiceComponentImageImage}/></div>
                <div className={styles.choiceComponentText}>{el.name}</div>
                <div className={styles.choiceComponentPrice}>{el.price} <CurrencyIcon type={'primary'}/></div>
                <div className={styles.choiceComponentDell}><LockIcon type={'secondary'}/></div>
            </div>


        </div>
    ))

    let choiceBunBot = props.choice.filter(el => el.type === "bun").map(el => (

        <div key={el._id} className={styles.choiceComponent}>
            <div className={styles.dragIcon}><DragIcon type={'primary'}/></div>
            <div className={styles.choiceComponentInnerBot}>
                <div className={styles.choiceComponentImage}><img src={el.image} alt={''}
                                                                  className={styles.choiceComponentImageImage}/></div>
                <div className={styles.choiceComponentText}>{el.name}</div>
                <div className={styles.choiceComponentPrice}>{el.price} <CurrencyIcon type={'primary'}/></div>
                <div className={styles.choiceComponentDell}><LockIcon type={'secondary'}/></div>
            </div>


        </div>
    ))


    let choice = props.choice.filter(el => el.type !== "bun").map(el => (

        <div key={el._id} className={styles.choiceComponent}>
            <div className={styles.dragIcon}><DragIcon type={'primary'}/></div>
            <div className={styles.choiceComponentInner}>
                <div className={styles.choiceComponentImage}><img src={el.image} alt={''}
                                                                  className={styles.choiceComponentImageImage}/></div>
                <div className={styles.choiceComponentText}>{el.name}</div>
                <div className={styles.choiceComponentPrice}>{el.price} <CurrencyIcon type={'primary'}/></div>
                <div className={styles.choiceComponentDell}><DeleteIcon type={'primary'}/></div>
            </div>


        </div>


    ))

    return (
        <div className={styles.burgerIngredients}>
            {choiceBunTop}
            <div className={styles.choiceComponentFilling}>
                {choice}
            </div>
            {choiceBunBot}

            <div className={styles.sum}>
                <div className={styles.sumContainer}>
                    <div className={styles.sum2}>
                        <div className={styles.sumNumber}>610</div>
                        <div className={styles.iconSum}><CurrencyIcon type={'primary'}/></div>
                    </div>
                    <div className={styles.b}>
                        <button className={styles.but}><span className={styles.txtBut}>Оформить заказ</span></button>
                    </div>



                </div>
            </div>

        </div>
    )

}

export default BurgerIngredients