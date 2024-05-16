import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "/Users/lijunkai/Project/astro-blog/node_modules/reveal.js/dist/reveal.css";
import Presentation from "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Playground from "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/lijunkai/Project/astro-blog/node_modules/katex/dist/katex.min.css";
import "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";
import { injectVuePlaygroundConfig } from "/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealConfig(app);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", defineAsyncComponent(() => import("/Users/lijunkai/Project/astro-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
  },
  setup: () => {

  }
});
