import React from 'react';

import styles from './input.module.css';

const Input = React.forwardRef((props, ref) => {
    const {type, placeholder} = props;
    return (
        <input
            ref={ref}
            className={styles.input}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default Input;