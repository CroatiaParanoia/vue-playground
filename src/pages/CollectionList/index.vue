<script>
import { getFavoriteList, getAllFavoriteList } from './fakeApis';
export default {
  data() {
    return {
      selectedList: [
        {
          menuId: 22,
          menuName: '绩效管理系统',
        },
      ],
      allFavoriteList: [],
    };
  },
  mounted() {
    this.queryAllFavoriteList();
    // this.querySelectedFavoriteList();
  },
  computed: {
    selectedMenuIds() {
      return this.selectedList.map((item) => item.menuId);
    },
  },
  methods: {
    handleAddFavorite() {},
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

      <div
        v-for="menuItem in item.content"
        :key="menuItem.menuId"
        class="mt-2 flex items-center hover:text-blue-400 cursor-pointer"
      >
        <div
          :class="[
            'border-2 rounded-lg w-4 h-4 mr-2',
            selectedMenuIds.includes(menuItem.menuId) ? 'bg-blue-400 border-opacity-0' : 'border-blue-400',
          ]"
        ></div>
        {{ menuItem.menuName }}
      </div>
    </div>
  </div>
</template>