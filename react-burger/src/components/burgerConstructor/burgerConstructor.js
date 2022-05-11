import React from 'react';
import styles from './burgerConstructor.module.css'
import BurgerComponent from "./burgerComponent";

function BurgerConstructor(props) {


    let buns = props.component.filter(e => e.type === 'bun')
    let main = props.component.filter(e => e.type === 'main')
    let sauce = props.component.filter(e => e.type === 'sauce')


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
                        <BurgerComponent component={buns}/>
                    </div>
                </div>
                <div>
                    <div className={styles.textChoice}>
                        Соусы
                    </div>
                    <div><BurgerComponent component={main} add={props.add}/></div>
                </div>
                <div>
                    <div className={styles.textChoice}>
                        Начинки
                    </div>
                    <div><BurgerComponent component={sauce}/></div>

                </div>
            </div>


        </div>
    )

}

export default BurgerConstructor