import * as React from "react";

import Typography from "@mui/material/Typography";
import getCoordinates, {Coords} from "./async-get-coordinates";

interface Address {
  locality: string,
  county: string,
  region: string,
  country: string,
}

interface AddressData {
  data: Array<Address>
}

const Address: React.FunctionComponent = () => {
  const [address, setAddress] = React.useState("-");

  React.useEffect(() => {
    async function getLocation() {
      const coords = await getCoordinates();
      const response = await fetch(`http://api.positionstack.com/v1/reverse?access_key=${import.meta.env.VITE_POSITION_STACK_TOKEN}&query=${coords.latitude},${coords.longitude}`)
      const data: AddressData = await response.json();
      console.log("data", data);
      if (data.data[0].county && data.data[0].region) {
        setAddress(`${data.data[0].county}, ${data.data[0].region}`)
      }
    }

    getLocation();
  }, [])

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        {address}
      </Typography>
    </>
  )
}

export default Address;