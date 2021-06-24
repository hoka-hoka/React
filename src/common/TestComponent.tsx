import React, { Component } from 'react';

interface TestComponentProps {
  page: string;
  children: React.ReactNode;
}
interface TestComponentState {
  stateEvent: string;
}
export default class TestComponent extends Component<
  TestComponentProps,
  TestComponentState
> {
  constructor(props: TestComponentProps) {
    super(props);
    this.state = { stateEvent: '' };
  }

  onMouseEnter = () => {
    this.setState({ stateEvent: 'enter' });
  };

  onMouseLeave = () => {
    this.setState({ stateEvent: 'leave' });
  };

  render() {
    const { stateEvent } = this.state;
    const { page, children } = this.props;
    return (
      <a
        className={stateEvent}
        href={page}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {children}
      </a>
    );
  }
}
