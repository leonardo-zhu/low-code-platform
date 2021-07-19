import { Component } from 'react';

interface Props {
  data: {
    elementId: string,
    [prop: string]: any
  }
}

interface State {
}

abstract class BaseElement<T, U> extends Component<Props & T, State & U> {
  elementId: any;

  constructor(props: Props & T) {
    super(props);
    this.elementId = props.data.elementId;
    this.state = {} as State & U
  }

  UNSAFE_componentWillMount() {
    if (undefined !== this.elementId) {
      window.document.pageContext[this.elementId] = this;
    }
  }

  render() {
    const { replaceData } = this.state as any;

    if (replaceData != null) {
      return replaceData;
    }
    return null;
  }
}

export default BaseElement;
