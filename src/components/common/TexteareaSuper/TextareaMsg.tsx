import { useState } from 'react'
import { ChangeEvent } from 'react'
import styles from './TextareaMsg.module.css'

type TeaxareaMsgType = {
    checkbox?: boolean
    value: string
    onChangeCallback: (text: string) => void
    btnCallback: (checked?: boolean) => void
    // btnCallbackWithParametr?: (checked:boolean) => void
    btnValue: string
}

export const TextareaMsg: React.FC<TeaxareaMsgType> = ({
    checkbox,
    value,
    onChangeCallback,
    btnCallback,
    // btnCallbackWithParametr,
    btnValue,
}) => {
    const [checked, setChecked] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        onChangeCallback(text)
    }

    const onBtnHandler = () => {
        btnCallback(checked)
        setChecked(!checked)
    }

    const onEnterPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => { if (e.key === 'Enter') { onBtnHandler() } }



    return (
        <div className={styles.newPost}>
            <textarea /* ref={newRef} */ value={value} onChange={onChangeHandler} onKeyPress={onEnterPressHandler}></textarea>
            {checkbox && <input type={'checkbox'} checked={checked} onClick={() => setChecked(!checked)} />}
            <div className={styles.button} onClick={onBtnHandler}> <input type="submit" value={btnValue} /></div>
        </div>
    )
}