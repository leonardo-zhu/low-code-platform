import React from 'react';
import BaseElement from "../BaseElement";
import { FormProps } from ".";
import { Form } from "antd";
import { FormInstance } from "antd/lib/form";

const { Item: FormItem } = Form

class CustomForm extends BaseElement<FormProps, any> {

  formRef = React.createRef<FormInstance>()

  buildFormItems() {
    const { inputs = [] } = this.props.data

    return inputs.map(input => {

    })
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
