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
    // 显示时的动画
    transition: String,
    // popper.js选项
    options: Object,
    // 触发方式，有hover和click两种
    trigger: {
      type: String,
      default: 'hover'
    },
    // 是否插入body
    appendToBody: Boolean,
    // 边界范围，应该为选择器
    boundary: String,
    // hover延时
    delay: {
      type: Number,
      default: 10
    },
    // 偏移属性
    offset: {
      type: String,
      default: '0'
    },
    disabled: Boolean,
    zIndex: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      // 是否可见
      visible: false,
      defaultOption: {
        placement: 'bottom',
      },
      popperJS: null
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
  watch: {
    visible(val) {
      if (val) {
        this.$emit('show');
        this.updatePopper();
      } else {
        this.$emit('hide');
      }
    }
  },
  mounted() {
    const options = Object.assign({}, this.defaultOption, this.options);
    options.onCreate = () => {
      this.$emit('created', this);
    }
    if (this.appendToBody) {
      document.body.appendChild(this.popper);
    }

    if (this.boundary) {
      const boundaryEle = document.querySelector(this.boundary);
      if (boundaryEle) {
        options.modifiers = Object.assign({}, options.modifiers);
        options.modifiers.preventOverflow = Object.assign({}, options.modifiers.preventOverflow);
        options.modifiers.preventOverflow.boundariesElement = boundaryEle;
      }
    }

    if (this.offset) {
      options.modifiers = Object.assign({}, options.modifiers);
      options.modifiers.offset = Object.assign({}, options.modifiers.offset);
      options.modifiers.offset.offset = this.offset;
    }
    this.popperJS = new Popper(this.reference, this.popper, options);
    this.popper.style['z-index'] = this.zIndex;
    document.addEventListener('click', this.handleClickOutside);
  },
  methods: {

    updatePopper() {
      this.popperJS && this.popperJS.scheduleUpdate();
    },
    doDestroy() {
      if (this.popperJS) {
        this.popperJS.destroy();
      }

      if (this.appendToBody) {
        document.body.removeChild(this.popper);
      }

      document.removeEventListener('click', this.handleClickOutside);
    },
    doToggle() {
      if (this.disabled) return;
      this.visible = !this.visible;
    },

    doShow() {
      if (this.disabled) return;
      this.visible = true;
    },

    doClose() {
      if (this.disabled) return;
      this.visible = false;
    },

    destroyed() {
      this.doDestroy();
    },

    handleClickOutside(e) {
      if (this.reference.contains(e.target) || this.popper.contains(e.target)) {
        return;
      }
      this.doClose();
    },

    handleClickReference() {
      if (this.trigger === 'click') {
        this.doToggle();
      }
    },
    handleMouseEnter() {
      if (this.trigger === 'hover') {
        setTimeout(() => {
          this.doShow();
        }, this.delay);
      }
    },
    handleMouseLeave() {
      if (this.trigger === 'hover') {
        setTimeout(() => {
          this.doClose();
        }, this.delay);
      }
    }
  }
}
</script>
