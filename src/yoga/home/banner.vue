<template>
  <div class="banner">
    <div class="content-wrap">
      <div class="content-container">
        <div class="sub-title">
          健身輕時尚
        </div>
        <div class="title">
          DOYOGA，做你的瑜珈
        </div>
        <div class="content">
          多給自己一點時間享受靜謐，傾聽內心的聲音。
        </div>
        <button class="yellow">
          立即預約
        </button>
        <button class="red">
          課程介紹
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner {
  .content-wrap {
    width: 100%;
    height: 560px;
    padding: 175px 15px;
    background-image: url('../../assets/yoga.jpeg');
    background-repeat: no-repeat;
    background-position: center 60%;
    background-size: cover;

    @media (min-width: 768.1px) {
      height: 582px;
      padding: 185px 0;
    }
  }

  .content-container {
    color: #707070;

    @media (min-width: 768.1px) {
      max-width: 90%;
      margin: 0 auto;
    }

    @media (min-width: 1280.1px) {
      max-width: 1280px;
    }

    .sub-title {
      margin-bottom: 0.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .title {
      font-size: 2.25rem;
      line-height: 3.375rem;
      letter-spacing: 0;
      white-space: nowrap;
    }

    .content {
      font-size: 1.5rem;
      line-height: 2.25rem;
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      background-color: #f5f0e7;
      border: 1px solid #f5f0e7;
      border-radius: 5px;
      outline: none;

      &.red {
        margin-left: 0.5rem;
        color: #fff;
        background-color: #c0a4a5;
        border-color: #c0a4a5;

        &:focus,
        &:hover {
          background-color: darken($color: #c0a4a5, $amount: 3);
        }
      }

      &:focus,
      &:hover {
        background-color: darken($color: #f5f0e7, $amount: 3);
      }
    }
  }
}
</style>
