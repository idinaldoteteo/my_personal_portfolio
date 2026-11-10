import React from 'react'
import classNames from 'classnames'
import style from './Button.module.css'

type ButtonProps = {
    variant: "default" | "icon" | "backToTop"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, variant = "default", ...rest }: ButtonProps) => {
    const classMap = {
        default: style.default,
        icon: style.icon,
        backToTop: style.backToTop
    }

    return (
        // install classnames library to use this function, using the command npm i classnames
        <div>
            <button className={classNames(style.button, classMap[variant])} {...rest}>{children}</button>
        </div>

    )
}

export default Button