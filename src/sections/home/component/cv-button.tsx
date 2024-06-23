"use client";

import React from "react";
import Iconify from '@/components/iconify'

import Button from '@mui/material/Button'

export default function CvButton() {
  return (
    <Button
      variant="outlined"
      color="primary"
      href="/assets/documents/Mahmut_OZ_CV.pdf"
      target="_blank"
      sx={{ width: 'fit-content'}}
      endIcon={ <Iconify icon="solar:square-arrow-right-up-line-duotone" /> }
    >
      CV Görüntüle
    </Button>
  )
}
