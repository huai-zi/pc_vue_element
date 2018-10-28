const login = {
    //实例属性
    namespaced: true,//规定命名,为自定义命名
    state: { //存储数据
        addUser: 0
    },
    getters: {
        //获取数据
        getAddUser(state) {
            return state.active
        }  
    },
    mutations: {
        //处理方法,这里执行请求,会出现延迟出现的效果,在methods中,通过this.$store.commit('activeChange', 10)进行调用方法,后面为参数,前面为函数名
        mutaAddUser(state, index) {
            //index为左侧菜单栏目录值
            state.addUser = index;
        }
    },
    actions: {
        actAddUser(context, payload) {
            //执行异步请求的时候,能够同时出现在vue的函数监控列表中,在mutaions中则不能,在methods通过dispatch对actions中的方法进行调用
            context.state.addUser++

        }
    }
}
export default login;
