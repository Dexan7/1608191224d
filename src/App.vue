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
              <div class="services-title">Услуг
                <div class="services-container">
                    <div class="services-name">
                        <div class="services-name__one">Ручное бронирование</div>
                        <div>Пакетные туры</div>
                        <div>Отели</div>
                        <div class="hr"></div>
                        <div class="services-name__sum">Всего</div>
                    </div>
                    <div class="services-count">
                        <div>11</div>
                        <div>3</div>
                        <div>1</div>
                        <div class="services-count__sum">15</div>
                    </div>
                </div>
              </div>
            </div>
            <div class="comments">
            </div>
        </div>
    </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>
@font-face {
    font-family: Arial-BoldMT;
    src: url("./fonts/Arial-BoldMT.otf") format("opentype");
}
@font-face {
    font-family: ArialMT;
    src: url("./fonts/ArialMT.otf") format("opentype");
}
.body {
  width: 505px;
  height: 100vh;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.24);
  background-color: #ffffff;
  border-radius: 5px;
  /* border: 1px solid black */
}

/*  header */

.header {
  /* border: 1px solid black; */
  display: flex;
  align-content: center;
  width: 100%;
  height: 121px;
  position: relative;
  margin-bottom: 15px;
}

.header-ava {
  /* border: 1px solid red; */
  /* order: 1; */
  width: 120px;
  height: 121px;
  margin-top: 16px;
  margin-left: 37px;
  background: url("./img/avatar.png") no-repeat center top;
  position: absolute;

}
.header-employee {
  flex: 1
}
.header-employee__name {
  /* border: 1px solid green; */
  /* order: 2; */
  width: 149px;
  height: 34px;
  /* display: flex;
  align-items: flex-start;
  flex: 1; */
  margin-top: 25px;
  margin-left: 166px;
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
  height: 33px;
  color: #333333;
  font-family: ArialMT;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 8px 15px 9px 46px; 
}

/*  services */
.services {
  border: 1px solid black;
  width: 100%;
  height: 150px;
  display: flex;
}
.services-title {
  margin-left: 419px;
  /* margin-bottom: 50px; */
}
.services-container {
  display: flex;
  margin-left: -250px;
  margin-top: 10px;
  flex-wrap: nowrap;
}
.services-name {
  flex: 1;
  padding-right: 40px;
  height: 62px;
  color: #333333;
  font-family: ArialMT;
  font-size: 13px;
  font-weight: 600;
  line-height: 26px;
}
.services-name__one {
  width: 220px;
}
.services-name__sum {
  /* margin-top: 20px; */
  color: #333333;
  font-family: Arial-BoldMT;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

}
.services-count {
  flex: 2;
  width: 11px;
  color: #333333;
  font-family: Arial-BoldMT;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
}
.services-count__sum {
  margin-top: 25px;
  height: 12px;
  color: #333333;
  font-family: Arial-BoldMT;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
}
/*  comments */
.comments {
  border: 1px solid black;
  width: 100%;
  height: 300px;
}

.hr {
  background-color: grey;
  height: 0.5px;
  opacity: 0.2;
}
</style>
