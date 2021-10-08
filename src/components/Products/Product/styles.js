import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 300,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '50%',
  },
}));
