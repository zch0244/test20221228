<template>
    <div id="login">
        <!-- <h2>登录页</h2> -->
        <el-row style="height:100%;">
            <el-col :span="5" :offset="16" style="height:100%">
                <el-form :model="form" label-width="100px" size="mini">
                    <el-form-item label="账号：" :label-width="formItemWidth">
                        <el-input v-model="form.account" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="密码：" :label-width="formItemWidth">
                        <el-input v-model="form.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码：" :label-width="formItemWidth">

                        <el-input v-model="form.code">
                            <template slot="append">
                                <img class="img" :src="src" @click="requireImg" v-if="src" />
                                <span v-else @click="requireImg">获取验证码</span>
                            </template>
                            <!-- <img slot="append"  class="img" src="@/assets/logo.png" @click="requireImg" /> -->
                        </el-input>
                    </el-form-item>
                    <el-form-item :label-width="formItemWidth">
                        <el-button type="primary" size="medium" @click="login">登陆</el-button>
                    </el-form-item>
                    <el-form-item>
                        <Code />
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import Code from '@/components/code.vue'
import { get, method } from "@/api"
export default {
    name: "login",
    data() {
        return {
            formItemWidth: "80px",
            form: {
                account: "",
                password: "",
                code: ""
            },
            src: ""

        }
    },
    components: {
        Code
    },
    methods: {
        requireImg() {
            console.log("图片")
            this.src = require('@/assets/logo.png')
            console.log(mathCodeImg())
        },
        login() {
            // get({id:5}).then(res=>{
            //     console.log(res)
            // })
            console.log(this.$store.state)
            // method({id:8}).then(res=>{
            //     console.log(res)
            // })
            this.$router.push({
                path: "/"
            })
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log(to, from)
        next()
    },
    beforeRouteUpdate(to, from) {
        console.log(to, from)
    },
    beforeRouteLeave(to, from, next) {
        console.log(to, from)
        next()
    },

}
</script>

<style  scoped lang="less">
#login {
    height: 100%;
    background-color: #88ff88;

    .el-row {
        height: 100%;

        .el-col {
            height: 100%;

            .el-form {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);

                .el-button {
                    width: 100%;
                }

                /deep/ .el-input-group__append {
                    height: 23px;
                    width: 80px;
                    margin: 0;
                    padding: 0;
                }

                .img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

}
</style>