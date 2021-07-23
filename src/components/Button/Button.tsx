import { Button } from 'antd'
import BaseElement from "../BaseElement";
import React from "react";
import ButtonProps from ".";


class CustomButton extends BaseElement<ButtonProps, any> {

  constructor(props: any) {
    super(props);
  }

  render() {
    const {
      text, type, onClickScript = () => {
      }
    } = this.props.data
    return (
      <Button type={type} onClick={onClickScript}>{text}</Button>
    )

  }
}

export default CustomButton
