import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

type BlogPostInfoProps = {
  readingTime: number
  readableDate: string
}

export default function BlogPostInfo({ readingTime, readableDate }: BlogPostInfoProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography
        variant="caption"
        component="span"
        title={`Bu yazı ${readableDate} tarihinde yayınlandı.`}
        aria-label={`Bu yazı ${readableDate} tarihinde yayınlandı.`}
      >
        {readableDate}
      </Typography>
      {readingTime ? (
        <>
          <Box
            component="span"
            sx={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              bgcolor: 'text.disabled',
            }}
          />
          <Typography
            variant="caption"
            component="span"
            title={`Bu blog yazısını okumak ${readingTime} dakika sürer.`}
            aria-label={`Bu blog yazısını okumak ${readingTime} dakika sürer.`}
          >
            {Math.ceil(readingTime)} dakika okuma
          </Typography>
        </>
      ) : null}
    </Stack>
  )
}
