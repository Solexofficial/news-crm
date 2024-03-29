/* eslint-disable max-len */
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nam omnis reprehenderit doloribus dolorum magnam dignissimos fugiat aperiam, consequuntur deleniti tempore molestiae facilis esse, dolor debitis, molestias in optio vel!',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
