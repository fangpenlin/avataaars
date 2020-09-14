import * as React from 'react';
export declare enum AvatarStyle {
    Circle = "Circle",
    Tutor = "Tutor",
    Transparent = "Transparent"
}
export interface Props {
    pieceSize?: string;
    pieceType?: string;
    avatarStyle: AvatarStyle;
    style?: React.CSSProperties;
    viewBox?: string;
}
export default class PieceComponent extends React.Component<Props> {
    render(): JSX.Element;
}
