import React from 'react';
import styles from './burgerConstructor.module.css'

import {
    CurrencyIcon,
    DragIcon,
    LockIcon,
    DeleteIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor(props) {



    // const dell = (e) => {
    //     const id = e.currentTarget.id;
    //     console.log(id);
    // }


    const choiceBunTop = props.choice.filter(el => el.type === "bun").map((el, index) => (

        <div key={index} className={styles.choiceComponent}>
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

    const choiceBunBot = props.choice.filter(el => el.type === "bun").map((el, index) => (

        <div key={index} className={styles.choiceComponent}>
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


    const choice = props.choice.filter(el => el.type !== "bun").map((el, index) => (
        <div key={index} className={styles.choiceComponent}>
            <div className={styles.dragIcon}><DragIcon type={'primary'}/></div>
            <div className={styles.choiceComponentInner}>
                <div className={styles.choiceComponentImage}><img src={el.image} alt={''}
                                                                  className={styles.choiceComponentImageImage}/></div>
                <div className={styles.choiceComponentText}>{el.name}</div>
                <div className={styles.choiceComponentPrice}>{el.price} <CurrencyIcon type={'primary'}/></div>
                <button id={el._id} onClick={props.dell} className={styles.choiceComponentDell}>
                    <DeleteIcon
                        type={'primary'}/>
                </button>
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
                        <div className={styles.sumNumber}>{props.coast}</div>
                        <div className={styles.iconSum}><CurrencyIcon type={'primary'}/></div>
                    </div>
                    <div className={styles.b}>
                        <button onClick={props.onModalOrderActive} className={styles.but}><span className={styles.txtBut}>Оформить заказ</span></button>
                    </div>


                </div>
            </div>

        </div>
    )

}

export default BurgerConstructor