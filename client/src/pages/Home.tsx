import { Box, Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import BudgetChart from '../components/Charts/budgetChart'
import ActiveChart from '../components/Charts/activeChart'
import RegChart from '../components/Charts/regChart'
import Header from '../components/Header'
import MapBlock from '../components/MapBlock'
import PlacesBlock from '../components/PlacesBlock'
import { fetchPlaces } from '../redux/places/asyncActions'
import { useAppDispatch } from '../redux/store'

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPlaces())
  }, [])

  return (
    <Box sx={{ height: '500px', m: 1 }}>
      <Header />
      <Container disableGutters sx={{ pt: 2, height: '90%' }} maxWidth={false}>
        <Grid container spacing={1} sx={{ height: '100%' }}>
          <Grid item xs={7}>
            <MapBlock />
          </Grid>
          <Grid item xs={5}>
            <PlacesBlock />
          </Grid>
          <Grid item xs={4}>
            <BudgetChart/>
          </Grid>
          <Grid item xs={4}>
            <ActiveChart/>
          </Grid>
          <Grid item xs={4}>
            <RegChart/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home