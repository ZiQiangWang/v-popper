# v-popper
[![NPM version][npm-badge]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]


[npm-badge]: https://img.shields.io/npm/v/v-popper.svg
[npm-url]: https://www.npmjs.com/package/v-popper
[npm-downloads]: https://img.shields.io/npm/dm/v-popper.svg

vue components base on popper.js

## Install

```js
npm install v-popper --save
```

## Usage

```vue
<template>
  <div class="demo">
    <popper trigger="click">
       content
      <button type="button" name="button" slot="reference">click me</button>
    </popper>
  </div>
</template>

<script>
import Popper from 'v-popper';
export default {
  components: {
    Popper
  }
};
</script>
```

## Props

Props | Type | Default | Description 
:-- | :-: | :-- |- 
trigger | String | hover | Optional value: hover or click 
options | Object | { placement: 'bottom' } | Popper.js [options](https://popper.js.org/popper-documentation.html) 
transition | String |  | [Vue transition](https://vuejs.org/v2/guide/transitions.html) 
append-to-body | Boolean | false |  
boundary | String |  | Selector of boundary 
delay | Number | 10 | Delay of show and hide 
offset | String |  | [Offset of popper](https://popper.js.org/popper-documentation.html#modifiers..offset) 
disabled | Boolean | false |  
z-index | Number | 10 | z-index of popper 

## Attention

Props `transition` will not work correctly if transition class contains css such as:

```css
transform: scaleY(1);
```

or:

```css
transition: all 0.2s ease;
```

Because popper.js use transform in style.