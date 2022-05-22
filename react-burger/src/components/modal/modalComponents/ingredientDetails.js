import React from "react";
import styles from './ingredientDetails.module.css'

function IngredientDetails(props) {

    const choiceModalIng = props.choiceModalIng[0]

    return (

        <div className={styles.main}>

            <div className={styles.imgIng}>
                <img src={choiceModalIng.image}
                     alt={''}/>
            </div>
            <div className={styles.txtIng}>
                {choiceModalIng.name}
            </div>
            <div className={styles.detailsIng}>
                <div className={styles.detailsTextIng}>
                    <div  className={styles.detailsTextIngDop}>Калории,ккал</div>
                    <div  className={styles.detailsTextIngDop}>{choiceModalIng.calories}</div>
                </div>
                <div className={styles.detailsTextIng}>
                    <div className={styles.detailsTextIngDop}>Булки, г</div>
                    <div className={styles.detailsTextIngDop}>{choiceModalIng.proteins}</div>
                </div>
                <div className={styles.detailsTextIng}>
                    <div  className={styles.detailsTextIngDop}>Жиры, г</div>
                    <div  className={styles.detailsTextIngDop}>{choiceModalIng.fat}</div>
                </div>
                <div className={styles.detailsTextIng}>
                    <div  className={styles.detailsTextIngDop}> Углеводы, г</div>
                    <div  className={styles.detailsTextIngDop}>{choiceModalIng.carbohydrates}</div>
                </div>
            </div>

        </div>

    )
}


export default IngredientDetails