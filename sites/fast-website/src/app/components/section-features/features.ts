export interface FeatureCard {
    item: string;
    title: string;
    text: string;
    github: string;
    documentation: string;
}

export const featuresList: FeatureCard[] = [
    {
        item: "01",
        title: "Composition",
        text:
            "Create new component compositions by nesting, styling base components, and passing unhandled props. The combinations are endless.",
        github: "github",
        documentation: "documentation",
    },
    {
        item: "02",
        title: "Design Systems",
        text:
            "Use Fluent by default or customize design system properties to make it your own. Or, create your own design system to use with FAST components.",
        github: "github",
        documentation: "documentation",
    },
    {
        item: "03",
        title: "Technology",
        text:
            "Out of the box, FAST components are built on React, but you can build components on any modern framework using the FAST system.",
        github: "github",
        documentation: "documentation",
    },
    {
        item: "04",
        title: "Web Standards",
        text:
            "All FAST components follow WCAG 2.1, are W3C spec-compliant and use the W3C interaction models when available.",
        github: "github",
        documentation: "documentation",
    },
    {
        item: "05",
        title: "Animation",
        text:
            "Design sophisticated animation sequences with the animation library, an interface for the Web Animations API.",
        github: "github",
        documentation: "documentation",
    },
    {
        item: "06",
        title: "Colors",
        text:
            "Create color palettes, extract colors from images, and handle other color operations using our color library.",
        github: "github",
        documentation: "documentation",
    },
    {
        item: "07",
        title: "Layout / Grid",
        text:
            "Build layouts such as a 12 column grid for content or an application grid with resizable panels.",
        github: "github",
        documentation: "documentation",
    },
    {
        item: "08",
        title: "Other",
        text:
            "Leverage a toolkit of general utilities such as keyboarding, Right-To-Left (RTL), number, and string manipulation.",
        github: "github",
        documentation: "documentation",
    },
];
