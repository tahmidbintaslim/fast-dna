---
id: fast-foundation.designsystemproperty
title: designSystemProperty() function
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-foundation](./fast-foundation.md) &gt; [designSystemProperty](./fast-foundation.designsystemproperty.md)

## designSystemProperty() function

Decorator to declare a property as a design-system property. Accepts a config object with the following:

default: The default value of the property. Will be assigned when the use-defaults attribute is used.

attribute?: The HTML attribute to map the property to - defaults to the property name.

mode?: The attr mode - see https://github.com/microsoft/fast-dna/blob/master/packages/web-components/fast-element/docs/guide/building-components.md\#customizing-attributes Defaults to "fromView"

converter?: The attr converter - see https://github.com/microsoft/fast-dna/blob/master/packages/web-components/fast-element/docs/guide/building-components.md\#customizing-attributes

cssCustomProperty?: An optional property to control the name of the css custom property being created. If omitted, the css custom property will share a name with attribute if specified, otherwise the property name being decorated. If assigned a false value, no css custom property will be created.

<b>Signature:</b>

```typescript
export declare function designSystemProperty<T extends DesignSystemProvider>(config: DecoratorDesignSystemPropertyConfiguration): (source: T, property: string) => void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  config | <code>DecoratorDesignSystemPropertyConfiguration</code> |  |

<b>Returns:</b>

`(source: T, property: string) => void`
