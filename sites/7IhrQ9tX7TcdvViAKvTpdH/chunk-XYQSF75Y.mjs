import{a as A,b as R,h as V}from"./chunk-3QKDKLBP.mjs";import{$a as k,A as T,C as t,E as G,Ka as Q,Va as J,W as Z,Ya as X,Za as m,ab as $,bb as ee,c as l,cb as ae,ea as h,g as j,ha as L,k as B,ka as D,l as F,m as H,na as O,p as W,r as C,s as E,u as q,v as e,w as c,wa as Y,xa as U,za as K}from"./chunk-SQMFJEPG.mjs";import{c as z}from"./chunk-A3IIQ6X3.mjs";function _({type:a,url:n,html:i,style:r={}}){return a==="url"&&n?e(fe,{url:n,style:r}):a==="html"&&i?e(de,{html:i,style:r}):e(ce,{style:r})}L(_,{type:{type:h.Enum,defaultValue:"url",displaySegmentedControl:!0,options:["url","html"],optionTitles:["URL","HTML"]},url:{title:"URL",type:h.String,description:"Some websites don\u2019t support embedding.",hidden(a){return a.type!=="url"}},html:{title:"HTML",type:h.String,displayTextArea:!0,hidden(a){return a.type!=="html"}}});function ce({style:a}){return e("div",{style:{minHeight:le(a),...R,overflow:"hidden",...a},children:e("div",{style:N,children:"To embed a website or widget, add it to the properties\xA0panel."})})}function fe({url:a,style:n}){let i=!n.height;/[a-z]+:\/\//.test(a)||(a="https://"+a);let r=V(),[p,v]=E(r?void 0:!1);if(F(()=>{if(!r)return;let b=!0;v(void 0);async function y(){let s=await fetch("https://api.framer.com/functions/check-iframe-url?url="+encodeURIComponent(a));if(s.status==200){let{isBlocked:f}=await s.json();b&&v(f)}else{let f=await s.text();console.error(f);let g=new Error("This site can\u2019t be reached.");v(g)}}return y().catch(s=>{console.error(s),v(s)}),()=>{b=!1}},[a]),r&&i)return e(I,{message:"URL embeds do not support auto height.",style:n});if(!a.startsWith("https://"))return e(I,{message:"Unsupported protocol.",style:n});if(p===void 0)return e(ge,{});if(p instanceof Error)return e(I,{message:p.message,style:n});if(p===!0){let b=`Can\u2019t embed ${a} due to its content security policy.`;return e(I,{message:b,style:n})}return e("iframe",{src:a,style:{...te,...n},loading:"lazy",fetchPriority:r?"low":"auto",referrerPolicy:"no-referrer",sandbox:me(r)})}var te={width:"100%",height:"100%",border:"none"};function me(a){let n=["allow-same-origin","allow-scripts"];return a||n.push("allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-storage-access-by-user-activation","allow-top-navigation-by-user-activation"),n.join(" ")}function de({html:a,...n}){if(a.includes("<\/script>")){let r=a.includes("</spline-viewer>"),p=a.includes("<!-- framer-direct-embed -->");return r||p?e(be,{html:a,...n}):e(ue,{html:a,...n})}return e(ve,{html:a,...n})}function ue({html:a,style:n}){let i=C(),[r,p]=E(0);F(()=>{var s;let f=(s=i.current)===null||s===void 0?void 0:s.contentWindow;function g(S){if(S.source!==f)return;let w=S.data;if(typeof w!="object"||w===null)return;let x=w.embedHeight;typeof x=="number"&&p(x)}return z.addEventListener("message",g),f?.postMessage("getEmbedHeight","*"),()=>{z.removeEventListener("message",g)}},[]);let v=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${a}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,b={...te,...n};return!n.height&&(b.height=r+"px"),e("iframe",{ref:i,style:b,srcDoc:v})}function be({html:a,style:n}){let i=C();return F(()=>{let r=i.current;if(r)return r.innerHTML=a,ie(r),()=>{r.innerHTML=""}},[a]),e("div",{ref:i,style:{...oe,...n}})}function ve({html:a,style:n}){return e("div",{style:{...oe,...n},dangerouslySetInnerHTML:{__html:a}})}var oe={width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"};function ie(a){if(a instanceof Element&&a.tagName==="SCRIPT"){let n=document.createElement("script");n.text=a.innerHTML;for(let{name:i,value:r}of a.attributes)n.setAttribute(i,r);a.parentElement.replaceChild(n,a)}else for(let n of a.childNodes)ie(n)}function ge(){return e("div",{className:"framerInternalUI-componentPlaceholder",style:{...A,overflow:"hidden"},children:e("div",{style:N,children:"Loading\u2026"})})}function I({message:a,style:n}){return e("div",{className:"framerInternalUI-errorPlaceholder",style:{minHeight:le(n),...A,overflow:"hidden",...n},children:e("div",{style:N,children:a})})}var N={textAlign:"center",minWidth:140};function le(a){if(!a.height)return 200}var he=ae(_),ye=["F5_v3P9sL","IWz7wDRMB","aMuIusX7a","b4sn_9nYD"],we="framer-gzpe1",ze={aMuIusX7a:"framer-v-ei14m2",b4sn_9nYD:"framer-v-26ds6l",F5_v3P9sL:"framer-v-1s0ewjl",IWz7wDRMB:"framer-v-rzoopf"};function u(a,...n){let i={};return n?.forEach(r=>r&&Object.assign(i,a[r])),i}var Ce={bounce:.2,delay:0,duration:.4,type:"spring"},_e=({value:a,children:n})=>{let i=B(T),r=a??i.transition,p=W(()=>({...i,transition:r}),[JSON.stringify(r)]);return e(T.Provider,{value:p,children:n})},Me=t.create(l),Se={Desktop:"F5_v3P9sL",laptop:"IWz7wDRMB",Phone:"b4sn_9nYD",Tablet:"aMuIusX7a"},Fe=({height:a,id:n,width:i,...r})=>({...r,variant:Se[r.variant]??r.variant??"F5_v3P9sL"}),Le=(a,n)=>a.layoutDependency?n.join("-")+a.layoutDependency:n.join("-"),ke=j(function(a,n){let i=C(null),r=n??i,p=H(),{activeLocale:v,setLocale:b}=Z(),y=Y(),{style:s,className:f,layoutId:g,variant:S,...w}=Fe(a),{baseVariant:x,classNames:pe,clearLoadingGesture:Ie,gestureHandlers:se,gestureVariant:d,isLoading:Ee,setGestureState:Te,setVariant:De,variants:P}=J({cycleOrder:ye,defaultVariant:"F5_v3P9sL",ref:r,variant:S,variantClassNames:ze}),o=Le(a,P),xe=D(we,...[]);return e(G,{id:g??p,children:e(Me,{animate:P,initial:!1,children:e(_e,{value:Ce,children:e(X,{...w,...se,background:{alt:"",fit:"fill",loading:$(y?.y||0),pixelHeight:1008,pixelWidth:1920,sizes:y?.width||"100vw",src:"https://framerusercontent.com/images/nGCkM1lFX0QhJ2pRrimaMkNQSxg.jpg",srcSet:"https://framerusercontent.com/images/nGCkM1lFX0QhJ2pRrimaMkNQSxg.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/nGCkM1lFX0QhJ2pRrimaMkNQSxg.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/nGCkM1lFX0QhJ2pRrimaMkNQSxg.jpg 1920w"},className:D(xe,"framer-1s0ewjl",f,pe),"data-framer-name":"Desktop",layoutDependency:o,layoutId:"F5_v3P9sL",ref:r,style:{...s},...u({aMuIusX7a:{"data-framer-name":"Tablet"},b4sn_9nYD:{"data-framer-name":"Phone"},IWz7wDRMB:{"data-framer-name":"laptop"}},x,d),children:c(t.div,{className:"framer-16gvuuy",layoutDependency:o,layoutId:"fJcfuyRcq",children:[c(t.div,{className:"framer-1805vl4","data-framer-name":"Frame 427320733",layoutDependency:o,layoutId:"J7Sn5qKUO",children:[c(t.div,{className:"framer-1dy7qai","data-framer-name":"Frame 427320642",layoutDependency:o,layoutId:"c1FSnuuTI",children:[e(m,{__fromCanvasComponent:!0,children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS02MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"50px","--framer-font-weight":"600","--framer-text-color":"var(--extracted-r6o4lv, rgb(31, 31, 31))"},children:"Protect against compliance failings, and transact with confidence.\xA0"})}),className:"framer-1ke32l6","data-framer-name":"Protect against compliance failings, and transact with confidence.\xA0",fonts:["GF;Manrope-600"],layoutDependency:o,layoutId:"o_cAeoOXe",style:{"--extracted-r6o4lv":"rgb(31, 31, 31)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0,...u({b4sn_9nYD:{children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS02MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"25px","--framer-font-weight":"600","--framer-line-height":"34px","--framer-text-color":"var(--extracted-r6o4lv, rgb(31, 31, 31))"},children:"Protect against compliance failings, and transact with confidence.\xA0"})})}},x,d)}),e(m,{__fromCanvasComponent:!0,children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS1yZWd1bGFy","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"18px","--framer-letter-spacing":"-0.02em","--framer-line-height":"150%","--framer-text-color":"var(--extracted-r6o4lv, rgb(117, 117, 117))"},children:"Book a demo to find out more."})}),className:"framer-5ssv4m","data-framer-name":"Book a demo to find out more.",fonts:["GF;Manrope-regular"],layoutDependency:o,layoutId:"UaRAtdO8x",style:{"--extracted-r6o4lv":"rgb(117, 117, 117)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0,...u({b4sn_9nYD:{children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS1yZWd1bGFy","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"14px","--framer-letter-spacing":"0px","--framer-line-height":"24px","--framer-text-color":"var(--extracted-r6o4lv, rgb(117, 117, 117))"},children:"Book a demo to find out more."})})}},x,d)})]}),e(t.div,{className:"framer-rceqyw","data-framer-name":"Frame 427320793",layoutDependency:o,layoutId:"GbMGV_HJq",children:c(t.div,{className:"framer-z5r2n","data-border":!0,"data-framer-name":"Frame 33669",layoutDependency:o,layoutId:"aJm03abAH",style:{"--border-bottom-width":"1.2589857578277588px","--border-color":"rgb(212, 216, 253)","--border-left-width":"1.2589857578277588px","--border-right-width":"1.2589857578277588px","--border-style":"solid","--border-top-width":"1.2589857578277588px",backgroundColor:"rgb(255, 255, 255)",borderBottomLeftRadius:16,borderBottomRightRadius:16,borderTopLeftRadius:16,borderTopRightRadius:16},children:[e(m,{__fromCanvasComponent:!0,children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS03MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"25px","--framer-font-weight":"700","--framer-line-height":"36px","--framer-text-color":"var(--extracted-r6o4lv, rgb(31, 31, 31))"},children:"Contact Details"})}),className:"framer-17zmhje","data-framer-name":"Contact Details",fonts:["GF;Manrope-700"],layoutDependency:o,layoutId:"NbMN7Q01I",style:{"--extracted-r6o4lv":"rgb(31, 31, 31)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0}),c(t.div,{className:"framer-he58yp","data-framer-name":"Frame 427320790",layoutDependency:o,layoutId:"ZFoQVdIaA",children:[e(k,{className:"framer-8pkuzw","data-framer-name":"1",fill:"rgba(0,0,0,1)",intrinsicHeight:60,intrinsicWidth:60,layoutDependency:o,layoutId:"ycWsLN7nX",svg:`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="60" height="60" rx="30" fill="#003FAF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.4261 22.0678C29.3687 26.5755 23.7015 28.0372 23.7015 28.0372C23.4927 28.0907 23.2712 28.059 23.0858 27.9491C22.9939 27.8947 22.9137 27.8228 22.8497 27.7374C22.7857 27.652 22.7391 27.5548 22.7127 27.4514C22.6862 27.348 22.6804 27.2404 22.6955 27.1348C22.7106 27.0291 22.7464 26.9275 22.8008 26.8357C22.9107 26.6502 23.0897 26.516 23.2985 26.4626C23.2985 26.4626 28.6951 25.0952 31.3333 20.7637L29.7351 20.7499C29.5196 20.748 29.3137 20.6605 29.1627 20.5068C29.0117 20.353 28.928 20.1456 28.9299 19.9301C28.9319 19.7146 29.0193 19.5087 29.1731 19.3577C29.3268 19.2067 29.5343 19.123 29.7498 19.1249L33.2273 19.1558C33.4403 19.1573 33.6443 19.2426 33.795 19.3933C33.9456 19.5439 34.0309 19.7479 34.0324 19.961L34.0625 23.358C34.0644 23.5735 33.9807 23.781 33.8297 23.9347C33.6787 24.0884 33.4728 24.1759 33.2573 24.1778C33.0418 24.1798 32.8344 24.096 32.6806 23.945C32.5269 23.794 32.4394 23.5881 32.4375 23.3727L32.4261 22.0678ZM25.5191 41.8749H21.875C21.444 41.8749 21.0307 41.7037 20.726 41.399C20.4212 41.0942 20.25 40.6809 20.25 40.2499V32.9374C20.25 32.5064 20.4212 32.0931 20.726 31.7884C21.0307 31.4836 21.444 31.3124 21.875 31.3124H25.5191V41.8749ZM27.1441 30.5283C27.1441 29.6151 27.8843 28.8749 28.7975 28.8749H31.1351C32.0483 28.8749 32.7885 29.6151 32.7885 30.5283V41.8749H27.1441V30.5283ZM34.4135 27.2783C34.4135 26.3651 35.1537 25.6249 36.0661 25.6249H38.125C38.556 25.6249 38.9693 25.7961 39.274 26.1009C39.5788 26.4056 39.75 26.8189 39.75 27.2499V40.2499C39.75 40.6809 39.5788 41.0942 39.274 41.399C38.9693 41.7037 38.556 41.8749 38.125 41.8749H34.4135V27.2783Z" fill="white"/>
</svg>
`,withExternalLayout:!0}),c(t.div,{className:"framer-14izdy6","data-framer-name":"Frame 427320788",layoutDependency:o,layoutId:"PTlAL638P",children:[e(m,{__fromCanvasComponent:!0,children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS02MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"20px","--framer-font-weight":"600","--framer-line-height":"28px","--framer-text-color":"var(--extracted-r6o4lv, rgb(31, 31, 31))"},children:"Sales"})}),className:"framer-ydhefc","data-framer-name":"Sales",fonts:["GF;Manrope-600"],layoutDependency:o,layoutId:"trb2NK7xy",style:{"--extracted-r6o4lv":"rgb(31, 31, 31)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0,...u({b4sn_9nYD:{children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS02MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"18px","--framer-font-weight":"600","--framer-line-height":"28px","--framer-text-color":"var(--extracted-r6o4lv, rgb(31, 31, 31))"},children:"Sales"})})}},x,d)}),e(m,{__fromCanvasComponent:!0,children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS01MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"18px","--framer-font-weight":"500","--framer-letter-spacing":"-0.02em","--framer-line-height":"150%","--framer-text-color":"var(--extracted-r6o4lv, rgb(37, 111, 242))","--framer-text-decoration":"underline"},children:"sales@facctum.com"})}),className:"framer-1rglvyo","data-framer-name":"sales@facctum.com",fonts:["GF;Manrope-500"],layoutDependency:o,layoutId:"ka1rp0QvU",style:{"--extracted-r6o4lv":"rgb(37, 111, 242)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0,...u({b4sn_9nYD:{children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS01MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"14px","--framer-font-weight":"500","--framer-letter-spacing":"-0.02em","--framer-line-height":"150%","--framer-text-color":"var(--extracted-r6o4lv, rgb(37, 111, 242))","--framer-text-decoration":"underline"},children:"sales@facctum.com"})})}},x,d)})]})]}),c(t.div,{className:"framer-61vwaa","data-framer-name":"Frame 427320791",layoutDependency:o,layoutId:"FIkZxv1L8",children:[e(k,{className:"framer-12n2knl","data-framer-name":"2",fill:"rgba(0,0,0,1)",intrinsicHeight:60,intrinsicWidth:60,layoutDependency:o,layoutId:"NCwjVlQtP",svg:`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="60" height="60" rx="30" fill="#003FAF"/>
<path d="M37.7779 24.1111H35.2779V22.7222C35.2773 21.912 34.9552 21.1351 34.3823 20.5622C33.8094 19.9893 33.0325 19.6672 32.2223 19.6666H27.7779C26.9677 19.6672 26.1908 19.9893 25.6179 20.5622C25.045 21.1351 24.7229 21.912 24.7223 22.7222V24.1111H22.2223C21.4121 24.1117 20.6352 24.4338 20.0623 25.0067C19.4894 25.5796 19.1673 26.3564 19.1667 27.1666V28.5011C20.0956 30.4944 22.1045 31.8888 24.4445 31.8888H26.9445V30.5C26.9445 29.4277 27.8167 28.5555 28.889 28.5555H31.1112C32.1834 28.5555 33.0556 29.4277 33.0556 30.5V31.8888H35.5556C37.8956 31.8888 39.9045 30.4955 40.8334 28.5011V27.1666C40.8328 26.3564 40.5107 25.5796 39.9378 25.0067C39.3649 24.4338 38.5881 24.1117 37.7779 24.1111ZM26.389 22.7222C26.389 21.9566 27.0123 21.3333 27.7779 21.3333H32.2223C32.9879 21.3333 33.6112 21.9566 33.6112 22.7222V24.1111H26.389V22.7222ZM28.889 34.1111C28.8153 34.1111 28.7446 34.0818 28.6926 34.0297C28.6405 33.9776 28.6112 33.907 28.6112 33.8333V30.5C28.6112 30.4263 28.6405 30.3556 28.6926 30.3035C28.7446 30.2514 28.8153 30.2222 28.889 30.2222H31.1112C31.1849 30.2222 31.2555 30.2514 31.3076 30.3035C31.3597 30.3556 31.389 30.4263 31.389 30.5V33.8333C31.389 33.907 31.3597 33.9776 31.3076 34.0297C31.2555 34.0818 31.1849 34.1111 31.1112 34.1111H28.889ZM35.5556 33.5555C37.5337 33.5562 39.4314 32.7731 40.8334 31.3777V38.2777C40.8328 39.0879 40.5107 39.8648 39.9378 40.4377C39.3649 41.0106 38.5881 41.3327 37.7779 41.3333H22.2223C21.4121 41.3327 20.6352 41.0106 20.0623 40.4377C19.4894 39.8648 19.1673 39.0879 19.1667 38.2777V31.3777C20.5685 32.7736 22.4664 33.5567 24.4445 33.5555H26.9445V33.8333C26.9445 34.9055 27.8167 35.7777 28.889 35.7777H31.1112C32.1834 35.7777 33.0556 34.9055 33.0556 33.8333V33.5555H35.5556Z" fill="white"/>
</svg>
`,withExternalLayout:!0}),c(t.div,{className:"framer-18u709r","data-framer-name":"Frame 427320788",layoutDependency:o,layoutId:"Y9wc7NV8g",children:[e(m,{__fromCanvasComponent:!0,children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS02MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"20px","--framer-font-weight":"600","--framer-line-height":"28px","--framer-text-color":"var(--extracted-r6o4lv, rgb(31, 31, 31))"},children:"Careers"})}),className:"framer-5p5a2r","data-framer-name":"Careers",fonts:["GF;Manrope-600"],layoutDependency:o,layoutId:"x7Qb_L2bF",style:{"--extracted-r6o4lv":"rgb(31, 31, 31)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0,...u({b4sn_9nYD:{children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS02MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"18px","--framer-font-weight":"600","--framer-line-height":"28px","--framer-text-color":"var(--extracted-r6o4lv, rgb(31, 31, 31))"},children:"Careers"})})}},x,d)}),e(m,{__fromCanvasComponent:!0,children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS01MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"18px","--framer-font-weight":"500","--framer-letter-spacing":"-0.02em","--framer-line-height":"150%","--framer-text-color":"var(--extracted-r6o4lv, rgb(37, 111, 242))","--framer-text-decoration":"underline"},children:"careers@facctum.com"})}),className:"framer-1sbtpqx","data-framer-name":"careers@facctum.com",fonts:["GF;Manrope-500"],layoutDependency:o,layoutId:"erEsaxiYB",style:{"--extracted-r6o4lv":"rgb(37, 111, 242)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0,...u({b4sn_9nYD:{children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS01MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"14px","--framer-font-weight":"500","--framer-letter-spacing":"-0.02em","--framer-line-height":"150%","--framer-text-color":"var(--extracted-r6o4lv, rgb(37, 111, 242))","--framer-text-decoration":"underline"},children:"careers@facctum.com"})})}},x,d)})]})]}),c(t.div,{className:"framer-mfnxqd","data-framer-name":"Frame 427320792",layoutDependency:o,layoutId:"NSLjo1Bpg",children:[e(k,{className:"framer-zbysux","data-framer-name":"1",fill:"rgba(0,0,0,1)",intrinsicHeight:60,intrinsicWidth:60,layoutDependency:o,layoutId:"xpXzoK1YW",svg:`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="60" height="60" rx="30" fill="#003FAF"/>
<path d="M28.375 34.9769V32.9375H24.3125C24.097 32.9375 23.8903 32.8519 23.738 32.6995C23.5856 32.5472 23.5 32.3405 23.5 32.125C23.5 31.9095 23.5856 31.7028 23.738 31.5505C23.8903 31.3981 24.097 31.3125 24.3125 31.3125H28.5212C28.6426 30.9717 28.8382 30.6623 29.094 30.4065C29.3498 30.1507 29.6592 29.9551 30 29.8337L34.4688 28.2087C35.0067 28.0132 35.5964 28.0132 36.1344 28.2087L37.3369 28.6475V21.5625C37.3369 20.916 37.0801 20.296 36.6229 19.8389C36.1658 19.3818 35.5458 19.125 34.8994 19.125H21.875C21.2285 19.125 20.6085 19.3818 20.1514 19.8389C19.6943 20.296 19.4375 20.916 19.4375 21.5625V39.4375C19.4375 40.084 19.6943 40.704 20.1514 41.1611C20.6085 41.6182 21.2285 41.875 21.875 41.875H31.7225C30.6811 41.0515 29.8392 40.0034 29.2595 38.8089C28.6799 37.6145 28.3775 36.3045 28.375 34.9769ZM24.3125 23.1875H32.4375C32.653 23.1875 32.8597 23.2731 33.012 23.4255C33.1644 23.5778 33.25 23.7845 33.25 24C33.25 24.2155 33.1644 24.4222 33.012 24.5745C32.8597 24.7269 32.653 24.8125 32.4375 24.8125H24.3125C24.097 24.8125 23.8903 24.7269 23.738 24.5745C23.5856 24.4222 23.5 24.2155 23.5 24C23.5 23.7845 23.5856 23.5778 23.738 23.4255C23.8903 23.2731 24.097 23.1875 24.3125 23.1875ZM24.3125 27.25H32.4375C32.653 27.25 32.8597 27.3356 33.012 27.488C33.1644 27.6403 33.25 27.847 33.25 28.0625C33.25 28.278 33.1644 28.4847 33.012 28.637C32.8597 28.7894 32.653 28.875 32.4375 28.875H24.3125C24.097 28.875 23.8903 28.7894 23.738 28.637C23.5856 28.4847 23.5 28.278 23.5 28.0625C23.5 27.847 23.5856 27.6403 23.738 27.488C23.8903 27.3356 24.097 27.25 24.3125 27.25ZM26.75 37.8125H24.3125C24.097 37.8125 23.8903 37.7269 23.738 37.5745C23.5856 37.4222 23.5 37.2155 23.5 37C23.5 36.7845 23.5856 36.5778 23.738 36.4255C23.8903 36.2731 24.097 36.1875 24.3125 36.1875H26.75C26.9655 36.1875 27.1722 36.2731 27.3245 36.4255C27.4769 36.5778 27.5625 36.7845 27.5625 37C27.5625 37.2155 27.4769 37.4222 27.3245 37.5745C27.1722 37.7269 26.9655 37.8125 26.75 37.8125ZM40.0263 31.3612L35.5575 29.7362C35.379 29.6717 35.1835 29.6717 35.005 29.7362L30.5363 31.3612C30.3792 31.418 30.2435 31.5218 30.1475 31.6585C30.0516 31.7951 30.0001 31.958 30 32.125V34.9769C30.0037 36.4497 30.459 37.886 31.3046 39.0919C32.1502 40.2978 33.3453 41.2153 34.7288 41.7206C34.9043 41.7915 35.092 41.8273 35.2812 41.8263C35.4697 41.826 35.6566 41.793 35.8337 41.7288C37.2172 41.2209 38.4119 40.3017 39.2573 39.0946C40.1027 37.8875 40.5582 36.4505 40.5625 34.9769V32.125C40.5624 31.958 40.5109 31.7951 40.415 31.6585C40.319 31.5218 40.1833 31.418 40.0263 31.3612ZM37.8894 35.1394L35.4519 37.5769C35.3763 37.653 35.2865 37.7135 35.1875 37.7547C35.0885 37.796 34.9823 37.8172 34.875 37.8172C34.7677 37.8172 34.6615 37.796 34.5625 37.7547C34.4635 37.7135 34.3737 37.653 34.2981 37.5769L32.6731 35.9519C32.5201 35.7989 32.4342 35.5914 32.4342 35.375C32.4342 35.1586 32.5201 34.9511 32.6731 34.7981C32.8261 34.6451 33.0336 34.5592 33.25 34.5592C33.4664 34.5592 33.6739 34.6451 33.8269 34.7981L34.875 35.8544L36.7356 33.9856C36.8886 33.8326 37.0961 33.7467 37.3125 33.7467C37.5289 33.7467 37.7364 33.8326 37.8894 33.9856C38.0424 34.1386 38.1283 34.3461 38.1283 34.5625C38.1283 34.7789 38.0424 34.9864 37.8894 35.1394Z" fill="white"/>
</svg>
`,withExternalLayout:!0}),c(t.div,{className:"framer-1hs3d0g","data-framer-name":"Frame 427320788",layoutDependency:o,layoutId:"mxYceYLm8",children:[e(m,{__fromCanvasComponent:!0,children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS02MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"20px","--framer-font-weight":"600","--framer-line-height":"28px","--framer-text-color":"var(--extracted-r6o4lv, rgb(31, 31, 31))"},children:"Privacy Policy"})}),className:"framer-ohj5qg","data-framer-name":"Privacy Policy",fonts:["GF;Manrope-600"],layoutDependency:o,layoutId:"M9p6dLmgY",style:{"--extracted-r6o4lv":"rgb(31, 31, 31)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0,...u({b4sn_9nYD:{children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS02MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"18px","--framer-font-weight":"600","--framer-line-height":"28px","--framer-text-color":"var(--extracted-r6o4lv, rgb(31, 31, 31))"},children:"Privacy Policy"})})}},x,d)}),e(m,{__fromCanvasComponent:!0,children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS01MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"18px","--framer-font-weight":"500","--framer-letter-spacing":"-0.02em","--framer-line-height":"150%","--framer-text-color":"var(--extracted-r6o4lv, rgb(37, 111, 242))","--framer-text-decoration":"underline"},children:"privacy@facctum.com"})}),className:"framer-13kyeky","data-framer-name":"privacy@facctum.com",fonts:["GF;Manrope-500"],layoutDependency:o,layoutId:"oOTaePVBC",style:{"--extracted-r6o4lv":"rgb(37, 111, 242)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0,...u({b4sn_9nYD:{children:e(l,{children:e(t.p,{style:{"--font-selector":"R0Y7TWFucm9wZS01MDA=","--framer-font-family":'"Manrope", "Manrope Placeholder", sans-serif',"--framer-font-size":"14px","--framer-font-weight":"500","--framer-letter-spacing":"-0.02em","--framer-line-height":"150%","--framer-text-color":"var(--extracted-r6o4lv, rgb(37, 111, 242))","--framer-text-decoration":"underline"},children:"privacy@facctum.com"})})}},x,d)})]})]})]})})]}),e(Q,{action:"https://api.framer.com/forms/v1/forms/6153061a-9a98-4166-bcd5-6f1f6d61d004/submit",className:"framer-135ui4l","data-framer-name":"Contact-form",layoutDependency:o,layoutId:"nZhQObgPy",nodeId:"nZhQObgPy",style:{backgroundColor:"rgb(255, 255, 255)",borderBottomLeftRadius:30,borderBottomRightRadius:30,borderTopLeftRadius:30,borderTopRightRadius:30},variants:{b4sn_9nYD:{borderBottomLeftRadius:8,borderBottomRightRadius:8,borderTopLeftRadius:8,borderTopRightRadius:8}},children:Ve=>e(q,{children:e(t.div,{className:"framer-10z3i73",layoutDependency:o,layoutId:"CELMDVCbp",style:{backgroundColor:"rgb(255, 255, 255)"},children:e(U,{children:e(K,{className:"framer-s70was-container",isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:o,layoutId:"RCZahErvQ-container",nodeId:"RCZahErvQ",rendersWithMotion:!0,scopeId:"eX7sjeS_W",children:e(_,{height:"100%",html:`<!-- Note :
  - You can modify the font style and form style to suit your website. 
  - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code. 
  - The Mandatory check script can modified as to suit your business needs. 
  - It is important that you test the modified form before going live.-->
<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white;color: black;'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'>
  <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js'><\/script>
  <style>
    .wf_customMessageBox {
    font-family: Arial, Helvetica, sans-serif;
    color: #132C14;
    background:  #F5FAF5;
    box-shadow:0 2px 6px 0 rgba(0,0,0,0.25);
    max-width: 90%;
    width:max-content;
    word-break: break-word;
    z-index: 11000;
    border-radius: 6px;
    border: 1px solid #A9D3AB;
    min-width: 100px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    }
    .wf_customCircle {
    position: relative;
    background-color: #12AA67;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    flex:none;
    margin-right: 7px;
    }
    .wf_customCheckMark {
    box-sizing: unset !important;
    position: absolute;
    transform: rotate(45deg) translate(-50%, -50%);
    left: 6px;
    top: 9px;
    height: 8px;
    width: 3px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    }
    .wf_customClose {
    box-sizing: border-box;
    position: relative;
    width: 18px;
    height: 18px;
    }
    .wf_customClose::after,
    .wf_customClose::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 1.5px;
    background: #616E88;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 1px
    }
    .wf_customClose::after {
    transform: rotate(-45deg)
    }
  </style>
  <div class='wf_customMessageBox' id='wf_splash' style='display:none'>
    <div class='wf_customCircle'>
      <div class='wf_customCheckMark'></div>
    </div>
    <span id='wf_splash_info'></span>
    </p>
  </div>
  <form id='webform737194000004682009' name=WebToLeads737194000004682009 accept-charset='UTF-8'>
    <input type='text' style='display:none;' name='xnQsjsdp' value='a55da8d91e4b56e18802be644f92b9fbf024ec43403f0df240d02536c2146b24'></input> 
    <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
    <input type='text' style='display:none;' name='xmIwtLD' value='1e1efde4ddccd85c74c92dd89321199c73dceb9a6cf8adcfb510fdc5b9db39be8bb7b328a49fec7e96dd1b1e4b5d4472'></input> 
    <input type='text'  style='display:none;' name='actionType' value='TGVhZHM='></input>
    <input type='text' style='display:none;' name='returnURL' value='null' > </input>
    <!-- Do not remove this code. -->
    <style>
      html,body{
      margin: 0px;
      }
      .formsubmit.zcwf_button{
      color: white !important;
      background: #8A3DEE;
      width: 100px;
      height: 40px;
      /* background: transparent linear-gradient(0deg, #0279FF 0%, #00A3F3 100%); */
      }

      #crmWebToEntityForm.zcwf_lblLeft {
      width:100%;
      /* padding: 25px; */
      /* margin: 0 auto; */
      box-sizing: border-box;
      }
      #crmWebToEntityForm.zcwf_lblLeft * {
      box-sizing: border-box;
      }
      #crmWebToEntityForm{text-align: left;}
      #crmWebToEntityForm * {
      direction: ltr;
      }
      .zcwf_lblLeft .zcwf_title {
      word-wrap: break-word;
      padding: 0px 6px 10px;
      font-weight:bold }.zcwf_lblLeft.cpT_primaryBtn:hover{
      background: linear-gradient(#02acff 0,#006be4 100%) no-repeat padding-box !important;
      box-shadow: 0 -2px 0 0 #0159b9 inset !important;
      border: 0 !important;
      color: #fff !important;
      outline: 0 !important;
      }.zcwf_lblLeft .zcwf_col_fld input[type=text], input[type=password], .zcwf_lblLeft .zcwf_col_fld textarea {
      width: 100%;
      height: 35px;
      border-right: unset;
      border-top: unset;
      border-left: unset;
      border-bottom: 1px solid #D4D8FD !important;
      resize: vertical;
      border-radius: 2px;
      float: left;
      }
      .zcwf_lblLeft .zcwf_col_lab {
      width: 100%;
      word-break: break-word;
      padding: 0px 6px 10px;
      margin-right: 10px;
      margin-top: 5px;
      float: left;
      min-height: 1px;
      color: #1F1F1F;
      opacity: 60%;
      }
      .zcwf_lblLeft .zcwf_col_fld {
      float: left;
      width: 100%;
      padding: 0px 6px 0px;
      position: relative;
      margin-top: 5px;
      }

      /* css changes added by meet starts */
      .zcwf_title {
        display: none;
      }

      .zcwf_col_lab{
        font-size: 16px;
        font-family: "Manrope", "Manrope Placeholder", sans-serif;
      }


      input.zcwf_button{
        width: 100px;
        height: 40px;
      }
      
      form#webform737194000004682009{
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .zcwf_title {
        grid-column: 1 / 3;
      }

      .zcwf_row.help_facctum{
        grid-column: 1 / 3;
      }

      .zcwf_row.agree_facctum {
        grid-column: 1 / 3;
      }
      textarea#Description {
        height: 60px;
      }

      .dIB.zcwf_privacy_txt {
        color: #1F1F1F;
        opacity: 60%;
      }
      input#privacyTool737194000004682009 {
        border-color: #1F1F1F;
        opacity: 60%;
      }

      /* .zcwf_row {
        display: flex;
        width: 50%;
        flex-direction: column;
      }
      .zcwf_row.first_name_facctum{
        float: left;
      }
      .zcwf_row.last_name_facctum{
        float: right;
      } */
      /* css changes added by meet ends */

      .zcwf_lblLeft .zcwf_privacy{padding: 6px;}
      .zcwf_lblLeft .wfrm_fld_dpNn{display: none;}
      .dIB{display: inline-block;}
      .zcwf_lblLeft .zcwf_col_fld_slt {
      width: 100%;
      border-right: unset;
      border-top: unset;
      border-left: unset;
      border-bottom: 1px solid #D4D8FD !important;
      background: #fff;
      border-radius: unset;
      height: 35px;
      font-size: 12px;
      float: left;
      resize: vertical;
      padding: 2px 5px;
      }
      .zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after {
      content: '';
      display: table;
      clear: both;
      }
      .zcwf_lblLeft .zcwf_col_help {
      float: left;
      margin-left: 7px;
      font-size: 12px;
      max-width: 35%;
      word-break: break-word;
      }
      .zcwf_lblLeft .zcwf_help_icon {
      cursor: pointer;
      width: 16px;
      height: 16px;
      display: inline-block;
      background: #fff;
      border: 1px solid #c0c6cc;
      color: #c1c1c1;
      text-align: center;
      font-size: 11px;
      line-height: 16px;
      font-weight: bold;
      border-radius: 50%;
      }
      .zcwf_lblLeft .zcwf_row {margin: 15px 0px;}
      .zcwf_lblLeft .formsubmit {
      margin-right: 5px;
      cursor: pointer;
      color: #313949;
      font-size: 12px;
      }
      .zcwf_lblLeft .zcwf_privacy_txt {
      width: 90%;
      color: rgb(0, 0, 0);
      font-size: 12px;
      font-family: Arial;
      display: inline-block;
      vertical-align: top;
      color: #313949;
      padding-top: 2px;
      margin-left: 6px;
      }
      .zcwf_lblLeft .zcwf_button {
      font-size: 12px;
      color: #313949; 
      border: 1px solid #c0c6cc;
      padding: 3px 9px;
      border-radius: 4px;
      cursor: pointer;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      }
      .zcwf_lblLeft .zcwf_tooltip_over{
      position: relative;
      }
      .zcwf_lblLeft .zcwf_tooltip_ctn{
      position: absolute;
      background: #dedede;
      padding: 3px 6px;
      top: 3px;
      border-radius: 4px;word-break: break-word;
      min-width: 100px;
      max-width: 150px;
      color: #313949;
      z-index: 100;
      }
      .zcwf_lblLeft .zcwf_ckbox{
      float: left;
      }
      .zcwf_lblLeft .zcwf_file{
      width: 55%;
      box-sizing: border-box;
      float: left;
      }
      .cBoth:after{
      content:'';
      display: block;
      clear: both;
      }
      @media all and (max-width: 600px) {

      form#webform737194000004682009{
        display: flex;
        gap: 5px;
        flex-direction: column;
      }
      .zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld {
      width: auto;
      float: none !important;
      }
      .zcwf_lblLeft .zcwf_col_help {width: 40%;}
      }
    </style>
    <div class='zcwf_title' style='color: black; font-family:Arial;'>Contact Form - Facctum</div>
    <div class='zcwf_row first_name_facctum'>
      <div class='zcwf_col_lab' ><label for='First_Name'>First Name<span style='color:red;'>*</span></label></div>
      <div class='zcwf_col_fld'>
        <input type='text' id='First_Name' aria-required='true' aria-label='First Name' name='First Name' aria-valuemax='40' maxlength='40'></input>
        <div class='zcwf_col_help'></div>
      </div>
    </div>
    <div class='zcwf_row last_name_facctum'>
      <div class='zcwf_col_lab' ><label for='Last_Name'>Last Name<span style='color:red;'>*</span></label></div>
      <div class='zcwf_col_fld'>
        <input type='text' id='Last_Name' aria-required='true' aria-label='Last Name' name='Last Name' aria-valuemax='80' maxlength='80'></input>
        <div class='zcwf_col_help'></div>
      </div>
    </div>
    <div class='zcwf_row country_code_facctum'>
      <div class='zcwf_col_lab' ><label for='LEADCF4'>Country Code</label></div>
      <div class='zcwf_col_fld'>
        <select class='zcwf_col_fld_slt' role='combobox' aria-expanded='false' aria-haspopup='listbox' id='LEADCF4' onChange='addAriaSelected737194000004682009()' aria-required='false' aria-label='LEADCF4' name='LEADCF4'  >
          <option value='-None-'>-None-</option>
          <option value='Afghanistan&#x3a;&#x2b;93'>Afghanistan&#x3a;&#x2b;93</option>
          <option value='Albania&#x3a;&#x2b;355'>Albania&#x3a;&#x2b;355</option>
          <option value='Algeria&#x3a;&#x2b;213'>Algeria&#x3a;&#x2b;213</option>
          <option value='American&#x20;Samoa&#x3a;&#x2b;-683'>American Samoa&#x3a;&#x2b;-683</option>
          <option value='Andorra&#x3a;&#x2b;376'>Andorra&#x3a;&#x2b;376</option>
          <option value='Angola&#x3a;&#x2b;244'>Angola&#x3a;&#x2b;244</option>
          <option value='Anguilla&#x3a;&#x2b;-263'>Anguilla&#x3a;&#x2b;-263</option>
          <option value='Antarctica&#x3a;&#x2b;672'>Antarctica&#x3a;&#x2b;672</option>
          <option value='Antigua&#x20;and&#x20;Barbuda&#x3a;&#x2b;-267'>Antigua and Barbuda&#x3a;&#x2b;-267</option>
          <option value='Argentina&#x3a;&#x2b;54'>Argentina&#x3a;&#x2b;54</option>
          <option value='Armenia&#x3a;&#x2b;374'>Armenia&#x3a;&#x2b;374</option>
          <option value='Aruba&#x3a;&#x2b;297'>Aruba&#x3a;&#x2b;297</option>
          <option value='Australia&#x3a;&#x2b;61'>Australia&#x3a;&#x2b;61</option>
          <option value='Austria&#x3a;&#x2b;43'>Austria&#x3a;&#x2b;43</option>
          <option value='Azerbaijan&#x3a;&#x2b;994'>Azerbaijan&#x3a;&#x2b;994</option>
          <option value='Bahamas&#x3a;&#x2b;-241'>Bahamas&#x3a;&#x2b;-241</option>
          <option value='Bahrain&#x3a;&#x2b;973'>Bahrain&#x3a;&#x2b;973</option>
          <option value='Bangladesh&#x3a;&#x2b;880'>Bangladesh&#x3a;&#x2b;880</option>
          <option value='Barbados&#x3a;&#x2b;-245'>Barbados&#x3a;&#x2b;-245</option>
          <option value='Belarus&#x3a;&#x2b;375'>Belarus&#x3a;&#x2b;375</option>
          <option value='Belgium&#x3a;&#x2b;32'>Belgium&#x3a;&#x2b;32</option>
          <option value='Belize&#x3a;&#x2b;501'>Belize&#x3a;&#x2b;501</option>
          <option value='Benin&#x3a;&#x2b;229'>Benin&#x3a;&#x2b;229</option>
          <option value='Bermuda&#x3a;&#x2b;-440'>Bermuda&#x3a;&#x2b;-440</option>
          <option value='Bhutan&#x3a;&#x2b;975'>Bhutan&#x3a;&#x2b;975</option>
          <option value='Bolivia&#x3a;&#x2b;591'>Bolivia&#x3a;&#x2b;591</option>
          <option value='Bosnia&#x20;and&#x20;Herzegovina&#x3a;&#x2b;387'>Bosnia and Herzegovina&#x3a;&#x2b;387</option>
          <option value='Botswana&#x3a;&#x2b;267'>Botswana&#x3a;&#x2b;267</option>
          <option value='Brazil&#x3a;&#x2b;55'>Brazil&#x3a;&#x2b;55</option>
          <option value='British&#x20;Virgin&#x20;Islands&#x3a;&#x2b;-283'>British Virgin Islands&#x3a;&#x2b;-283</option>
          <option value='Brunei&#x3a;&#x2b;673'>Brunei&#x3a;&#x2b;673</option>
          <option value='Bulgaria&#x3a;&#x2b;359'>Bulgaria&#x3a;&#x2b;359</option>
          <option value='Burkina&#x20;Faso&#x3a;&#x2b;226'>Burkina Faso&#x3a;&#x2b;226</option>
          <option value='Burundi&#x3a;&#x2b;257'>Burundi&#x3a;&#x2b;257</option>
          <option value='Cambodia&#x3a;&#x2b;855'>Cambodia&#x3a;&#x2b;855</option>
          <option value='Cameroon&#x3a;&#x2b;237'>Cameroon&#x3a;&#x2b;237</option>
          <option value='Canada&#x3a;&#x2b;1'>Canada&#x3a;&#x2b;1</option>
          <option value='Cape&#x20;Verde&#x3a;&#x2b;238'>Cape Verde&#x3a;&#x2b;238</option>
          <option value='Cayman&#x20;Islands&#x3a;&#x2b;-344'>Cayman Islands&#x3a;&#x2b;-344</option>
          <option value='Central&#x20;African&#x20;Republic&#x3a;&#x2b;236'>Central African Republic&#x3a;&#x2b;236</option>
          <option value='Chad&#x3a;&#x2b;235'>Chad&#x3a;&#x2b;235</option>
          <option value='Chile&#x3a;&#x2b;56'>Chile&#x3a;&#x2b;56</option>
          <option value='China&#x3a;&#x2b;86'>China&#x3a;&#x2b;86</option>
          <option value='Colombia&#x3a;&#x2b;57'>Colombia&#x3a;&#x2b;57</option>
          <option value='Comoros&#x3a;&#x2b;269'>Comoros&#x3a;&#x2b;269</option>
          <option value='Congo&#x20;&#x28;Brazzaville&#x29;&#x3a;&#x2b;242'>Congo &#x28;Brazzaville&#x29;&#x3a;&#x2b;242</option>
          <option value='Congo&#x20;&#x28;Kinshasa&#x29;&#x3a;&#x2b;243'>Congo &#x28;Kinshasa&#x29;&#x3a;&#x2b;243</option>
          <option value='Cook&#x20;Islands&#x3a;&#x2b;682'>Cook Islands&#x3a;&#x2b;682</option>
          <option value='Costa&#x20;Rica&#x3a;&#x2b;506'>Costa Rica&#x3a;&#x2b;506</option>
          <option value='C&ocirc;te&#x20;d&#x27;Ivoire&#x3a;&#x2b;225'>C&ocirc;te d&#x27;Ivoire&#x3a;&#x2b;225</option>
          <option value='Croatia&#x3a;&#x2b;385'>Croatia&#x3a;&#x2b;385</option>
          <option value='Cuba&#x3a;&#x2b;53'>Cuba&#x3a;&#x2b;53</option>
          <option value='Cyprus&#x3a;&#x2b;357'>Cyprus&#x3a;&#x2b;357</option>
          <option value='Czech&#x20;Republic&#x3a;&#x2b;420'>Czech Republic&#x3a;&#x2b;420</option>
          <option value='Denmark&#x3a;&#x2b;45'>Denmark&#x3a;&#x2b;45</option>
          <option value='Djibouti&#x3a;&#x2b;253'>Djibouti&#x3a;&#x2b;253</option>
          <option value='Dominica&#x3a;&#x2b;-766'>Dominica&#x3a;&#x2b;-766</option>
          <option value='Dominican&#x20;Republic&#x3a;&#x2b;&#x2b;1-809,&#x20;&#x2b;1-829,&#x20;&#x2b;1-849'>Dominican Republic&#x3a;&#x2b;&#x2b;1-809, &#x2b;1-829, &#x2b;1-849</option>
          <option value='Ecuador&#x3a;&#x2b;593'>Ecuador&#x3a;&#x2b;593</option>
          <option value='Egypt&#x3a;&#x2b;20'>Egypt&#x3a;&#x2b;20</option>
          <option value='El&#x20;Salvador&#x3a;&#x2b;503'>El Salvador&#x3a;&#x2b;503</option>
          <option value='Equatorial&#x20;Guinea&#x3a;&#x2b;240'>Equatorial Guinea&#x3a;&#x2b;240</option>
          <option value='Eritrea&#x3a;&#x2b;291'>Eritrea&#x3a;&#x2b;291</option>
          <option value='Estonia&#x3a;&#x2b;372'>Estonia&#x3a;&#x2b;372</option>
          <option value='Eswatini&#x20;&#x28;Swaziland&#x29;&#x3a;&#x2b;268'>Eswatini &#x28;Swaziland&#x29;&#x3a;&#x2b;268</option>
          <option value='Ethiopia&#x3a;&#x2b;251'>Ethiopia&#x3a;&#x2b;251</option>
          <option value='Falkland&#x20;Islands&#x3a;&#x2b;500'>Falkland Islands&#x3a;&#x2b;500</option>
          <option value='Faroe&#x20;Islands&#x3a;&#x2b;298'>Faroe Islands&#x3a;&#x2b;298</option>
          <option value='Fiji&#x3a;&#x2b;679'>Fiji&#x3a;&#x2b;679</option>
          <option value='Finland&#x3a;&#x2b;358'>Finland&#x3a;&#x2b;358</option>
          <option value='France&#x3a;&#x2b;33'>France&#x3a;&#x2b;33</option>
          <option value='French&#x20;Polynesia&#x3a;&#x2b;689'>French Polynesia&#x3a;&#x2b;689</option>
          <option value='Gabon&#x3a;&#x2b;241'>Gabon&#x3a;&#x2b;241</option>
          <option value='Gambia&#x3a;&#x2b;220'>Gambia&#x3a;&#x2b;220</option>
          <option value='Georgia&#x3a;&#x2b;995'>Georgia&#x3a;&#x2b;995</option>
          <option value='Germany&#x3a;&#x2b;49'>Germany&#x3a;&#x2b;49</option>
          <option value='Ghana&#x3a;&#x2b;233'>Ghana&#x3a;&#x2b;233</option>
          <option value='Gibraltar&#x3a;&#x2b;350'>Gibraltar&#x3a;&#x2b;350</option>
          <option value='Greece&#x3a;&#x2b;30'>Greece&#x3a;&#x2b;30</option>
          <option value='Greenland&#x3a;&#x2b;299'>Greenland&#x3a;&#x2b;299</option>
          <option value='Grenada&#x3a;&#x2b;-472'>Grenada&#x3a;&#x2b;-472</option>
          <option value='Guam&#x3a;&#x2b;-670'>Guam&#x3a;&#x2b;-670</option>
          <option value='Guatemala&#x3a;&#x2b;502'>Guatemala&#x3a;&#x2b;502</option>
          <option value='Guinea&#x3a;&#x2b;224'>Guinea&#x3a;&#x2b;224</option>
          <option value='Guinea-Bissau&#x3a;&#x2b;245'>Guinea-Bissau&#x3a;&#x2b;245</option>
          <option value='Guyana&#x3a;&#x2b;592'>Guyana&#x3a;&#x2b;592</option>
          <option value='Haiti&#x3a;&#x2b;509'>Haiti&#x3a;&#x2b;509</option>
          <option value='Honduras&#x3a;&#x2b;504'>Honduras&#x3a;&#x2b;504</option>
          <option value='Hong&#x20;Kong&#x3a;&#x2b;852'>Hong Kong&#x3a;&#x2b;852</option>
          <option value='Hungary&#x3a;&#x2b;36'>Hungary&#x3a;&#x2b;36</option>
          <option value='Iceland&#x3a;&#x2b;354'>Iceland&#x3a;&#x2b;354</option>
          <option selected value='India&#x3a;&#x2b;91'>India&#x3a;&#x2b;91</option>
          <option value='Indonesia&#x3a;&#x2b;62'>Indonesia&#x3a;&#x2b;62</option>
          <option value='Iran&#x3a;&#x2b;98'>Iran&#x3a;&#x2b;98</option>
          <option value='Iraq&#x3a;&#x2b;964'>Iraq&#x3a;&#x2b;964</option>
          <option value='Ireland&#x3a;&#x2b;353'>Ireland&#x3a;&#x2b;353</option>
          <option value='Israel&#x3a;&#x2b;972'>Israel&#x3a;&#x2b;972</option>
          <option value='Italy&#x3a;&#x2b;39'>Italy&#x3a;&#x2b;39</option>
          <option value='Jamaica&#x3a;&#x2b;-875'>Jamaica&#x3a;&#x2b;-875</option>
          <option value='Japan&#x3a;&#x2b;81'>Japan&#x3a;&#x2b;81</option>
          <option value='Jordan&#x3a;&#x2b;962'>Jordan&#x3a;&#x2b;962</option>
          <option value='Kazakhstan&#x3a;&#x2b;7'>Kazakhstan&#x3a;&#x2b;7</option>
          <option value='Kenya&#x3a;&#x2b;254'>Kenya&#x3a;&#x2b;254</option>
          <option value='Kiribati&#x3a;&#x2b;686'>Kiribati&#x3a;&#x2b;686</option>
          <option value='Kosovo&#x3a;&#x2b;383'>Kosovo&#x3a;&#x2b;383</option>
          <option value='Kuwait&#x3a;&#x2b;965'>Kuwait&#x3a;&#x2b;965</option>
          <option value='Kyrgyzstan&#x3a;&#x2b;996'>Kyrgyzstan&#x3a;&#x2b;996</option>
          <option value='Laos&#x3a;&#x2b;856'>Laos&#x3a;&#x2b;856</option>
          <option value='Latvia&#x3a;&#x2b;371'>Latvia&#x3a;&#x2b;371</option>
          <option value='Lebanon&#x3a;&#x2b;961'>Lebanon&#x3a;&#x2b;961</option>
          <option value='Lesotho&#x3a;&#x2b;266'>Lesotho&#x3a;&#x2b;266</option>
          <option value='Liberia&#x3a;&#x2b;231'>Liberia&#x3a;&#x2b;231</option>
          <option value='Libya&#x3a;&#x2b;218'>Libya&#x3a;&#x2b;218</option>
          <option value='Liechtenstein&#x3a;&#x2b;423'>Liechtenstein&#x3a;&#x2b;423</option>
          <option value='Lithuania&#x3a;&#x2b;370'>Lithuania&#x3a;&#x2b;370</option>
          <option value='Luxembourg&#x3a;&#x2b;352'>Luxembourg&#x3a;&#x2b;352</option>
          <option value='Macau&#x3a;&#x2b;853'>Macau&#x3a;&#x2b;853</option>
          <option value='Madagascar&#x3a;&#x2b;261'>Madagascar&#x3a;&#x2b;261</option>
          <option value='Malawi&#x3a;&#x2b;265'>Malawi&#x3a;&#x2b;265</option>
          <option value='Malaysia&#x3a;&#x2b;60'>Malaysia&#x3a;&#x2b;60</option>
          <option value='Maldives&#x3a;&#x2b;960'>Maldives&#x3a;&#x2b;960</option>
          <option value='Mali&#x3a;&#x2b;223'>Mali&#x3a;&#x2b;223</option>
          <option value='Malta&#x3a;&#x2b;356'>Malta&#x3a;&#x2b;356</option>
          <option value='Marshall&#x20;Islands&#x3a;&#x2b;692'>Marshall Islands&#x3a;&#x2b;692</option>
          <option value='Mauritania&#x3a;&#x2b;222'>Mauritania&#x3a;&#x2b;222</option>
          <option value='Mauritius&#x3a;&#x2b;230'>Mauritius&#x3a;&#x2b;230</option>
          <option value='Mexico&#x3a;&#x2b;52'>Mexico&#x3a;&#x2b;52</option>
          <option value='Micronesia&#x3a;&#x2b;691'>Micronesia&#x3a;&#x2b;691</option>
          <option value='Moldova&#x3a;&#x2b;373'>Moldova&#x3a;&#x2b;373</option>
          <option value='Monaco&#x3a;&#x2b;377'>Monaco&#x3a;&#x2b;377</option>
          <option value='Mongolia&#x3a;&#x2b;976'>Mongolia&#x3a;&#x2b;976</option>
          <option value='Montenegro&#x3a;&#x2b;382'>Montenegro&#x3a;&#x2b;382</option>
          <option value='Montserrat&#x3a;&#x2b;-663'>Montserrat&#x3a;&#x2b;-663</option>
          <option value='Morocco&#x3a;&#x2b;212'>Morocco&#x3a;&#x2b;212</option>
          <option value='Mozambique&#x3a;&#x2b;258'>Mozambique&#x3a;&#x2b;258</option>
          <option value='Myanmar&#x3a;&#x2b;95'>Myanmar&#x3a;&#x2b;95</option>
          <option value='Namibia&#x3a;&#x2b;264'>Namibia&#x3a;&#x2b;264</option>
          <option value='Nauru&#x3a;&#x2b;674'>Nauru&#x3a;&#x2b;674</option>
          <option value='Nepal&#x3a;&#x2b;977'>Nepal&#x3a;&#x2b;977</option>
          <option value='Netherlands&#x3a;&#x2b;31'>Netherlands&#x3a;&#x2b;31</option>
          <option value='New&#x20;Caledonia&#x3a;&#x2b;687'>New Caledonia&#x3a;&#x2b;687</option>
          <option value='New&#x20;Zealand&#x3a;&#x2b;64'>New Zealand&#x3a;&#x2b;64</option>
          <option value='Nicaragua&#x3a;&#x2b;505'>Nicaragua&#x3a;&#x2b;505</option>
          <option value='Niger&#x3a;&#x2b;227'>Niger&#x3a;&#x2b;227</option>
          <option value='Nigeria&#x3a;&#x2b;234'>Nigeria&#x3a;&#x2b;234</option>
          <option value='North&#x20;Korea&#x3a;&#x2b;850'>North Korea&#x3a;&#x2b;850</option>
          <option value='North&#x20;Macedonia&#x3a;&#x2b;389'>North Macedonia&#x3a;&#x2b;389</option>
          <option value='Norway&#x3a;&#x2b;47'>Norway&#x3a;&#x2b;47</option>
          <option value='Oman&#x3a;&#x2b;968'>Oman&#x3a;&#x2b;968</option>
          <option value='Pakistan&#x3a;&#x2b;92'>Pakistan&#x3a;&#x2b;92</option>
          <option value='Palau&#x3a;&#x2b;680'>Palau&#x3a;&#x2b;680</option>
          <option value='Palestine&#x3a;&#x2b;970'>Palestine&#x3a;&#x2b;970</option>
          <option value='Panama&#x3a;&#x2b;507'>Panama&#x3a;&#x2b;507</option>
          <option value='Papua&#x20;New&#x20;Guinea&#x3a;&#x2b;675'>Papua New Guinea&#x3a;&#x2b;675</option>
          <option value='Paraguay&#x3a;&#x2b;595'>Paraguay&#x3a;&#x2b;595</option>
          <option value='Peru&#x3a;&#x2b;51'>Peru&#x3a;&#x2b;51</option>
          <option value='Philippines&#x3a;&#x2b;63'>Philippines&#x3a;&#x2b;63</option>
          <option value='Poland&#x3a;&#x2b;48'>Poland&#x3a;&#x2b;48</option>
          <option value='Portugal&#x3a;&#x2b;351'>Portugal&#x3a;&#x2b;351</option>
          <option value='Puerto&#x20;Rico&#x3a;&#x2b;&#x2b;1-787,&#x20;&#x2b;1-939'>Puerto Rico&#x3a;&#x2b;&#x2b;1-787, &#x2b;1-939</option>
          <option value='Qatar&#x3a;&#x2b;974'>Qatar&#x3a;&#x2b;974</option>
          <option value='Romania&#x3a;&#x2b;40'>Romania&#x3a;&#x2b;40</option>
          <option value='Russia&#x3a;&#x2b;7'>Russia&#x3a;&#x2b;7</option>
          <option value='Rwanda&#x3a;&#x2b;250'>Rwanda&#x3a;&#x2b;250</option>
          <option value='Saint&#x20;Kitts&#x20;and&#x20;Nevis&#x3a;&#x2b;-868'>Saint Kitts and Nevis&#x3a;&#x2b;-868</option>
          <option value='Saint&#x20;Lucia&#x3a;&#x2b;-757'>Saint Lucia&#x3a;&#x2b;-757</option>
          <option value='Saint&#x20;Vincent&#x20;and&#x20;the&#x20;Grenadines&#x3a;&#x2b;-783'>Saint Vincent and the Grenadines&#x3a;&#x2b;-783</option>
          <option value='Samoa&#x3a;&#x2b;685'>Samoa&#x3a;&#x2b;685</option>
          <option value='San&#x20;Marino&#x3a;&#x2b;378'>San Marino&#x3a;&#x2b;378</option>
          <option value='S&atilde;o&#x20;Tom&eacute;&#x20;and&#x20;Pr&iacute;ncipe&#x3a;&#x2b;239'>S&atilde;o Tom&eacute; and Pr&iacute;ncipe&#x3a;&#x2b;239</option>
          <option value='Saudi&#x20;Arabia&#x3a;&#x2b;966'>Saudi Arabia&#x3a;&#x2b;966</option>
          <option value='Senegal&#x3a;&#x2b;221'>Senegal&#x3a;&#x2b;221</option>
          <option value='Serbia&#x3a;&#x2b;381'>Serbia&#x3a;&#x2b;381</option>
          <option value='Seychelles&#x3a;&#x2b;248'>Seychelles&#x3a;&#x2b;248</option>
          <option value='Sierra&#x20;Leone&#x3a;&#x2b;232'>Sierra Leone&#x3a;&#x2b;232</option>
          <option value='Singapore&#x3a;&#x2b;65'>Singapore&#x3a;&#x2b;65</option>
          <option value='Slovakia&#x3a;&#x2b;421'>Slovakia&#x3a;&#x2b;421</option>
          <option value='Slovenia&#x3a;&#x2b;386'>Slovenia&#x3a;&#x2b;386</option>
          <option value='Solomon&#x20;Islands&#x3a;&#x2b;677'>Solomon Islands&#x3a;&#x2b;677</option>
          <option value='Somalia&#x3a;&#x2b;252'>Somalia&#x3a;&#x2b;252</option>
          <option value='South&#x20;Africa&#x3a;&#x2b;27'>South Africa&#x3a;&#x2b;27</option>
          <option value='South&#x20;Korea&#x3a;&#x2b;82'>South Korea&#x3a;&#x2b;82</option>
          <option value='South&#x20;Sudan&#x3a;&#x2b;211'>South Sudan&#x3a;&#x2b;211</option>
          <option value='Spain&#x3a;&#x2b;34'>Spain&#x3a;&#x2b;34</option>
          <option value='Sri&#x20;Lanka&#x3a;&#x2b;94'>Sri Lanka&#x3a;&#x2b;94</option>
          <option value='Sudan&#x3a;&#x2b;249'>Sudan&#x3a;&#x2b;249</option>
          <option value='Suriname&#x3a;&#x2b;597'>Suriname&#x3a;&#x2b;597</option>
          <option value='Sweden&#x3a;&#x2b;46'>Sweden&#x3a;&#x2b;46</option>
          <option value='Switzerland&#x3a;&#x2b;41'>Switzerland&#x3a;&#x2b;41</option>
          <option value='Syria&#x3a;&#x2b;963'>Syria&#x3a;&#x2b;963</option>
          <option value='Taiwan&#x3a;&#x2b;886'>Taiwan&#x3a;&#x2b;886</option>
          <option value='Tajikistan&#x3a;&#x2b;992'>Tajikistan&#x3a;&#x2b;992</option>
          <option value='Tanzania&#x3a;&#x2b;255'>Tanzania&#x3a;&#x2b;255</option>
          <option value='Thailand&#x3a;&#x2b;66'>Thailand&#x3a;&#x2b;66</option>
          <option value='Timor-Leste&#x3a;&#x2b;670'>Timor-Leste&#x3a;&#x2b;670</option>
          <option value='Togo&#x3a;&#x2b;228'>Togo&#x3a;&#x2b;228</option>
          <option value='Tonga&#x3a;&#x2b;676'>Tonga&#x3a;&#x2b;676</option>
          <option value='Trinidad&#x20;and&#x20;Tobago&#x3a;&#x2b;-867'>Trinidad and Tobago&#x3a;&#x2b;-867</option>
          <option value='Tunisia&#x3a;&#x2b;216'>Tunisia&#x3a;&#x2b;216</option>
          <option value='Turkey&#x3a;&#x2b;90'>Turkey&#x3a;&#x2b;90</option>
          <option value='Turkmenistan&#x3a;&#x2b;993'>Turkmenistan&#x3a;&#x2b;993</option>
          <option value='Tuvalu&#x3a;&#x2b;688'>Tuvalu&#x3a;&#x2b;688</option>
          <option value='Uganda&#x3a;&#x2b;256'>Uganda&#x3a;&#x2b;256</option>
          <option value='Ukraine&#x3a;&#x2b;380'>Ukraine&#x3a;&#x2b;380</option>
          <option value='United&#x20;Arab&#x20;Emirates&#x3a;&#x2b;971'>United Arab Emirates&#x3a;&#x2b;971</option>
          <option value='United&#x20;Kingdom&#x3a;&#x2b;44'>United Kingdom&#x3a;&#x2b;44</option>
          <option value='United&#x20;States&#x3a;&#x2b;1'>United States&#x3a;&#x2b;1</option>
          <option value='Uruguay&#x3a;&#x2b;598'>Uruguay&#x3a;&#x2b;598</option>
          <option value='Uzbekistan&#x3a;&#x2b;998'>Uzbekistan&#x3a;&#x2b;998</option>
          <option value='Vanuatu&#x3a;&#x2b;678'>Vanuatu&#x3a;&#x2b;678</option>
          <option value='Vatican&#x20;City&#x3a;&#x2b;33'>Vatican City&#x3a;&#x2b;33</option>
          <option value='Venezuela&#x3a;&#x2b;58'>Venezuela&#x3a;&#x2b;58</option>
          <option value='Vietnam&#x3a;&#x2b;84'>Vietnam&#x3a;&#x2b;84</option>
          <option value='Yemen&#x3a;&#x2b;967'>Yemen&#x3a;&#x2b;967</option>
          <option value='Zambia&#x3a;&#x2b;260'>Zambia&#x3a;&#x2b;260</option>
          <option value='Zimbabwe&#x3a;&#x2b;263'>Zimbabwe&#x3a;&#x2b;263</option>
        </select>
        <div class='zcwf_col_help'></div>
      </div>
    </div>
    <div class='zcwf_row phone_facctum'>
      <div class='zcwf_col_lab' ><label for='Phone'>Phone Number</label></div>
      <div class='zcwf_col_fld'>
        <input type='text' id='Phone' aria-required='false' aria-label='Phone' name='Phone' aria-valuemax='30' maxlength='30'></input>
        <div class='zcwf_col_help'></div>
      </div>
    </div>
    <div class='zcwf_row email_facctum'>
      <div class='zcwf_col_lab' ><label for='Email'>Email Address<span style='color:red;'>*</span></label></div>
      <div class='zcwf_col_fld'>
        <input type='text' ftype='email' autocomplete='false' id='Email' aria-required='true' aria-label='Email' name='Email' aria-valuemax='100' crmlabel='' maxlength='100'></input>
        <div class='zcwf_col_help'></div>
      </div>
    </div>
    <div class='zcwf_row company_facctum'>
      <div class='zcwf_col_lab' ><label for='Company'>Company<span style='color:red;'>*</span></label></div>
      <div class='zcwf_col_fld'>
        <input type='text' id='Company' aria-required='true' aria-label='Company' name='Company' aria-valuemax='200' maxlength='200'></input>
        <div class='zcwf_col_help'></div>
      </div>
    </div>
    <div class='zcwf_row job_facctum'>
      <div class='zcwf_col_lab' ><label for='Designation'>Job Title<span style='color:red;'>*</span></label></div>
      <div class='zcwf_col_fld'>
        <input type='text' id='Designation' aria-required='true' aria-label='Designation' name='Designation' aria-valuemax='100' maxlength='100'></input>
        <div class='zcwf_col_help'></div>
      </div>
    </div>
    <div class='zcwf_row region_facctum'>
      <div class='zcwf_col_lab' ><label for='Country'>Country/Region<span style='color:red;'>*</span></label></div>
      <div class='zcwf_col_fld'>
        <input type='text' id='Country' aria-required='true' aria-label='Country' name='Country' aria-valuemax='100' maxlength='100'></input>
        <div class='zcwf_col_help'></div>
      </div>
    </div>
    <div class='zcwf_row help_facctum'>
      <div class='zcwf_col_lab' ><label for='Description'>How can we help you&#x3f;</label></div>
      <div class='zcwf_col_fld'>
        <textarea style='font-family: Arial, sans-serif;' aria-multiline='true' id='Description' aria-required='false' aria-label='Description' name='Description'></textarea>
        <div class='zcwf_col_help'></div>
      </div>
    </div>
    <div class='zcwf_row agree_facctum'>
      <div class='zcwf_privacy'>
        <div class='dIB vaT' align='left'>
          <div class='displayPurpose crm-small-font-size'><label class='newCustomchkbox-md dIB w100_per'><input autocomplete='off' id='privacyTool737194000004682009' type='checkbox' aria-checked='false' name='' aria-errormessage='privacyErr737194000004682009' aria-label='privacyTool' onclick='disableErr737194000004682009()'></label></div>
        </div>
        <div class='dIB zcwf_privacy_txt' >I agree to the Privacy Policy and Terms of Service.</div>
        <div  id='privacyErr737194000004682009' aria-live='polite' style='font-size:12px;color:red;padding-left: 5px;visibility:hidden;'>Please accept this</div>
      </div>
    </div>
    <div class='zcwf_row wfrm_fld_dpNn'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='LEADCF5'>Lead Stage</label></div>
      <div class='zcwf_col_fld'>
        <select class='zcwf_col_fld_slt' role='combobox' aria-expanded='false' aria-haspopup='listbox' id='LEADCF5' onChange='addAriaSelected737194000004682009()' aria-required='false' aria-label='LEADCF5' name='LEADCF5'  >
          <option value='-None-'>-None-</option>
          <option selected value='1&#x20;-&#x20;Prospect'>1 - Prospect</option>
          <option value='2&#x20;-&#x20;Evaluate'>2 - Evaluate</option>
          <option value='3&#x20;-&#x20;Decide'>3 - Decide</option>
          <option value='4&#x20;-&#x20;Contract'>4 - Contract</option>
          <option value='5&#x20;-&#x20;Closed&#x20;Won'>5 - Closed Won</option>
          <option value='6&#x20;-&#x20;Closed&#x20;Lost'>6 - Closed Lost</option>
        </select>
        <div class='zcwf_col_help'></div>
      </div>
    </div>
    <div class='zcwf_row btn_facctum'>
      <div class='zcwf_col_lab'></div>
      <div class='zcwf_col_fld'><input type='submit' id='formsubmit' role='button' class='formsubmit zcwf_button' value='Submit' aria-label='Submit' title='Submit'><input type='reset' class='zcwf_button' role='button' name='reset' value='Reset' aria-label='Reset' title='Reset'></div>
    </div>
    <script>
      function addAriaSelected737194000004682009()
      {
      	var optionElem = event.target;
      	var previousSelectedOption=optionElem.querySelector('[aria-selected=true]');
      	if(previousSelectedOption){
      		previousSelectedOption.removeAttribute('aria-selected');
      	}
      	optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected='true';
      }
      function privacyAlert737194000004682009()
      {
      	var privacyTool = document.getElementById('privacyTool737194000004682009');
      	var privacyErr = document.getElementById('privacyErr737194000004682009');
      	if(privacyTool !=undefined && !privacyTool.checked )
      	{
      		privacyErr.style.visibility='visible';
      		privacyTool.ariaInvalid='true';
      		privacyTool.focus();
      		return false;
      	}
      	return true;
      }
      function disableErr737194000004682009()
      {
      	var privacyTool = document.getElementById('privacyTool737194000004682009');
      	var privacyErr = document.getElementById('privacyErr737194000004682009');
      	if(privacyTool !=undefined && privacyTool.checked && privacyErr !=undefined )
      	{
      		privacyErr.style.visibility='hidden';
      		privacyTool.ariaInvalid='false';
      	}
      }
      function validateEmail737194000004682009()
      {
      var form = document.forms['WebToLeads737194000004682009'];
      var emailFld = form.querySelectorAll('[ftype=email]');
      var i;
      for (i = 0; i < emailFld.length; i++)
      {
      	var emailVal = emailFld[i].value;
      	if((emailVal.replace(/^\\s+|\\s+$/g, '')).length!=0 )
      	{
      		var atpos=emailVal.indexOf('@');
      		var dotpos=emailVal.lastIndexOf('.');
      		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
      		{
      			alert('Please enter a valid email address. ');
      			emailFld[i].focus();
      			return false;
      		}
      	}
      }
      return true;
      }
      
      function checkMandatory737194000004682009() {
      var mndFileds = new Array('Company','First Name','Last Name','Designation','Email','Country');
      var fldLangVal = new Array('Company','First\\x20Name','Last\\x20Name','Job\\x20Title','Email\\x20Address','Country\\x2FRegion');
      for(i=0;i<mndFileds.length;i++) {
        var fieldObj=document.forms['WebToLeads737194000004682009'][mndFileds[i]];
        if(fieldObj) {
      	if (((fieldObj.value).replace(/^\\s+|\\s+$/g, '')).length==0) {
      	 if(fieldObj.type =='file')
      		{ 
      		 alert('Please select a file to upload.'); 
      		 fieldObj.focus(); 
      		 return false;
      		} 
      	alert(fldLangVal[i] +' cannot be empty.'); 
       	   	  	  fieldObj.focus();
       	   	  	  return false;
      	}  else if(fieldObj.nodeName=='SELECT') {
      	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
      		alert(fldLangVal[i] +' cannot be none.'); 
      		fieldObj.focus();
      		return false;
      	   }
      	} else if(fieldObj.type =='checkbox'){
       	 	 if(fieldObj.checked == false){
      		alert('Please accept  '+fldLangVal[i]);
      		fieldObj.focus();
      		return false;
      	   } 
      	 } 
      	 try {
      	     if(fieldObj.name == 'Last Name') {
      		name = fieldObj.value;
       	 	    }
      	} catch (e) {}
          }
      }
      if(!validateEmail737194000004682009()){return false;}
      
      if(!privacyAlert737194000004682009()){return false;}
      
      var urlparams = new URLSearchParams( window.location.search);
      if(urlparams.has('service') && (urlparams.get('service')==='smarturl')){
      var webform = document.getElementById('webform737194000004682009');
       var service =  urlparams.get('service'); 
      var smarturlfield = document.createElement('input');
      smarturlfield.setAttribute('type','hidden');
      smarturlfield.setAttribute('value',service);
      smarturlfield.setAttribute('name','service');
      webform.appendChild(smarturlfield); 
      }
      
      document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
      return true;
      }
      
      $(document).ready(function () {
      $('#webform737194000004682009').submit(function (e) {
      var ismandatory = checkMandatory737194000004682009();
      e.preventDefault();
      if(ismandatory){
      	 if(typeof _wfa_track != 'undefined' && _wfa_track.wfa_submit){ _wfa_track.wfa_submit(e); }
      	var formData = new FormData(this);
      	$.ajax({
      		url :'https://crm.zoho.eu/crm/WebToLeadForm',
      		type : 'POST',
      		data : formData,
      		cache: false,
      		contentType: false,
      		processData: false,
      		success: function(data) {
      				var splashinfodom = document.getElementById('wf_splash_info');
      				splashinfodom.innerText=data.actionvalue;
      				var splashdom = document.getElementById('wf_splash');
      				document.getElementById('webform737194000004682009').reset.click();
      				splashdom.style.display = '';
      				setTimeout(function(){
      					splashdom.style.display = 'none';
      				},5000);
      		document.querySelector('.crmWebToEntityForm .formsubmit').removeAttribute('disabled');
      		},
      		error: function(data){
      			alert('an error occurred');
      		} 
      	});
      }
      });
      });
      function tooltipShow737194000004682009(el){
      var tooltip = el.nextElementSibling;
      var tooltipDisplay = tooltip.style.display;
      if(tooltipDisplay == 'none'){
      var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
      for(i=0; i<allTooltip.length; i++){
      	allTooltip[i].style.display='none';
      }
      tooltip.style.display = 'block';
      }else{
      tooltip.style.display='none';
      }
      }
    <\/script>
    <!-- Do not remove this --- Analytics Tracking code starts --><script id='wf_anal' src='https://crm.zohopublic.eu/crm/WebFormAnalyticsServeServlet?rid=c4ec17c08f1bf4641369eaaa7e2ae00994b0576b04a6feabc43d47f17761ed197b0181e1574d6708a368bcb00efa7cfegid7fdd3d7a3bc458a95858c244978ab7b47251bccbae844478146f57c2c0e4991fgidc9fc205c21682ad1416f6224ea35b6c42fe7e6273892ac549857f6ba5b8c313bgid9cd3c433acfcee3ccf0d37bac6310d22016b56715957b7fcb2ded8107f57780f&tw=006a488dada8be327dda3934882a7165c3767809587894a605a5a112c4026c09'><\/script><!-- Do not remove this --- Analytics Tracking code ends. -->
  </form>
</div>
`,id:"RCZahErvQ",layoutId:"RCZahErvQ",style:{width:"100%"},type:"html",url:"",width:"100%"})})})})})})]})})})})})}),Ae=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-gzpe1.framer-n35oqn, .framer-gzpe1 .framer-n35oqn { display: block; }",".framer-gzpe1.framer-1s0ewjl { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; padding: 120px 160px 120px 160px; position: relative; width: 1920px; }",".framer-gzpe1 .framer-16gvuuy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1600px; }",".framer-gzpe1 .framer-1805vl4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: 768px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 517px; }",".framer-gzpe1 .framer-1dy7qai { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",".framer-gzpe1 .framer-1ke32l6, .framer-gzpe1 .framer-5ssv4m { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 517px; word-break: break-word; word-wrap: break-word; }",".framer-gzpe1 .framer-rceqyw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",".framer-gzpe1 .framer-z5r2n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px; position: relative; width: 100%; }",".framer-gzpe1 .framer-17zmhje { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 437px; word-break: break-word; word-wrap: break-word; }",".framer-gzpe1 .framer-he58yp, .framer-gzpe1 .framer-61vwaa, .framer-gzpe1 .framer-mfnxqd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",".framer-gzpe1 .framer-8pkuzw, .framer-gzpe1 .framer-12n2knl, .framer-gzpe1 .framer-zbysux { flex: none; height: 60px; position: relative; width: 60px; }",".framer-gzpe1 .framer-14izdy6, .framer-gzpe1 .framer-18u709r, .framer-gzpe1 .framer-1hs3d0g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 191px; }",".framer-gzpe1 .framer-ydhefc, .framer-gzpe1 .framer-5p5a2r, .framer-gzpe1 .framer-ohj5qg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",".framer-gzpe1 .framer-1rglvyo, .framer-gzpe1 .framer-1sbtpqx, .framer-gzpe1 .framer-13kyeky { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 191px; word-break: break-word; word-wrap: break-word; }",".framer-gzpe1 .framer-135ui4l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 48px; position: relative; width: 851px; will-change: var(--framer-will-change-override, transform); }",".framer-gzpe1 .framer-10z3i73 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 698px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",".framer-gzpe1 .framer-s70was-container { flex: none; height: auto; position: relative; width: 100%; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gzpe1.framer-1s0ewjl, .framer-gzpe1 .framer-1805vl4, .framer-gzpe1 .framer-1dy7qai, .framer-gzpe1 .framer-rceqyw, .framer-gzpe1 .framer-z5r2n, .framer-gzpe1 .framer-he58yp, .framer-gzpe1 .framer-14izdy6, .framer-gzpe1 .framer-61vwaa, .framer-gzpe1 .framer-18u709r, .framer-gzpe1 .framer-mfnxqd, .framer-gzpe1 .framer-1hs3d0g, .framer-gzpe1 .framer-135ui4l, .framer-gzpe1 .framer-10z3i73 { gap: 0px; } .framer-gzpe1.framer-1s0ewjl > * { margin: 0px; margin-left: calc(100px / 2); margin-right: calc(100px / 2); } .framer-gzpe1.framer-1s0ewjl > :first-child, .framer-gzpe1 .framer-he58yp > :first-child, .framer-gzpe1 .framer-61vwaa > :first-child, .framer-gzpe1 .framer-mfnxqd > :first-child { margin-left: 0px; } .framer-gzpe1.framer-1s0ewjl > :last-child, .framer-gzpe1 .framer-he58yp > :last-child, .framer-gzpe1 .framer-61vwaa > :last-child, .framer-gzpe1 .framer-mfnxqd > :last-child { margin-right: 0px; } .framer-gzpe1 .framer-1805vl4 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-gzpe1 .framer-1805vl4 > :first-child, .framer-gzpe1 .framer-1dy7qai > :first-child, .framer-gzpe1 .framer-rceqyw > :first-child, .framer-gzpe1 .framer-z5r2n > :first-child, .framer-gzpe1 .framer-14izdy6 > :first-child, .framer-gzpe1 .framer-18u709r > :first-child, .framer-gzpe1 .framer-1hs3d0g > :first-child, .framer-gzpe1 .framer-135ui4l > :first-child, .framer-gzpe1 .framer-10z3i73 > :first-child { margin-top: 0px; } .framer-gzpe1 .framer-1805vl4 > :last-child, .framer-gzpe1 .framer-1dy7qai > :last-child, .framer-gzpe1 .framer-rceqyw > :last-child, .framer-gzpe1 .framer-z5r2n > :last-child, .framer-gzpe1 .framer-14izdy6 > :last-child, .framer-gzpe1 .framer-18u709r > :last-child, .framer-gzpe1 .framer-1hs3d0g > :last-child, .framer-gzpe1 .framer-135ui4l > :last-child, .framer-gzpe1 .framer-10z3i73 > :last-child { margin-bottom: 0px; } .framer-gzpe1 .framer-1dy7qai > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-gzpe1 .framer-rceqyw > *, .framer-gzpe1 .framer-135ui4l > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-gzpe1 .framer-z5r2n > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-gzpe1 .framer-he58yp > *, .framer-gzpe1 .framer-61vwaa > *, .framer-gzpe1 .framer-mfnxqd > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-gzpe1 .framer-14izdy6 > *, .framer-gzpe1 .framer-18u709r > *, .framer-gzpe1 .framer-1hs3d0g > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-gzpe1 .framer-10z3i73 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",".framer-gzpe1.framer-v-rzoopf.framer-1s0ewjl { gap: unset; justify-content: space-between; padding: 120px 40px 120px 40px; width: 1440px; }",".framer-gzpe1.framer-v-rzoopf .framer-16gvuuy, .framer-gzpe1.framer-v-rzoopf .framer-1ke32l6, .framer-gzpe1.framer-v-ei14m2 .framer-1ke32l6, .framer-gzpe1.framer-v-ei14m2 .framer-135ui4l, .framer-gzpe1.framer-v-26ds6l .framer-1ke32l6, .framer-gzpe1.framer-v-26ds6l .framer-5ssv4m { width: 100%; }",".framer-gzpe1.framer-v-rzoopf .framer-1805vl4 { gap: 35px; width: 450px; }",".framer-gzpe1.framer-v-rzoopf .framer-17zmhje, .framer-gzpe1.framer-v-ei14m2 .framer-17zmhje, .framer-gzpe1.framer-v-26ds6l .framer-17zmhje { white-space: pre; width: auto; }",".framer-gzpe1.framer-v-rzoopf .framer-10z3i73, .framer-gzpe1.framer-v-ei14m2 .framer-10z3i73, .framer-gzpe1.framer-v-26ds6l .framer-10z3i73 { height: min-content; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gzpe1.framer-v-rzoopf.framer-1s0ewjl, .framer-gzpe1.framer-v-rzoopf .framer-1805vl4 { gap: 0px; } .framer-gzpe1.framer-v-rzoopf.framer-1s0ewjl > *, .framer-gzpe1.framer-v-rzoopf.framer-1s0ewjl > :first-child, .framer-gzpe1.framer-v-rzoopf.framer-1s0ewjl > :last-child { margin: 0px; } .framer-gzpe1.framer-v-rzoopf .framer-1805vl4 > * { margin: 0px; margin-bottom: calc(35px / 2); margin-top: calc(35px / 2); } .framer-gzpe1.framer-v-rzoopf .framer-1805vl4 > :first-child { margin-top: 0px; } .framer-gzpe1.framer-v-rzoopf .framer-1805vl4 > :last-child { margin-bottom: 0px; } }",".framer-gzpe1.framer-v-ei14m2.framer-1s0ewjl { flex-direction: column; gap: 60px; padding: 80px 40px 80px 40px; width: 810px; }",".framer-gzpe1.framer-v-ei14m2 .framer-16gvuuy { flex-direction: column; gap: 100px; justify-content: center; width: 100%; }",".framer-gzpe1.framer-v-ei14m2 .framer-1805vl4, .framer-gzpe1.framer-v-26ds6l .framer-1805vl4 { gap: 35px; height: min-content; width: 100%; }",".framer-gzpe1.framer-v-ei14m2 .framer-rceqyw { width: 450px; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gzpe1.framer-v-ei14m2.framer-1s0ewjl, .framer-gzpe1.framer-v-ei14m2 .framer-16gvuuy, .framer-gzpe1.framer-v-ei14m2 .framer-1805vl4 { gap: 0px; } .framer-gzpe1.framer-v-ei14m2.framer-1s0ewjl > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-gzpe1.framer-v-ei14m2.framer-1s0ewjl > :first-child, .framer-gzpe1.framer-v-ei14m2 .framer-16gvuuy > :first-child, .framer-gzpe1.framer-v-ei14m2 .framer-1805vl4 > :first-child { margin-top: 0px; } .framer-gzpe1.framer-v-ei14m2.framer-1s0ewjl > :last-child, .framer-gzpe1.framer-v-ei14m2 .framer-16gvuuy > :last-child, .framer-gzpe1.framer-v-ei14m2 .framer-1805vl4 > :last-child { margin-bottom: 0px; } .framer-gzpe1.framer-v-ei14m2 .framer-16gvuuy > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-gzpe1.framer-v-ei14m2 .framer-1805vl4 > * { margin: 0px; margin-bottom: calc(35px / 2); margin-top: calc(35px / 2); } }",".framer-gzpe1.framer-v-26ds6l.framer-1s0ewjl { flex-direction: column; gap: 60px; padding: 80px 16px 80px 16px; width: 393px; }",".framer-gzpe1.framer-v-26ds6l .framer-16gvuuy { flex-direction: column; gap: 55px; justify-content: center; width: 100%; }",".framer-gzpe1.framer-v-26ds6l .framer-rceqyw { width: 359px; }",".framer-gzpe1.framer-v-26ds6l .framer-z5r2n { width: 357px; }",".framer-gzpe1.framer-v-26ds6l .framer-135ui4l { padding: 20px; width: 100%; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gzpe1.framer-v-26ds6l.framer-1s0ewjl, .framer-gzpe1.framer-v-26ds6l .framer-16gvuuy, .framer-gzpe1.framer-v-26ds6l .framer-1805vl4 { gap: 0px; } .framer-gzpe1.framer-v-26ds6l.framer-1s0ewjl > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-gzpe1.framer-v-26ds6l.framer-1s0ewjl > :first-child, .framer-gzpe1.framer-v-26ds6l .framer-16gvuuy > :first-child, .framer-gzpe1.framer-v-26ds6l .framer-1805vl4 > :first-child { margin-top: 0px; } .framer-gzpe1.framer-v-26ds6l.framer-1s0ewjl > :last-child, .framer-gzpe1.framer-v-26ds6l .framer-16gvuuy > :last-child, .framer-gzpe1.framer-v-26ds6l .framer-1805vl4 > :last-child { margin-bottom: 0px; } .framer-gzpe1.framer-v-26ds6l .framer-16gvuuy > * { margin: 0px; margin-bottom: calc(55px / 2); margin-top: calc(55px / 2); } .framer-gzpe1.framer-v-26ds6l .framer-1805vl4 > * { margin: 0px; margin-bottom: calc(35px / 2); margin-top: calc(35px / 2); } }",'.framer-gzpe1[data-border="true"]::after, .framer-gzpe1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],M=O(ke,Ae,"framer-gzpe1"),Wa=M;M.displayName="contact-form-section";M.defaultProps={height:1034,width:1920};L(M,{variant:{options:["F5_v3P9sL","IWz7wDRMB","aMuIusX7a","b4sn_9nYD"],optionTitles:["Desktop","laptop","Tablet","Phone"],title:"Variant",type:h.Enum}});ee(M,[{explicitInter:!0,fonts:[{family:"Manrope",source:"google",style:"normal",url:"https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE-_A87jxeN7B.woff2",weight:"600"},{family:"Manrope",source:"google",style:"normal",url:"https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_A87jxeN7B.woff2",weight:"400"},{family:"Manrope",source:"google",style:"normal",url:"https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_A87jxeN7B.woff2",weight:"700"},{family:"Manrope",source:"google",style:"normal",url:"https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_A87jxeN7B.woff2",weight:"500"}]},...he],{supportsExplicitInterCodegen:!0});export{Wa as a};
//# sourceMappingURL=chunk-XYQSF75Y.mjs.map
