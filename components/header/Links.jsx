import React from 'react'
import Contant from '../../contant'
import { Link } from '@mui/material'
function Links() {
  console.log(Contant(), 111111111111)
  return (
    <>
      {/* nav links */}
      {Contant().links.map((e, i) => (
        <Link key={i} href={e.id}>
          {e.name}
        </Link>
      ))}
    </>
  )
}

export default Links
