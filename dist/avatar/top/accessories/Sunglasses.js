"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var Sunglasses = /** @class */ (function (_super) {
    __extends(Sunglasses, _super);
    function Sunglasses() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        _this.filter1 = lodash_1.uniqueId('react-filter-');
        _this.linearGradient1 = lodash_1.uniqueId('react-linear-gradient-');
        _this.linearGradient2 = lodash_1.uniqueId('react-linear-gradient-');
        return _this;
    }
    Sunglasses.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, filter1 = _a.filter1, linearGradient1 = _a.linearGradient1, linearGradient2 = _a.linearGradient2;
        return (React.createElement("g", { id: 'Top/_Resources/Sunglasses', fill: 'none', transform: 'translate(62.000000, 85.000000)', strokeWidth: '1' },
            React.createElement("defs", null,
                React.createElement("filter", { x: '-0.8%', y: '-2.6%', width: '101.6%', height: '110.5%', filterUnits: 'objectBoundingBox', id: filter1 },
                    React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }),
                    React.createElement("feMerge", null,
                        React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                        React.createElement("feMergeNode", { in: 'SourceGraphic' }))),
                React.createElement("path", { d: 'M47.0104611,6.27728008 C49.5212682,6.30134922 50.7082016,6.72633117 51.1359635,9.39189846 C51.5693724,12.0919529 51.1479634,15.1275382 50.648202,17.7869984 C49.8855011,21.8478573 48.6170388,25.8264499 45.6643523,28.794498 C44.1089507,30.3575551 42.2119044,31.6034024 40.1941529,32.4540848 C39.1226305,32.9060098 37.9911085,33.2322006 36.8599395,33.4797175 C36.5292357,33.5519249 33.7060778,33.9478084 35.4375958,33.7466335 C31.3967988,34.2161613 27.0129452,34.1974808 23.6381438,31.5793333 C19.8980507,28.6777448 17.3367734,24.0862872 16.2105455,19.5127916 C15.5516086,16.8368063 14.1670294,10.4365709 16.6968952,8.29693227 C19.5948762,5.84547255 47.0104611,6.27728008 47.0104611,6.27728008 L47.0104611,6.27728008 Z', id: path1 }),
                React.createElement("path", { d: 'M78.9192315,6.27468008 C76.4084239,6.29910846 75.2214902,6.72373117 74.7937283,9.38929846 C74.3603192,12.0893529 74.7817283,15.1249382 75.2811369,17.7843984 C76.0441909,21.8452573 77.3126534,25.8238499 80.2653406,28.791898 C81.8207425,30.3549551 83.7177893,31.6008024 85.7355412,32.4518441 C86.8070638,32.9034098 87.938586,33.2296006 89.0697553,33.4771175 C89.4004591,33.5493249 92.2232647,33.9455676 90.4920992,33.7440335 C94.5328971,34.2135613 98.9167517,34.1948808 102.291554,31.5767333 C106.031648,28.6751448 108.592926,24.0840464 109.719154,19.5105508 C110.378091,16.8342063 111.762317,10.4343302 109.232804,8.29433227 C106.334822,5.84287255 78.9192315,6.27468008 78.9192315,6.27468008 L78.9192315,6.27468008 Z', id: path2 }),
                React.createElement("linearGradient", { x1: '50%', y1: '0%', x2: '50%', y2: '70.5058195%', id: linearGradient1 },
                    React.createElement("stop", { stopColor: '#FFFFFF', stopOpacity: '0.5', offset: '0%' }),
                    React.createElement("stop", { stopColor: '#000000', stopOpacity: '0.5', offset: '100%' })),
                React.createElement("linearGradient", { x1: '50%', y1: '0%', x2: '50%', y2: '100%', id: linearGradient2 },
                    React.createElement("stop", { stopColor: '#FFFFFF', stopOpacity: '0.5', offset: '0%' }),
                    React.createElement("stop", { stopColor: '#000000', stopOpacity: '0.5', offset: '70.5058195%' }))),
            React.createElement("g", { id: 'Sunglasses', filter: "url(#" + filter1 + ")", transform: 'translate(8.000000, 8.000000)' },
                React.createElement("g", { id: 'shades' },
                    React.createElement("use", { fillOpacity: '0.700000048', fill: '#000000', xlinkHref: '#' + path1 }),
                    React.createElement("use", { fill: "url(#" + linearGradient1 + ")", style: { mixBlendMode: 'screen' }, xlinkHref: '#' + path1 })),
                React.createElement("g", { id: 'shades' },
                    React.createElement("use", { fillOpacity: '0.700000048', fill: '#000000', xlinkHref: '#' + path2 }),
                    React.createElement("use", { fill: "url(#" + linearGradient2 + ")", style: { mixBlendMode: 'screen' }, xlinkHref: '#' + path2 })),
                React.createElement("g", { id: 'Glasses', fill: '#252C2F' },
                    React.createElement("path", { d: 'M46.2491397,7.27516667 C48.6207695,7.2975 49.7419096,7.69183333 50.1459601,10.1651667 C50.5553446,12.6705 50.1572949,15.4871667 49.6852359,17.9548333 C48.9648125,21.7228333 47.7666627,25.4145 44.9776475,28.1685 C43.5084639,29.6188333 41.7165732,30.7748333 39.8106684,31.5641667 C38.7985419,31.9835 37.7297416,32.2861667 36.6612747,32.5158333 C36.3489024,32.5828333 33.6822357,32.9501667 35.3177735,32.7635 C31.5009631,33.1991667 27.3601122,33.1818333 24.1723805,30.7525 C20.6396056,28.0601667 18.2203032,23.7998333 17.1565036,19.5561667 C16.5340925,17.0731667 15.2262624,11.1345 17.6158944,9.14916667 C20.3532365,6.8745 46.2491397,7.27516667 46.2491397,7.27516667 L46.2491397,7.27516667 Z M22.2178029,0.4905 C16.7774562,0.677833333 13.1466691,1.63383333 10.4633337,7.06916667 C5.54571911,17.0301667 13.9627711,31.9688333 23.352278,36.0395 C34.3293166,40.7991667 46.5921826,35.5318333 52.3955746,26.0058333 C55.4689587,20.9621667 57.0224862,13.3231667 56.9224737,7.50383333 C56.7951245,0.0765 51.6071427,-0.1295 45.5090472,0.0338333333 L22.2178029,0.4905 Z', id: 'Frame' }),
                    React.createElement("path", { d: 'M79.6805515,7.27256667 C77.3089217,7.29523333 76.1877816,7.68923333 75.7837311,10.1625667 C75.3743466,12.6679 75.7723963,15.4845667 76.244122,17.9522333 C76.9648787,21.7202333 78.1630285,25.4119 80.9520437,28.1659 C82.4212273,29.6162333 84.213118,30.7722333 86.1190228,31.5619 C87.1311493,31.9809 88.1999496,32.2835667 89.2684165,32.5132333 C89.5807888,32.5802333 92.2471221,32.9479 90.6119177,32.7609 C94.4287281,33.1965667 98.569579,33.1792333 101.757311,30.7499 C105.290086,28.0575667 107.709388,23.7975667 108.773188,19.5539 C109.395599,17.0705667 110.703095,11.1322333 108.313797,9.14656667 C105.576455,6.8719 79.6805515,7.27256667 79.6805515,7.27256667 L79.6805515,7.27256667 Z M103.711555,0.4879 C109.152235,0.675233333 112.783022,1.63156667 115.466357,7.06656667 C120.383639,17.0275667 111.96692,31.9662333 102.577413,36.0372333 C91.6003746,40.7965667 79.3375086,35.5292333 73.5337832,26.0035667 C70.4607325,20.9595667 68.907205,13.3205667 69.0068841,7.50123333 C69.1345667,0.0739 74.3225485,-0.1321 80.420644,0.0315666667 L103.711555,0.4879 Z', id: 'Frame' }),
                    React.createElement("path", { d: 'M13.1969483,4.9267 C9.78501392,5.11836667 5.88606327,5.16436667 2.69005822,6.63936667 C-0.69461078,8.20136667 -1.2176675,11.7387 3.04920921,12.2260333 C4.97094906,12.4457 6.89488267,12.0827 8.78716336,11.7450333 C10.336903,11.4683667 12.4419791,11.5580333 13.9064752,10.9657 C16.6355213,9.86236667 16.4603333,4.74003333 13.1969483,4.9267', id: 'Frame' }),
                    React.createElement("path", { d: 'M112.73467,4.9267 C116.146606,5.11836667 120.045559,5.16436667 123.241565,6.63936667 C126.626236,8.20136667 127.149293,11.7387 122.882414,12.2260333 C120.960673,12.4457 119.036739,12.0827 117.144457,11.7450333 C115.594717,11.4683667 113.489639,11.5580333 112.025143,10.9657 C109.295782,9.86236667 109.471283,4.74003333 112.73467,4.9267', id: 'Frame' }),
                    React.createElement("path", { d: 'M73.1094302,7.01263333 C71.1631869,4.71263333 66.0912197,3.38463333 62.8914864,3.38463333 C59.6914198,3.38463333 54.7681378,4.71263333 52.8222279,7.01263333 C51.8407719,8.1723 51.8074344,9.72396667 53.5083137,10.4509667 C55.6262451,11.3566333 57.5174814,9.7143 59.2126933,8.8553 C61.3809643,7.75663333 64.7120473,7.8773 66.7189648,8.8553 C68.4271783,9.68796667 70.3050797,11.3566333 72.4233444,10.4509667 C74.1242237,9.72396667 74.0908862,8.1723 73.1094302,7.01263333', id: 'Frame' })))));
    };
    Sunglasses.optionValue = 'Sunglasses';
    return Sunglasses;
}(React.Component));
exports.default = Sunglasses;
