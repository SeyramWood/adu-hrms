<template>
  <div class="scard">
    <label class="scard__header" @click="toggleDropdown = !toggleDropdown">
      Select
    </label>
    <div class="scard__content" v-if="toggleDropdown">
      <div class="scard__content__search">
        <b-input
          placeholder="Search..."
          type="search"
          icon="search"
          icon-clickable
          @icon-click="searchIconClick"
        >
        </b-input>
      </div>
      <div class="checkbox__lists">
        <div class="checkbox__lists__list" :key="day" v-for="day in 20">
          <label>
            <input type="checkbox" :value="day" v-model="result" />
            <span>data adadd yafiuaf </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiSelect",
  data() {
    return {
      toggleDropdown: false,
      result: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.scard {
  width: 100%;
  max-height: 23rem;
  background-color: #fff;

  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0px 0 1px rgb(10 10 10 / 2%);
  border-radius: 3px;
  position: relative;
  &__header {
    width: inherit;
    height: 3rem;
    position: relative;
    padding: 0 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > p {
      padding-left: 1.5rem;
    }
    &::after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: #e6e6e6;
    }
  }
  &__content {
    width: inherit;
    height: 20rem;
    background-color: inherit;
    overflow-x: hidden;
    position: absolute;
    // top: 0;
    // left: 0;
    z-index: 1;
    &__search {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      width: 100%;
      background-color: inherit;
      padding: 1.5rem;
      z-index: 1;
    }
  }
  &__buttons {
    width: 100%;
    height: 32rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & button:first-child {
      margin-bottom: 0.5rem;
    }
    & button:last-child {
      margin-top: 0.5rem;
    }
  }
}

.checkbox__lists {
  width: 100%;
  &__list {
    width: inherit;
    & > label {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      padding: 0.725rem 1.5rem;

      cursor: pointer;
      pointer-events: fill;
      transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

      & > input[type="checkbox"] {
        width: 16px;
        height: 16px;
        margin-right: 1.5rem;
      }
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
}
</style>