class Module {
  constructor({ id, key = '', title = '', path = '' }) {
    this.id = id // 权限id
    this.key = key // 模块key
    this.title = title // 模块标题
    this.path = path // 模块路径
    this.isMenu = false // 是否是菜单
    this.isPage = false // 是否是页面
    this.canAccess = false // 是否有访问权限
  }
}

// 菜单类
class Menu extends Module {
  constructor({ id, isShow = true, key, icon = '', title = '' }) {
    super({ id, key, title, path: `menu-${key}` })
    this.icon = icon // 菜单icon
    this.isMenu = true // 是否是菜单
    this.isShow = isShow // 菜单是否展示
  }
}

// 页面类
class Page extends Module {
  constructor({ id, key, icon = '', title = '', path = '', affix = false }) {
    super({ id, key, title, path })
    this.icon = icon // 页面iocn
    this.isPage = true // 是否是页面
    this.affix = affix // 是否默认展示在tab card
  }
}

// 按钮类
// class Operate extends Module {
//   constructor({ id, key, title }) {
//     super({ id, key, path: `operate-${key}` })
//     this.isOperate = true // 是否是按钮
//   }
// }

// 系统注册页面
export default {
  ModulePageIndex: new Page({ id: '1', key: 'ModulePageIndex', title: '工作台', icon: '', path: 'index', affix: true }),
  ModuleMenuSys: new Menu({ id: '2', key: 'ModuleMenuSys', title: '菜单', icon: 'menu' }),
  ModulePageA: new Page({ id: '2-1', key: 'ModulePageA', title: '菜单-页面A', icon: '', path: 'pageA' }),
  ModulePageB: new Page({ id: '3', key: 'ModulePageB', title: '页面B', icon: '', path: 'a/pageB', affix: true })
}
