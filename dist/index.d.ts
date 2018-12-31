/// <reference types="react" />
import * as React from 'react';
import { OptionContext } from './options';
export { default as Avatar, AvatarStyle } from './avatar';
export { Option, OptionContext, allOptions } from './options';
export interface Props {
    avatarStyle: string;
    style?: React.CSSProperties;
    topType?: string;
    accessoriesType?: string;
    hatColor?: string;
    hairColor?: string;
    facialHairType?: string;
    facialHairColor?: string;
    clotheType?: string;
    clotheColor?: string;
    graphicType?: string;
    eyeType?: string;
    eyebrowType?: string;
    mouthType?: string;
    skinColor?: string;
    pieceType?: string;
    pieceSize?: string;
}
export default class AvatarComponent extends React.Component<Props> {
    static childContextTypes: {
        optionContext: any;
    };
    private optionContext;
    getChildContext(): {
        optionContext: OptionContext;
    };
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    render(): JSX.Element;
    private updateOptionContext(props);
}
export declare class Piece extends React.Component<Props> {
    static childContextTypes: {
        optionContext: any;
    };
    private optionContext;
    getChildContext(): {
        optionContext: OptionContext;
    };
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    render(): JSX.Element;
    private updateOptionContext(props);
}
