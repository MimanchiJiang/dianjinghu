<template>
    <div class="loginPage">
        <div class="container">
            <div class="box login" ref="login">
                <div class="form-content">
                    <div class="avtar">
                        <div class="pic"><img src="../assets/1.jpg" alt=""></div>
                    </div>
                    <h1>Welcome back</h1>
                    <form class="form">
                        <p :class="{ error: loginData.isError }">{{ loginData.notice }}</p>
                        <div>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-jurassic_user"></use>
                            </svg>
                            <input type="text" placeholder="username" v-model="loginData.username">
                        </div>
                        <div>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-yuechi"></use>
                            </svg>
                            <input type="password" placeholder="password" v-model="loginData.password">
                        </div>
                        <div class="btn">
                            <input type="button" @click="loginButton" value="login">
                        </div>
                    </form>
                    <p class="btn-something">
                        Don't have an account ? <span class="signupbtn" @click="signupFunction">signup</span>
                    </p>
                </div>
            </div>
            <div class="box signup" ref="signup">
                <div class="form-content">
                    <div class="avtar">
                        <div class="pic"><img src="../assets/2.jpg" alt=""></div>
                    </div>
                    <h1>Let's get started</h1>
                    <form class="form">
                        <p v-bind:class="{ error: registerData.isError }">{{ registerData.notice }}</p>
                        <div>
                            <i class="fa fa-user-o"></i>
                            <input type="text" placeholder="username" v-model="registerData.username">
                        </div>
                        <div>
                            <i class="fa fa-envelope-o"></i>
                            <input type="password" placeholder="password" v-model="registerData.password">
                        </div>
                        <div>
                            <i class="fa fa-key"></i>
                            <input type="email" placeholder="email">
                        </div>
                        <div class="btn">
                            <input @click="signupButton" type="button" value="signup">
                        </div>
                    </form>
                    <p class="btn-something">
                        Already have an account ? <span class="loginbtn" @click="loginFunction">login</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <svg class="bottomImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
    </svg>
</template>
<script>
import router from "@/router";
import { ref } from "vue";
import axios from 'axios'

export default {

    setup() {
        const login = ref(null)
        const signup = ref(null)
        const loginData = ref({
            username: "",
            password: "",
            notice: "请输入用户名和密码",
            isError: false,
        })
        const registerData = ref({
            username: "",
            password: "",
            notice: "创建账号后，请记住用户名和密码",
            isError: false,
        })
        const loginFunction = () => {
            console.log(login)
            login.value.style.transform = "rotateY(0deg)"
            signup.value.style.transform = "rotateY(-180deg)";
        }
        const signupFunction = () => {
            console.log(signup.value)
            login.value.style.transform = "rotateY(180deg)"
            signup.value.style.transform = "rotateY(0deg)";
        }
        const loginButton = () => {
            if (!/^[\w\u4e00-\u9fa5]{3,15}$/.test(loginData.value.username)) {
                loginData.value.isError = true;
                loginData.value.notice = "用户名3~15个字符，仅限于字母数字下划线中文";
                return;
            }
            if (!/^.{6,16}$/.test(loginData.value.password)) {
                loginData.value.isError = true;
                loginData.value.notice = "密码长度为6~16个字符";
                return;
            }
            axios({
                url: 'http://localhost:8082/login',
                method: 'POST',
                responseType: 'json',
                data: JSON.stringify({ username: registerData.value.username, password: registerData.value.password })
            }).then(() => {
                router.push({
                    path: 'doc/about'
                })
            })

        }
        const signupButton = () => {
            if (!/^[\w\u4e00-\u9fa5]{3,15}$/.test(registerData.value.username)) {
                registerData.value.isError = true;
                registerData.value.notice = "用户名3~15个字符，仅限于字母数字下划线中文";
                return;
            }
            if (!/^.{6,16}$/.test(registerData.value.password)) {
                registerData.value.isError = true;
                registerData.value.notice = "密码长度为6~16个字符";
                return;
            }
            axios({
                url: 'http://localhost:8082/register',
                method: 'POST',
                responseType: 'json',
                data: JSON.stringify({ username: loginData.value.username, password: loginData.value.password })
            }).then(() => {
                router.push({
                    path: 'doc/about'
                })
            })

        }

        return {
            loginFunction, signupFunction, loginButton, signupButton, login, signup, registerData, loginData
        }
    }
}
</script>
<style scoped>
.loginPage {
    background-color: #f0f5f5;
}

.loginPage::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #3399ff;
    clip-path: circle(20% at 100% 0);
}

.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20rem;
    height: 28rem;
}

.box {
    position: absolute;
    top: 0;
    left: 0;
    width: 20rem;
    height: 28rem;
    border-radius: 10px;
    cursor: pointer;
    backface-visibility: hidden;
    transition: all 0.5s;
    user-select: none;
}

.signup {
    /* background-color: blue; */
    transform: rotateY(-108deg);
}

.container .form-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0 0 1px #3399ff;
    border-radius: 30px;
    background-color: #fff;
}

.container .form-content .avtar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.container .form-content .avtar .pic {
    position: relative;
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #3399ff;
}

.container .form-content .avtar .pic img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.container .form-content h1 {
    font-size: 1.6rem;
}

.container .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container .form p {
    font-size: 12px;
    margin-top: 10px;
    color: #444;
}

.container .form .error {
    color: red;
}

.container .form input {
    width: 16rem;
    padding: 0.8rem;
    outline: none;
    border: none;
    border-radius: 15px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    margin: 5px;
    color: black
}

.container .form .icon {
    width: 25px;
    height: 25px;
}

.container .form div {
    position: relative;
}

.container .form div .fa {
    position: absolute;
    top: 18px;
    left: 25px;
}

.container .form .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10px;
}

.container .form .btn input {
    text-transform: uppercase;
    padding: 8px;
    border: none;
    outline: none;
    background-color: #0066ff;
    color: #fff;
    width: 12rem;
    border-radius: 30px;
    cursor: pointer;
}

.container .btn-something {
    color: #888;
    font-size: 14px;
}

.container .btn-something span {
    color: #0066ff;
    cursor: pointer;
    font-weight: 500;
}

.bottomImg {
    position: absolute;
    bottom: 0;
    z-index: -1;
}
</style>