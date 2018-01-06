/// <reference types="react" />
import * as React from 'react';
export interface Props {
    maskID: string;
    defaultColor?: string;
}
export default class Colors extends React.Component<Props> {
    render(): JSX.Element;
}
