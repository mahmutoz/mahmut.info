import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export default function LoadingWrapper() {
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'background.default',
      }}
    >
      <CircularProgress />
    </Box>
  )
}
