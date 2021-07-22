import React from 'react';
import BaseElement from "../BaseElement";
import { FormProps } from ".";
import { Form } from "antd";
import { FormInstance } from "antd/lib/form";
import ElementFactory from "../../core/ElementFactory";

const { Item: FormItem } = Form

class CustomForm extends BaseElement<FormProps, any> {

  formRef = React.createRef<FormInstance>()

  buildFormItems() {
    const { inputs = [] } = this.props.data

    return inputs.map(input => (
      <FormItem name={input.name}>
        {ElementFactory.createElement(input)}
      </FormItem>
    ))
  }

  getFieldsValue = () => this.formRef.current?.getFieldsValue()

  render() {
    return (
      <Form ref={this.formRef}>
        {this.buildFormItems()}
      </Form>
    );
  }
}

export default CustomForm;
