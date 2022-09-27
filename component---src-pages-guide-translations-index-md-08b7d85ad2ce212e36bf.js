"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[830],{60543:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return m},default:function(){return u}});var t,o=n(87462),i=n(63366),r=(n(15007),n(64983)),l=n(91515),s=["components"],m={},d=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),p={_frontmatter:m},c=l.Z;function u(e){var a=e.components,n=(0,i.Z)(e,s);return(0,r.mdx)(c,(0,o.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"translations"},"Translations"),(0,r.mdx)("p",null,"The application enables you to localize your store for multiple regions and markets. We improved the localization and customization of instances by making translation dictionaries easier to update and by maintaining a reduced amount of code coupling and duplication."),(0,r.mdx)("p",null,"Also, we accept ",(0,r.mdx)("a",{parentName:"p",href:"#open-source-translations-project"},"contributions")," using CrowdIn for translations. The project may include package creation and further support using the contributed translations."),(0,r.mdx)("h2",{id:"terms"},"Terms"),(0,r.mdx)("p",null,"A ",(0,r.mdx)("em",{parentName:"p"},"translation dictionary")," is a comma-separated value (.csv) file with at least two columns: the original phrase in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"en_US")," locale and a translation of that phrase in an another locale. Sample translation from English (",(0,r.mdx)("inlineCode",{parentName:"p"},"en_US"),") to German (",(0,r.mdx)("inlineCode",{parentName:"p"},"de_DE"),"):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'"Add to Cart","Zum Warenkorb hinzufügen"\n"Add to Compare","Hinzufügen um zu vergleichen"\n"Add to Wishlist","Zum Wunschzettel hinzufügen"\n"Additional Product Info","Zusätzliche Angaben zum Produkt"\n"Address","Adresse"\n"Address %1 of %2","Adresse %1 von %2"\n')),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"UI text strings")," are the text elements in the Admin, including field names, instructions, notifications, and table and grid labels. When localizing, you replace these strings with translation dictionary content."),(0,r.mdx)("p",null,"A ",(0,r.mdx)("em",{parentName:"p"},"language package")," is basically a collection of translation dictionaries for a particular language together with meta-information. You can also distribute language packages to other merchants if you wish. ",(0,r.mdx)("a",{parentName:"p",href:"#language-packages"},"More information about language packages"),"."),(0,r.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"To create a language package, the ",(0,r.mdx)("inlineCode",{parentName:"p"},".csv")," file requires additional columns that specify the themes or modules in which the translations were found. For more information, see ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/localization.html"},"Generate a translation dictionary"),"."),(0,r.mdx)("h2",{id:"benefits"},"Benefits"),(0,r.mdx)("p",null,"Localizing storefronts and the Admin panel gives your company global presence for support and sales."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The application supports two types of language packages:"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Translated Module and theme packages."),(0,r.mdx)("p",{parentName:"li"},"The application auto-discovers packages included in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"i18n")," directory of a module or theme. When installing themes and extensions, consider checking for multiple language versions to download and use.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"An entire dictionary in one directory."),(0,r.mdx)("p",{parentName:"li"},"Use and distribute the dictionary as a standalone component (similar to modules and themes).")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},'Customize the default strings. For example, changing "Add to Wish List" to "Wish List".')),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Use ready-to-use language packages prepared by other users or create your own. The ",(0,r.mdx)("a",{parentName:"p",href:"https://marketplace.magento.com/catalogsearch/result/?q=language%20packs#q=language%20pack&idx=m2_cloud_prod_default_products&p=0&nR%5Bvisibility_search%5D%5B%3D%5D%5B0%5D=1"},"Commerce Marketplace")," offers language packs to download and install.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Localize strings based on existing, or parent, translations using ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/localization.html#create-directories-and-files"},"language inheritance"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Customize your translations further by creating more than one version of a translation for the same language to cover dialects and different phrasing.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Contribute to ",(0,r.mdx)("a",{parentName:"p",href:"#open-source-translations-project"},"translations")," through ","[CrowdIn project]"," with Community Engineering. We encourage translation contributions and efforts in the project for future language packs."))),(0,r.mdx)("p",null,"Depending on your needs, you can use the existing language packages, translate by yourself, or contribute."),(0,r.mdx)("h2",{id:"programming-notes"},"Programming notes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"It is recommended, but not enforced, that you do not place variables inside ",(0,r.mdx)("inlineCode",{parentName:"li"},"__()")," functions or ",(0,r.mdx)("inlineCode",{parentName:"li"},"new Phrase()")," calls. The scanner that collects the phrases from the code cannot interpret and collect the value of the variable when it is in these locations. Instead, you should place the full text in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"__()")," function or ",(0,r.mdx)("inlineCode",{parentName:"li"},"new Phrase()")," call. If you need to specify a variable in these cases, ensure that it is translated correctly wherever it is defined as a string literal."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/language-package"},"language package")," (",(0,r.mdx)("inlineCode",{parentName:"li"},"i18n")," directory) can be saved to any directory of your ",(0,r.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/extension"},"extension"),"."),(0,r.mdx)("li",{parentName:"ul"},"The phrases for translations are enabled in the ","[Phrase]"," class.")),(0,r.mdx)("h2",{id:"theme-dictionaries"},"Theme dictionaries"),(0,r.mdx)("p",null,"You might need to add a dictionary for the default language (en_US) in the following cases:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"To replace or customize strings in the ",(0,r.mdx)("a",{parentName:"li",href:"../themes/inheritance.md"},"parent theme"),'. For example, use "Compare" instead of "Add to Compare".'),(0,r.mdx)("li",{parentName:"ul"},"To prepare your ",(0,r.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/theme"},"theme")," for localization. More merchants may use your theme if it supports localization.")),(0,r.mdx)("p",null,"For an example of creating a dictionary for a theme for both cases, see ",(0,r.mdx)("a",{parentName:"p",href:"practice.md"},"Example theme translation dictionary"),"."),(0,r.mdx)("h2",{id:"manually-translation"},"Manually translation"),(0,r.mdx)("p",null,"To translate names, titles, and phrases:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Generate a dictionary of your instance using the ",(0,r.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/localization.html"},"translation dictionary tool"),". Fully review ",(0,r.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/localization.html"},"Translation dictionaries and packages")," to understand all steps, commands, and best practices for generating the dictionary."),(0,r.mdx)("li",{parentName:"ol"},"Translate the terms."),(0,r.mdx)("li",{parentName:"ol"},"If desired, package your translations in a ",(0,r.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/localization.html#create-a-language-package"},"language package"),".")),(0,r.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Only one variant of translation can be used for a word or phrase in a package. Otherwise, the application returns an error."),(0,r.mdx)("p",null,"Anyone can submit inline translations on the ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/storefront"},"storefront")," using the Text Editor. These inline translations overwrite a dictionary and save to your database (not in an instance's dictionary). Inline translations are theme-specific and do not apply if another theme is assigned."),(0,r.mdx)("p",null,"To save and reuse translations, we recommend localizing in a dictionary."),(0,r.mdx)("h2",{id:"translation-dictionaries"},"Translation dictionaries"),(0,r.mdx)("p",null,"The application translates words and phrases when all of the following conditions are met:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The code base has the necessary translation dictionaries for a language."),(0,r.mdx)("li",{parentName:"ul"},"This language is configured by the store administrator to be used in specified scope (that is, storefront).")),(0,r.mdx)("p",null,"The application automatically assembles translation dictionaries located in the modules' ",(0,r.mdx)("inlineCode",{parentName:"p"},"i18n")," directory into a dictionary per language. For example, Brazilian Portuguese (",(0,r.mdx)("inlineCode",{parentName:"p"},"pt_BR"),") translation dictionaries might be located in ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," and theme directories similar to the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"<Magento_Checkout_module_dir>/i18n/pt_BR.csv")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"<Magento_Checkout_module_dir>/<theme>/i18n/pt_BR.csv"))),(0,r.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"<Magento_Checkout_module_dir>")," stands for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento_Checkout")," module directory. The location of this directory depends on the way the application was installed. See ",(0,r.mdx)("a",{parentName:"p",href:"../conventions.md"},"Conventional notations for paths to modules and themes")," for details."),(0,r.mdx)("p",null,"Assembling the preceding ",(0,r.mdx)("inlineCode",{parentName:"p"},"pt_BR.csv")," files across all modules and the current theme results in a Portuguese translation of the entire application area (storefront or the Admin)."),(0,r.mdx)("h3",{id:"dictionary-generator-tool"},"Dictionary generator tool"),(0,r.mdx)("p",null,"You can generate a translation dictionary to use by itself (for example, to translate words and phrases in a custom module) or for use by a ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/language-package"},"language package"),". For more information, see ","[dictionary generator tool - We intend to publish more information on this technique at a later time]","."),(0,r.mdx)("h2",{id:"language-packages"},"Language packages"),(0,r.mdx)(d,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Existing language packages can be installed using ",(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/cloud/howtos/install-components.html"},"Composer")," like any other extension. You can search for package names on Packagist."),(0,r.mdx)("p",null,"The application enables you to create the following types of language packages:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"A set of ",(0,r.mdx)("inlineCode",{parentName:"p"},".csv")," files for modules and themes. These packages files are intended to be deployed in modules. For example:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-tree"},"__/app\n |__/code\n | |__/Magento\n |   |__/Catalog\n |   | |__/i18n\n |   |   |-- pt_BR.csv\n |   |__/Checkout\n |   | |__/i18n\n |   |   |-- pt_BR.csv\n |   |__/Customer\n |     |__/i18n\n |       |-- pt_BR.csv\n |__/design\n   |__/frontend\n     |__/<Vendor>\n       |__/<theme>\n         |__/i18n\n           |-- pt_BR.csv\n"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Language packages that contain a entire dictionary in one directory."),(0,r.mdx)("p",{parentName:"li"},"You can distribute this language package as a standalone component (similar to modules and themes). Interestingly, it violates modularity principles on purpose; that is, so that a system integrator can translate variations provided by extensions."))),(0,r.mdx)("p",null,"In addition to the ",(0,r.mdx)("inlineCode",{parentName:"p"},".csv")," file that contains the language dictionary, the language package contains meta-information:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"composer.json")," that contains any dependencies for the language package and a mapping to its defined ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/locale"},"locale"),". ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/package/component/#sample-composerjson-file"},"Sample composer.json"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"language.xml"),", in which you declare a language package.\n",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/localization.html#example%3A-create-a-language-package"},"Sample language.xml"),"."))),(0,r.mdx)("h2",{id:"open-source-translations-project"},"Open-source translations project"),(0,r.mdx)("p",null,"The Community Engineering team accepts translation contributions through the ","[CrowdIn project]"," to localize all UI strings. Various Meet Magento and Contribution Day events include developers contributing translations."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Create a ",(0,r.mdx)("a",{parentName:"li",href:"https://crowdin.com/join"},"CrowdIn account")," and join the ","[CrowdIn project]","."),(0,r.mdx)("li",{parentName:"ol"},"Browse and select a language. A percentage displays tracking translation progress overall and per section of the Admin."),(0,r.mdx)("li",{parentName:"ol"},"Expand and locate an area of UI text strings to translate. Strings marked red need a translation, and marked green have existing translations."),(0,r.mdx)("li",{parentName:"ol"},"Enter or review translations for strings as described in the ",(0,r.mdx)("a",{parentName:"li",href:"https://support.crowdin.com/online-editor"},"CrowdIn knowledge base"),".")),(0,r.mdx)("p",null,"Admins will review and approve translations as available. The project may include package creation and further support using the contributed and approved translations."),(0,r.mdx)("p",null,"If you need help understanding the context or meaning of a UI string, or have questions about the project, chat with us in the Community Engineering ",(0,r.mdx)("a",{parentName:"p",href:"https://magentocommeng.slack.com/archives/CD97DKBHS"},"Translations Slack channel"),". To join, send a request to ",(0,r.mdx)("a",{parentName:"p",href:"mailto:engcom@magento.com"},"engcom@magento.com")," or ",(0,r.mdx)("a",{parentName:"p",href:"https://opensource.magento.com/slack"},"self signup"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-translations-index-md-08b7d85ad2ce212e36bf.js.map