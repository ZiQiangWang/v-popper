<template>
  <div class="">
    <popper trigger="click">
      <div>Hello world</div>
      <button type="button" name="button" slot="reference">click me</button>
    </popper>
  </div>
</template>

<script>
import Popper from '../src';
export default {
  name: 'App',
  components: {
    Popper
  }
};
</script>

<style lang="css">
</style>
