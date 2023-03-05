import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Place } from '../../redux/places/types';
import { Grid } from '@mui/material';
import MiniMap from '../MiniMap';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  minHeight: '450px',
  bgcolor: 'background.paper',
  border: '1px solid #d0d0d0',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

type PlaceModalProps = {
  state: boolean;
  setState: (v: boolean) => void;
  item: Place | undefined;
}

export default function PlaceModal({ state, setState, item }: PlaceModalProps) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={state}
        onClose={() => setState(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {item ? <Grid container sx={style} spacing={2}>
          <Grid item xs={4}>
            <MiniMap objectXCoordinate={item.objectXCoordinate} objectYCoordinate={item.objectYCoordinate} />
          </Grid>
          <Grid item xs={8}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {item.name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {item.fullDescription}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 4 }}>
              {item.address}
            </Typography>
          </Grid>
        </Grid> : <></>}
      </Modal>
    </div>
  );
}
