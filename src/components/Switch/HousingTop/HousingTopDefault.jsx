import { string } from 'prop-types';

const HousingTopDefault = ({ housingTopFill }) => {
    return (
        <svg width="58" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14a1 1 0 011-1h41a1 1 0 011 1v6H7v-6z" fill="#fff" />
            <path d="M7 14a1 1 0 011-1h41a1 1 0 011 1v6H7v-6z" fill="url(#housing_bottom_box_paint0_linear)" />
            <path d="M49 13.114H8a1 1 0 00-1 1v3.15h43v-3.15a1 1 0 00-1-1z" fill="url(#housing_bottom_box_paint1_linear)" />
            <path d="M7.2 14.4a1 1 0 011-1h8l-7.89 6.509a.4.4 0 01-.254.091H7.2v-5.6z" fill="url(#housing_bottom_box_paint2_linear)" />
            <path d="M49.8 14.4a1 1 0 00-1-1h-8l7.89 6.509a.4.4 0 00.254.091h.856v-5.6z" fill="url(#housing_bottom_box_paint3_linear)" />
            <path d="M22 .11h2V13.3h-2V.11z" fill="#EDEDED" fillOpacity=".12" />
            <path d="M21.5.11h.5V13.3h-.5V.11z" fill="#fff" fillOpacity=".6" />
            <path d="M23.5.11h.5V13.3h-.5V.11z" fill="#fff" fillOpacity=".2" />
            <path d="M34 .11h2V13.3h-2V.11z" fill="#EDEDED" fillOpacity=".12" />
            <path d="M33.5.11h.5V13.3h-.5V.11z" fill="#fff" fillOpacity=".6" />
            <path d="M35.5.11h.5V13.3h-.5V.11z" fill="#fff" fillOpacity=".2" />
            <path d="M15.47.114h26.4v19.87h-26.4V.114z" fill="url(#housing_bottom_box_paint4_linear)" />
            <path d="M47.24 0H10.1a1.2 1.2 0 00-1.086.692L.07 19.838a.1.1 0 00.09.142h57.02a.1.1 0 00.09-.142L48.328.692A1.2 1.2 0 0047.24 0z" className="switch-housing-top" fill={housingTopFill} />
            <path d="M47.042.114H10.298a1 1 0 00-.9.566L7.67 4.264h42L47.943.68a1 1 0 00-.9-.566z" fill="url(#housing_bottom_box_paint5_linear)" />
            <path opacity=".8" d="M9.27.666L.069 19.856a.1.1 0 00.09.144h7.444a1 1 0 00.994-.892L10.67.114s-1.067 0-1.4.552z" fill="url(#housing_bottom_box_paint6_linear)" />
            <path opacity=".8" d="M48.07.666l9.201 19.19a.1.1 0 01-.09.144h-7.444a1 1 0 01-.994-.892L46.67.114s1.067 0 1.4.552z" fill="url(#housing_bottom_box_paint7_linear)" />
            <defs>
                <linearGradient id="housing_bottom_box_paint0_linear" x1="28.5" y1="13" x2="28.5" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F1F1F1" />
                    <stop offset="1" stopColor="#CDCDCD" stopOpacity=".37" />
                </linearGradient>
                <linearGradient id="housing_bottom_box_paint1_linear" x1="28.729" y1="13.266" x2="28.729" y2="17" gradientUnits="userSpaceOnUse">
                    <stop offset=".308" stopColor="#0A0A0A" stopOpacity=".15" />
                    <stop offset="1" stopColor="#0A0A0A" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="housing_bottom_box_paint2_linear" x1="7.7" y1="13.5" x2="9.5" y2="17" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#444" stopOpacity=".31" />
                    <stop offset="1" stopColor="#4E4E4E" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="housing_bottom_box_paint3_linear" x1="49.3" y1="13.5" x2="47.5" y2="17" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#444" stopOpacity=".31" />
                    <stop offset="1" stopColor="#4E4E4E" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="housing_bottom_box_paint4_linear" x1="28.67" y1="2.761" x2="28.67" y2="20.115" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff" stopOpacity=".61" />
                    <stop offset=".128" stopColor="#fff" stopOpacity=".1" />
                    <stop offset="1" stopColor="#fff" stopOpacity=".06" />
                </linearGradient>
                <linearGradient id="housing_bottom_box_paint5_linear" x1="28.729" y1=".266" x2="28.729" y2="4" gradientUnits="userSpaceOnUse">
                    <stop offset=".308" stopColor="#0A0A0A" stopOpacity=".25" />
                    <stop offset="1" stopColor="#0A0A0A" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="housing_bottom_box_paint6_linear" x1="5" y1="7.5" x2="8.5" y2="8.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0A0A0A" stopOpacity=".28" />
                    <stop offset="1" stopColor="#0A0A0A" stopOpacity=".05" />
                    <stop offset="1" stopColor="#0A0A0A" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="housing_bottom_box_paint7_linear" x1="52.34" y1="7.5" x2="48.84" y2="8.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0A0A0A" stopOpacity=".28" />
                    <stop offset="1" stopColor="#0A0A0A" stopOpacity=".05" />
                    <stop offset="1" stopColor="#0A0A0A" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}

HousingTopDefault.propTypes = {
    housingTopFill: string
}

export default HousingTopDefault