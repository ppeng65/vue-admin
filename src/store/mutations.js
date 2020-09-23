// 设置菜单是否折叠
export const setMenuStatus = (state, status) => {
  state.isCollapse = status
}

// 获取菜单list
export const setMenuList = (state, list) => {
  state.menuList = list
}

// 设置面包屑
export const setBreadcrumb = (state, list) => {
  state.breadcrumbList = list
}

// 设置tab card 选中value
export const setTabcardVal = (state, val) => {
  state.tabcardVal = val
}

// 移除tabcard item
export const removeTabcard = (state, index) => {
  state.tabcardList.splice(index, 1)
}

// 设置 tabcard
export const setTabcard = (state, tabcard) => {
  if (tabcard.length === 1) {
    const isExist = state.tabcardList.some(item => item.key === tabcard[0].key)
    if (isExist) {
      return
    }
  }

  state.tabcardList.push(...tabcard)
}
