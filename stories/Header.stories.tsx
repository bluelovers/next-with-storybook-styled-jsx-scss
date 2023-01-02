import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { StoryFn, Meta } from '@storybook/react'

import { Header, HeaderProps } from '../components/Header'

export default {
  title: 'Example/Header',
  component: Header,
} as Meta

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
