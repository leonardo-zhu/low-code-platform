import React from 'react'
import { Button } from 'antd'
import BaseElement from "./BaseElement";

const ButtonTypes = ["default", "primary", "ghost", "dashed", "link", "text"]
type ButtonType = typeof ButtonTypes[number]

interface ButtonProps {
    type?: ButtonType,
    children: string
    onClick?: React.MouseEventHandler<HTMLElement>,
}

class CustomButton extends BaseElement<ButtonProps, any>{

    state = {
        type:"primary"
    }

    render() {
        const { children, type, onClick } = this.props
        return (
          // @ts-ignore
          <Button type={this.state.type} onClick={onClick}>{children}</Button>
        )

    }
}

export default CustomButton
