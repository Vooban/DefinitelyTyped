// Type definitions for react-intl 2.0.0-beta1
// Project: http://formatjs.io/react/
// Definitions by: Bruno Grieder <https://github.com/bgrieder>, Christian Droulers <https://github.com/cdroulers>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare module "react-intl" {

    import * as React from 'react'

    module ReactIntl {

        interface Locale {
            locale: string;
            fields?: { [key: string]: string },
            pluralRuleFunction?: (n: number, ord: boolean) => string;
        }

        function injectIntl<T>(clazz: T): T;

        function addLocaleData(data: Locale[] | Locale): void;

        function hasLocaleData(localeName: string): boolean;

        module IntlComponent {
            interface DateTimeFormatProps {
                /*
                * one of "best fit" (default) | "lookup"
                */
                localeMatcher?: string;
                /*
                * one of "basic" (default) | "best fit"
                */
                formatMatcher?: string;
                timeZone?: string,
                hour12?: boolean;
                /*
                * one of "narrow" (default) | "short" | "long"
                */
                weekday?: string;
                /*
                * one of "narrow" (default) | "short" | "long"
                */
                era?: string;
                /*
                * one of "numeric" (default) | "2-digit"
                */
                year?: string;
                /*
                * one of "numeric" (default) | "2-digit" | "narrow" | "short" | "long"
                */
                month?: string;
                /*
                * one of "numeric" (default) | "2-digit"
                */
                day?: string;
                /*
                * one of "numeric" (default) | "2-digit"
                */
                hour?: string;
                /*
                * one of "numeric" (default) | "2-digit"
                */
                minute?: string;
                /*
                * one of "numeric" (default) | "2-digit"
                */
                second?: string;
                /*
                * one of "short" (default) | "long"
                */
                timeZoneName?: string;
            }
        }


        module FormattedDate {
            export interface Props extends IntlComponent.DateTimeFormatProps {
                value: Date;
                format?: string;
            }
        }
        class FormattedDate extends React.Component<FormattedDate.Props, any> { }


        module FormattedTime {
            export interface Props extends IntlComponent.DateTimeFormatProps {
                value: Date;
                format?: string;
            }
        }
        class FormattedTime extends React.Component<FormattedTime.Props, any> { }


        module FormattedRelative {
            export interface Props {
                value: number;
                /*
                * one of "second", "minute", "hour", "day", "month" or "year"
                */
                units?: string;
                /*
                * one of "best fit" (default) | "numeric"
                */
                style?: string;
                format?: string;
                updateInterval?: number;
                initialNow?: any;
            }
        }
        class FormattedRelative extends React.Component<FormattedRelative.Props, any> { }


        module FormattedMessage {
            export interface Props {
                id: string;
                description?: string;
                defaultMessage?: string;
                values?: Object;
                tagName?: string;
            }
        }
        class FormattedMessage extends React.Component<FormattedMessage.Props, any> { }


        module FormattedHTMLMessage {
            export interface Props {
                id: string;
                description?: string;
                defaultMessage?: string;
                values?: Object;
                tagName?: string;
            }
        }
        class FormattedHTMLMessage extends React.Component<FormattedHTMLMessage.Props, any> { }


        module FormattedNumber {
            export interface Props {
                value: number;
                format?: string;
                /*
                * one of "best fit" (default) | "lookup"
                */
                localeMatcher?: string;
                /*
                * one of "decimal" (default) | "currency" | "percent"
                */
                style?: string;
                currency?: string,
                /*
                * one of "symbol" (default) | "code" | "name"
                */
                currencyDisplay?: string;
                useGrouping?: boolean;
                minimumIntegerDigits?: number;
                minimumFractionDigits?: number;
                maximumFractionDigits?: number;
                minimumSignificantDigits?: number;
                maximumSignificantDigits?: number;
            }
        }
        class FormattedNumber extends React.Component<FormattedNumber.Props, any> { }


        module FormattedPlural {
            export interface Props {
                /*
                * one of "cardinal" (default) | "ordinal"
                */
                style?: string;
                value: number,
                other?: any;
                zero?: any;
                one?: any;
                two?: any;
                few?: any;
                many?: any;
            }
        }
        class FormattedPlural extends React.Component<FormattedPlural.Props, any> { }


        module IntlProvider {
            export interface Props {
                locale?: string;
                formats?: Object;
                messages?: { [key: string]: string };
                defaultLocale?: string;
                defaultFormats?: Object;
            }
        }
        class IntlProvider extends React.Component<IntlProvider.Props, any> { }
    }

    export = ReactIntl
}

declare module "react-intl/lib/locale-data/en" {
    import {Locale} from "react-intl";
    var data: Locale[];
    export = data;
}

declare module "react-intl/lib/locale-data/fr" {
    import {Locale} from "react-intl";
    var data: Locale[];
    export = data;
}