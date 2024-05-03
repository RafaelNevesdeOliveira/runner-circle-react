import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardActions,
  CssBaseline
} from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import CommentIcon from '@mui/icons-material/Comment';
import { styled } from '@mui/material/styles';
import { Layout, SearchField, Sidebar } from './styles';

const FeedContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
`;

const ActivityCard = styled(Card)`
  width: 100%;
  max-width: 500px;
`;

export function FeedGeral() {
  const activities = [
    { id: 1, time: '00:30', type: 'Caminhada intensa', distance: '2 Km', calories: '300 kcal', bpm: '120 BPM', user: 'Laura Mota Linhares', likes: 5, comments: 2 },
    { id: 2, time: '00:30', type: 'Caminhada intensa', distance: '2 Km', calories: '300 kcal', bpm: '120 BPM', user: 'Laura Mota Linhares', likes: 5, comments: 2 },
    { id: 2, time: '00:30', type: 'Caminhada intensa', distance: '2 Km', calories: '300 kcal', bpm: '120 BPM', user: 'Laura Mota Linhares', likes: 5, comments: 2 },
    { id: 2, time: '00:30', type: 'Caminhada intensa', distance: '2 Km', calories: '300 kcal', bpm: '120 BPM', user: 'Laura Mota Linhares', likes: 5, comments: 2 },
    { id: 2, time: '00:30', type: 'Caminhada intensa', distance: '2 Km', calories: '300 kcal', bpm: '120 BPM', user: 'Laura Mota Linhares', likes: 5, comments: 2 },
    { id: 2, time: '00:30', type: 'Caminhada intensa', distance: '2 Km', calories: '300 kcal', bpm: '120 BPM', user: 'Laura Mota Linhares', likes: 5, comments: 2 },
  ];
  return (
    <Layout>
      <CssBaseline />
      <Sidebar>
        <Typography variant="h6">Runner Circle</Typography>
        <IconButton color="inherit">Publicar</IconButton>
        <IconButton color="inherit">Feed</IconButton>
        <IconButton color="inherit">Perfil</IconButton>
        <IconButton color="inherit">Logout</IconButton>
      </Sidebar>
        <SearchField fullWidth placeholder="O que você procura?" variant="outlined" />
      <FeedContainer maxWidth="sm">
        {activities.map((activity) => (
          <ActivityCard key={activity.id}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>{activity.time} - {activity.type}</Typography>
              <Typography variant="body2">Distância: {activity.distance}</Typography>
              <Typography variant="body2">Calorias: {activity.calories}</Typography>
              <Typography variant="body2">Batimentos: {activity.bpm}</Typography>
              <Typography variant="body2">{activity.user}</Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <IconButton aria-label="add to favorites">
                {/* <FavoriteIcon /> {activity.likes} */}
              </IconButton>
              <IconButton aria-label="comment">
                {/* <CommentIcon /> {activity.comments} */}
              </IconButton>
            </Box>
          </ActivityCard>
        ))}
      </FeedContainer>
    </Layout>
  );
}

