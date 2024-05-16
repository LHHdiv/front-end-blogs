import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/lijunkai/Project/Blog/blog-site/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "/Users/lijunkai/Project/Blog/blog-site/node_modules/@vueuse/core/index.mjs";
import Badge from "/Users/lijunkai/Project/Blog/blog-site/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/Users/lijunkai/Project/Blog/blog-site/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/Users/lijunkai/Project/Blog/blog-site/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/Users/lijunkai/Project/Blog/blog-site/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_4174654_z2bwmnm3b.css");
`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
