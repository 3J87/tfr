import React from 'react'
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

type MiniMapProps = {
  objectYCoordinate: number,
  objectXCoordinate: number
}

const index = ({ objectYCoordinate, objectXCoordinate }: MiniMapProps) => {
  return (
    <YMaps>
      <Map height="100%" width="100%" defaultState={{ center: [objectYCoordinate, objectXCoordinate], zoom: 17 }} >
        <Placemark geometry={[objectYCoordinate, objectXCoordinate]} />
      </Map>
    </YMaps>
  )
}

export default index