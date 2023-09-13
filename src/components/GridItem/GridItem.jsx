import { string, object } from 'prop-types';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip'

import Switch from '../Switch/Switch';
import { ReactComponent as Tactile } from '../../assets/switch_type_tactile.svg';
import { ReactComponent as Linear } from '../../assets/switch_type_linear.svg';
import { ReactComponent as Clicky} from '../../assets/switch_type_clicky.svg';
import { ReactComponent as PCB } from '../../assets/switch_mount_pcb.svg';
import { ReactComponent as Plate } from '../../assets/switch_mount_plate.svg';
import { ReactComponent as VolumeNormal } from '../../assets/volume-normal.svg';
import { ReactComponent as VolumeLoud } from '../../assets/volume-loud.svg';

const GridItem = ({ name, switchData, volume, type }) => {

    const Type = () => {
        switch(type) {
            case 'Tactile':
                return <Tactile height='100%' />;
            case 'Linear':
                return <Linear height='100%' />;
            case 'Clicky':
                return <Clicky height='100%' />;
            default:
                return <Tactile height='100%' />;
        }
    }

    const Mount = () => {
        switch(switchData.mount) {
            case 5:
                return <PCB height='100%' />;
            case 3:
                return <Plate height='100%' />;
        }
    }

    const Volume = () => {
        switch(volume) {
            case 'Normal':
                return <VolumeNormal height='100%' />;
            case 'Loud':
                return <VolumeLoud height='100%' />;
            default:
                return <VolumeNormal height='100%' />;
        }
    }

    return (
        <Card
            sx={{ display: 'flex' }}
        >
            <CardMedia
                sx={{ margin: 'auto 0 auto 20px' }}
            >
                <Switch
                    id={switchData.id}
                    stem_color={switchData.stem_color}
                    stem_type={switchData.stem_type}
                    stem_construction={switchData.stem_construction}
                    housing_top_type={switchData.housing_top_type}
                    housing_top_color={switchData.housing_top_color}
                    housing_bottom_type={switchData.housing_bottom_type}
                    housing_bottom_color={switchData.housing_bottom_color}
                    mount={switchData.mount}
                />
            </CardMedia>
            <CardContent
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <Typography gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}
                >
                    <Tooltip title={type} placement="bottom">
                        <span style={{ height: '100%'}}>
                            <Type />
                        </span>
                    </Tooltip>
                    <Tooltip title={`${switchData.mount} Pin`} placement="bottom">
                        <span style={{ height: '100%'}}>
                            <Mount />
                        </span>
                    </Tooltip>
                    <Tooltip title={`Volume: ${volume}`} placement="bottom">
                        <span style={{ height: '100%'}}>
                            <Volume />
                        </span>
                    </Tooltip>
                </Box>
            </CardContent>
        </Card>
    );
}

GridItem.propTypes = {
    name: string,
    switchData: object,
    volume: string,
    type: string
}

export default GridItem