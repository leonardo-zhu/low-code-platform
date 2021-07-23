import { ButtonType } from "antd/lib/button";

type ButtonData = {
  type?: ButtonType,
  text: string
  onClickScript?: Function,
}

export interface ButtonProps {
  data: ButtonData
}


export { default } from './Button'
