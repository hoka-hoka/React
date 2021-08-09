const dropList = [
  {
    id: 1,
    optionNames: [
      'option-1',
      'option-2',
      'option-3',
      'option-4',
      'option-5',
      'option-1',
      'option-2',
      'option-3',
      'option-4',
      'option-5',
      'option-1',
      'option-2',
      'option-3',
      'option-4',
      'option-5',
    ],
    placeHolder: 'select',
  },
  // {
  //   id: 2,
  //   idFor: 'drop',
  //   optionNames: ['option-1', 'option-2', 'option-3', 'option-4', 'option-5'],
  //   placeHolder: 'select',
  // },
  // {
  //   id: 3,
  //   optionNames: ['option-1', 'option-2', 'option-3', 'option-4', 'option-5'],
  //   placeHolder: 'select',
  //   action: true,
  // },
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
    name: 'optionNames',
    type: 'string [ ]',
    text: 'Массив опций',
  },
  {
    id: 3,
    name: 'placeHolder',
    type: 'string',
    text: 'Текст заполнитель',
  },
  {
    id: 4,
    name: 'action',
    type: 'boolean',
    text: 'Активность',
  },
  {
    id: 5,
    name: 'callback',
    type: '(active: boolean) => void',
    text: 'callback-функция',
  },
];

export { dropList, about };
