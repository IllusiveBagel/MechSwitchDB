import { string, object } from 'prop-types';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip'

import Switch from '../Switch/Switch';
import {
    Tactile,
    Linear,
    Clicky,
    PCB,
    Plate,
    VolumeNormal,
    VolumeLoud,
    VolumeSilent
} from '../Icons/Icons';

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
            case '5':
                return <PCB height='100%' />;
            case '3':
                return <Plate height='100%' />;
            case 'Both':
                return <PCB height='100%' />;
        }
    }

    const Volume = () => {
        switch(volume) {
            case 'Normal':
                return <VolumeNormal height='100%' />;
            case 'Loud':
                return <VolumeLoud height='100%' />;
            case 'Silent':
                return <VolumeSilent height='100%' />;
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
                    stemColor={switchData.stemColor}
                    stemType={switchData.stemType}
                    stemConstruction={switchData.stemConstruction}
                    housingTopType={switchData.housingTopType}
                    housingTopColor={switchData.housingTopColor}
                    housingBottomType={switchData.housingBottomType}
                    housingBottomColor={switchData.housingBottomColor}
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
                    <Tooltip title={switchData.mount === 'Both' ? 'Both 3 and 5 Pin' : `${switchData.mount} Pin`} placement="bottom">
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