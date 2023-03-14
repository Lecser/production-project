import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';

import { Story } from '@storybook/react';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
  (
    <StoreProvider initialState={initialState}>
      <StoryComponent />
    </StoreProvider>
  );
