import { customElement } from "@microsoft/fast-element";
import { SectionFeatures } from "./section-features";
import { SectionFeaturesTemplate as template } from "./section-features.template";
import { SectionFeatureStyles as styles } from "./section-features.styles";
import { FeatureCard, featuresList } from "./features";

@customElement({
    name: "fast-section-features",
    template,
    styles,
})
export class FASTSectionFeatures extends SectionFeatures {
    features: FeatureCard[] = [...featuresList];
}
export * from "./section-features.template";
export * from "./section-features.styles";
export * from "./section-features";
