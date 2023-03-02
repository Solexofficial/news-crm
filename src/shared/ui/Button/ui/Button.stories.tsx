import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ButtonTheme } from '..';
import { Button, ButtonSize } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: ButtonTheme.CLEAR,
};

Clear.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline',
  variant: ButtonTheme.OUTLINE,
};

Outline.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeL = Template.bind({});

OutlineSizeL.args = {
  children: 'Outline',
  variant: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

OutlineSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeXL = Template.bind({});

OutlineSizeXL.args = {
  children: 'Outline',
  variant: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};

OutlineSizeXL.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
  variant: ButtonTheme.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  children: 'Text',
  variant: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
BackgroundInvertedTheme.args = {
  children: '>',
  variant: ButtonTheme.BACKGROUND,
  square: true,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  variant: ButtonTheme.BACKGROUND,
  square: true,
  size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  variant: ButtonTheme.BACKGROUND,
  square: true,
  size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  variant: ButtonTheme.BACKGROUND,
  square: true,
  size: ButtonSize.XL,
};
