const menuList = [
  {
    id: 1,
    menuTitle: '基础配置',
    content: [
      {
        menuId: 11,
        menuName: '数据集成平台',
      },
      {
        menuId: 12,
        menuName: '配置管理系统',
      },
      {
        menuId: 13,
        menuName: '系统管理平台',
      },
    ],
  },
  {
    id: 2,
    menuTitle: '人力',
    content: [
      {
        menuId: 21,
        menuName: '人力资源管理系统',
      },
      {
        menuId: 22,
        menuName: '绩效管理系统',
      },
      {
        menuId: 23,
        menuName: '奖金分配系统',
      },
      {
        menuId: 24,
        menuName: '奖金分配系统',
      },
    ],
  },
  {
    id: 3,
    menuTitle: '财务',
    content: [
      {
        menuId: 31,
        menuName: '财务管理系统',
      },
      {
        menuId: 32,
        menuName: '项目成本核算系统',
      },
      {
        menuId: 33,
        menuName: '单病种成本核算系统',
      },
      {
        menuId: 34,
        menuName: '支出控制系统',
      },
      {
        menuId: 35,
        menuName: '预算管理系统',
      },
      {
        menuId: 36,
        menuName: '成本核算系统',
      },
    ],
  },
  {
    id: 4,
    menuTitle: '物资',
    content: [
      {
        menuId: 41,
        menuName: '耗材管理系统',
      },
      {
        menuId: 42,
        menuName: '物资管理系统',
      },
      {
        menuId: 43,
        menuName: '高值耗材管理系统',
      },
      {
        menuId: 44,
        menuName: '设备管理系统',
      },
      {
        menuId: 45,
        menuName: '单机核算',
      },
      {
        menuId: 46,
        menuName: '固定资产管理系统',
      },
    ],
  },
  {
    id: 5,
    menuTitle: '基础运行',
    content: [
      {
        menuId: 51,
        menuName: '合同管理系统',
      },
      {
        menuId: 52,
        menuName: '内控管理系统',
      },
      {
        menuId: 53,
        menuName: 'DRG管理系统',
      },
    ],
  },
  {
    id: 6,
    menuTitle: '综合决策',
    content: [
      {
        menuId: 61,
        menuName: 'BI',
      },
      {
        menuId: 62,
        menuName: '科主任决策',
      },
      {
        menuId: 63,
        menuName: '院长查询',
      },
      {
        menuId: 64,
        menuName: '运营决策',
      },
    ],
  },
];
const allList = menuList.map((v) => v.content).flat();

const getFavoriteIds = () => {
  const value = window.localStorage.getItem('favoriteIds');
  return value ? JSON.parse(value) : [];
};

const setFavoriteIds = (ids = []) => {
  const originIds = getFavoriteIds();

  const newIds = Array.from(...new Set(originIds.concat([].concat(ids))));

  window.localStorage.setItem(JSON.stringify(newIds));
};

const remoteFavoriteIds = (ids = []) => {
  const originIds = getFavoriteIds();

  const newIds = originIds.filter((v) => ![].concat(ids).includes(v));

  window.localStorage.setItem(JSON.stringify(newIds));
};

const response = (resolveData, timeout = 300) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resolveData);
    }, timeout);
  });
};

export const addFavorite = (menuId) => {
  setFavoriteIds(menuId);
  return response({
    code: 1,
    msg: 'success',
    data: null,
  });
};

export const removeFavorite = (menuId) => {
  remoteFavoriteIds(menuId);
  return response({
    code: 1,
    msg: 'success',
    data: null,
  });
};

export const getFavoriteList = () => {
  const value = getFavoriteIds();

  const list = value.map((v) => allList.find((subV) => subV.menuId === v));

  return response({
    code: 1,
    msg: 'success',
    data: list,
  });
};

export const getAllFavoriteList = () => {
  return response({
    code: 1,
    msg: 'success',
    data: menuList,
  });
};
