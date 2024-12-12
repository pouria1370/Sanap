import { TFormLayOut } from "@customTypes/Components/Atom/Atom";
import { Card, CardHeader, CardContent } from "@mui/material";
import React from "react";

const FormLayout = ({ children, header, subHeader }: TFormLayOut) => {
  return (
    <Card className="bg-slate-100 font-Iransans">
      <CardHeader
        className="text-center font-semibold leading-10"
        title={<div className="text-base font-bold">{header}</div>}
        subheader={<div className="text-xs font-bold mt-1">{subHeader}</div>}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default FormLayout;
