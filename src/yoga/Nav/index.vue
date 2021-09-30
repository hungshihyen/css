<template>
  <nav>
    <div class="nav-start">
      DOYOGA
    </div>

    <div class="nav-center desktop">
      <button class="nav-center-button">
        課程介紹
      </button>
      <button class="nav-center-button">
        瑜珈空間
      </button>
      <button class="nav-center-button">
        當月課表
      </button>
    </div>

    <div class="nav-end mobile">
      <div class="hamburger">
        <div class="line" />
        <div class="line" />
        <div class="line" />
        <div class="line" />
      </div>
    </div>
    <div class="nav-end desktop">
      <button class="nav-end-button">
        立即預約
      </button>
      <button class="nav-end-button">
        聯絡我們
      </button>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav {
  display: grid;
  grid-template-areas: 'start center end';
  // grid-template-rows: 1fr;
  // grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 80px;
  padding: 0 1rem;
  background-color: #f5f0e7;

  .mobile {
    @media (min-width: 768.1px) {
      display: none;
    }
  }

  .desktop {
    display: none;

    @media (min-width: 768.1px) {
      display: block;
    }
  }
}

.nav {
  &-start {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  &-center {
    grid-area: center;
    justify-self: center;

    .nav-center-button {
      font-size: 1rem;
      line-height: 1.5rem;
      color: #707070;
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: none;

      &:hover {
        color: lighten($color: #707070, $amount: 5);
      }
    }
  }

  &-end {
    grid-area: end;
    justify-self: end;

    .hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 2rem;
      height: 1.5rem;

      .line {
        width: 100%;
        height: calc(100% / 4 - 3px);
        background-color: #907a7b;
      }
    }

    .nav-end-button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #907a7b;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #907a7b;
      border-radius: 1rem;

      + button {
        margin-left: 1rem;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }
}
</style>
