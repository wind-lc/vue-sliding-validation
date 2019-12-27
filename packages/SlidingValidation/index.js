// 导入组件，组件必须声明 name
import SlidingValidation from './src/SlidingValidation'

// 为组件提供 install 安装方法，供按需引入
SlidingValidation.install = function (Vue) {
  Vue.component(SlidingValidation.name, SlidingValidation)
}
// 默认导出组件
export default SlidingValidation
