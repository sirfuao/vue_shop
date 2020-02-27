module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // vant 组件样式 自动按需引入;
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
