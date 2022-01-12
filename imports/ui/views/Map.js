import React, { useEffect } from "react"
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { Box } from "@mui/system";
export const MapContainer = () => {

    useEffect(() => {
        new Map({
            target: 'map',
            layers: [
              new TileLayer({
                source: new XYZ({
                  url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
              })
            ],
            view: new View({
              center: [0, 0],
              zoom: 2
            })
          });
    })


    return(
        <Box id="map" className="map" sx={{height: '100%'}}></Box> )
}