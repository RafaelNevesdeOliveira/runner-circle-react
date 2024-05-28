import { Box, CssBaseline, Grid } from '@mui/material';
import { SearchField, FeedContainer } from './styles';
import { ActivityCard, Activity } from '../../components/ActivityCard';

const mockActivities: Activity[] = [
  {
    id: 1,
    time: '8:00 AM',
    type: 'Run',
    distance: '5km',
    calories: '300',
    bpm: '120',
    user: 'User1',
    userImage: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D',
    likes: 10,
    comments: 5,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-BL5mfltDoNZvUCaK7EGrl7q9WoFy1rCjKupUZ23OQ&s',
  },
  {
    id: 2,
    time: '9:00 AM',
    type: 'Walk',
    distance: '3km',
    calories: '150',
    bpm: '100',
    user: 'User2',
    userImage: 'https://images.unsplash.com/photo-1500468756762-a401b6f17b46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZSUyMHNwb3J0fGVufDB8fDB8fHww',
    likes: 5,
    comments: 2,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-BL5mfltDoNZvUCaK7EGrl7q9WoFy1rCjKupUZ23OQ&s',
  },
];

export function FeedGeral() {
  return (
    <Box flex="1">
      <CssBaseline />
      <SearchField fullWidth placeholder="O que você procura?" variant="outlined" />
      <FeedContainer maxWidth="lg">
        <Grid container spacing={3}>
          {mockActivities.map((activity) => (
            <Grid item xs={12} sm={6} md={4} key={activity.id}>
              <ActivityCard activity={activity} />
            </Grid>
          ))}
        </Grid>
      </FeedContainer>
    </Box>
  );
}
