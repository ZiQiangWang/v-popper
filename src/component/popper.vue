<template>
  <span>
    <transition :name="transition">
      <span v-show="visible">
        <slot></slot>
      </span>
    </transition>
    <slot name="trigger"><slot>
  </span>
</template>

<script>
import Popper from 'popper.js';

export default {
  name: 'Popper',
  props: {
    transition: String
  },
  data() {
    return {
      visible: false
    }
  },
  created() {

  }
}
</script>

<style lang="css">
</style>
