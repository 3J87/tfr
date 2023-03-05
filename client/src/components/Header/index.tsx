import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import React from 'react'
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const index = () => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ borderRadius: 1 }}>
        <Toolbar>
          <Box sx={{ margin: '0 auto' }}>
            <img
              src='/sports.svg'
              height="40"
              style={{ paddingTop: 10 }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    // </Box>
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand className='red'>
    //       <img src='/sports.svg'
    //         height="40"
    //         className="d-inline-block align-top" />
    //     </Navbar.Brand>
    //   </Container>
    // </Navbar>
  )
}

export default index