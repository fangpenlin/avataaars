/// <reference types="react" />
import * as React from 'react';
export declare enum AvatarStyle {
    Circle = "Circle",
    Transparent = "Transparent",
}
export interface Props {
    avatarStyle: AvatarStyle;
    style?: React.CSSProperties;
}
export default class Avatar extends React.Component<Props> {
    render(): JSX.Element;
}
