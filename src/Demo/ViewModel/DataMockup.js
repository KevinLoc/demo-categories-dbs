import React from 'react';
import { ReactComponent as Icon1 } from '../Icons/icon1.svg';
import { ReactComponent as Icon2 } from '../Icons/icon2.svg';
import { ReactComponent as Icon3 } from '../Icons/icon3.svg';

export const listCategories = [0, 1, 2];
export const colors = ['#ffaa22', '#8657FF'];
export const categoriesData = [
  {
    id: 0,
    title: `At age 35`,
    iconCategory: <Icon1 />,
    description:
      'Peter and his wife, Jane got a home loan for their new home. He buys eDecreasingTerm that matches his home loan.',
  },
  {
    id: 1,
    title: `During the policy term`,
    iconCategory: <Icon2 />,
    description:
      'Every month, Peter pays a premium of $31 for this policy. The coverage amount decreases at the same rate as his home loan.',
  },
  {
    id: 2,
    title: `At age 40`,
    iconCategory: <Icon3 />,
    description:
      'He is unfortunately diagnosed with a terminal illness. Jane can use the lumpsum payout from this policy to pay off their outstanding home loan.',
  },
];

export const detailCategories = [
  {
    layoutStyle: 'none',
    data: [
      {
        id: 0,
        title: `Home Loan Details`,
        data: [
          { id: 1, title: 'Home Loan', detail: 'SGD 300,000' },
          { id: 2, title: 'Loan Tenure', detail: '25 Years' },
          { id: 3, title: 'Interest Rate', detail: '3%' },
        ],
      },
      {
        id: 1,
        title: `Policy Details`,
        data: [
          { id: 1, title: 'Home Loan', detail: 'SGD 400,000' },
          { id: 2, title: 'Loan Tenure', detail: '25 Years' },
          { id: 3, title: 'Interest Rate', detail: '3%' },
        ],
      },
      {
        id: 3,
        title: `Policy Details`,
        data: [
          { id: 1, title: 'Home Loan', detail: 'SGD 500,000' },
          { id: 2, title: 'Loan Tenure', detail: '25 Years' },
          { id: 3, title: 'Interest Rate', detail: '3%' },
        ],
      },
    ],
  },
  {
    layoutStyle: 'none',
    data: [
      {
        id: 0,
        title: `Home Loan Details`,
        data: [
          { id: 1, title: 'Home Loan', detail: 'SGD 550,000' },
          { id: 2, title: 'Loan Tenure', detail: '25 Years' },
          { id: 3, title: 'Interest Rate', detail: '3%' },
        ],
      },
      {
        id: 1,
        title: `Policy Details`,
        data: [
          { id: 1, title: 'Home Loan', detail: 'SGD 600,000' },
          { id: 2, title: 'Loan Tenure', detail: '25 Years' },
          { id: 3, title: 'Interest Rate', detail: '3%' },
        ],
      },
    ],
  },
  {
    layoutStyle: 'col',
    data: [
      {
        id: 0,
        title: `Payout`,
        data: [
          { id: 1, title: 'Outstanding Home Loan', detail: 'SGD 442,626' },
          { id: 2, title: 'Lumpsum Payout', detail: 'SGD 442,626' },
        ],
      },
    ],
  },
];
