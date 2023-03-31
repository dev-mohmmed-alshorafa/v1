import { Link, Stack } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <Stack>
      <Link sx={{ width: '50px', height: '50px' }} href="#">
        <img
          style={{ width: '100%', height: '100%' }}
          src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"
          alt=""
        />
      </Link>
      header
    </Stack>
  )
}
