import * as React from "react";

import Typography from "@mui/material/Typography";

const Address: React.FunctionComponent = () => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        Montreal, Quebec
      </Typography>
    </>
  )
}

export default Address;