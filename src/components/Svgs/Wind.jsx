import React from 'react';
import {SvgHoc} from "./SvgHoc";
import {motion} from "framer-motion";

function Wind({width = '25px', height = '25px', animations}) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width={width}
                 height={height}
                 viewBox="0 0 2048 2048">

                <motion.g {...animations} id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"/>
                    <path fill={'#000000'}
                          d="M1210.25 939.103c35.6079,-24.9378 77.1674,-37.2768 118.517,-38.3587 35.0138,-0.916536 69.9567,6.23386 101.027,20.6339 31.637,14.661 59.4839,36.9166 79.682,65.9445 19.7929,28.4433 32.0292,63.0733 33.0709,103.057 0.034252,1.35473 0.0555119,3.01654 0.0602363,4.97953 0.135827,53.8867 -20.3351,106.785 -52.9122,146.471 -33.7122,41.074 -80.7131,68.5997 -132.247,69.9473 -0.876379,0.022441 -2.07402,0.0366142 -3.55394,0.0401575l-1097.9 0.179528 0 -64.18 1097.9 -0.179528c0.389764,0 1.06417,-0.0141732 2.04803,-0.0401575 31.7658,-0.830316 61.8485,-19.1528 84.3296,-46.5414 23.6162,-28.7705 38.4567,-66.9532 38.3587,-105.697 -0.0011811,-0.849213 -0.022441,-2.00788 -0.0602363,-3.47008 -0.690945,-26.5559 -8.65512,-49.3229 -21.528,-67.8213 -13.3854,-19.2378 -32.3126,-34.2059 -54.0933,-44.2996 -22.3512,-10.3595 -47.4886,-15.5032 -72.6756,-14.8441 -29.2902,0.767717 -58.552,9.38268 -83.3953,26.7803l-36.6272 -52.6016z"/>
                    <path fill={'#000000'}
                          d="M1402.25 1753.13c35.6091,25.2201 77.1674,37.6996 118.518,38.7945 35.0138,0.927166 69.9567,-6.30473 101.026,-20.8689 31.637,-14.8276 59.4839,-37.3359 79.682,-66.6934 19.7941,-28.7646 32.0303,-63.7878 33.0709,-104.226 0.034252,-1.3689 0.0555119,-3.05079 0.0602363,-5.03622 0.135827,-54.4973 -20.3351,-107.997 -52.9122,-148.133 -33.7122,-41.5406 -80.7119,-69.378 -132.247,-70.741 -0.876379,-0.022441 -2.07402,-0.0377953 -3.55276,-0.0413386l-1097.9 -0.180709 0 64.9087 1097.9 0.18189c0.388583,0 1.06417,0.0141732 2.04803,0.0401575 31.7646,0.839764 61.8485,19.3701 84.3284,47.0693 23.6162,29.0965 38.4567,67.7127 38.3599,106.896 -0.0011811,0.858662 -0.022441,2.0315 -0.0614174,3.50906 -0.690945,26.8583 -8.65512,49.8839 -21.528,68.5914 -13.3854,19.4563 -32.3126,34.5945 -54.0933,44.8028 -22.3512,10.4764 -47.4886,15.678 -72.6756,15.0118 -29.2902,-0.774804 -58.552,-9.48898 -83.3942,-27.0839l-36.6284 53.1993z"/>
                    <path fill={'#000000'}
                          d="M896.93 905.454c34.1764,-23.9445 73.5379,-35.5843 111.176,-35.5843 25.5685,0 50.6729,5.41418 73.1918,16.0335 23.0634,10.8744 43.1882,27.1736 58.1646,48.6886 17.0386,24.4748 27.2209,55.1185 27.2209,91.4576l-0.125197 0 -0.0011811 0.340158c-0.15,39.8067 -20.0705,79.3926 -49.2969,108.602 -29.2961,29.2772 -68.6918,49.0075 -107.688,49.0075l0 -0.126378 -0.330709 -0.0011811 0 0.126378 -561.27 0 0 -64.4327 561.27 0 0 0.126378 0.330709 0.0011811 0 -0.126378c21.528,0 44.517,-12.1323 62.5288,-30.1311 18.0791,-18.0685 30.3981,-41.1863 30.4807,-63.0461l0.0011811 -0.340158 -0.126378 0c0,-22.5921 -5.77205,-40.8414 -15.4276,-54.7122 -8.32205,-11.9563 -19.689,-21.1004 -32.8252,-27.2941 -13.6819,-6.45119 -29.4992,-9.74056 -46.0973,-9.74056 -25.3335,0 -51.7335,7.7693 -74.5489,23.7532l-36.6272 -52.6016z"/>
                    <path fill={'#000000'}
                          d="M896.93 1782.54c34.1764,23.9445 73.5379,35.5843 111.176,35.5843 25.5685,0 50.6729,-5.41418 73.1918,-16.0335 23.0634,-10.8744 43.1882,-27.1736 58.1646,-48.6886 17.0386,-24.4748 27.2209,-55.1185 27.2209,-91.4576l-0.125197 0 -0.0011811 -0.340158c-0.15,-39.8067 -20.0705,-79.3926 -49.2969,-108.602 -29.2961,-29.2772 -68.6918,-49.0075 -107.688,-49.0075l0 0.126378 -0.330709 0.0011811 0 -0.126378 -561.27 0 0 64.4327 561.27 0 0 -0.126378 0.330709 -0.0011811 0 0.126378c21.528,0 44.517,12.1323 62.5288,30.1311 18.0791,18.0685 30.3981,41.1863 30.4807,63.0461l0.0011811 0.340158 -0.126378 0c0,22.5921 -5.77205,40.8414 -15.4276,54.7122 -8.32205,11.9563 -19.689,21.1004 -32.8252,27.2941 -13.6819,6.45119 -29.4992,9.74056 -46.0973,9.74056 -25.3335,0 -51.7335,-7.7693 -74.5489,-23.7532l-36.6272 52.6016z"/>
                </motion.g>
            </svg>

        </>
    );
}

export default SvgHoc(Wind);