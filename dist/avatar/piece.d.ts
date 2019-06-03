/// <reference types="react" />
import * as React from 'react';
export declare enum AvatarStyle {
    Circle = "Circle",
    Transparent = "Transparent",
}
export interface Props {
    pieceSize?: string;
    pieceType?: string;
    avatarStyle: AvatarStyle;
    style?: React.CSSProperties;
}
export default class PieceComponent extends React.Component<Props> {
    render(): JSX.Element;
}
