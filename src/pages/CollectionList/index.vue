<script>
import { getFavoriteList, getAllFavoriteList, addFavorite, removeFavorite } from './fakeApis';
export default {
  data() {
    return {
      selectedList: [],
      allFavoriteList: [],
    };
  },
  mounted() {
    this.queryAllFavoriteList();
    this.querySelectedFavoriteList();
  },
  computed: {
    selectedMenuIds() {
      return this.selectedList.map((item) => item.menuId);
    },
  },
  methods: {
    setMenuItemLoading(menuItem) {
      menuItem.isLoading = true;
    },
    clearMenuItemLoading(menuItem) {
      menuItem.isLoading = false;
    },

    handleAddFavorite(menuItem) {
      this.setMenuItemLoading(menuItem);
      addFavorite(menuItem.menuId)
        .then((res) => {
          if (res.code === 1) {
            this.selectedList.push(menuItem);
          }
        })
        .finally(() => {
          this.clearMenuItemLoading(menuItem);
        });
    },
    handleRemoveFavorite(menuItem) {
      this.setMenuItemLoading(menuItem);
      removeFavorite(menuItem.menuId)
        .then((res) => {
          if (res.code === 1) {
            this.selectedList = this.selectedList.filter((v) => v.menuId !== menuItem.menuId);
          }
        })
        .finally(() => {
          this.clearMenuItemLoading(menuItem);
        });
    },
    querySelectedFavoriteList() {
      return getFavoriteList().then((res) => {
        this.selectedList = res.data;
        return res;
      });
    },
    queryAllFavoriteList() {
      return getAllFavoriteList().then((res) => {
        this.allFavoriteList = res.data;
      });
    },
  },
};
</script>


<template>
  <div class="mb-12 flex flex-wrap">
    selectedList:
    <div v-for="item in selectedList" :key="item.menuId" class="mr-2 mb-2">
      {{ item.menuName }}
    </div>
  </div>
  <div class="p-4 flex flex-wrap">
    <div class="w-1/4" v-for="item in allFavoriteList" :key="item.id">
      {{ item.menuTitle }}

      <div v-for="menuItem in item.content" :key="menuItem.menuId" class="mt-2 relative">
        <div
          class="flex items-center hover:text-blue-400 cursor-pointer"
          @click="
            selectedMenuIds.includes(menuItem.menuId) ? handleRemoveFavorite(menuItem) : handleAddFavorite(menuItem)
          "
        >
          <div
            :class="[
              'border-2 rounded-lg w-4 h-4 mr-2',
              selectedMenuIds.includes(menuItem.menuId) ? 'bg-blue-400 border-opacity-0' : 'border-blue-400',
            ]"
          ></div>
          {{ menuItem.menuName }}
        </div>

        <div
          v-if="menuItem.isLoading"
          class="absolute left-0 top-0 right-0 bottom-0 z-10 cursor-wait bg-white opacity-60"
        ></div>
      </div>
    </div>
  </div>
</template>