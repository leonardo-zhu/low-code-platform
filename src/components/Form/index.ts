import { BaseComponent } from "../index";

interface FormItem extends BaseComponent{
  value: string | string[]
}

type FormData = {
  inputs: FormItem[]
}

export interface FormProps {
  data: FormData
}

export { default } from './Form'
