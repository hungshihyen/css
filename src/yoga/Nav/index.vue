<template>
  <nav>
    <div class="nav-start">
      DOYOGA
    </div>

    <div class="nav-center desktop">
      <button>課程介紹</button>
      <button>瑜珈空間</button>
      <button>當月課表</button>
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
      <button>立即預約</button>
      <button>聯絡我們</button>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    button {
      font-size: 1rem;
      line-height: 1.5rem;
      color: #707070;
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: none;

      &:hover{
        color:lighten($color: #707070, $amount: 5)
      }
    }
  }

  &-end {
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

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #907a7b;
      background-color: transparent;
      border: 1px solid #907a7b;
      border-radius: 1rem;
      cursor: pointer;

      + button {
        margin-left: 1rem;
      }

      &:hover{
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }
}
</style>
