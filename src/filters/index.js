const filters = {
  upper(value){
    return value.toUpperCase()
  }
}

export default {
  install(Vue) {
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
  }
}