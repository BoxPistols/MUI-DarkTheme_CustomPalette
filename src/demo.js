// import * as React from 'react'
import React from 'react'
import Box from '@mui/material/Box'
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles'
import { amber, deepOrange, grey, blue } from '@mui/material/colors'
import { Button } from '@mui/material'

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark' && {
      background: { default: deepOrange[900], paper: deepOrange[900] }
    }),

    primary: {
      ...amber,
      ...(mode === 'dark' && { main: amber[300] })
    },

    text: {
      ...(mode === 'light'
        ? { primary: grey[900], secondary: grey[800] }
        : { primary: '#fff', secondary: grey[500] })
    },
    // Add Origin
    origin: {
      ...(mode === 'dark'
        ? { primary: blue[100], secondary: blue[900] }
        : { primary: blue[900], secondary: blue[100] })
    }
  }
})

function MyApp() {
  const theme = useTheme()
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '90%',
          height: '90vh',
          margin: '2vh auto',
          alignItems: 'center',
          justifyContent: 'center',
          // bgcolor: 'background.default',
          // Add Origin Color
          bgcolor: 'origin.secondary',
          color: 'origin.primary',
          borderRadius: 1,
          p: 3
        }}
      >
        <p>This is a {theme.palette.mode} mode theme with custom palette</p>
        <Button color="secondary" size="small" variant="contained">
          Contained
        </Button>
        <br />
        <a
          href="https://mui.com/customization/palette/#palette"
          target="_blank"
          rel="noreferrer"
        >
          https://mui.com/customization/palette/#palette
        </a>
      </Box>
    </>
  )
}

// Change Color
const color = ['dark', 'light']
let colorNum = 1
const darkModeTheme = createTheme(getDesignTokens(color[colorNum]))

export default function DarkThemeWithCustomPalette() {
  return (
    <ThemeProvider theme={darkModeTheme}>
      <MyApp />
    </ThemeProvider>
  )
}
