## 使用教程
- 由于在使用vue过程中需要使用到npm包管理器
- 需要下载并安装[nodejs](http://nodejs.cn/download/)，node安装教程-[nodejs安装教程](https://www.runoob.com/nodejs/nodejs-install-setup.html)，新手指引--如若不清楚npm功能，请移步[npm使用介绍](https://www.runoob.com/nodejs/nodejs-npm.html#taobaonpm)
- 由于npm安装速度慢，本教程使用了淘宝的镜像及其命令cnpm,安装使用介绍参照：[使用淘宝 NPM 镜像](http://npm.taobao.org/)
- 注意：npm 版本需要大于 3.0，如果低于此版本需要升级

### 启动方式
- 将项目进行pull或clone下,使用命令行工具（cmd或终端）在项目内部（能看到package.json文件的目录）进行插件安装，呼出命令行，使用cnpm install即可
- 安装结束，查看package.json文件中scripts参数后面的指令，使用cnpm run dev(看热部署指令别称即可)，项目运行
- 查看或修改访问接口，在config/index.js文件中，修改dev.port参数，并重复上述的启动方式

## VUE 基础知识手册以及使用过程中可能遇到的问题（内容粗劣，仅供知识回顾，需要详细内容，请移步[vue官网](https://cn.vuejs.org/)）

1. 声明接管区域
 ```
	<div id="box"></div> 
	需要new一个函数,进行接管我们使用区域
	new Vue({
        el: "#box",
        data: {
            name: "我就是我,是颜色不一样的烟火",
            id:520
        }
    })
  ```

2. 在实例中,我们的函数都是在methods方法中

```
	<div id='app'>
		  <button v-on:click="cs">点我试试,可以增加</button>
	</div>
	new Vue{
		el:'#app',
		data:{
	},
	methods:{
		cs:function(){
	console.log('我是方法')
	}	
	}
	}
```

3. v-cloak解决表达式闪烁
4. v-bind系统绑定属性,简写为    :value
5. v-on绑定事件,简写为   @click

```
	<div id="box"><!--在angular中,我们的ng-bind指的是解决闪烁问题-->
    <!--v-bind动态的在html中添加属性-->
    <input type="button" v-bind:value="name">
    <!--v-bind简写,用的多-->
    <input type="button" :value='name'>
    <!--解决属性中的字符串拼接问题,用的多-->
    <a v-bind="{href:'http://itcast.cn/index/'+id}">我就是我</a><!--可以得到我们想要的拼接的标签属性--></div>
	/*声明接管区域*/
    new Vue({
        el: "#box",
        data: {
            name: "我就是我,是颜色不一样的烟火",
            id:520
        }
    })
```

6. v-for循环数组

```
	<li v-for="(obj,index) in arr" :key="index">{{index}}{{obj}}{{index}}</li>
 	new Vue({
        el:"#box",
        data:{
            arr:[1,2,3,4,5,4,5]
        }
    })
```

 7.私有过滤器

```
	<div id="box">
    {{time}}<br>
    {{time | siyou}}
	</div>
	</body>
	<script src="js/vue1026.js"></script>
	<script>
    /*私有过滤器,是在Vue内部进行定义的,只有接管的区域才能使用*/
    new Vue ({
        el:"#box",
        data:{
            time:new Date()
        },
        filters:{
            /*input是自定义过滤器的固定参数 是 |  左边的值*/
            siyou:function (input) {
                var res = "";
                var year = input.getFullYear();
                var monu = input.getMonth() + 1 ;//获取月份的时候,是从0开始的,所以要加一
                var day = input.getDate();
                res = year + "-" + monu + "-" + day;
                return res
            }
        }
    })
	</script>
```

8.全局过滤器

```
 	/*定义全局的过滤器,使用的是面向对象的思维*/
    /*在Vue中加入原型的方法,我们在后面的new实例中,就很方便的调用到这个方法*/
    Vue.filter("siyou", function (input) {
        var res = "";
        var year = input.getFullYear();
        var monu = input.getMonth() + 1;//获取月份的时候,是从0开始的,所以要加一
        var day = input.getDate();
        res = year + "-" + monu + "-" + day;
        return res
    })

    new Vue({
        el: "#lis",
        data: {
            time: new Date()
        }
    })

    new Vue({
        el: "#box",
        data: {
            time: new Date()
        }
    })

```

9.get请求数据（请求基于axios，设置的全局变量$http）

```
 	/*在使用$http获取后台数据的时候,我们需要加载文件resouce,自动在实例中形成$http*/
    new Vue ({
        el:"#box",
        data:{
            name :null
        },
        methods:{
            getdata:function () {
                this.$http.get(url)
                    .then(function (response) {
                        console.log(response);
                        console.log(response.body);
                    })
            }
        }
    })
```

10.post请求

```
 	 new Vue({
        el:"#box",
        methods:{
            postjson:function () {
                /*调用post(url地址,传入服务器请求报文数据,{emulateJSON:true}将数据以json数据转换成字符串进行提交)*/
                this.$http.post(url,{},{emulateJSON:true})
                    .then(function (response) {
                        console.log(response.body.message);
                    })
            }
        }
    })
```

11. jsonp请求
```
	 new Vue({
        el: "#box",
        data: {
            name: null
        },
        methods: {
            /*跨域请求数据*/
            jsonp: function () {
                this.$http.jsonp(api)
                    .then(function (response) {
                        this.name = response.body;
                    })
            }
        }
    })

```

12.自定义元素属性和自定义标签指令
```
	<div id="box">
    <myred>啦啦啦啦</myred>
    <br>
    <span v-yan="oo">我就是我,是颜色不一样的烟火!!!</span>
	</div>
	</body>
		<script src="js/vue1026.js"></script>
	2017/08/03 14:55:14 <script>
    /*自定义属性标签,中间的this指向不同的对象,第一个参数为,自定义标签的名称,第二个参数为回调函数*/
    /*自定义标签名称在使用的时候,我们需要加上v-进行使用*/
    Vue.directive("yan",function () {
        /*this表示的是这个函数directive*/
        console.log(this);
        /*this中有我们的实例函数,还有我们的标签属性*/
       this.el.style.color = this.vm.oo
    })

    /*自定义元素指令*/
    Vue.elementDirective("myred",{
        bind:function () {
            this.el.style.color = "red"
            console.log(this);
        }
    })


    /*标注接管区域*/
    new Vue({
        el:"#box",
        data:{
            oo:"pink"
        }
    })
	</script>
```

13.组件的定义

```
	<template id='wo'><h1>我是组件中的内容</h1><template>
	Vue.component('fu',{
	'template':'我就是父组件',
	'components':{
	'log':{
	'template':'<h2>我是子组件<h2>'
	}
	}
	})
	new Vue({
	el:'#接管区域'
	,data:{ 
	},methods:{
	}
	})
```

14.ref获取组件和DOM
```
	<div id="box">
    <button @click="gett">获取DOM中的数据</button>
    <br>
    <span ref="tet">我就是欧文</span><br>
    <button @click="si">点击四川</button>
    <br>
    <login ref="sichuan"></login>
    <template id="te">
        <h3>我是四川滴</h3>
    </template>
	</div>
	</body>
	<script src="../js/vue221.js"></script>
	<script>
    new Vue({
        el: "#box",
        methods: {
            gett: function () {
                /*Vue.js中的书写方式,2.0版本中的ref,在声明的时候,也是直接声明,不需要使用:冒号*/
                console.log(this.$refs.tet.innerText);
            },
            si:function () {/*$refs后面的名称,为我们自己在标签中定义的*/
                /*点击获取组件中的属性*/
                console.log(this.$refs.sichuan.$el.innerText);
                console.log(this.$refs.sichuan.name);
            }
        },
        components:{
            "login":{
                "template":"#te",
                data:function () {
                    return {
                        "name":"YY"
                    }
                }
            }
        }
    })

```

15.组件的使用
```
	<div id="box">
    <!--在2.0版本中的按钮,我们是用router-link形成-->
    <router-link to="/login">我是第一个页面</router-link>
    <router-link to="/sege">我是第二个页面</router-link>
    <!--组件显示占位符-->
    <router-view></router-view>
	</div>
	</body>
	<script src="../js/vue221.js"></script>
	<script src='../js/vue-router231.js'></script>
	<script>
    /*定义组件*/
    var box = Vue.extend({})
    var login = Vue.extend({
        "template": "<h3>我是第一个页面</h3>"
    })
    var sege = Vue.extend({
        "template": "<h3>啦啦啦,第二个页面</h3>"
    })
    /*定义路由对象,并且定义路由规则*/
    var vuer = new VueRouter({
        routes: [
            {"path": "/", redirect: "/login"},//首页显示到哪个html
            {"path": "/login", "component": login},
            {"path": "/sege", "component": sege},
	children: [
                {"path": "lo", "component": login},
                {"path": "es", "component": esge}
            ]
        ]
    })
    /*开启路由*/
    new Vue({
        el: "#box",
        router: vuer/*名称为实例化new VueRouter出现的*/
    })
	</script>
```

> 在vue的入口文件中,我们需要导入其他文件中的函数或者方法进行调用
> 在进入页面的时候,我们可以通过生命周期函数,将我们的url地址?后面的获取到,使用this.$route的方式

###父向子组件传值
```
指的是,接管区域中的父组件向子组件传递值的过程
```

#非组件之间的传值过程
```
	1. 首先定义一个接受传值的公共的js文件
	2. 再定义文件的内容的时候,需要先引入我们的vue
	3. 接着定义我们的常量,并且输出出来
	4. 再实例化我们的vue并赋值
	5. 再传送数据的页面,使用的是子传给父组件的方法,vm.$emit(a,b)
	6. 在接受数据的页面,除了首先导入我们的js文件之外,我们还需要使用$on事件,vm.$on(a,callback),完成数据的获取,获取到的数据就是我们的参数
```


###vue函数中的一些小技巧

> 执行函数的时候出现的一个延迟执行效果
```
 	 methods: {
    // _.debounce 是一个通过 lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // ajax 请求直到用户输入完毕才会发出
    // 学习更多关于 _.debounce function (and its cousin
    // _.throttle)，参考：https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // 这是我们为用户停止输入等待的毫秒数
      500
    )
  	}
```
### class和style
>class类名可以是多个的用法,或者是动态的使用方法

`
	普通的类名也可以和动态加载的类名重合使用
	<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">	
	</div>
`
###值绑定
```
	对于单选按钮，勾选框及选择列表选项，v-model 绑定的 value 通常是静态字符串 (对于勾选框是逻辑值)：
	<!-- 当选中时，`picked` 为字符串 "a" -->
	<input type="radio" v-model="picked" value="a">
	<!-- `toggle` 为 true 或 false -->
	<input type="checkbox" v-model="toggle">
	<!-- 当选中时，`selected` 为字符串 "abc" -->
	<select v-model="selected">
 	<option value="abc">ABC</option>
	</select>
```
> 有一些很有意思的修饰符,在input中,会出现.number修饰符,可以将原值转换成number类型还有.trim可以去除首尾空格,使用方法是:v-model.trim = ''

###is属性

###vue结合webpack打包项目
> 重点添加第三方库
> vue-cli脚手架学习以及使用配置
1. 安装vue-cli命令行 cnpm i -g vue-cli
2. 安装以webpack相关的项目 vue init webpack my-project（创建过程中没，有相关的单元测试文件可以选择，对javascript等的类以及封装进行检测，其中有eslint检测，建议为no，严格要求为es6编码）
3. 进入项目 cd my-project
4. 进行依赖安装 cnpm i
5. 启动项目 cnpm run dev
6. 解释，该项目安装过程中，没有涉及到webpack 的相关内容
7. 使用cnpm run build 打包文件，dist下，再使用命令行进行运行cnpm run dev
8. 针对上诉打包问题，可以打包成静态资源为，修改config下的index.js页面，下的build.assetsPublicPath。将'/'改为'./'即可
```
项目结构解析：
1.build，vue能进行模块化编写，就靠它配置文件,具体解析如下
webpack.dev.conf.js配置了热刷新,同时也引入了相关本文件夹下的js文件,并进行调用;
webpack.base.conf.js中,其中的resolve配置,extensions:['.js','.vue'];指的是引入文件的时候,import hello from '@component/hello';不需要加上后缀
2.config，webpack能打包，就靠它配置文件
3.dist，这个是打包后才出现的文件夹。里面装的就是打包后的项目文件
4.node_modules，安装vue各种插件的地方
5.src，项目编写的地方 assets，装资源的地方，图片，字体等
components，装模块，或者网页的地方。文件均为**.vue
router，配置路由，哪个地址，分配component下的哪个网页
App.vue,本身就是个components挂在外面的index.html上。index相当于投资人，甩手掌柜，App.vue相当于职业经理人，网页的事它主管。
main.js,和主管App.vue配套的，主管js。
6.static，有它可以使用git项目版本管理，同时是，访问服务器文件，应该把json,放在最外层的static文件夹vue-cli内置服务器向外暴露的静态文件夹
7.index.html，vue网页入口
8.package.json ,内置初始插件名称。后期再安装插件，npm i 插件名 --save ，可以保存进文件内
```
###vue运行中遇到的问题集锦
- 添加less的时候,需要安装相应的less-loader等less文件
```
报错信息为less-loader等或者为app.less,前者没有进行配置,后者语法错误
局部less,在style中加type='text/less';进行编辑less文件
全局的需要进行导入才能使用
```

- 加载css资源问题，出现引入mint-ui/lib/style.css错误，需要在webpace.base.conf.js文件中，加上
```
{
        test: /\.css$/,
        include: [resolve('src'), resolve('node_modules/mint-ui/lib')],
        loader: 'style-loader!css-loader!postcss-loader'
      },
同时，可能不会好，有可能是postcss-loader的问题，最好的方式是，先注释，进入页面再调试，否则很难找到原因
```

- 引入方式不同，则效果不同import或着require
```
import引入，则直接引入的是module.exports后对象的值，使用直接使用接收到的对象的名称
require引入，引入的是对象，使用的时候，需要指向方法的键名
```

- 导出方式，export、export default、module.exports
```
在同一个文件中，使用export default只能有一个，export为多个,这两种语法为es6导出方式，使用export default的时候，引入用
require则需要在后面加上default
```

- 出现引入外部文件js Cannot assign to read only property 'exports' 等问题
```
删除了.babelrc文件中的"plugins": ["transform-vue-jsx", "transform-runtime"]，将plugins数组清空为plugins则可以了
```

- 出现加载vuex的时候Uncaught ReferenceError: mapMutations is not defined问题
```
第一个原因需要在vue文件中引入import {mapMutations} from 'vuex';组件
第二个原因需要安装    "babel-preset-stage-3"库
```

- 在vuex中,使用mapState的时候,出现状态方法不能使用,解决方式为
```
这是错误的方式
<v-loading v-model="isLoading" loading=false class="loading"></v-loading>
computed: {
  ...mapState({
    isLoading: state => state.com.user
  }),
}
//这是改过后的新方法,将方法选择权给v-model决定
<v-loading v-model="isLoading.user" loading=false class="loading"></v-loading>
computed: {
  ...mapState({
    isLoading: state => state.com
  }),
}
``` 

- 使用element的时候,导航栏菜单中,不能使用点击事件@click,因为需要加入点击监控才能识别,@click.nactive

###pageage.json插件解析
- extract-text-webpack-plugin---用来将css提取到单独的css文件中
- autoprefixer兼容css,为浏览器兼容css加上前缀
- html-webpack-plugin---指定一个html,创建新的html,并引入build.js文件,对于新创建的文件,能更好的引入js文件,随意webpack会帮我们引入
- karma-mocha---以及相关的chai(为mocha的测试的断言库),为测试单元插件,karma为测试管理工具,mocha为测试库,chai里有好多js相关的检测
- semver --- 比较插件,将版本号进行比较等
- cross-env---运行跨平台设置和使用环境变量的脚本
- postcss-loader--- 样式补全前缀，兼容浏览器
- uglifyjs-webpack-plugin---压缩js，缩小体积
- babel-loader---js程序加载器
- bootstrap---编译bootstrap插件
- vue-preview---模拟google的点击波浪效果
- hammerjs---引入waves(点击波浪效果)静态js，需要的模块
- axios替代了vue-resource的http请求
- bootstrap-paginator插件，为bootstrap下的分页插件

###插件安装过程(都为开发环境下的插件安装)
1. bootstrap-paginator(基于bootstrap的分页插件，依赖于bootstrap下才能执行)
```
cnpm i bootstrap-paginator --save-dev
在main.js中直接引入即可，引入方式，使用es6的import ‘bootstrap-paginator/bootstrap-paginator.js’方法
```

2. axios(替代vue-resource请求的http方法)
```
cnpm i axios --save-dev
在main.js中，使用import axios from 'axios'；本人将其进行全局话，使用了window.axios = axios;进行公开，或者绑定在vue的原型中，在下面写上Vue.prototype.$axios = axios;
组件中的访问情况为，this.$axios.get()等
```

3. vue-preview(图片放大浏览器)
```
cnpm i vue-preview --sava-dev

```

4. element(前端框架库)
```
cnpm i element --S
```

5. [ECharts结合vue使用手册](http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts "echarts引入以及使用")

