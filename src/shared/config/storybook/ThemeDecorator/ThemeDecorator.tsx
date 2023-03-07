import { Theme } from 'shared/config/theme/ThemeContext';

import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
