import Modules from './modules'

/**
 * module: {
 *    module: 注册的模块
 *    routes: [module] 子目录
 *    relative: [module] 详情不展示在菜单
 * }
 * **/
export default [
  {
    module: Modules.ModulePageIndex
  },
  {
    module: Modules.ModuleMenuSys,
    routes: [
      {
        module: Modules.ModulePageA
      }
    ]
  },
  {
    module: Modules.ModulePageB
  }
]
