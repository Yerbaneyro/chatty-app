import * as React from "react"
import Svg, { SvgProps, Circle, Mask, G, Path } from "react-native-svg"

const SearchSvg = (props: SvgProps) => (
    <Svg
    width={44}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
        <Circle cx={22} cy={22} r={22} fill="#fff" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m33.4 31.35-5.695-5.724C34.55 14.326 20.763 5.2 12.79 12.783c-7.738 8.714 1.95 21.59 12.815 14.952l5.695 5.569c1.646 1.81 3.75-.3 2.1-1.955ZM19.667 12.98c8.994 0 9.285 13.546 0 13.546-9.042 0-8.784-13.546 0-13.546Z"
            fill="#5603AD"
    />
    </Svg>
)

const RoomsSvg = (props: SvgProps) => (
    <Svg
    width={44}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
    <Circle cx={22} cy={22} r={22} fill="#fff" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.526 14.476a4.478 4.478 0 0 1 8.094-2.632c-2.34.923-4.412 3.842-3.527 7.105a.256.256 0 0 0-.042.005c-.014.002-.028.005-.043.005a4.481 4.481 0 0 1-4.482-4.483Zm14.992 3.014a4.482 4.482 0 1 1-8.965 0 4.482 4.482 0 0 1 8.965 0ZM34 30.179c0 5.226-17.92 5.226-17.92 0 0-9.238 17.92-9.144 17.92 0Zm-14.388-9.874c-8.277-1.134-13.598 8.47-5.829 10.11.076-4.413 3.428-7.096 7.529-8.085a6.09 6.09 0 0 1-1.7-2.025Z"
            fill="#5603AD"
    />
    </Svg>
)

const ProfileSVG = (props: SvgProps) => (
    <Svg
        width={64}
        height={64}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={32} cy={32} r={32} fill="#E9EAEE" />
        <Mask
            id="a"
            maskType="alpha"
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={64}
            height={64}
        >
            <Circle cx={32} cy={32} r={32} fill="#E9EAEE" />
        </Mask>
        <G mask="url(#a)" fill="#BFC1CC">
            <Path d="M32 32c6.627 0 12-5.373 12-12S38.627 8 32 8s-12 5.373-12 12 5.373 12 12 12ZM32 32c19.33 0 35 15.67 35 35s-15.67 35-35 35S-3 86.33-3 67s15.67-35 35-35Z" />
        </G>
    </Svg>
)

export {
    RoomsSvg,
    SearchSvg,
    ProfileSVG,
}