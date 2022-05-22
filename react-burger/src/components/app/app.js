import styles from './app.module.css'
import React from "react";
import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import axios from "axios";
import ModalOverlay from "../modal/modalOverlay";


function App() {

    // данные ингридиентов общие и выбранные
    const [stateMy, setState] = React.useState([])
    const [stateChoiceMy, setStateChoice] = React.useState([])

    // стоимость выбранных
    const [coast, setCoast] = React.useState()

    // данные для модальных окон
    const [modalActive, setModalActive] = React.useState(false)
    const [modalIngActive, setModalIngActive] = React.useState(false)
    const [modalOrderActive, setModalOrderActive] = React.useState(false)
    const [choiceModalIng, setChoiceModalIng] = React.useState([])

    // функция по получению ингридиента для передачи в модальное окно
    const getIdIngredients = (e) => {
        const newIng = stateMy.filter(el => el._id === e.currentTarget.id)
        setChoiceModalIng([...newIng])
        onModalIngActive()
        onModalActive()
    }

    // функция по добавлению ингридиентов в список с выбором (учитывает варианты добавления булочек)
    const handelStateChoice = (e) => {

        const el = stateMy.filter(el => el._id === e)
        let fl_bun = false,
            id_bun = '',
            i_bun = 0,
            newArr = []

        for (let i = 0; i < stateChoiceMy.length; i++) {
            if (stateChoiceMy[i].type === 'bun') {
                fl_bun = true
                id_bun = stateChoiceMy[i]._id
                i_bun = i
            }

        }

        if (fl_bun === false && el[0].type === 'bun') {
            newArr = [...stateChoiceMy, el[0]]
            setStateChoice(newArr)

        } else if (el[0]._id === id_bun) {
            alert('Вы уже выбрали такую булочку')
        } else if (fl_bun === true && el[0].type === 'bun') {
            newArr = stateChoiceMy
            newArr[i_bun] = el[0]
            newArr = [...newArr]
            setStateChoice(newArr)

        } else {
            newArr = [...stateChoiceMy, el[0]]
            setStateChoice(newArr)
        }


    }

    // функция по удалению ингридиентов из выбранного списка
    const dell = (e) => {

        const id = e.currentTarget.id;
        let i_id

        for (let i = 0; i < stateChoiceMy.length; i++) {
            if (stateChoiceMy[i]._id === id) {
                i_id = i
            }

        }

        let newArr = stateChoiceMy
        newArr.splice(i_id, 1)
        setStateChoice([...newArr])

    }

    // функция по переключению состояния модального окна с ингридиентом
    const onModalIngActive = () => {
        setModalIngActive(true)
    }

    // функция по переключению состояния модального окна заказа
    const onModalOrderActive = () => {
        setModalOrderActive(true)
        onModalActive()
    }

    //фгкция по переключению состояние модальных окон (общая)
    const onModalActive = () => {
        setModalActive(true)

    }

    // получаем данные, монтируем только раз при отрисовке компонента
    React.useEffect(
        () => {
            axios.get('https://norma.nomoreparties.space/api/ingredients').then(response => {
                setState(response.data.data)
            })
        }, [],
    )

    // отслеживаем изменения выбранного списка ингридиентов. При добавление изменяем ценну
    React.useEffect(
        () => {

            let costNew = 0
            for (let i = 0; i < stateChoiceMy.length; i++) {
                costNew += Number(stateChoiceMy[i].price)
            }

            setCoast(costNew)


        }, [stateChoiceMy]
    )


    return (
        <div className={styles.page}>
            <ModalOverlay active={modalActive} modalOrderActive={modalOrderActive}
                          choiceModalIng={choiceModalIng}
                          activeIng={modalIngActive}
                          setModalIngActive={setModalIngActive}
                          setModalActive={setModalActive}
                          setModalOrderActive={setModalOrderActive}
                          onModalActive={onModalActive}/>
            <div className={styles.app_wrapper}>

                <AppHeader/>
                <BurgerIngredients getIdIngredients={getIdIngredients} component={stateMy}
                                   onChange={handelStateChoice}/>
                <BurgerConstructor onModalOrderActive={onModalOrderActive} dell={dell} choice={stateChoiceMy}
                                   coast={coast}/>

            </div>
        </div>
    );
}


export default App;
