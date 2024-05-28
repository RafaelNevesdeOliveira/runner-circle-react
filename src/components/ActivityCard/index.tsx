import {
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import {
  ActivityCardContainer,
  ActivityDescription,
  ActivityImage,
  InfoBox,
  InfoItem,
  UserImage,
  UserSection,
} from "./styles";
import { PersonSimpleRun, Flame, Heartbeat } from "phosphor-react";

export interface Activity {
  id: number;
  time: string;
  type: string;
  distance: string;
  calories: string;
  bpm: string;
  user: string;
  userImage: string; // URL da imagem do usuário
  likes: number;
  comments: number;
  imageUrl: string; // URL da imagem do exercício
}

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <ActivityCardContainer>
      <ActivityImage src={activity.imageUrl} alt="Activity" />
      <CardContent>
        <ActivityDescription>
          <Typography variant="subtitle1" gutterBottom>
            {activity.type}
          </Typography>
        </ActivityDescription>
        <InfoBox>
          <InfoItem>
            <PersonSimpleRun size={16} weight="bold" />
            <Typography variant="body2">Distância</Typography>
            <Typography variant="body1">{activity.distance} km</Typography>
          </InfoItem>
          <InfoItem>
            <Flame size={16} weight="bold" />
            <Typography variant="body2">Calorias</Typography>
            <Typography variant="body1">{activity.calories} kcal</Typography>
          </InfoItem>
          <InfoItem>
            <Heartbeat size={16} weight="bold" />
            <Typography variant="body2">Batimentos</Typography>
            <Typography variant="body1">{activity.bpm} BPM</Typography>
          </InfoItem>
        </InfoBox>
        <UserSection>
          <UserImage src={activity.userImage} alt={activity.user} />
          <Typography variant="body2">{activity.user}</Typography>
        </UserSection>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"></IconButton>
        <IconButton aria-label="comment"></IconButton>
      </CardActions>
    </ActivityCardContainer>
  );
}
