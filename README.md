# Description

a lightweight layout components built on flexbox

# Install

`npm i @m0nm/react-layout-lite --save`

or

`yard add @m0nm/react-layout-lite`

# Usage

there are two components you'll use: `Container` which is the parent. and `Element` which is the child.

## Example

```javascript

import {Container, Element} from "@monm/react-layout-lite'

function MyComponent() {

    return (
        // the "auto" prop will center the children vertically and horizontally
        <Container auto>
            <Element>
            <img src="cat.jpg" alt="cat" width="400" height="400"/>
            </Element>

           <Element>
           <h1>Welcome to my portfolio!</h1>
            </Element>
        </Container>


        <Container align="center" justify="between" column={3}>
            <Element>
                <h3>
                    CARD 1
                </h3>
            </Element>

           <Element>
                <h3>
                    CARD 2
                </h3>
            </Element>

           <Element>
                <h3>
                    CARD 3
                </h3>
            </Element>
        </Container>
    )
}

```

# Documentation

## Container:

> **Note:** It is worth noting that `Container` will take the full width of it's parent.

All props are optional, If you set none the component will behave like flexbox default behaviour.

| prop      | type    | values                                                             | default value | description                                                                 |
| --------- | ------- | ------------------------------------------------------------------ | ------------- | --------------------------------------------------------------------------- |
| column    | number  | /                                                                  | "default"     | defines the number of columns, Read below for more information              |
| wrap      | boolean | /                                                                  | "nowrap"      | if `true` it sets `wrap` to "wrap", Read below for more information         |
| reverse   | boolean | /                                                                  | "nowrap"      | if `true` it sets `wrap` to "wrap-reverse", Read below for more information |
| auto      | boolean | /                                                                  | false         | if `true` it sets `justify-content' and `align-items` to "center"           |
| direction | string  | "row" \| "column" \| "row-reverse" \| "column-reverse"             | "row"         | determines `flex-direction`                                                 |
| justify   | string  | "start" \| "end" \| "center" \| "between" \| "around" \| "evenly"  | "start"       | determines `justify-content`                                                |
| align     | string  | "start" \| "end" \| "center" \| "baseline" \| "stretch"            | "start"       | determines `align-items`                                                    |
| content   | string  | "start" \| "end" \| "center" \| "stretch" \| "between" \| "around" | "normal"      | determines `align-content`                                                  |
| gap       | number  | /                                                                  | 0             | determines the horizontal and vertical gap between each children            |

### Note

regarding the `column` prop this will assign all the `Element` components width value to be `1/X` where X is the number you assigned to `column`, Otherwise `Element` will take the full width of `Container`. However if you don't want to use the `Element` component you may use `wrap` or `revese` prop should it be needed.

## Element:

All props are optional, If you set none the component will behave like flexbox child default behaviour.

| prop   | type   | values                                                            | default value | description                        |
| ------ | ------ | ----------------------------------------------------------------- | ------------- | ---------------------------------- |
| order  | number | /                                                                 | 0             | defines the `order` property       |
| grow   | number | /                                                                 | 0             | defines the `flex-grow` property   |
| shrink | shrink | /                                                                 | 0             | defines the `flex-shrink` property |
| self   | string | "auto" \| "start" \| "end" \| "center" \| "baseline" \| "stretch" | "auto"        | defines the `align-self` property  |
