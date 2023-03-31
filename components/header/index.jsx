import { Stack } from '@mui/material'
import React from 'react'
import Nav from './Nav'
import ResponsiveCarousel from './CenterMode'

export default function Header() {
  return (
    <Stack>
      <Nav />
      <ResponsiveCarousel />
    </Stack>
  )
}
