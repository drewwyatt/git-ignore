import { exec } from 'child_process'
import React, { FC, useEffect, useState } from 'react'
import { Text } from 'ink'

const Exec: FC = () => {
  const [didExec, setExec] = useState(false)
  useEffect(() => {
    exec('mkdir foo', () => {
      exec('touch foo/hey', () => setExec(true))
    })
  }, [])

  return <Text>{!didExec ? 'executing...' : 'done'}</Text>
}

export default Exec
