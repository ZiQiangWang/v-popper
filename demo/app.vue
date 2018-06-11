<template>
  <div class="demo">
    <popper
      trigger="click"
      append-to-body
      transition="zoom-in-top"
      offset="0,20"
      :options="{
        placement: 'top'
      }">
        <ul class="popper">
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
        </ul>
      <button type="button" name="button" slot="reference">click me</button>
    </popper>
  </div>
</template>

<script>
import Popper from '../dist/v-popper.min.js';

export default {
  name: 'App',
  components: {
    Popper
  }
};
</script>

<style lang="less">
  .demo {
    width: 100%;
    height: 100%;
    margin: 100px;
  }
  .popper {
    margin: 0;
    padding: 0;
    background: lightgray;
    list-style: none;
    padding: 10px;
  }

  .zoom-in-top-enter-active,
  .zoom-in-top-leave-active {
    opacity: 1;
    transition: opacity 0.2s ease;
    transform-origin: center top;
  }
  .zoom-in-top-enter,
  .zoom-in-top-leave-active {
    opacity: 0;
    transform: scaleY(0);
  }
</style>
