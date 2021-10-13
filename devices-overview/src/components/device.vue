<template lang="pug">
.device
  a.title(:href="baseUri + device.link") {{ device.description }}
  .thumb
    .vendor {{ device.vendor }}
    a.device-img(
      :href="baseUri + device.link"
      :style="{ backgroundImage: 'url(' + baseUri + device.image + ')' }"
    )
  .desc {{ device.exposes.join(', ') }}
</template>

<script>
export default {
  name: 'Device',
  props: ['device'],

  setup() {
    let baseUri = './';
    if(process.env.NODE_ENV !== 'production') {
      baseUri = 'https://www.zigbee2mqtt.io/';
    }

    return {
      baseUri
    }
  }
}
</script>

<style lang="scss">
$borderColor: #939b9d;
$accentColor: #1E6BB8;
$bgColor: #F2F2F2;

.device {
  position: relative;
  display: flex;
  height: 280px;
  flex-direction: column;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.3);
  background: #fff;
  margin-top: 15px !important;
  border: 1px solid $borderColor;
  width: 345px;
  z-index: 3;
  backface-visibility: hidden;
  transform-origin: 10% 50%;

  .title {
    color: #4f5558;
    background: $bgColor;
    padding: 0.5rem 0.5rem;
    border-bottom: 1px solid $borderColor;
    font-weight: bold;
    font-size: 0.9rem;
    text-align: center;
    display: block;
    transition: color 0.1s ease-in-out;
    text-decoration: none;

    &:hover {
      color: $accentColor;
    }
  }

  .desc {
    padding: 0.3rem 0.5rem;
    font-size: 12px;
  }

  .thumb {
    font-size: 0;
    position: relative;
    border-bottom: 1px solid $borderColor;
    flex-grow: 1;

    .device-img {
      width: 100%;
      height: 100%;
      display: inline-block;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
    }

    .vendor {
      position: absolute;
      right: 0;
      top: 0;
      padding: 0.2rem 0.5rem;
      background: $bgColor;
      color: #159957;
      display: flex;
      flex-wrap: wrap;
      border-bottom-left-radius: 6px;
      font-size: 14px;
      font-weight: bold;
    }

  }
}
</style>
