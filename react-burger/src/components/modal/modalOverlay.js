import React from "react";
import styles from './modalOverlay.module.css'
import Modal from "./modal";


function ModalOverlay(props) {

    const off = () => {
        props.setModalActive(false)
        props.setModalIngActive(false)
        props.setModalOrderActive(false)

    }


    return (
        <div className={props.active ? (styles.modal + ' ' + styles.active) : styles.modal}
             onClick={off}>
            <Modal setModalOrderActive={props.setModalOrderActive} active={props.active}
                   modalOrderActive={props.modalOrderActive} choiceModalIng={props.choiceModalIng}
                   setModalActive={props.setModalActive} activeIng={props.activeIng}
                   setModalIngActive={props.setModalIngActive}/>
        </div>
    )
}


export default ModalOverlay