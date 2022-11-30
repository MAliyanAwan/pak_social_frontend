<template>
    <div class="login">
        <a-row>
            <a-col :xs="24" :sm="24" :md="12" :lg="12">
                <div class="login__left">
                    <img src="@/assets/images/login.jpg" alt="">
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="12">
                <div class="login__right">
                    <form>
                        <h2 class="title">Login</h2>
                        <p>Email</p>
                        <input type="text" placeholder="Enter your email">
                        <p>Password</p>
                        <input type="password" placeholder="Enter your Password">
                        <a-button>Login</a-button>
                        <h4>OR</h4>
                        <div class="buttons">
                            <button class="btn"><img src="@/assets/images/icons/google-icon.png" alt=""></button>
                            <button class="btn"><img src="@/assets/images/icons/twitter-icon.png" alt=""></button>
                        </div>
                    </form>
                </div>
            </a-col>
        </a-row>

    </div>
</template>


<style lang="scss">
.login {
    &__left {
        width: 100%;
        height: 100vh;
        vertical-align: middle;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__right {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 3rem;
        background-color: rgba(128, 128, 128, 0.11);
        position: relative;
        overflow: hidden;

        form {
            min-width: 35rem;

            .title {
                font-size: 4rem;
                font-family: $font-primary-bold;
                text-align: left;
                line-height: normal;
                margin-bottom: 3rem;
            }

            p {
                text-align: left;
                font-family: $font-primary-bold;
                margin-bottom: 0.5rem;
                font-size: 1.6rem;
                opacity: 0.7;
            }

            input {
                width: 100%;
                margin-bottom: 2rem;
                padding: 0.5rem 1rem;
                border: none;
                outline: none;
                border: 0.20rem solid rgba(128, 128, 128, 0.342);
                font-family: $font-primary;
                font-size: 1.5rem;
                border-radius: 0;

                &::placeholder {
                    opacity: 0.8;
                }
            }

            .ant-btn {
                width: 100%;
                background-color: $color-primary;
                border: none;
                color: $color-white;
                margin: 3rem 0;
                padding: 1rem 0;
                height: inherit;
                border-radius: 0;

                span {
                    font-family: $font-primary-bold;
                    font-size: 1.6rem;
                    line-height: normal;
                }
            }

            h4 {
                font-size: 1.6rem;
                font-family: $font-primary-bold;
                opacity: 0.7;
                position: relative;

                &::before {
                    content: "";
                    position: absolute;
                    height: 0.2rem;
                    background-color: gray;
                    top: 50%;
                    width: 45%;
                    left: 0;
                }

                &::after {
                    content: "";
                    position: absolute;
                    height: 0.2rem;
                    background-color: gray;
                    top: 50%;
                    width: 45%;
                    right: 0;
                }
            }

            .buttons {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 3rem;

                .btn {
                    border-radius: 100%;
                    height: 4rem;
                    width: 4rem;
                    border: 0.20rem solid black;
                    margin: 0 1rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img {
                        width: 2rem;
                    }
                }
            }
        }

        &::after {
            background-color: $color-primary-light-blue;
            position: absolute;
            content: "";
            top: 0;
            right: 0;
            width: 25rem;
            height: 25rem;
            border-bottom-left-radius: 100%;
        }

        &::before {
            background-color: $color-primary-light-blue;
            position: absolute;
            content: "";
            bottom: 0;
            left: 0;
            width: 25rem;
            height: 25rem;
            border-top-right-radius: 100%;
        }
    }
}
</style>