import React from 'react';
import BaseElement from "../BaseElement";
import { Input } from "antd";
import { InputProps } from ".";

class CustomInput extends BaseElement<InputProps, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: props.data.value
    }
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const { onChangeScript = () => {} } = this.props.data
    this.setState({ value }, () => onChangeScript(value))
  }

  render() {
    const { value } = this.state
    return (
      <Input value={value} onChange={this.onChange}/>
    );
  }
}

export default CustomInput;
