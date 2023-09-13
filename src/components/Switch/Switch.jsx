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
    stem_color,
    stem_type,
    stem_construction,
    housing_top_type,
    housing_top_color,
    housing_bottom_type,
    housing_bottom_color,
    mount
}) => {
    let stem_fill;

    if (stem_color === '') {
        stem_fill = 'rgba(255, 255, 255, 1)';
    }
    else {
        if (stem_type === 'transparent') {
            stem_fill = `rgba(${stem_color}, .5)`;
        }
        else {
            stem_fill = `rgba(${stem_color}, 1)`;
        }
    }

    let housing_top_fill;

    if (housing_top_color === '') {
        housing_top_fill = `rgba(255, 255, 255, .4)`;
    }
    else {
        if (housing_top_type === 'transparent') {
            housing_top_fill = `rgba(${housing_top_color}, .6)`;
        }
        else if (housing_top_type === 'milky') {
            housing_top_fill = `rgba(235, 232, 222, .8)`;
        }
        else {
            housing_top_fill = `rgba(${housing_top_color}, 1)`;
        }
    }

    let housing_bottom_fill;

    if (housing_bottom_color === '') {
        housing_bottom_fill = 'rgba(255, 255, 255, .4)';
    }
    else {
        if (housing_bottom_type === 'transparent') {
            housing_bottom_fill = `rgba(${housing_bottom_color}, .6)`;
        }
        else if (housing_bottom_type === 'milky') {
            housing_bottom_fill = `rgba(235, 232, 222, .8)`;
        }
        else {
            housing_bottom_fill = `rgba(${housing_bottom_color}, 1)`;
        }
    }

    return (
        <div className="c-switch__icon" data-icon-id={id} >
            <div className="c-switch__icon-stem">
                {stem_construction === 'standard' &&
                    <StemStandard stem_fill={stem_fill} />
                }

                {stem_construction === 'cap' &&
                    <StemCap stem_fill={stem_fill} />
                }

                {stem_construction === 'box' &&
                    <StemBox stem_fill={stem_fill} />
                }
            </div>

            <div className="c-switch__icon-housing-top">
                {stem_construction === 'standard' &&
                    <HousingTopStandard housing_top_fill={housing_top_fill} />
                }
                {stem_construction !== 'standard' &&
                    <HousingTopDefault housing_top_fill={housing_top_fill} />
                }
            </div>

            <div className="c-switch__icon-housing-bottom">
                {mount === '5' &&
                    <HousingBottomFive housing_bottom_fill={housing_bottom_fill} />
                }
                {mount === 'Both' &&
                    <HousingBottomFive housing_bottom_fill={housing_bottom_fill} />
                }
                {mount === '3' &&
                    <HousingBottomThree housing_bottom_fill={housing_bottom_fill} />
                }
            </div>
        </div >
    )
};

Switch.propTypes = {
    id: string,
    stem_color: string,
    stem_type: string,
    stem_construction: string,
    housing_top_type: string,
    housing_top_color: string,
    housing_bottom_type: string,
    housing_bottom_color: string,
    mount: string
}

export default Switch