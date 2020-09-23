import Navigation from './navigation'

export default class RouterClass {
  // 获取导航菜单
  static navigationByAccessHook = canAccessHook => {
    const cloneData = JSON.parse(JSON.stringify(Navigation))

    return RouterClass.recursionByAccessHook(canAccessHook, cloneData)
  }

  // 递归处理多级菜单
  static recursionByAccessHook = (canAccessHook, routes) => {
    // 已经授权的路由列表
    const authRoutes = []
    // 遍历路由列表中的数据
    routes.forEach(route => {
      const { module } = route
      const { path } = module

      // 判断模块是否可以访问
      if (canAccessHook && canAccessHook(path) !== false) {
        module.canAccess = true
      }

      // 获取关联模块
      let relative = []
      if (route.relative !== undefined && route.relative.length > 0) {
        relative = RouterClass.recursionByAccessHook(canAccessHook, route.relative)
      }

      // 如果没有子路由，直接添加module
      if (route.routes === undefined) {
        authRoutes.push({ module, relative })
        return
      }

      // 递归处理子路由数据
      const subRoutes = RouterClass.recursionByAccessHook(canAccessHook, route.routes)
      authRoutes.push({ module, routes: subRoutes, relative })
    })
    return authRoutes
  }

  // 根据路径活导航菜单
  static breadcrumbByPath = pathname => {
    // 过滤路径中的字符串
    const path = pathname.replace(/\/*([\W\w]+)/, '$1')
    // 根据路径获取面包屑数据
    const breadcrumb = RouterClass.recursionByPath(path, Navigation)
    return breadcrumb.reverse()
  }

  // 根据模块的path， 获取面包屑
  static recursionByPath = (path, routes) => {
    let breadcrumb = []
    routes.forEach(route => {
      const { module } = route
      if (module.path === path) {
        breadcrumb.push(module)
        return
      }

      // 获取路由模块
      const routesData = route.routes || []
      // 获取关联模块
      const relativeData = route.relative || []

      const subRoutes = [].concat(relativeData).concat(routesData)
      if (subRoutes.length <= 0) {
        return
      }

      const subcrumb = RouterClass.recursionByPath(path, subRoutes)
      if (subcrumb.length > 0) {
        subcrumb.push(module)
        breadcrumb = breadcrumb.concat(subcrumb)
      }
    })
    return breadcrumb
  }

  // 根据 affix 属性，获取tab card
  static tabcardByAffix = () => {
    const tabcard = RouterClass.recursionByAffix(Navigation)
    return tabcard
  }

  // 根据 affix 属性，获取tab card
  static recursionByAffix = routes => {
    let tabcard = []
    routes.forEach(route => {
      const { module } = route
      if (module.affix) {
        tabcard.push(module)
        return
      }

      // 获取路由模块
      const routesData = route.routes || []
      // 获取关联模块
      const relativeData = route.relative || []

      const subRoutes = [].concat(relativeData).concat(routesData)
      if (subRoutes.length <= 0) {
        return
      }

      const subcrumb = RouterClass.recursionByAffix(subRoutes)
      if (subcrumb.length > 0) {
        tabcard = tabcard.concat(subcrumb)
      }
    })

    return tabcard
  }
}
