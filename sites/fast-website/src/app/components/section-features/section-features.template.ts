import { html, repeat } from "@microsoft/fast-element";
import { FeatureCard } from "./features";

const cardTemplate = html<FeatureCard>`
    <fast-card class="card">
        <section>
            <h5>${x => x.item}</h5>
            <h4>${x => x.title}</h4>
        </section>
        <section class="content">
            <p>${x => x.text}</p>
            <div>
                <fast-anchor href="#" appearance="lightweight"
                    >${x => x.github}</fast-anchor
                >
                <fast-anchor href="#" appearance="lightweight"
                    >${x => x.documentation}</fast-anchor
                >
            </div>
        </section>
    </fast-card>
`;

export const SectionFeaturesTemplate = html<FeatureCard[]>`
    ${repeat(x => x.features, html<FeatureCard>` ${cardTemplate} `)}
`;
