import * as React from "react";
import {PropsWithChildren} from "react";
// import {useTranslation} from "react-i18next";

interface PrivateProps
{
    /*t: any;
    i18n: any;*/
}

export interface PublicProps
{
}

type Props = PublicProps & PrivateProps;

type State = {}

class ManagedComponent extends React.Component<Props, State>
{
    constructor(props: Readonly<Props>)
    {
        super(props);
    }

    componentDidMount()
    {
    }

    componentWillUnmount()
    {
    }

    /*t(key: string): string
    {
        return (this.props as PrivateProps).t(key);
    }*/

    render()
    {
        return (
            <div>
                <p>Hello, World!</p>
            </div>
        );
    }
}

//export const Component: React.FC<PublicProps> = (props: Readonly<PublicProps>) =>
export const Component: React.FC<PublicProps> = (props: PropsWithChildren<PublicProps>) =>
{
    // const {t, i18n} = useTranslation();

    return (
        <ManagedComponent /*t={t} i18n={i18n}*/ {...props}>{props.children}</ManagedComponent>
    );
};
