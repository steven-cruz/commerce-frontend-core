"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[8749],{43005:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return c}});var a,r=n(87462),l=n(63366),d=(n(15007),n(64983)),i=n(91515),m=["components"],o={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),p={_frontmatter:o},u=i.Z;function c(e){var t=e.components,n=(0,l.Z)(e,m);return(0,d.mdx)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"theme-structure"},"Theme structure"),(0,d.mdx)("p",null,"A ",(0,d.mdx)("a",{parentName:"p",href:"index.md"},"design theme")," is an important part of the application. This topic describes the file structure of a ",(0,d.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/theme"},"theme"),"."),(0,d.mdx)("h2",{id:"location"},"Location"),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/storefront"},"Storefront")," themes are conventionally located under ",(0,d.mdx)("inlineCode",{parentName:"p"},"app/design/frontend/<Vendor>/"),". Though technically they can reside in other directories. For example, built-in themes can be located under ",(0,d.mdx)("inlineCode",{parentName:"p"},"vendor/magento/theme-frontend-<theme_code>")," when a instance is deployed from the ",(0,d.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/composer"},"Composer")," repository."),(0,d.mdx)("p",null,"Each theme must be stored in a separate directory:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-tree"},"app/design/frontend/<Vendor>/\n├── <theme1>\n├── <theme2>/\n├── <theme3>\n├--...\n")),(0,d.mdx)("h2",{id:"components"},"Components"),(0,d.mdx)("p",null,"The structure of a theme directory typically would be like following:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-tree"},"<theme_dir>/\n├── <Vendor>_<Module>/\n│   ├── web/\n│   │   ├── css/\n│   │   │   ├── source/\n│   ├── layout/\n│   │   ├── override/\n│   ├── templates/\n├── etc/\n├── i18n/\n├── media/\n├── web/\n│   ├── css/\n│   │   ├── source/\n│   ├── fonts/\n│   ├── images/\n│   ├── js/\n├── composer.json\n├── registration.php\n├── theme.xml\n")),(0,d.mdx)("p",null,"Let's have a closer look at each particular sub-directory."),(0,d.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The directories and files structure described below is the most extended one. It may not coincide with the structure of your store."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Directory"),(0,d.mdx)("th",{parentName:"tr",align:null},"Required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/<Vendor>_<Module>")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"Module-specific styles, layouts, and templates.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/<Vendor>_<Module>/web/css/")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"Module-specific styles (",(0,d.mdx)("inlineCode",{parentName:"td"},".css")," and/or ",(0,d.mdx)("inlineCode",{parentName:"td"},".less")," files). General styles for the module are in the _module.less file, and styles for widgets are in ",(0,d.mdx)("inlineCode",{parentName:"td"},"_widgets.less"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/<Vendor>_<Module>/layout")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"Layout files which extend the default module or parent theme layouts.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/<Vendor>_<Module>/layout/override/base")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"Layouts that override the default module layouts.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/<Vendor>_<Module>/layout/override/<parent_theme>")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"Layouts that override the parent theme layouts for the module.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"<Vendor>_<Module>/templates")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"This directory contains theme templates which override the default module templates or parent theme templates for this module. Custom templates are also stored in this directory.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/etc/view.xml")),(0,d.mdx)("td",{parentName:"tr",align:null},"required for a theme, but optional if it exists in the parent theme"),(0,d.mdx)("td",{parentName:"tr",align:null},"This file contains configurations for all storefront product images and thumbnails. It also contains product page, gallery widget configurations such as navigation options, fullscreen options and breakpoint conditions.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/i18n")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},".csv")," files with translations.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/media")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"This directory contains a theme preview (a screenshot of your theme).")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/web")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"Static files that can be loaded directly from the frontend.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/web/css/source")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"This directory contains theme LESS configuration files that invoke mixins for global elements from the UI library, and ",(0,d.mdx)("inlineCode",{parentName:"td"},"theme.less")," file which overrides the default variables values.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/web/css/source/lib")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"View files that override the UI library files stored in ",(0,d.mdx)("inlineCode",{parentName:"td"},"lib/web/css/source/lib"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/web/fonts")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"Contains theme fonts and customized icons.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/web/images")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"Images that are used in this theme.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/web/js")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"Theme JavaScript files.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/composer.json")),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},'Describes the theme dependencies and some meta-information. Will be here if your theme is a Composer package. The "name" field must be in the format ',(0,d.mdx)("inlineCode",{parentName:"td"},"<vendor-name>/theme-<area>-<theme-name>"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/registration.php")),(0,d.mdx)("td",{parentName:"tr",align:null},"required"),(0,d.mdx)("td",{parentName:"tr",align:null},"Required to register your theme in the system.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/theme.xml")),(0,d.mdx)("td",{parentName:"tr",align:null},"required"),(0,d.mdx)("td",{parentName:"tr",align:null},"The file is mandatory as it declares a theme as a system component. It contains the basic meta-information, like the theme title and the parent theme name, if the theme is inherited from an existing theme. The file is used by the system to recognize the theme.")))),(0,d.mdx)("h2",{id:"files"},"Files"),(0,d.mdx)("p",null,"Apart from the configuration file and theme ",(0,d.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/metadata"},"metadata")," file, all theme files fall into the following two categories:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Static view files"),(0,d.mdx)("li",{parentName:"ul"},"Dynamic view files")),(0,d.mdx)("h3",{id:"static-view-files"},"Static view files"),(0,d.mdx)("p",null,"A set of theme files that are returned by the server to a browser as is, without any processing, are called the ",(0,d.mdx)("em",{parentName:"p"},"static files")," of a theme."),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/static-files"},"Static files")," can be located in a theme directory as follows:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-tree"},'<theme_dir>/\n├── media/\n├── web\n│   ├── css/ (except the "source" sub-directory)\n│   ├── fonts/\n│   ├── images/\n│   ├── js/\n')),(0,d.mdx)("p",null,"The key difference between static files and other theme files is that static files appear on a web page as references to the files, while other theme files take part in the page generation, but are not explicitly referenced on a web page as files."),(0,d.mdx)("p",null,"Static view files that can be accessed by a direct link from the storefront, are distinguished as public theme files."),(0,d.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"To be actually accessible for browsers public static files are ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/static-view/static-view-file-deployment.html#config-cli-static-overview"},"published")," to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"/pub/static/frontend/<Vendor>/<theme>/<locale>/css/")," directory."),(0,d.mdx)("h3",{id:"dynamic-view-files"},"Dynamic view files"),(0,d.mdx)("p",null,"View files that are processed or executed by the server in order to provide result to the client. These are: ",(0,d.mdx)("inlineCode",{parentName:"p"},".less")," files, templates, and layouts."),(0,d.mdx)("p",null,"Dynamic view files are located in a theme directory as follows:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-tree"},"<theme_dir>/\n├── <Vendor>_<module>/\n│   ├── web/\n│   │   ├── css/\n│   │   │   ├── source/\n│   ├── layout/\n│   │   ├── override/\n│   ├── templates/\n├── web/\n│   ├── css/\n│   │   ├── source/\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-themes-structure-md-95848e5c66060db59835.js.map