/// <reference types="react" />
import * as React from 'react';
export declare enum AvatarStyle {
    Circle = "Circle",
    Transparent = "Transparent",
}
export interface Props {
    avatarStyle: AvatarStyle;
    style?: React.CSSProperties;
    className?: string;
}
export default class Avatar extends React.Component<Props> {
    private path1;
    private path2;
    private path3;
    private mask1;
    private mask2;
    private mask3;
    render(): JSX.Element;
}
