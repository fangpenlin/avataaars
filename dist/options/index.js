import Option from './Option';
export { default as Option } from './Option';
export { default as OptionContext } from './OptionContext';
export { default as Selector } from './Selector';
export var TopOption = new Option({
    key: 'topType',
    label: 'Top'
});
export var AccessoriesOption = new Option({
    key: 'accessoriesType',
    label: '↳ 👓 Accessories'
});
export var HairColorOption = new Option({
    key: 'hairColor',
    label: '↳ 💈 Hair Color'
});
export var FacialHairOption = new Option({
    key: 'facialHairType',
    label: 'Facial Hair'
});
export var FacialHairColor = new Option({
    key: 'facialHairColor',
    label: '↳ ✂️ Facial Hair Color'
});
export var ClotheOption = new Option({
    key: 'clotheType',
    label: '👔 Clothes'
});
export var ClotheColorOption = new Option({
    key: 'clotheColor',
    label: '↳ Color Fabric'
});
export var GraphicOption = new Option({
    key: 'graphicType',
    label: '↳ Graphic'
});
export var EyesOption = new Option({
    key: 'eyeType',
    label: '👁 Eyes'
});
export var EyebrowOption = new Option({
    key: 'eyebrowType',
    label: '✏️ Eyebrow'
});
export var MouthOption = new Option({
    key: 'mouthType',
    label: '👄 Mouth'
});
export var SkinOption = new Option({
    key: 'skinColor',
    label: '🎨 Skin'
});
export var allOptions = [
    TopOption,
    AccessoriesOption,
    HairColorOption,
    FacialHairOption,
    FacialHairColor,
    ClotheOption,
    ClotheColorOption,
    GraphicOption,
    EyesOption,
    EyebrowOption,
    MouthOption,
    SkinOption
];
