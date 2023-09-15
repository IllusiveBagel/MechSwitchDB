import { string } from 'prop-types';
import './styles.scss';
import { 
    StemStandard,
    StemCap,
    StemBox
} from './Stem/Stem';
import {
    HousingTopStandard,
    HousingTopDefault
} from './HousingTop/HousingTop';
import {
    HousingBottomFive,
    HousingBottomThree
} from './HousingBottom/HousingBottom';

// TODO: This code is wank. Fix it

const Switch = ({
    id,
    stemColor,
    stemType,
    stemConstruction,
    housingTopType,
    housingTopColor,
    housingBottomType,
    housingBottomColor,
    mount
}) => {
    let stemFill;

    if (stemColor === '') {
        stemFill = 'rgba(255, 255, 255, 1)';
    }
    else {
        if (stemType === 'transparent') {
            stemFill = `rgba(${stemColor}, .5)`;
        }
        else if (stemType === 'milky') {
            stemFill = `rgba(235, 232, 222, .8)`;
        }
        else {
            stemFill = `rgba(${stemColor}, 1)`;
        }
    }

    let housingTopFill;

    if (housingTopColor === '') {
        housingTopFill = `rgba(255, 255, 255, .4)`;
    }
    else {
        if (housingTopType === 'transparent') {
            housingTopFill = `rgba(${housingTopColor}, .6)`;
        }
        else if (housingTopType === 'milky') {
            housingTopFill = `rgba(235, 232, 222, .8)`;
        }
        else {
            housingTopFill = `rgba(${housingTopColor}, 1)`;
        }
    }

    let housingBottomFill;

    if (housingBottomColor === '') {
        housingBottomFill = 'rgba(255, 255, 255, .4)';
    }
    else {
        if (housingBottomType === 'transparent') {
            housingBottomFill = `rgba(${housingBottomColor}, .6)`;
        }
        else if (housingBottomType === 'milky') {
            housingBottomFill = `rgba(235, 232, 222, .8)`;
        }
        else {
            housingBottomFill = `rgba(${housingBottomColor}, 1)`;
        }
    }

    return (
        <div className="c-switch__icon" data-icon-id={id} >
            <div className="c-switch__icon-stem">
                {stemConstruction === 'standard' &&
                    <StemStandard stemFill={stemFill} />
                }

                {stemConstruction === 'cap' &&
                    <StemCap stemFill={stemFill} />
                }

                {stemConstruction === 'box' &&
                    <StemBox stemFill={stemFill} />
                }
            </div>

            <div className="c-switch__icon-housing-top">
                {stemConstruction === 'standard' &&
                    <HousingTopStandard housingTopFill={housingTopFill} />
                }
                {stemConstruction !== 'standard' &&
                    <HousingTopDefault housingTopFill={housingTopFill} />
                }
            </div>

            <div className="c-switch__icon-housing-bottom">
                {mount === '5' &&
                    <HousingBottomFive housingBottomFill={housingBottomFill} />
                }
                {mount === 'Both' &&
                    <HousingBottomFive housingBottomFill={housingBottomFill} />
                }
                {mount === '3' &&
                    <HousingBottomThree housingBottomFill={housingBottomFill} />
                }
            </div>
        </div >
    )
};

Switch.propTypes = {
    id: string,
    stemColor: string,
    stemType: string,
    stemConstruction: string,
    housingTopType: string,
    housingTopColor: string,
    housingBottomType: string,
    housingBottomColor: string,
    mount: string
}

export default Switch