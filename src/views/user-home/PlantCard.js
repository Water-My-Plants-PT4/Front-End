import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import plant from '../../assets/images/plant-pic-1.jpg';
import { deletePlant } from '../../actions';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const PlantCard = (props) => {
  const handleDelete = (id) => {
    props.deletePlant(id);
  };

  const { details } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={plant}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {details.nickname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Nickname: {details.nickname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Species: {details.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            H20: {details.h2o_frequency}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`plants/${details.id}`}>edit</Link>
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            handleDelete(details.id);
          }}>
          delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default connect(null, { deletePlant })(PlantCard);
