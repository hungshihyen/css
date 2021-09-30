<template>
  <footer class="footer-wrap">
    <div class="container footer">
      <section class="footer-top">
        <div class="subscribe">
          現在訂閱，獲得課程優惠碼！
        </div>
        <div class="email">
          <input
            type="text"
            placeholder="輸入您的電子信箱"
          >
          <button>訂閱</button>
        </div>
      </section>
      <section class="footer-bottom">
        <div>DOYOGA</div>
        <div>課程介紹</div>
        <div>瑜珈空間</div>
        <div>瑜珈空間</div>
        <div class="copy-right">
          © 2021. All Rights Reserved.
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer-wrap {
  background-color: #907a7b;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid #fff;

  @media (min-width: 768.1px) {
    grid-template-columns: 1fr 1fr;
  }

  .subscribe {
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: #fff;

    @media (min-width: 768.1px) {
      font-size: 1.75rem;
    }
  }

  .email {
    display: flex;

    input {
      width: 100%;
      max-width: 278px;
      padding: 0.5rem 0 0.5rem 1rem;
      font-size: 1rem;
      border: 1px solid #c0a4a5;
      border-right: 1px solid transparent;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      outline: none;

      @media (min-width: 768.1px) {
        margin-left: auto;
      }
    }

    button {
      width: 21%;
      max-width: 72px;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      color: #fff;
      background-color: #c0a4a5;
      border: none;
    }
  }
}

</style>
