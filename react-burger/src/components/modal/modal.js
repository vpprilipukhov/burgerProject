import React from "react";
import styles from './modal.module.css'
import {
    CloseIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from "./modalComponents/ingredientDetails";
import OrderDetails from "./modalComponents/orderDetails";


function Modal(props) {

    const off = () => {
        props.setModalActive(false)
        props.setModalIngActive(false)
        props.setModalOrderActive(false)

    }


    return (

        <div className={props.active ? (styles.modalContent + ' ' + styles.active) : styles.modalContent}
             onClick={e => e.stopPropagation()}>

            <div className={styles.modalContentIn}>
                <header className={styles.headerMy}>
                    <div className={styles.headerMyText}>
                        {
                            props.activeIng ? "Детали ингридиета" : props.modalOrderActive ? '' : ''
                        }</div>
                    <button className={styles.headerMyCloseIcon}
                            onClick={off}>< CloseIcon type={'primary'}/></button>
                </header>

                <div>
                    {props.activeIng ? <IngredientDetails choiceModalIng={props.choiceModalIng}/> : <div/>}
                    {props.modalOrderActive ? <OrderDetails/> : <div/>}

                </div>
            </div>

        </div>

    )
}


export default Modal