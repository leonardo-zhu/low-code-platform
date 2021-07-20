import ElementFactory from "./ElementFactory";
import components from "../components";
import { render } from "react-dom";


export const initEnv = () => {
  window.document.pageContext = {}

  ElementFactory.register('Page',components.Page)
  ElementFactory.register('Navigation',components.Navigation)
}

export const start = async () =>{
  initEnv()
  const originData = window.pageData.data

  render(
    ElementFactory.createElement(originData),
    document.getElementById('page')
  )

}
