import React from "react";
import { ButtonType } from "antd/lib/button";

type ButtonData = {
  type?: ButtonType,
  text: string
  onClick?: React.MouseEventHandler<HTMLElement>,
}

export interface ButtonProps {
  data: ButtonData
}


export { default } from './Button'
