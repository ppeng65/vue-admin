import Router from '../router'

// 移除tab card操作
export const rmTabcardValAction = ({ commit, state }, tabcardVal) => {
  state.tabcardList.forEach((item, index) => {
    if (item.key === tabcardVal) {
      if (state.tabcardVal === tabcardVal) {
        const setIndex = index === 0 ? (index + 1) : (index - 1)
        commit('setTabcardVal', state.tabcardList[setIndex].key)
        Router.push(state.tabcardList[setIndex].path)
      }
      commit('removeTabcard', index)
    }
  })
}
