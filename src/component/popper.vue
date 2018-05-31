<template>
  <span>
    <transition :name="transition">
      <span ref="popper" v-show="visible">
        <slot></slot>
      </span>
    </transition>
    <span ref="reference"
      @click="handleClickReference"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave">
      <slot name="reference"></slot>
    </span>
  </span>
</template>

<script>
import Popper from 'popper.js';

export default {
  name: 'Popper',
  props: {
    transition: String,
    options: Object,
    trigger: {
      type: String,
      default: 'hover'
    }
  },
  data() {
    return {
      // 是否可见
      visible: false,
      defaultOption: {
        placement: 'bottom',
      },
    }
  },
  computed: {
    reference() {
      return this.$refs.reference;
    },
    popper() {
      return this.$refs.popper;
    }
  },
  methods: {
    handleClickReference() {
      if (this.trigger === 'click') {
        this.visible = !this.visible;
      }
    },
    handleMouseEnter() {
      if (this.trigger === 'hover') {
        this.visible = true;
      }
    },
    handleMouseLeave() {
      if (this.trigger === 'hover') {
        this.visible = false;
      }
    }
  }
}
</script>

<style lang="less">
  .zoom-in-top-enter-active,
  .zoom-in-top-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: all 0.2s ease;
    transform-origin: center top;
  }
  .zoom-in-top-enter,
  .zoom-in-top-leave-active {
    opacity: 0;
    transform: scaleY(0);
  }

</style>
