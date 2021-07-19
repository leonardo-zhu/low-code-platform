import React from 'react'
import { Button } from 'antd'

const ButtonTypes = ["default", "primary", "ghost", "dashed", "link", "text"]
type ButtonType = typeof ButtonTypes[number]

interface ButtonProps {
    type?: ButtonType,
    children: string
    onClick?: React.MouseEventHandler<HTMLElement>,
}


const CustomButton: React.FC<ButtonProps> = (props) => {
    const { children, type, onClick } = props
    return (
        // @ts-ignore
        <Button type={type} onClick={onClick}>{props.children}</Button>
    )
}

export default CustomButton