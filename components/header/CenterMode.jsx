import React from 'react'
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel'
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Icon, IconButton, Stack } from '@mui/material'

export const data = [
  {
    cover:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Interstaller',
  },
  {
    cover:
      'https://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/cover/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg',
    title: 'Inception',
  },
  {
    cover:
      'https://images.unsplash.com/photo-1516293635722-a0ae2709d570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMGxvdWlzZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'Blade Runner 2049',
  },
  {
    cover:
      'https://www.banfftours.com/wp-content/uploads/2019/10/Lake-Louise-in-Fall.jpg',
    title: 'Icon man 3',
  },
  {
    cover:
      'https://cdn.sanity.io/images/6sugrgl1/production/9caee874dece0a2ebed0e7c94a9727f2acabf69f-2000x1333.jpg?rect=0,224,2000,887&w=1988&h=882&fit=crop',
    title: 'Venom',
  },
  {
    cover: 'https://images2.alphacoders.com/631/thumb-1920-631095.jpg',
    title: 'Steins Gate',
  },
  {
    cover: 'https://images4.alphacoders.com/665/thumb-1920-665242.png',
    title: 'One Punch Man',
  },
  {
    cover: 'https://images2.alphacoders.com/738/thumb-1920-738176.png',
    title: 'A Silent Voice',
  },
  {
    cover: 'https://images8.alphacoders.com/100/thumb-1920-1005531.jpg',
    title: 'Demon Slayer',
  },
  {
    cover: 'https://images2.alphacoders.com/582/thumb-1920-582804.png',
    title: 'Attack On Titan',
  },
]

export default function ResponsiveCarousel(props) {
  const ref = React.useRef()
  return (
    <Stack sx={{ width: { xs: '90vw',overflowX:'hidden',margin:'auto', },background:'red', position: 'relative' }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          let currentVisibleSlide = 5
          if (parentWidth <= 1440) currentVisibleSlide = 3
          if (parentWidth <= 1080) currentVisibleSlide = 1
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={7}
              useGrabCursor
            />
          )
        }}
      />
      <>
        <IconButton
          style={{ position: 'absolute', top: '40%', left: 10, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goBack()
          }}
        >
          FF
          {/* <ArrowBackIcon /> */}
        </IconButton>
        <IconButton
          style={{ position: 'absolute', top: '40%', right: 10, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goNext(6)
          }}
        >
          GG
          {/* <ArrowForwardIcon /> */}
        </IconButton>
      </>
    </Stack>
  )
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below
export const Card = React.memo(function (props) {
  const { data, dataIndex } = props
  const { cover } = data[dataIndex]
  return (
    <div
      style={{
        width: '100%',
        height: 300,
        userSelect: 'none',
      }}
      className="my-slide-component"
    >
      <img
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          borderRadius: 0,
        }}
        draggable={false}
        src={cover}
      />
    </div>
  )
})
