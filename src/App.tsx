import React, { FC } from 'react'
import { Box } from 'ink'
import { Foo, Bar } from './components'

const App: FC = () => (<Box flexDirection="column"><Foo /><Bar /></Box>)
export default App
