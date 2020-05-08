import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-components";

export const SectionFeatureStyles = css`
    ${display("grid")} :host {
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        grid-template-rows: repeat(4, 140px);
        justify-content: center;
        grid-column-gap: 20px;
        background: var(--background-color);
        border-radius: var(--border-radius);
        font-family: var(--body-font);
        color: var(--neutral-foreground-rest);
        background: transparent;
    }

    @media screen and (min-width: 900px) {
        :host {
            grid-auto-flow: column;
        }
    }

    fast-card {
        color: #f7f7f7;
        background: transparent;
        display: grid;
        grid-template-columns: 1fr 2fr;
        padding: 20px;
        box-shadow: unset;
    }

    fast-card:hover {
        background-color: rgba(111, 0, 0, 0.3);
        background-blend_mode: screen;
    }

    fast-card::before {
        content: "";
        color: rgba(247, 247, 247, 0.2);
        position: fixed;
        background-color: currentcolor;
        height: 1px;
        width: 95%;
        left: 20px;
        transform-origin: center center;
        transition: all 0.3s ease 0s;
    }

    h4 {
        font-size: 20px;
        margin: 0;
    }

    h5 {
        font-size: 14px;
        margin: 0 0 10px 0;
    }

    p {
        margin: 0;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;
