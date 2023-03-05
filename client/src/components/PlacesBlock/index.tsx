import { Box, Button, Card, CardActions, CardContent, Link, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectPlaceData } from '../../redux/places/selectors'
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import PlaceModal from '../PlaceModal';
import DeleteIcon from '@mui/icons-material/Delete';
import { Place } from '../../redux/places/types';
import Skeleton from './skeleton'
import { useAppDispatch } from '../../redux/store';
import { deletePlace, updateRating } from '../../redux/places/asyncActions';

const index = () => {
  const { items, status } = useSelector(selectPlaceData)

  const dispatch = useAppDispatch()
  const [modalOpen, setModalOpen] = useState(false);
  const [item, setItem] = useState<Place>();

  const setRating = (id: number, rating: number): number => {
    dispatch(updateRating({ id, rating }))

    return rating
  }

  const hadleModalOpen = (v: Place) => {
    setItem(v)
    setModalOpen(true)
  }

  return (
    <>
      {status === 'completed' ?
        <Box sx={{ maxHeight: '750px', overflow: 'scroll' }}>
          {items.map((item) => (
            <Card key={item.id} sx={{ minWidth: 275, mb: 2 }}>
              <CardContent>

                <Typography sx={{ fontSize: 16, justifyContent: 'space-between', display: 'flex' }} gutterBottom>
                  {item.name}
                  <DeleteIcon onClick={() => dispatch(deletePlace(item.id))} />
                </Typography>

                {item.kindsOfSports ? <Typography variant="body1" color="text.secondary">
                  {item.kindsOfSports.split(',').join(' ')}
                </Typography> : false}
                <Typography sx={{ mt: 1 }}>
                  Часы работы: {item.workingHoursOnWeekdays}
                </Typography>
                {item.workingHoursOnSaturaday ? <Typography>
                  Часы работы по субботам: {item.workingHoursOnSaturaday}
                </Typography> : false}
                {item.workingHoursOnSunday ? <Typography>
                  Часы работы по воскресеньям: {item.workingHoursOnSunday}
                </Typography> : false}
                <Typography sx={{ mt: 1 }}>
                  Адресс: {item.address}
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Активный: {item.isActive ? <DoneIcon sx={{ mb: -0.4, mr: 1 }} /> : <ClearIcon sx={{ mb: -0.7, mr: 1 }} />}
                  Находится в реестре: {item.inRegistry ? <DoneIcon sx={{ mb: -0.4 }} /> : <ClearIcon sx={{ mb: -0.7 }} />}
                </Typography>
                <Typography>
                  Рейтинг: <Rating
                    name="simple-controlled"
                    value={item.rating}
                    sx={{ mt: 2 }}
                    onChange={(_, newValue) => {
                      setRating(item.id, newValue as number);
                    }}
                  />
                </Typography>
                <Typography sx={{ mt: 2, textAlign: 'end' }}>
                  {item.email ? <Link underline="none" href={`malito:${item.email}`}>email: {item.email}</Link> : false}
                  {item.link ? <Link sx={{ ml: 1 }} underline="none" href={item.link}>сайт: {item.link}</Link> : false}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => hadleModalOpen(item)} size="small">Learn More</Button>
              </CardActions>

            </Card>
          ))}
          <PlaceModal item={item} state={modalOpen} setState={setModalOpen} />
        </Box>
        : <Skeleton />}
    </>
  )
}

export default index