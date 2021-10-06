<template>
  <footer class="footer-wrap">
    <div class="container footer">
      <section class="footer-top">
        <div class="subscribe">
          現在訂閱，獲得課程優惠碼！
        </div>
        <div class="email-wrap">
          <div class="email">
            <input
              type="text"
              placeholder="輸入您的電子信箱"
            >
            <button>訂閱</button>
          </div>
        </div>
      </section>
      <section class="footer-bottom">
        <div class="title">
          DOYOGA
        </div>
        <button class="footer-button">
          課程介紹
        </button>
        <button class="footer-button">
          瑜珈空間
        </button>
        <button class="footer-button">
          當月課表
        </button>
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
  padding: 1.5rem 0;
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

  .email-wrap {
    width: 100%;

    .email {
      display: grid;
      grid-template-columns: auto 72px;
      max-width: 350px;

      @media (min-width: 768.1px) {
        margin-left: auto;
      }

      input {
        flex-grow: 1;
        padding: 0.5rem 0 0.5rem 1rem;
        font-size: 1rem;
        border: 1px solid #c0a4a5;
        border-right: 1px solid transparent;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        outline: none;
      }

      button {
        width: 72px;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        color: #fff;
        background-color: #c0a4a5;
        border: none;
      }
    }
  }
}

.footer-bottom {
  position: relative;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  color: #fff;

  div,
  button {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 300;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .title {
    font-size: 1.5rem;
    font-weight: normal;
  }

  .footer-button {
    display: block;
    width: 64px;
    padding: 0 0;
    color: #fff;
    cursor: pointer;
    background-color: transparent;
    border: none;

    &:hover {
      color: #eee;
    }
  }

  .copy-right {
    @media (min-width: 768.1px) {
      position: absolute;
      bottom: 2.5rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
