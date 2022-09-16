import * as React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Paper, Grid } from '@mui/material';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const WeatherMap: React.FunctionComponent = () => {
  return (
    <Paper style={{ height: '100%' }}>
      <MapContainer
        center={[45.5019, -73.5674]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '100%', borderRadius: '15px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[45.5019, -73.5674]}>
          <Popup>
            <Grid container>
              <Grid item lg={12}>
                <h2>Today</h2>
                <p>Almost Cloudy</p>
              </Grid>
              <Grid item lg={12}>
                <p>18‎°C-22‎°C</p>
              </Grid>
            </Grid>
          </Popup>
        </Marker>
      </MapContainer>
    </Paper>
  );
};

export default WeatherMap;
