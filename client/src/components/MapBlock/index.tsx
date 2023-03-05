import React, { useState } from 'react'
import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { selectPlaceData } from '../../redux/places/selectors';
import { CircularProgress } from '@mui/material';
import PlaceModal from '../PlaceModal';
import { Place } from '../../redux/places/types';


const index = () => {
  const { items, status } = useSelector(selectPlaceData)
  const [modalOpen, setModalOpen] = useState(false)

  const [item, setItem] = useState<Place>();
  const hadleModalOpen = (v: Place) => {
    setItem(v)
    setModalOpen(true)
  }

  return (
    <>
      {status === 'completed' ?
        <YMaps>
          <Map height="100%" width="100%" modules={["control.ZoomControl", "control.FullscreenControl"]} defaultState={{ center: [55.75, 37.57], zoom: 5 }} >
            <Clusterer
              options={{
                preset: "islands#invertedVioletClusterIcons",
                groupByCoordinates: false,
              }}
            >
              {items.map((item, idx) => (
                <Placemark key={idx} onClick={() => hadleModalOpen(item)} defaultGeometry={[item.objectYCoordinate, item.objectXCoordinate]} />
              ))}
            </Clusterer>
          </Map>
        </YMaps> : false}
      {status === 'loading' ? <Box sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box> : false}
      <PlaceModal item={item} state={modalOpen} setState={setModalOpen} />
    </>
  )
}

export default index