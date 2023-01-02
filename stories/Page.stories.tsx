import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { StoryFn, Meta } from '@storybook/react'

import { Page, PageProps } from '../components/Page'
import * as HeaderStories from './Header.stories'

export default {
  title: 'Example/Page',
  component: Page,
} as Meta

const Template: StoryFn<PageProps> = (args) => <Page {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
}
