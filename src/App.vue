<template>
    <div id="app">
        <head>
           <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
           <link href="https://www.fontify.me/wf/5ff16b02d0b7029bd912455048e41c8d" rel="stylesheet" type="text/css">
           <link href="https://www.fontify.me/wf/185849a866d3493f5d85548fffaca6fd" rel="stylesheet" type="text/css">
        </head>
        <div class="body">
            <div class="header">
                <div class="header-ava">
                  <!-- <img src="img/avatar.png" alt=""> -->
                </div>
                <div class="header-employee">
                    <div class="header-employee__name">
                        <div><span class="header-employee__name__first-last">Вероника Ростова</span></div>
                        <span class="header-employee__name__position">Менеджер по продажам</span>
                    </div>
                    <div class="header-employee_desc">
                        <p class="header-employee_desc-text">Подберу для вас самые лучшие предложения.
                          Мои услуги абсолютно бесплатны</p>
                    </div>
                </div>
            </div>
            <div class="services">
              <div class="container">
                <div class="services-title">
                  <div class="services-container">
                    <div class="services-container-block">
                      <div class="services-container-header">Услуг</div>
                      <div class="hr"></div>
                      <div class="service__row service__row--main">
                        <div class="service_row-name">
                          <div class="service__row-name-text">Ручное бронирование</div>
                        </div>
                        <div class="service__row-value">11</div>
                      </div>
                      <div class="service__row service__row--secondary service__row--second">
                        <div class="service_row-name">
                          <div class="service__row-name-text">Пакетные туры</div>
                        </div>
                        <div class="service__row-value">3</div>
                      </div>
                      <div class="service__row service__row--secondary service__row--last">
                        <div class="service_row-name">
                          <div class="service__row-name-text">Отели</div>
                        </div>
                        <div class="service__row-value">1</div>
                      </div>
                      <div class="hr"></div>
                      <div class="services-name__sum">Всего <span class="services-name__number">15</span></div>
                    </div>
                  </div>
                </div>

                <div class="comments">
                  <div class="comments__amount">
                    <span class="comments-left">
                      <span class="comments-title">Последние отзывы</span>
                      <span class="comments-all"><a href="#">Все отзывы</a></span>
                    </span>
                    <span class="comments-right">
                      <span class="comments-right__block"><img src="./img/heart.png" alt="">131</span>
                      <span class="comments-right__block"><img src="./img/comment.png" alt="">{{comments.length}}</span>
                    </span>
                  </div>
                  <div class="comments__messages">
                    <div v-for="item in comments" :key="item.id" class="comments__message">
                      <div class="comments__message-user">
                        <div class="comments__message-user-name">{{item.user}}</div>
                        <div class="comments__message-user-date">13 октября 2011</div>
                      </div>
                      <div class="comments__message-block">
                        {{item.text}}
                      </div>
                    </div>
    
                  </div>
                  <div class="comments-form">
                    <!-- <span>Ваше имя:</span>
                    <input type="text" size="20" v-model="userName"> -->
                    <div class="comments-form__textarea">
                        <input type="text" class="comments-form__input" placeholder="Enter your name" v-model="userName">
                        <textarea name="comment" cols="55" rows="5" v-model="userComment"></textarea>
                        <div class="comments-form__but" @click="sendComment()">
                          <button class="comments-form__btn">
                              Написать консультанту
                          </button>
                        </div>
                        <!-- <button @click="sendComment()">Написать консультанту</button></div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      userName: '',
      userComment: '',
      comments: [
        {
          user: 'Alex',
          text: 'Bla-bal-asd=asdasd=asdasd'
        },
        {
          user: 'Sveta',
          text: 'Bla-bal-asd=asdasd=asdasdasdasd'
        },
        {
          user: 'Ihor',
          text: 'Bla-bal-asd=asdasd=asdasd=zxczxc-asdasd'
        }
      ],
    }
  },
  methods: {
        sendComment() {
          console.log('test', this.userName, this.userComment)
          let obj = {
            user: this.userName,
            text: this.userComment
          }
          console.log('obj', obj);
          this.comments.push(obj);
          console.log('this.comments', this.comments.length)
        }
      }
}
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
sub,
sup,
tt,
var,
u,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

i,
em,
strong,
b {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}


@font-face {
    font-family: Arial-BoldMT;
    src: url("./fonts/Arial-BoldMT.otf") format("opentype");
}
@font-face {
    font-family: ArialMT;
    src: url("./fonts/ArialMT.otf") format("opentype");
}
@font-face {
    font-family: PT-Sans;
    src: url("./fonts/PTS55F.ttf") format("opentype");
}
.body {
  margin: 30px auto;
  width: 505px;
  /* height: 100vh; */
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.24);
  background-color: #ffffff;
  border-radius: 5px;
  font-family: ArialMT;
  /* border: 1px solid black */
}

.container {
  padding: 0 19px;
}
/*  header */

.header {
  /* border: 1px solid black; */
  display: flex;
  align-content: center;
  width: 100%;
  /* height: 121px; */
  position: relative;
  margin-bottom: 15px;
}

.header-ava {
  /* border: 1px solid red; */
  /* order: 1; */
  width: 120px;
  height: 121px;
  margin-top: 31px;
  margin-left: 37px;
  background: url("./img/avatar.png") no-repeat center top;
  position: absolute;

}
.header-employee {
  flex: 1
}
.header-employee__name {
  width: 149px;
  height: 34px;
  margin: 25px 0 10px 166px;
}

.header-employee__name__first-last {
  /* width: 149px;
  height: 34px; */
  color: #333333;
  font-family: Arial-BoldMT;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
}
.header-employee__name__position {
  /* width: 149px;
  height: 34px; */
  color: #808080;
  font-family: ArialMT;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
.header-employee_desc {
  /* border: 1px solid yellow; */
  /* order: 2; */
  width: 364px;
  height: 54px;
  /* align-self: flex-end; */
  /* margin-left: -46px; */
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(60, 44, 0, 0.25);
  background-color: #fffbc8;
/* background-color: #009ecf; */
  margin-left: 121px;
}
.header-employee_desc-text {
  width: 303px;
  color: #333333;
  font-family: ArialMT;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 8px 15px 9px 46px; 
}

/*  services */
.services {
  position: relative;
}

.services-container {
  display: flex;
  justify-content: flex-end;
}
.services-container-header {
  text-align: right;
  padding-right: 20px;
}
.services-container-block {
  width: 320px;
  margin-bottom: 40px;
}
.service__row {
  display: flex;
  justify-content: space-between;
  padding-right: 33px;
  margin-bottom: 5px;
}
.service__row .service_row-name {
  height: 24px;
  position: relative;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 13px;
}

.service__row .service__row-name-text {
  position: absolute;
  width: 200px;
  top: 5px;
  left: 6px;
}
.service__row--second .service_row-name {
  width: 54px;
}
.service__row--last .service_row-name {
  width: 36px;
}
.service__row--main .service_row-name {
  width: 220px;
  background-color: rgba(60, 179, 5, .4);
}
.service__row--secondary .service_row-name {
  background-color: rgba(48, 182, 238, .4);
}
.service__row-value {
  font-size: 13px;
  color: #333;
  font-weight: 400;
  font-family: Arial-BoldMT;
  padding-top: 5px;
}
.services-name__sum {
  color: #333333;
  font-family: Arial-BoldMT;
  color: #333333;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  padding-right: 33px;
}
.hr {
  background-color: grey;
  height: 0.5px;
  opacity: 0.2;
  margin-top: 5px;
  margin-bottom: 10px;
}
/*  comments */
.comments {
  /* border: 1px solid black; */
  width: 100%;
  position: relative;
}
.comments__amount {
  display: flex;
  justify-content: space-between;
}
.comments-title {
  font-weight: bold;
  margin-right: 5px;
}
.comments__all {
  color: #47b8f0;
  border: 1px solid #47b8f0;
}
.comments__messages {
  margin-top: 15px;
}
.comments__message-user {
  font-size: 14px;
  display: flex;
  align-items: center;
}
.comments__message-user-name {
  font-weight: bold;
}
.comments__message-user-date {
  color: #808080;
  margin-left: 5px;
  font-size: 11px;
}
.comments__message-block {
  margin: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  background-color: #f2fbff;
  border: 1px solid rgba(0, 0, 0, 0.19);
  padding: 15px 18px;
  position: relative;
  word-wrap: break-word;
}

.comments__message-block:before {
  content: '';
  width: 10px;
  height: 9px;
  position: absolute;
  top: -9px;
  left: 30px;
  background: url('./img/triangle.png') no-repeat;
}

.comments-right {
  display: flex;
}

.comments-right__block {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.comments-right__block:first-child {
  margin-left: 0;
}

.comments-right__block img {
  margin-right: 10px;
}

.comments__message img {
  margin-right: 10px;
}
.comments-count{
  margin-left: 20px;
}
.comments-form {
  padding-top: 29px;
  background-color: #f2f2f2;
  margin: 0 -19px;
}
.comments-form__input {
  margin-bottom: 20px;
  outline: none;
  font-size: 14px;
  padding: 5px;
  width: calc(100% - 16px);
}
.comments-form__textarea {
  border: none;
  margin: 0 20px;
  border-radius: 5px;
}

.comments-form__textarea textarea {
  resize: none;
  outline: none;
  padding: 0;
  height: 65px;
  padding: 10px 15px;
  width: calc(100% - 34px);
}
.comments-form__but {
  display: table;
  margin: 15px auto 0;
}
.comments-form__btn {
  position: relative;
  background: #fdd639;
  border-radius: 20px;
  width: 282px;
  height: 43px;
  text-align: center;
  line-height: 43px;
  transition: .3s ease;
  border: none;
  margin-bottom: 20px;
}

.comments-form__btn:hover {
  background: #ccc;
}
</style>
