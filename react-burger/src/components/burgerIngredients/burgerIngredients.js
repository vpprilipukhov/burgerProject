import React from 'react';
import styles from './burgerIngredients.module.css'
import BurgerIngSub from "./burgerIngSub";

function BurgerIngredients(props) {

    const handelStateChoice = (e) => {
        props.onChange(e)
    }

    const getIdIngredients = (e) => {
        props.getIdIngredients(e)
    }


    const buns = props.component.filter(e => e.type === 'bun')
    const main = props.component.filter(e => e.type === 'main')
    const sauce = props.component.filter(e => e.type === 'sauce')


    return (
        <div className={styles.burgerIngredients}>
            <div className={styles.header}> Собери бургеры</div>

            <div className={styles.miniMenu}>
                <div> Булки</div>
                <div> Соусы</div>
                <div> Начинки</div>
            </div>
            <div className={styles.blockComponent}>
                <div>
                    <div className={styles.textChoice}>
                        Булки
                    </div>
                    <div>
                        <BurgerIngSub getIdIngredients={getIdIngredients} onChange={handelStateChoice}
                                      component={buns}/>
                    </div>
                </div>
                <div>
                    <div className={styles.textChoice}>
                        Соусы
                    </div>
                    <div>
                        <BurgerIngSub getIdIngredients={getIdIngredients} onChange={handelStateChoice}
                                      component={sauce}/>
                    </div>
                </div>
                <div>
                    <div className={styles.textChoice}>
                        Начинки
                    </div>
                    <div>
                        <BurgerIngSub getIdIngredients={getIdIngredients} onChange={handelStateChoice}
                                      component={main}/>
                    </div>

                </div>
            </div>


        </div>
    )

}

export default BurgerIngredients