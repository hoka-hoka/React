import React, { useEffect, useRef, useState } from 'react';
import { viewMode } from '../../constants';
import { lang, langData, interElems, focusArea } from './constants';
import './ModalWindow.scss';

const ModalWindow = ({ title, render, updateState }) => {
  const [modalData, setModalData] = useState({});
  const [errors, setErrors] = useState(false);

  const modal = useRef();
  const focusedElems = useRef([]);

  const transferModalData = () => {
    const mainView = viewMode.main;
    updateState({ update: true })({ view: mainView, modalData: modalData });
  };

  const validationCheck = () => {
    setErrors(false);
    return errors;
  };

  const bubblingModalData = () => {
    const isErrors = validationCheck();
    if (isErrors) {
      return;
    }
    updateState({ update: true })({ bubbling: true });
    transferModalData();
    updateState({ update: true })({ bubbling: false });
  };

  const comeBack = () => {
    const mainView = viewMode.main;
    updateState({ update: true })({
      view: mainView,
    });
  };

  const defFocusPosition = () => {
    const findInteractElem = (elem) => {
      for (let i = 0; i < elem.length; i++) {
        const isInteractive = interElems.find(
          (tagName) => elem[i].nodeName == tagName,
        );
        if (isInteractive) {
          focusedElems.current.push(elem[i]);
        }
        if (elem[i].hasChildNodes()) {
          findInteractElem(elem[i].children);
        }
      }
    };
    const childrens = modal.current.children;
    if (!childrens) {
      return;
    }
    findInteractElem(childrens);
    if (focusedElems.current.length) {
      focusedElems.current[0].focus();
    }
  };

  const shiftFocusPosition = (event) => {
    const { target } = event;
    const elems = focusedElems.current;
    if (target.dataset.focused === focusArea.end) {
      elems[0].focus();
    }
    if (target.dataset.focused === focusArea.start) {
      elems[elems.length - 1].focus();
    }
  };

  useEffect(() => {
    defFocusPosition();
    document.addEventListener('click', (event) => {
      const isOutside = modal?.current && !modal.current.contains(event.target);
      if (isOutside) {
        comeBack();
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        comeBack();
      }
    });
  }, []);

  return (
    <>
      <div
        className="modal"
        role="dialog"
        aria-labelledby="dialog_label"
        aria-modal="true"
        ref={modal}
        onFocus={shiftFocusPosition}
      >
        <div data-focused="start" tabIndex="0" />
        <div className="modal__cont">
          <h2 className="modal__title" id="dialog_label">
            {title}
          </h2>
          <div className="modal__menu">
            {render(setModalData, errors)}

            <div className="modal__btns">
              <button className="modal__back" type="button" onClick={comeBack}>
                {lang[langData.cancel]}
              </button>
              <button
                className="modal__save"
                type="button"
                onClick={bubblingModalData}
              >
                {lang[langData.apply]}
              </button>
            </div>
          </div>
        </div>
        <div data-focused="end" tabIndex="0" />
      </div>
      <div className="modal__overley" />
    </>
  );
};

ModalWindow.defaultProps = {
  title: 'new modal',
  render: () => (
    <>
      <div className="modal__item">
        <label className="modal__lab" htmlFor="firstName">
          first name
          <input
            id="firstName"
            className="modal__field"
            type="text"
            placeholder="first name"
          />
        </label>
      </div>
      <div className="modal__item">
        <label className="modal__lab" htmlFor="lastName">
          last name
          <input
            id="lastName"
            className="modal__field"
            type="text"
            placeholder="last mame"
          />
        </label>
      </div>
    </>
  ),
  updateState: (f) => f,
};

export default ModalWindow;
