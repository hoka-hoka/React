const checkBoxes = [
  {
    id: 1,
    idFor: 'check_1',
    labelText: '',
    labelClassName: 'check-box__lab',
    action: false,
  },
  {
    id: 2,
    idFor: 'check_2',
    labelText: 'checkbox',
    labelClassName: 'check-box__lab',
    action: true,
  },
];

const about = [
  {
    id: 1,
    name: 'idFor',
    type: 'string',
    text: 'Идентификатр метки',
  },
  {
    id: 2,
    name: 'labelText',
    type: 'string',
    text: 'Текст метки',
  },
  {
    id: 3,
    name: 'labelClassName',
    type: 'string',
    text: 'Имя класса метки',
  },
  {
    id: 4,
    name: 'action',
    type: 'boolean',
    text: 'Активность',
  },
  {
    id: 5,
    name: 'bubbling',
    type: 'boolean',
    text: 'Триггер для callback-функции',
  },
  {
    id: 6,
    name: 'callback',
    type: '(active: boolean) => void',
    text: 'callback-функция',
  },
];

export { checkBoxes, about };
