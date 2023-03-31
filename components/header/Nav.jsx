import { Link, Stack } from '@mui/material'
import React from 'react'
import Links from './Links'

export default function Nav() {
  return (
    <Stack justifyContent={'space-between'} p={'30px 100px'} alignItems={'center'} direction={'row'}>
      <Link sx={{ width: '50px', height: '50px' }} href="#">
        <img
          style={{ width: '100%', height: '100%' }}
          src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"
          alt=""
        />
      </Link>
      <Stack gap={'40px'} direction={'row'}>
        <Links />
      </Stack>
    </Stack>
  )
}
