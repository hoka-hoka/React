import React, { useState } from 'react';

interface TestComponent {
  text: string;
}

const TestComponent = ({ text }: TestComponent) => <h1>{text}</h1>;

export default TestComponent;
