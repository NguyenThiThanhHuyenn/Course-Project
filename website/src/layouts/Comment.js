import { Paper, Stack, Typography } from "@mui/material";

export default function Comment({value}) {

  return (
    <Paper>
      <Stack>
        <Typography variant="caption" fontWeight="bold" fontSize="1rem" >{value.user.userName}</Typography>
        <Typography variant="caption" >{value.commentText}</Typography>
      </Stack>
    </Paper>
  )
}