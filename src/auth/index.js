import Router from './router'

export default class Authorize {
  // 判断是否登录
  isLogin = () => {
    return true
  }

  // 获取当前用户
  modules = () => {
    return [
      { path: 'index' },
      { path: 'menu-ModuleMenuSys' },
      { path: 'pageA' },
      { path: 'a/pageB' }
    ]
  }

  // 判断模块是否可以被访问
  canAccess = (pathname) => {
    // 默认界面
    if (pathname === '/' || pathname === '/404' || pathname === '/login') {
      return true
    }

    // 如果没有登录不能访问
    if (this.isLogin() === false) {
      return false
    }

    // 超级管理员, 默认拥有所有权限
    // if (this.roleId() === 1) {
    //   return true
    // }

    // 当前角色能访问的所有模块
    const modules = this.modules()

    // 过滤路径中的字符串
    const path = pathname.replace(/\/*([\W\w]+)/, '$1')
    // 遍历角色拥有的所有模块
    let canAccess = false
    modules.forEach(module => {
      if (module.path === path) {
        canAccess = true
      }
    })

    return canAccess
  }

  // 菜单栏
  navigation = () => {
    return Router.navigationByAccessHook(this.canAccess)
  }
}
