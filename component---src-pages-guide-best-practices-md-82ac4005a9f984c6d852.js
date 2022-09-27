"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[99],{55129:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return c}});var a,o=t(87462),m=t(63366),i=(t(15007),t(64983)),r=t(91515),s=["components"],d={},l=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),_={_frontmatter:d},p=r.Z;function c(e){var n=e.components,t=(0,m.Z)(e,s);return(0,i.mdx)(p,(0,o.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"theme-development-best-practices"},"Theme development best practices"),(0,i.mdx)("p",null,"Utilizing best practices for theme development give you a better chance of avoiding conflicts and issues with your theme after you update or upgrade your instance or install a custom extension."),(0,i.mdx)("p",null,"We recommend using the following best practices when developing themes:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"When ",(0,i.mdx)("a",{parentName:"p",href:"themes/inheritance.md"},"inheriting")," from a default theme, extend the default styles instead of overriding them.  Whenever possible, put your customizations in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"_extend.less")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"_theme.less")," file, instead of overriding a ",(0,i.mdx)("inlineCode",{parentName:"p"},".less")," file from a parent theme.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Customize, or create new, ",(0,i.mdx)("inlineCode",{parentName:"p"},".xml")," layout files instead of customizing and overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},".phtml")," templates. For example, if you need to create a new container, it is better to add an ",(0,i.mdx)("inlineCode",{parentName:"p"},".xml")," file than override an existing template. Some other customizations that can be performed using layout instructions include:"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Change the position of a block or container using ",(0,i.mdx)("inlineCode",{parentName:"li"},"<move>"),"."),(0,i.mdx)("li",{parentName:"ul"},"Add or remove a block or container by setting the ",(0,i.mdx)("inlineCode",{parentName:"li"},"remove")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"display")," attribute to ",(0,i.mdx)("inlineCode",{parentName:"li"},"true")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"false")," within the ",(0,i.mdx)("inlineCode",{parentName:"li"},"<referenceBlock>/<referenceContainer>"),"."),(0,i.mdx)("li",{parentName:"ul"},"Change the HTML tag or CSS class for the existing container using the ",(0,i.mdx)("inlineCode",{parentName:"li"},"<referenceContainer>")," element."),(0,i.mdx)("li",{parentName:"ul"},"Add fonts, images, and JavaScript files in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"<theme_dir>/web/")," directory.")),(0,i.mdx)("p",{parentName:"li"},"See the ",(0,i.mdx)("a",{parentName:"p",href:"layouts/index.md"},"Layout chapter of this Guide")," for more information on working with layouts.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Reuse the markup and design patterns from the default application files by referencing the existing ",(0,i.mdx)("inlineCode",{parentName:"p"},".phtml")," templates (",(0,i.mdx)("a",{parentName:"p",href:"themes/debug.md#templates"},"templates hints can help"),") or copy-pasting HTML markup to your custom templates.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Use ",(0,i.mdx)("inlineCode",{parentName:"p"},"<theme_dir>/etc/view.xml")," to change image types or sizes, or add your own types. See ",(0,i.mdx)("a",{parentName:"p",href:"themes/configure.md"},"Configure images properties")," for details. Use this file to also ",(0,i.mdx)("a",{parentName:"p",href:"../javascript/jquery-widgets/gallery.md"},"customize the product gallery widget"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"If you need to change the wording in the user interface, ",(0,i.mdx)("a",{parentName:"p",href:"translations/dictionary.md"},"add custom CSV dictionary files")," instead of overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},".phtml")," templates.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Use ",(0,i.mdx)("a",{parentName:"p",href:"css/critical-path.md"},"the CSS critical path")," to render the page much faster.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Always keep the text translatable. To ensure text used within your templates can be translated, wrap it within the translate function:\nExample:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<a href=\"#\"><?= __('Click to download'); ?></a>\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Make use of the mobile-first approach when inheriting blank or Luma themes.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Refer to the ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/coding-standards/"},"coding standards")," for both back-end and front-end technologies.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Do not repeat work while styling. Instead, create a class or mixin and call them when needed.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"While styling any custom module, add the styling within the module, instead of adding it to the design theme. This way, the style will not be loaded unless the module is called. For example ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Company/Module/view/frontend/web/css/source/_module.less"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"While styling a custom theme, add styles to separate less files, instead of appending to a single file. This way, styles are easier to track down and debug."),(0,i.mdx)("p",{parentName:"li"},"As a reference, check ",(0,i.mdx)("inlineCode",{parentName:"p"},"[Magento_Blank_Theme_Path]/web/css/_styles.less"),":"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-less"},"@import 'source/lib/_lib.less'; // Global lib\n@import 'source/_sources.less'; // Theme styles\n@import 'source/_components.less'; // Components styles (modal/sliding panel)\n")),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Application-styled or ready-made component(s)"),": To check the list of existing component(s) found in ",(0,i.mdx)("strong",{parentName:"p"},"blank theme"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"[Magento_Blank_Theme_Path]/web/css/source/_sources.less")," and  ",(0,i.mdx)("inlineCode",{parentName:"p"},"[Magento_Blank_Theme_Path]/web/css/source/_components.less"),", Magento adds their ready-made components via ",(0,i.mdx)("inlineCode",{parentName:"p"},"@import"),"."),(0,i.mdx)("p",{parentName:"li"}," If you want to add custom components or extend an existing component, copy ",(0,i.mdx)("inlineCode",{parentName:"p"},"[Magento_Blank_Theme_Path]/web/css/source/_components.less")," into your custom theme. For example, use ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/design/frontend/Company/Theme/web/css/source/_components.less")," and add/import your ",(0,i.mdx)("inlineCode",{parentName:"p"},"Custom style for new/existing components"),"."),(0,i.mdx)("p",{parentName:"li"},"The blank theme path ","[Magento_Blank_Theme_Path]"," = ",(0,i.mdx)("inlineCode",{parentName:"p"},"vendor/magento/theme-frontend-blank")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/design/frontend/Magento/blank")," may vary."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-less"},"//\n//  Components\n//  _____________________________________________\n\n@import 'components/_modals.less'; // From lib\n@import 'components/_modals_extend.less'; // Local\n\n//  _____________________________________________\n//\n//  Custom style for new components\n//  _____________________________________________\n\n@import 'components/_[CUSTOM_COMPONENT_1].less';\n@import 'components/_[CUSTOM_COMPONENT_2].less';\n\n//  _____________________________________________\n//\n//  Custom style for existing components\n//  _____________________________________________\n\n@import 'components/_[CUSTOM_COMPONENT_1]_extend.less';\n@import 'components/_[CUSTOM_COMPONENT_2]_extend.less';\n\n")))),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"[CUSTOM_COMPONENT_1,2,3...]")," needs to be replaced with a valid component name: ",(0,i.mdx)("inlineCode",{parentName:"p"},"sliders, grids")," etc. The new component name can be set as any value. For best practices, it is recommended to set a clear name that can be reused in the future."),(0,i.mdx)("p",null,"Next, add styles for respective components (new or extended) in a separate file.\nFor example, for a new slider component: ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Company/Module/view/frontend/web/css/source/components/_sliders.less"),".\nTo extend or override an existing button style: ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Company/Module/view/frontend/web/css/source/components/_buttons_extend.less"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-best-practices-md-82ac4005a9f984c6d852.js.map