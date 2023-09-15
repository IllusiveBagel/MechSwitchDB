import { string } from 'prop-types';

const StemBox = ({ stemFill }) => {
    return (
        <svg width="31" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M.5 14.6v19.35h4v2.15c0 .22.18.4.4.4h6.2a.4.4 0 00.4-.4v-1.95c0-.11.09-.2.2-.2h.1c.11 0 .2.09.2.2v.15c0 .11.09.2.2.2h1.167c.11 0 .2.09.2.2v2a.8.8 0 00.8.8h2.17a.8.8 0 00.8-.8v-2c0-.11.09-.2.2-.2H18.8a.2.2 0 00.2-.2v-.15c0-.11.09-.2.2-.2h11.43l.003-19.35a.7.7 0 00-.7-.7h-1.525a.3.3 0 01-.3-.3V1.056A.657.657 0 0027.452.4h-9.775a.29.29 0 01-.275-.2.29.29 0 00-.275-.2H13.91a.292.292 0 00-.278.2c-.04.12-.151.2-.277.2H3.647a.747.747 0 00-.747.747V13.6a.3.3 0 01-.3.3H1.2a.7.7 0 00-.7.7z" className="switch-stem" fill={stemFill} />
            <path d="M9.567.4H3.642a.742.742 0 00-.742.742V13.9h6.667V.4z" fill="url(#stem_box_paint0_linear)" />
            <path d="M21.433.4h5.925a.742.742 0 01.742.742V13.9h-6.667V.4z" fill="url(#stem_box_paint1_linear)" />
            <path d="M13.632.205L13.567.4h3.9l-.063-.193A.3.3 0 0017.12 0h-3.203a.3.3 0 00-.284.205z" fill="url(#stem_box_paint2_linear)" />
            <path d="M.5 14.6v.6h30.133v-.6a.7.7 0 00-.7-.7H1.2a.7.7 0 00-.7.7z" fill="url(#stem_box_paint3_linear)" />
            <path d="M30.1 33.9h-2.4v-20h2a.8.8 0 01.8.8v18.8a.4.4 0 01-.4.4z" fill="url(#stem_box_paint4_linear)" />
            <path d="M1.1 33.9h1.4v-20h-1a.8.8 0 00-.8.8v18.8c0 .22.18.4.4.4z" fill="url(#stem_box_paint5_linear)" />
            <path d="M4.5 24H12v10h-.5v2.1a.4.4 0 01-.4.4H4.9a.4.4 0 01-.4-.4V24z" fill="url(#stem_box_paint6_linear)" />
            <path d="M12 14h7v20.5h-6.8a.2.2 0 01-.2-.2V14z" fill="url(#stem_box_paint7_linear)" />
            <path d="M7.5 14H12v20l-3.967-5.73a3 3 0 01-.533-1.707V14z" fill="url(#stem_box_paint8_linear)" fillOpacity=".7" />
            <path d="M7.5 14H12v20l-3.967-5.73a3 3 0 01-.533-1.707V14z" fill="url(#stem_box_paint9_linear)" />
            <path d="M3.7 24h.8v9.95h-.8V24z" fill="url(#stem_box_paint10_linear)" />
            <defs>
                <linearGradient id="stem_box_paint0_linear" x1="2" y1="1" x2="6.5" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity=".13" />
                    <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="stem_box_paint1_linear" x1="21.5" y1="1" x2="28" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity="0" />
                    <stop offset=".693" stopOpacity=".1" />
                    <stop offset=".932" stopColor="#fff" stopOpacity=".1" />
                    <stop offset="1" stopOpacity=".25" />
                </linearGradient>
                <linearGradient id="stem_box_paint2_linear" x1="15.517" y1="0" x2="15.517" y2=".4" gradientUnits="userSpaceOnUse">
                    <stop offset=".332" stopOpacity="0" />
                    <stop offset="1" stopOpacity=".35" />
                </linearGradient>
                <linearGradient id="stem_box_paint3_linear" x1="15.7" y1="13.9" x2="15.7" y2="16.114" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#404040" stopOpacity=".62" />
                    <stop offset=".089" stopColor="#323232" stopOpacity=".29" />
                    <stop offset=".443" stopColor="#404040" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="stem_box_paint4_linear" x1="30" y1="22.5" x2="27.5" y2="22.5" gradientUnits="userSpaceOnUse">
                    <stop offset=".26" stopColor="#404040" stopOpacity="0" />
                    <stop offset=".464" stopColor="#404040" stopOpacity=".2" />
                    <stop offset=".75" stopColor="#404040" stopOpacity=".3" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="stem_box_paint5_linear" x1="1.2" y1="22.5" x2="3.7" y2="22.5" gradientUnits="userSpaceOnUse">
                    <stop offset=".26" stopColor="#404040" stopOpacity="0" />
                    <stop offset=".75" stopColor="#404040" stopOpacity=".2" />
                    <stop offset="1" stopColor="#404040" stopOpacity=".13" />
                </linearGradient>
                <linearGradient id="stem_box_paint6_linear" x1="7.5" y1="24" x2="7.5" y2="36.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#313131" stopOpacity="0" />
                    <stop offset=".615" stopColor="#414141" stopOpacity=".53" />
                    <stop offset=".854" stopColor="#EEE" stopOpacity=".23" />
                    <stop offset="1" stopColor="#fff" stopOpacity=".11" />
                </linearGradient>
                <linearGradient id="stem_box_paint7_linear" x1="12" y1="24" x2="19" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#343434" stopOpacity=".6" />
                    <stop offset=".109" stopColor="#343434" stopOpacity=".36" />
                    <stop offset=".365" stopColor="#343434" stopOpacity="0" />
                    <stop offset=".844" stopColor="#fff" stopOpacity=".1" />
                    <stop offset="1" stopColor="#4D4D4D" stopOpacity=".35" />
                </linearGradient>
                <linearGradient id="stem_box_paint8_linear" x1="7.5" y1="21" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                    <stop offset=".089" stopColor="#343434" stopOpacity=".54" />
                    <stop offset="1" stopColor="#343434" stopOpacity=".3" />
                </linearGradient>
                <linearGradient id="stem_box_paint9_linear" x1="9.75" y1="14" x2="9.75" y2="34" gradientUnits="userSpaceOnUse">
                    <stop offset=".589" stopOpacity="0" />
                    <stop offset="1" stopOpacity=".35" />
                </linearGradient>
                <linearGradient id="stem_box_paint10_linear" x1="4" y1="24" x2="4" y2="34" gradientUnits="userSpaceOnUse">
                    <stop offset=".141" stopColor="#414141" stopOpacity="0" />
                    <stop offset=".667" stopColor="#313131" stopOpacity=".6" />
                </linearGradient>
            </defs>
        </svg>
    )
}

StemBox.propTypes = {
    stemFill: string
}

export default StemBox