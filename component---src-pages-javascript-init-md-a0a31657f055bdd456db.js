"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[4601],{98970:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return u}});var a,i=t(87462),o=t(63366),m=(t(15007),t(64983)),l=t(91515),r=["components"],d={},p=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),c={_frontmatter:d},s=l.Z;function u(e){var n=e.components,t=(0,o.Z)(e,r);return(0,m.mdx)(s,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"call-and-initialize-javascript"},"Call and initialize JavaScript"),(0,m.mdx)("p",null,"This topic describes different ways to call and initialize JavaScript in Adobe Commerce and Magento Open Source:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Insert a JavaScript component in ",(0,m.mdx)("inlineCode",{parentName:"li"},".phtml")," page templates."),(0,m.mdx)("li",{parentName:"ul"},"Call Javascript components that require initialization in Javascript (",(0,m.mdx)("inlineCode",{parentName:"li"},".js"),") files.")),(0,m.mdx)("p",null,"We strongly recommend that you use the described approaches and do not add inline JavaScript."),(0,m.mdx)("h2",{id:"insert-a-component-in-a-phtml-template"},"Insert a component in a PHTML template"),(0,m.mdx)("p",null,"Depending on your task, you can use declarative or imperative notation to insert a JS component into a PHTML template. Use declarative notation if a component requires initialization and imperative notation in other cases."),(0,m.mdx)("h3",{id:"declarative-notation"},"Declarative notation"),(0,m.mdx)("p",null,"Using the declarative notation to insert a JS component prepares all the configuration on the ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/backend"},"backend")," and outputs it to page source using standard tools. Use declarative notation if your JavaScript component requires initialization."),(0,m.mdx)("p",null,"You have two options for specifying declarative notation:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Using the ",(0,m.mdx)("inlineCode",{parentName:"p"},"data-mage-init")," attribute"),(0,m.mdx)("blockquote",{parentName:"li"},(0,m.mdx)("p",{parentName:"blockquote"},"This is used to target a specific HTML element. It is easier to implement and is commonly used for jQuery UI widgets. This method can only be implemented on the specified HTML tag. For example, ",(0,m.mdx)("inlineCode",{parentName:"p"},"<nav data-mage-init='{\"<component_name>\": {...}}'></nav>"),". This is preferred for its concise syntax, and direct access to the HTML element."))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Using the ",(0,m.mdx)("inlineCode",{parentName:"p"},'<script type="text/x-magento-init"> ... <\/script>')," tag"),(0,m.mdx)("blockquote",{parentName:"li"},(0,m.mdx)("p",{parentName:"blockquote"},"This is used to target either a CSS selector or ",(0,m.mdx)("inlineCode",{parentName:"p"},"*"),". If the CSS selector matches multiple HTML elements, the script will run for each matched HTML element. For ",(0,m.mdx)("inlineCode",{parentName:"p"},"*"),", no HTML element is selected and the script will run once with the HTML DOM as its target. This method can be implemented from anywhere in the codebase to target any HTML element. This is preferred when direct access to the HTML element is restricted, or when there is no target HTML element.")))),(0,m.mdx)("p",null,"Consider the example of adding a custom carousel JS:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Copy the ",(0,m.mdx)("inlineCode",{parentName:"p"},"<carousel_name>.carousel.js")," file to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/design/frontend/<package_name>/<theme_name>/web/js/<carousel_name>/")," directory.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Add your RequireJS module at ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/design/frontend/<package_name>/<theme_name>/web/js/carousel.js"),"."),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"}," define(['jquery','<carousel_name>'], function($)\n {\n     return function(config, element)\n     {\n         $(element).<carousel_name>(config);\n     };\n });\n"))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Add the RequireJS config to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/design/frontend/<package_name>/<theme_name>/requirejs-config.js")," file."),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"var config = {\n    map: {\n        '*': {\n                'carousel': 'js/carousel',\n                '<carousel_name>': 'js/<carousel_name>/<carousel_name>.carousel'\n            }\n        }\n};\n")))),(0,m.mdx)("p",null,"You now have two options for specifying declarative notation:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"data-mage-init")," attribute to insert the carousel in a certain element:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-html"},'<div data-mage-init=\'{"carousel":{"option": value}}\'>\n    <div class="item">Item 1</div>\n    ...\n    <div class="item">Item n</div>\n</div>\n'))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Use with ",(0,m.mdx)("inlineCode",{parentName:"p"},'<script type="text/x-magento-init"/>'),":"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-html"},'<div id="<carousel_name>" class="carousel">\n    <div class="item">Item 1</div>\n    ...\n    <div class="item">Item n</div>\n</div>\n\n<script type="text/x-magento-init">\n    {\n        "#<carousel_name>": {\n            "carousel": {"option": value}\n        }\n    }\n<\/script>\n')))),(0,m.mdx)("h4",{id:"use-the-data-mage-init-attribute"},"Use the ",(0,m.mdx)("inlineCode",{parentName:"h4"},"data-mage-init")," attribute"),(0,m.mdx)("p",null,"Use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"data-mage-init")," attribute to insert a JS component in a specified HTML element. The following example inserts a JS component in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"<nav/>")," element:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-html"},"<nav data-mage-init='{\"<component_name>\": {...}}'></nav>\n")),(0,m.mdx)("p",null,"When the Javascript is inserted into the specified element, the script is called only for this particular element. It is not automatically called for other elements of this type on the page."),(0,m.mdx)("h4",{id:"how-data-mage-init-is-processed"},"How ",(0,m.mdx)("inlineCode",{parentName:"h4"},"data-mage-init")," is processed"),(0,m.mdx)("p",null,"On DOM ready, the ",(0,m.mdx)("inlineCode",{parentName:"p"},"data-mage-init")," attribute is parsed to extract component names and configuration to be applied to the element. Depending on the type of the inserted JS component, processing is performed as follows:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"If an object is returned, the initializer tries to find the ",(0,m.mdx)("inlineCode",{parentName:"p"},"<component_name>")," key. If the corresponding value is a function, the initializer passes the ",(0,m.mdx)("inlineCode",{parentName:"p"},"config")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"element")," values to this function. For example:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"return {\n  '<component_name>': function(config, element) { ... }\n};\n")))),(0,m.mdx)("p",null,"Where ",(0,m.mdx)("inlineCode",{parentName:"p"},"<component_name>")," is a native JS component, for example: ",(0,m.mdx)("inlineCode",{parentName:"p"},"menu"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"collapsible"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"tooltip")," ..."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-html"},'<nav data-mage-init=\'{"tooltip": {"content": "<?= /* @noEscape */ $content ?>"}}\'></nav>\n')),(0,m.mdx)("p",null,"Or a custom JS component, implemented with a component path: ",(0,m.mdx)("inlineCode",{parentName:"p"},"Vendor_Module/js/component"),", or as an alias declared in ",(0,m.mdx)("inlineCode",{parentName:"p"},"requirejs-config.js"),"."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-html"},'<nav data-mage-init=\'{"Vendor_Module/js/component": {"status":"<?= /* @noEscape */ $block->getStatus(); ?>"}}\'></nav>\n')),(0,m.mdx)("p",null,"Read more about ",(0,m.mdx)("a",{parentName:"p",href:"debug.md"},"locate JS components"),"."),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"If a function is returned, the initializer passes the ",(0,m.mdx)("inlineCode",{parentName:"p"},"config")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"element")," values to this function. For example:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"return function(config, element) { ... };\n"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"If neither a function nor an object with the ",(0,m.mdx)("inlineCode",{parentName:"p"},'"<component_name>"')," key are returned, then the initializer tries to search for ",(0,m.mdx)("inlineCode",{parentName:"p"},'"<component_name>"')," in the jQuery prototype. If found, the initializer applies it as ",(0,m.mdx)("inlineCode",{parentName:"p"},"$(element).<component_name>;(config)"),". For example:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$.fn.<component_name> = function() { ... };\nreturn;\n"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"If none of the previous cases is true, the component is executed with no further processing. Such a component does not require either ",(0,m.mdx)("inlineCode",{parentName:"p"},"config")," or ",(0,m.mdx)("inlineCode",{parentName:"p"},"element"),". The recommended way to declare such components is ",(0,m.mdx)("a",{parentName:"p",href:"#use-the-script-typetextx-magento-init-tag"},"using the ",(0,m.mdx)("inlineCode",{parentName:"a"},"<script>")," tag"),"."))),(0,m.mdx)("h4",{id:"use-the-script-typetextx-magento-init-tag"},"Use the ",(0,m.mdx)("inlineCode",{parentName:"h4"},'<script type="text/x-magento-init">')," tag"),(0,m.mdx)("p",null,"To call a JS component on an HTML element without direct access to the element or with no relation to a certain element, use the ",(0,m.mdx)("inlineCode",{parentName:"p"},'<script type="text/x-magento-init">')," tag and attribute syntax shown in the following example."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-html"},'<script type="text/x-magento-init">\n{\n    // components initialized on the element defined by selector\n    "<element_selector>": {\n        "<js_component1>": ...,\n        "<js_component2>": ...\n    },\n    // components initialized without binding to an element\n    "*": {\n        "<js_component3>": ...\n    }\n}\n<\/script>\n')),(0,m.mdx)("p",null,"Where:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"<element_selector>")," is a ",(0,m.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector"},"selector")," (in terms of querySelectorAll) for the element on which the following JS components are called."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"<js_component1>")," and ",(0,m.mdx)("inlineCode",{parentName:"li"},"<js_component2>")," are the JS components being initialized on the element with the selector specified as ",(0,m.mdx)("inlineCode",{parentName:"li"},"<element_selector>"),"."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"<js_component3>")," is the JS component called with no binding to an element.")),(0,m.mdx)("p",null,"The following example provides a working code sample of a widget call using ",(0,m.mdx)("inlineCode",{parentName:"p"},"<script>"),". Here the ",(0,m.mdx)("inlineCode",{parentName:"p"},"accordion")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"navigation")," widgets are added to the element with the ",(0,m.mdx)("inlineCode",{parentName:"p"},"#main-container")," selector, and the ",(0,m.mdx)("inlineCode",{parentName:"p"},"pageCache")," script is inserted with no binding to any element."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-html"},'<script type="text/x-magento-init">\n{\n    "#main-container": {\n        "navigation": <?php echo $block->getNavigationConfig(); ?>,\n        "accordion": <?php echo $block->getNavigationAccordionConfig(); ?>\n    },\n    "*": {\n        "pageCache": <?php echo $block->getPageCacheConfig(); ?>\n    }\n}\n<\/script>\n')),(0,m.mdx)("h3",{id:"imperative-notation"},"Imperative notation"),(0,m.mdx)("p",null,"Use imperative notation in the PHTML template to include raw JavaScript code on the pages to execute specified business logic. This method uses the ",(0,m.mdx)("inlineCode",{parentName:"p"},"<script>")," tag without the ",(0,m.mdx)("inlineCode",{parentName:"p"},'type="text/x-magento-init"')," attribute as shown in the following example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-html"},"<script>\nrequire([\n    'jquery',\n    'accordion'  // the alias for \"mage/accordion\"\n], function ($) {\n    $(function () { // to ensure that code evaluates on page load\n        $('[data-role=example]')  // we expect that page contains the <tag data-role=\"example\">..</tag> markup\n            .accordion({ // now we can use \"accordion\" as jQuery plugin\n                header:  '[data-role=header]',\n                content: '[data-role=content]',\n                trigger: '[data-role=trigger]',\n                ajaxUrlElement: \"a\"\n            });\n    });\n});\n<\/script>\n")),(0,m.mdx)(p,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"For better control when scripts are executed, use a declarative syntax rather than an imperative syntax. When using imperative syntax, the ability to leverage existing JS classes is lost and can block the rendering of the page."),(0,m.mdx)("h2",{id:"calling-components-that-require-initialization"},"Calling components that require initialization"),(0,m.mdx)("p",null,"To call a widget with JS code, use a notation similar to the (",(0,m.mdx)("a",{parentName:"p",href:"jquery-widgets/accordion.md"},"accordion")," widget. It is initialized on the ",(0,m.mdx)("inlineCode",{parentName:"p"},"[data-role=example]")," element as below):"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$('[data-role=example]').accordion();\n")),(0,m.mdx)("p",null,"To initialize a ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/widget"},"widget")," with options, use notation similar to the following:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$(function () { // to ensure that code evaluates on page load\n    $('[data-role=example]')  // we expect that page contains markup <tag data-role=\"example\">..</tag>\n        .accordion({ // now we can use \"accordion\" as jQuery plugin\n            header:  '[data-role=header]',\n            content: '[data-role=content]',\n            trigger: '[data-role=trigger]',\n            ajaxUrlElement: 'a'\n        });\n});\n")),(0,m.mdx)("p",null,"In a similar way, you can initialize any JS component that a returns callback function accepting a ",(0,m.mdx)("inlineCode",{parentName:"p"},"config")," object and ",(0,m.mdx)("inlineCode",{parentName:"p"},"element")," (a DOM node)."),(0,m.mdx)("p",null,"For example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"define ([\n    'jquery',\n    'mage/gallery/gallery'\n], function ($, Gallery) {\n\n    $(function () { // to ensure that code evaluates on page load\n        $('[data-role=example]')  // we expect that page contains markup <tag data-role=\"example\">..</tag>\n            .each(function (index, element) {\n                Gallery({\n                    options:  {},\n                    data: [{\n                        img: 'https://c2.staticflickr.com/8/7077/27935031965_facd03b4cb_b_d.jpg'\n                    }],\n                    fullscreen: {}\n                }, element);  // 'element' is single DOM node.\n            });\n    });\n});\n")),(0,m.mdx)("h2",{id:"execute-data-mage-init-and-x-magento-init-in-dynamic-content"},"Execute data-mage-init and x-magento-init in dynamic content"),(0,m.mdx)("p",null,"To trigger ",(0,m.mdx)("inlineCode",{parentName:"p"},".trigger('contentUpdated')")," on the element when dynamic content is injected, use:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$.ajax({\n    url: 'https://www.example.com',\n    method: 'POST',\n    data: {\n        id: '1'\n    },\n    success: function (data) {\n        $('.example-element').html(data)\n                             .trigger('contentUpdated')\n    }\n});\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-init-md-a0a31657f055bdd456db.js.map