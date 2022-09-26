"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[9671],{1164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=t(7462),r=(t(7294),t(3905));const a={title:"Welcome",sidebar_position:0},o="Welcome to Juno",i={unversionedId:"intro",id:"intro",title:"Welcome",description:"Let's discover Juno.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/NethermindEth/juno/tree/main/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Welcome",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},s={},p=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Installing",id:"installing",level:2},{value:"Install Python dependencies",id:"install-python-dependencies",level:3},{value:"Installing Go dependencies",id:"installing-go-dependencies",level:3},{value:"Compile",id:"compile",level:2},{value:"Run",id:"run",level:2},{value:"Using Docker",id:"using-docker",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome-to-juno"},"Welcome to Juno"),(0,r.kt)("p",null,"Let's discover ",(0,r.kt)("strong",{parentName:"p"},"Juno"),"."),(0,r.kt)("h2",{id:"what-youll-need"},"What You'll Need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Golang")," version 1.18 for build and run the project."),(0,r.kt)("li",{parentName:"ul"},"Python ",(0,r.kt)("inlineCode",{parentName:"li"},"3.7"))),(0,r.kt)("h2",{id:"installing"},"Installing"),(0,r.kt)("p",null,"Clone the repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/NethermindEth/juno\n")),(0,r.kt)("h3",{id:"install-python-dependencies"},"Install Python dependencies"),(0,r.kt)("p",null,"We are currently only support python ",(0,r.kt)("inlineCode",{parentName:"p"},"3.7"),", and we recommend use pyenv. To install it, you can follow this instruction:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install dependencies:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update \nsudo apt-get install make build-essential git patch zlib1g-dev clang \\\n  openssl libssl-dev libbz2-dev libreadline-dev libsqlite3-dev llvm \\\n  libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev \\\n  liblzma-dev\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install pyenv:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://pyenv.run | bash\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add the following entries into your ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.bashrc")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# pyenv\nexport PATH="$HOME/.pyenv/bin:$PATH"\neval "$(pyenv init --path)"\neval "$(pyenv virtualenv-init -)"\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Restart your shell:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"exec $SHELL\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Install python 3.7:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pyenv install 3.7.13\npyenv global 3.7.13\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Inside of the project folder, install python dependencies:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ pip install -r requirenments.txt\n")),(0,r.kt)("h3",{id:"installing-go-dependencies"},"Installing Go dependencies"),(0,r.kt)("p",null,"You can install all golang dependencies running the next command inside the project folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ go get ./...\n")),(0,r.kt)("h2",{id:"compile"},"Compile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ make juno\n")),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("p",null,"To synchronize with the StarkNet state from the centralized feeder gateway, run the following\ncommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# For Ethereum Goerli testnet\n$ ./build/juno\n\n# For Ethereum Mainnet\n$ ./build/juno --netowrk 1\n")),(0,r.kt)("p",null,"To sync the state without relying on the feeder gateway, configure an Ethereum node and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# For Ethereum Goerli testnet\n$ ./build/juno --eth-node "<node-endpoint>"\n\n# For Ethereum Mainnet\n$ ./build/juno --netowrk 1 --eth-node "<node-endpoint>"\n')),(0,r.kt)("p",null,"To view other available options please run ",(0,r.kt)("inlineCode",{parentName:"p"},"./build/juno -h"),"."),(0,r.kt)("p",null,"For more configuration details, check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/running/config"},"config description"),"."),(0,r.kt)("h2",{id:"using-docker"},"Using Docker"),(0,r.kt)("p",null,"If you prefer to use docker, you can follow ",(0,r.kt)("a",{parentName:"p",href:"/docs/running/docker"},"this")," guide."))}c.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=l.createContext({}),p=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return l.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return t?l.createElement(g,o(o({ref:n},u),{},{components:t})):l.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);