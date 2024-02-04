import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function ComingSoonView() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 1,
      }}
    >
      <Typography variant="h3" m="auto">
        Yakında...
      </Typography>
    </Box>
  )
}
