import React, { useState } from 'react';
import './styles.css';

export default function App() {
    const [state, setState] = useState({
        addressType: 'home',
        city: '',
        street: '',
        zipCode: '',
        houseNumber: '',
        building: '',
        toDoor: false,
        entrance: '',
        floor: '',
        apartment: '',
        info: ''
    });

    const onChange = (e) => {
        const newState = {...this.state, toDoor: true}
        setState(newState)
    };


    const submit = e => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <div className="App">
            <h2 className="mb25">Укажите адрес доставки</h2>
            <form onSubmit={submit}>
                <div className="field mb25">
                    <select>
                        <option value="home">Дом</option>
                        <option value="work">Работа</option>
                        <option value="other">Другое</option>
                    </select>
                    <label className="label">Тип адреса</label>
                </div>
                <div className="field mb25">
                    <input type="text" name="city" placeholder="Введите название города" />
                    <label className="label">Город</label>
                </div>
                <div className="field mb25">
                    <input type="text" name="street" placeholder="Введите название улицы" />
                    <label className="label">Улица</label>
                </div>
                <div className="field__group mb25">
                    <div className="field field_min">
                        <input type="number" name="zipCode" />
                        <label className="label">Индекс</label>
                    </div>
                    <div className="field field_min">
                        <input type="number" name="houseNumber" />
                        <label className="label">Дом</label>
                    </div>
                    <div className="field field_min">
                        <input type="number" name="building" />
                        <label className="label">Корпус</label>
                    </div>
                </div>
                <div className="checkbox-container mb25">
                    <input type="checkbox" name="toDoor" id="toDoor" />
                    <label className="to-door-label">
                        <input
                            checked={checked}
                            onChange={onChange}
                        />
                        Требуется доставка до двери</label>
                </div>

                {state.toDoor && (
                    <>
                        <div className="field__group mb25">
                            <div className="field field_min">
                                <input type="number" name="entrance" />
                                <label className="label">Подъезд</label>
                            </div>
                            <div className="field field_min">
                                <input type="number" name="floor" />
                                <label className="label">Этаж</label>
                            </div>
                            <div className="field field_min">
                                <input type="number" name="apartment" />
                                <label className="label">Квартира</label>
                            </div>
                        </div>
                        <div className="field mb25">
                            <textarea name="info" rows="4" placeholder="Код домофона, как пройти" />
                            <label className="label">Дополнительная информация</label>
                        </div>
                    </>
                )}
                <button type="submit">Сохранить адрес</button>
            </form>
        </div>
    );
}