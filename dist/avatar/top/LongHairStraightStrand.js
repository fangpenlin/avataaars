"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var uniqueId = require("lodash.uniqueid");
var facialHair_1 = require("./facialHair");
var HairColor_1 = require("./HairColor");
var LongHairStraightStrand = /** @class */ (function (_super) {
    __extends(LongHairStraightStrand, _super);
    function LongHairStraightStrand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = uniqueId('react-mask-');
        _this.mask2 = uniqueId('react-mask-');
        _this.path1 = uniqueId('react-path-');
        _this.path2 = uniqueId('react-path-');
        _this.path3 = uniqueId('react-path-');
        return _this;
    }
    LongHairStraightStrand.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3;
        return (React.createElement("g", { id: "Top", strokeWidth: "1", fillRule: "evenodd" },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: "0", y: "0", width: "264", height: "280" }),
                React.createElement("path", { d: "M8.46130289,88.6935361 C8.16088005,89.7438903 8,90.8531574 8,92 L8,105 C8,111.018625 12.4308707,116.002364 18.2085808,116.867187 C19.9518066,137.114792 32.4692178,154.282984 50,162.610951 L50,181 L46,181 L46,181 C30.3810228,181 15.9236322,185.973344 4.12503673,194.422823 C1.45272918,186.776619 1.52589027e-14,178.557961 1.42108547e-14,170 L0,74 L0,74 C-5.00501776e-15,33.1309285 33.1309285,7.50752664e-15 74,0 L74,0 L74,0 C114.869071,-7.50752664e-15 148,33.1309285 148,74 L148,170 C148,178.557961 146.547271,186.776619 143.874963,194.422823 C132.076368,185.973344 117.618977,181 102,181 L102,181 L98,181 L98,162.610951 C115.530782,154.282984 128.048193,137.114792 129.791419,116.867187 C135.569129,116.002364 140,111.018625 140,105 L140,92 C140,90.3107559 139.650957,88.7030352 139.021057,87.2450254 C126.064756,85.0568849 111.478699,79.7686298 97.1489304,71.4953343 C85.0171781,64.4910638 74.6464677,56.2579416 66.6695083,47.752196 C70.0963393,55.6604321 74.2459335,62.5880409 79.118291,68.5350224 C66.4431108,63.0120855 57.8126345,54.1324394 53.2268621,41.8960843 C52.8490267,42.8180234 52.455505,43.738913 52.0461952,44.6582378 C42.206947,66.7575512 25.5911314,82.6819966 8.46130289,88.6935361 Z", id: path2 }),
                React.createElement("path", { d: "M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z", id: path3 })),
            React.createElement("mask", { id: mask1, fill: "white" },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: "Mask" }),
            React.createElement("g", { id: "Top/Long-Hair/Straight-+-Strand", mask: "url(#" + mask1 + ")" },
                React.createElement("g", { transform: "translate(-1.000000, 0.000000)" },
                    React.createElement("g", { id: "Hair", strokeWidth: "1", fill: "none", fillRule: "evenodd", transform: "translate(59.000000, 18.000000)" },
                        React.createElement("mask", { id: mask2, fill: "white" },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement("use", { fill: "#ECC797", xlinkHref: '#' + path2 }),
                        React.createElement(HairColor_1.default, { maskID: mask2 })),
                    React.createElement("path", { d: "M59,102.418954 L59,108.837908 C78.9453743,105.750496 99.5895621,88.3902571 111.046195,62.6582378 C111.455505,61.738913 111.849027,60.8180234 112.226862,59.8960843 C116.231662,70.5822127 123.321236,78.70828 133.495584,84.2742862 C134.956498,86.4697241 136.497401,88.5566361 138.118291,90.5350224 C125.443111,85.0120855 116.812635,76.1324394 112.226862,63.8960843 C111.849027,64.8180234 111.455505,65.738913 111.046195,66.6582378 C99.5895621,92.3902571 78.9453743,109.750496 59,112.837908 L59,102.418954 Z M207,101.140388 L207,110.280776 C192.046922,109.412723 173.901259,103.744646 156.14893,93.4953343 C145.87623,87.5643877 136.866205,80.7523483 129.502994,73.639773 C128.137922,71.1289501 126.860094,68.4997578 125.669508,65.752196 C133.646468,74.2579416 144.017178,82.4910638 156.14893,89.4953343 C173.901259,99.7446457 192.046922,105.412723 207,106.280776 L207,101.140388 Z", id: "Shadow", fillOpacity: "0.16", fill: "#000000", fillRule: "evenodd" }),
                    React.createElement(facialHair_1.default, null),
                    this.props.children))));
    };
    LongHairStraightStrand.optionValue = 'LongHairStraightStrand';
    return LongHairStraightStrand;
}(React.Component));
exports.default = LongHairStraightStrand;
