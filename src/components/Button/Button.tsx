import { Button } from 'antd'
import BaseElement from "../BaseElement";
import React from "react";
import ButtonProps from ".";


class CustomButton extends BaseElement<ButtonProps, any>{

    render() {
        const { text, type, onClick } = this.props.data
        return (
          <Button type={type} onClick={onClick}>{text}</Button>
        )

    }
}

export default CustomButton
