import React from 'react'
import styles from './header.module.css'
const header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <h2>MFuzail</h2>
            </div>
            <div className={styles.right}>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default header