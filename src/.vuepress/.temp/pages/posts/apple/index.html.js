export const data = JSON.parse("{\"key\":\"v-08f42f4a\",\"path\":\"/posts/apple/\",\"title\":\"Apple\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Apple\",\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
