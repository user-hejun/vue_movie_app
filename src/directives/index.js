const directives = {
  focus:{
    inserted(el) {
      el.focus();
    }
  }
}

export default {
  install(Vue){
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  }
}
