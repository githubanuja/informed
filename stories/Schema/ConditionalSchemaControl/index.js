import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, SchemaFields, Debug } from '../../../src';

const schema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input'
    },
    'ui:lastName': {},
    email: {
      type: 'string',
      title: 'Email',
      format: 'email',
      'ui:control': 'input'
    },
    married: {
      type: 'string',
      title: 'Are you married?',
      enum: ['yes', 'no'],
      'ui:control': 'radio'
    },
    'ui:spouse': {},
    drinking: {
      type: 'object',
      properties: {
        age: {
          type: 'number',
          title: 'your age?',
          'ui:control': 'input'
        },
        'ui:idrink': {}
      },
      allOf: [
        {
          $id: 'idrink',
          if: {
            properties: { age: { const: '21' } },
            required: ['age']
          },
          then: {
            properties: {
              doDrink: {
                type: 'boolean',
                title: 'I drink',
                'ui:control': 'checkbox',
                'ui:props': {
                  initialValue: true
                }
              },
              'ui:favoriteDrink': {}
            },
            allOf: [
              {
                $id: 'favoriteDrink',
                if: {
                  properties: { doDrink: { const: true } }
                },
                then: {
                  properties: {
                    favoriteDrink: {
                      type: 'string',
                      title: 'Favorite drink',
                      'ui:control': 'input'
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  },
  allOf: [
    {
      $id: 'spouse',
      if: {
        properties: {
          married: { const: 'yes' }
        },
        required: ['married']
      },
      then: {
        properties: {
          spouse: {
            type: 'string',
            title: 'Spouse name',
            'ui:control': 'input'
          }
        },
        required: ['spouse']
      }
    },
    {
      $id: 'lastName',
      if: {
        properties: {
          firstName: { not: { enum: ['Robin', 'Joe'] } }
        }
      },
      then: {
        properties: {
          lastName: {
            type: 'string',
            title: 'Last name',
            'ui:control': 'input'
          }
        }
      }
    }
  ],
  required: ['name', 'email']
};

const Schema = () => (
  <Form schema={schema}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default withDocs(readme, Schema);
