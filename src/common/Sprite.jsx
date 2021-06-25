import React, { Component } from 'react';

const { body } = document;
const sprite = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style="display: none"
  >
    <symbol id="cross" viewBox="0 0 48 48">
      <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"></path>
    </symbol>

    <symbol id="error" viewBox="0 0 32 32" width="15" height="18">
      <path d="M2.062 32h27.812a2 2 0 0 0 1.766-2.942l-13.876-26A1.997 1.997 0 0 0 16.002 2H16c-.738 0-1.414.406-1.762 1.056L.3 29.056a2.004 2.004 0 0 0 .046 1.972A2.005 2.005 0 0 0 2.062 32zM16 24a2 2 0 1 1-.001 4.001A2 2 0 0 1 16 24zm-2-3.968v-8a2 2 0 0 1 4 0v8a2 2 0 0 1-4 0z"></path>
    </symbol>

    <symbol id="arrow" viewBox="0 0 17 18" width="16" height="16">
      <path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z"></path>
    </symbol>
</svg>`;

export default class Sprite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    body.insertAdjacentHTML('beforeend', sprite);
  }

  render() {
    return <></>;
  }
}
