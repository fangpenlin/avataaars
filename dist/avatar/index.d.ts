import * as React from 'react';
export declare enum AvatarStyle {
    Circle = "Circle",
    Transparent = "Transparent"
}
export interface Props {
    avatarStyle: AvatarStyle;
    style?: React.CSSProperties;
}
export default class Avatar extends React.Component<Props> {
    private path1;
    private path3;
    private path5;
    private mask2;
    private mask4;
    private mask6;
    render(): JSX.Element;
}
