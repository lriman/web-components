import React, { useState } from 'react';
import Navigation from '../Navigation';

const initLst = [
  {
    id: 'administration',
    title: 'Администрирование',
    icon: 'admin',
    href: '/',
    active: false,
    open: false,
    items: [
      {
        id: '1_1',
        title: 'Роли',
        href: '/',
        active: false,
      },
      {
        id: '1_2',
        title: 'Операторы',
        href: '/',
        active: false,
      },
      {
        id: '1_3',
        title: 'Логи',
        href: '/',
        active: false,
      },
    ],
  },
  {
    id: 'puzzles',
    title: 'Пазлы',
    icon: 'puzzle',
    href: null,
    active: true,
    open: true,
    items: [
      {
        id: '2_1',
        title: 'Категории',
        href: '/',
        active: false,
      },
      {
        id: '2_2',
        title: 'Загрузка',
        href: '/',
        active: false,
      },
      {
        id: '2_3',
        title: 'Список',
        href: '/',
        active: false,
      },
      {
        id: '2_4',
        title: 'Уровни',
        href: '/',
        active: false,
      },
    ],
  },
  {
    id: 'streaming',
    title: 'Стриминг',
    icon: 'stream',
    href: null,
    active: false,
    open: false,
    items: [
      {
        id: '2_1',
        title: 'Создать стрим',
        href: '/',
        active: false,
      },
      {
        id: '2_2',
        title: 'Список стримов',
        href: '/',
        active: false,
      },
    ],
  },
  {
    id: 'broadcasts',
    title: 'Трансляции',
    icon: 'stream',
    href: null,
    active: false,
    open: false,
  },
  {
    id: 'folders',
    title: 'Еще что-то',
    icon: 'folders',
    href: null,
    active: false,
    open: false,
  },
];

export default function NavigationExample() {
  const [list, setList] = useState(initLst);

  const onSectionClick = ({ id, event }) => {
    event.preventDefault();

    const newList = [...list].map(section => ({
      ...section,
      active: section.id === id,
      open: section.id === id ? true : section.open,
      items: section.items && section.items.map(item => ({ ...item, active: false })),
    }));
    setList(newList);
  };

  const onSectionOpenerClick = ({ id }) => {
    const newList = [...list].map(section => ({ ...section, open: section.id === id ? !section.open : section.open }));
    setList(newList);
  };

  const onSectionItemClick = ({ id, itemId, event }) => {
    event.preventDefault();

    const newList = [...list].map(section => ({
      ...section,
      active: false,
      items: section.items && section.items.map(item => ({ ...item, active: section.id === id && item.id === itemId })),
    }));
    setList(newList);
  };

  return (
    <Navigation
      list={list}
      onSectionClick={onSectionClick}
      onSectionOpenerClick={onSectionOpenerClick}
      onSectionItemClick={onSectionItemClick}
    />
  );
}
