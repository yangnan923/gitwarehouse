<template>
  <div>

    <div class="banner" @mouseenter="into()" @mouseleave="out()">

        <div class="bgc" :style="{background:'url('+arrColor[index]+') repeat-x'}">
          <div class="content">
            <img :src="arrImg[index]" alt="">
            <div class="content_right">
              <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
            <span @click="rightImage()"> > </span>
            <span @click="leftImage()"> < </span>
          </div>
        </div>

    </div>
    <div class="down">
      <div class="down2">
      <div class="downleft">
          <div class="hot">
            <a href="/#" class="recommend">热门推荐</a>
            <div class="tab">
              <a href="/#">华语</a>
              <span class="line">|</span>
              <a href="/#">流行</a>
              <span class="line">|</span>
              <a href="/#">摇滚</a>
              <span class="line">|</span>
              <a href="/#">民谣</a>
              <span class="line">|</span>
              <a href="/#">电子</a>
            </div>
            <i class="blank"></i>
            <span class="more">更多</span>

          </div>
        <ul class="ulplay">
          <li v-for="(itm,ind) in arrSmallImg.slice(0,8)" :key="ind">
            <div class="liimg">

              <img :src="itm.picUrl" alt="">
              <a href="/#" class="msk" :title="itm.name"></a>

            <div class="bottom">
              <a href="/#" class="el-icon-video-play"></a>
              <span class="el-icon-headset"></span>
              <span>{{itm.playCount|num}}</span>
            </div>
            </div>
            <p class="dec"><a href="" :title="itm.name">{{itm.name}}</a></p>
          </li>

        </ul>
        <div class="hot">
          <a href="/#" class="recommend">新碟上架</a>
          <i class="blank"></i>
          <span class="more">更多</span>
        </div>
        <div class="albumall">
          <div class="album">
            <a href="/#" class="left11"></a>
            <div class="albumul">
              <ul class="albumul1">
                <li class="albumli" v-for="albu in this.arrAlbum.slice(0,10)">
                  <div>
                    <img :src="albu.picUrl" alt="">
                    <a href="/#" :title="albu.name" class="black"></a>
                    <a href="/#" class="iconplay" title="播放"></a>
                    <a href="/#" class="bgi"></a>
                  </div>
                  <p ><a href="/#" :title="albu.name" class="my">{{albu.name}}</a></p>
                  <p ><a href="/#" :title="albu.artist.name" class="sin">{{albu.artist.name}}</a></p>
                </li>
              </ul>
            </div>
            <a href="/#" class="right11"></a>
          </div>
        </div>

        <div class="hot">
          <a href="/#" class="recommend">榜单</a>
          <i class="blank"></i>
          <span class="more">更多</span>
            </div>

        <div class="listall">
          <div class="bsb">
            <div class="bsbtop">
              <div class="coverimg">
                <img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt="">
                <a href="/#" title="飙升榜" class="coverimga"></a>
                <a href="/#" class="bgimga"></a>
              </div>
              <div class="tit">
                <a href="./#"><h3>云音乐飙升榜</h3></a>
                <div class="btnicon">
                  <a href="./" class="play"></a>
                  <a href="./" class="collect"></a>
                </div>
              </div>

            </div>
            <div class="bangdan">
              <ul class="bangdanul">
                <li class="bangdanli" v-for="bbang in arrBang.slice(0,10)">
                  <span class="numtop">1</span>
                  <a href="/#" :title="bbang.name" class="dan">{{bbang.name}}</a>
                  <div class="btndan">
                    <a href="/#" title="播放"></a>
                    <a href="/#" title="添加至播放列表"></a>
                    <a href="/#" title="收藏"></a>
                  </div>
                </li>
                <div class="check_more">
                  <a href="/#">查找全部></a>
                </div>
              </ul>
            </div>
          </div>
          <!--xinge-->
          <div class="bsb">
            <div class="bsbtop">
              <div class="coverimg">
                <img src="http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100" alt="">
                <a href="/#" title="新歌榜" class="coverimga"></a>
                <a href="/#" class="bgimga"></a>
              </div>
              <div class="tit">
                <a href="./#"><h3>云音乐新歌榜</h3></a>
                <div class="btnicon">
                  <a href="./" class="play"></a>
                  <a href="./" class="collect"></a>
                </div>
              </div>

            </div>
            <div class="bangdan">
              <ul class="bangdanul">
                <li class="bangdanli" v-for="xgbang in arrNew.slice(0,10)">
                  <span class="numtop">1</span>
                  <a href="/#" :title="xgbang.name" class="dan">{{xgbang.name}}</a>
                  <div class="btndan">
                    <a href="/#" title="播放"></a>
                    <a href="/#" title="添加至播放列表"></a>
                    <a href="/#" title="收藏"></a>
                  </div>
                </li>
                <div class="check_more">
                  <a href="/#">查找全部></a>
                </div>
              </ul>
            </div>
          </div>
          <!--原创-->
          <div class="bsb">
            <div class="bsbtop">
              <div class="coverimg">
                <img src="http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100" alt="">
                <a href="/#" title="原创榜" class="coverimga"></a>
                <a href="/#" class="bgimga"></a>
              </div>
              <div class="tit">
                <a href="./#"><h3>网易原创歌曲榜</h3></a>
                <div class="btnicon">
                  <a href="./" class="play"></a>
                  <a href="./" class="collect"></a>
                </div>
              </div>

            </div>
            <div class="bangdan">
              <ul class="bangdanul">
                <li class="bangdanli" v-for="orig in arrOriginal.slice(0,10)">
                  <span class="numtop">1</span>
                  <a href="/#" :title="orig.name" class="dan">{{orig.name}}</a>
                  <div class="btndan">
                    <a href="/#" title="播放"></a>
                    <a href="/#" title="添加至播放列表"></a>
                    <a href="/#" title="收藏"></a>
                  </div>
                </li>
                <div class="check_more">
                  <a href="/#">查找全部></a>
                </div>
              </ul>
            </div>
          </div>
        </div>


      </div>
      <div class="downright">
        <div class="right1">
          <p class="content1">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a href="/#" class="btn">用户登录</a>
        </div>
        <div class="singer">
          <h3 class="s_h3">
            <span>入驻歌手</span>
            <a href="/#">查看全部></a>
          </h3>
          <ul class="ulsinger">
            <li class="ulsingerli" v-for="sing in arrSinger.slice(0,5)">
              <div class="singerimg">
              <img :src="sing.picUrl" alt="">
              </div>
                <div class="singertit">
                  <h4>
                    <span>{{sing.name}}</span>
                  </h4>
                <p>台湾歌手张惠妹</p>
              </div>
            </li>
          </ul>
          <div class="btndiv">
            <a href="/#" class="btn">申请成为网易音乐人</a>
          </div>
        </div>
        <div class="singer">
          <h3 class="s_h3">
            <span>热门主播</span>
          </h3>
          <ul class="hotdj">
            <li>
              <a href="/#" class="aimg">
                <img src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt="">

              </a>
              <div class="hotdj_name">
                <p>
                  <a href="/#">陈立</a>
                  <span class="icon_v"></span>
                </p>
                <p>心理学家、美食家陈立教授</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer1">
        <div class="footer1_left">
          <p class="servers">
            <a href="/#">服务条款</a>
            <span>|</span>
            <a href="/#">隐私政策</a>
            <span>|</span>
            <a href="/#">儿童隐私政策</a>
            <span>|</span>
            <a href="/#">版权投诉指引</a>
            <span>|</span>
            <a href="/#">意见反馈</a>
            <span>|</span>
          </p>
          <p class="copy">
            <span>网易公司版权所有 &copy;1997-2019</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="/#">浙网文[2018]3506-263号</a>
          </p>
          <p class="copy">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href="/#">ncm5990@163.com</a>
          </p>
        </div>
        <ul class="footer1_right">
          <li class="unit">
            <a href="/#" class="user"></a>
            <span class="tt_user"></span>
          </li>
          <li class="unit">
            <a href="/#" class="music"></a>
            <span class="tt_music"></span>
          </li>
          <li class="unit">
            <a href="/#" class="admire"></a>
            <span class="tt_admire"></span>
          </li>
          <li class="unit">
            <a href="/#" class="reward"></a>
            <span class="tt_reward"></span>
          </li>
        </ul>
      </div>
    </div>
    <a href="/#" class="top"></a>
  </div>
</template>
<script>
  import Vue from 'vue';
  import $ from "jquery";
  import axios from "axios"
  Vue.use(axios);
  export default {
    data(){
      return{
          arrImg:[],
          index:0,
          timer : null,
          arrColor:[
              'http://p1.music.126.net/m8FBNR1FW_xugNSC71DyxQ==/109951164385419448.jpg',
              'http://p1.music.126.net/spsE7mp13Sk8yK62v5cOBQ==/109951164385165534.jpg',
              'http://p1.music.126.net/3KIXiLehV-M8Eygp8M0lrA==/109951164385172922.jpg',
              'http://p1.music.126.net/Uxov4xrjpvunFK65GkYQLA==/109951164385172481.jpg',
              'http://p1.music.126.net/uymNPZ27oyiw6vfNvNFa9w==/109951164385189634.jpg',
              'http://p1.music.126.net/mAfvwHwPSxWriFlZPdNTkg==/109951164386605196.jpg',
              'http://p1.music.126.net/FBmSAyP_zfEiWgPLIAGNMg==/109951164386735510.jpg',
              'http://p1.music.126.net/CTEQJCBxRdtVnc3HZoTJHQ==/109951164386616837.jpg',

          ],
          arrSmallImg:[],
          arrSinger:[],
          arrAlbum:[],
          arrBang:[],
          arrNew:[],
          arrOriginal:[]
      }
    },
    methods:{
//       获取数据
      getImg(){
        axios.get("http://localhost:3000/banner").then(date=>{
          date.data.banners.forEach((val,i) =>{
            this.arrImg.push(val.imageUrl)
          });
        });
            axios.get("http://localhost:3000/personalized?limit").then(dat=>{
                this.arrSmallImg = dat.data.result
            });
          axios.get("http://localhost:3000/artist/list?cat=5001").then(sin=>{
              this.arrSinger = sin.data.artists;
              console.log(this.arrSinger)
          });
          axios.get("http://localhost:3000/album/newest").then(alb=>{
              this.arrAlbum = alb.data.albums;
          });
          //飙升榜数据
          axios.get("http://localhost:3000/top/list?idx=3").then(bang=>{
              this.arrBang = bang.data.playlist.tracks;
          });
          //新歌榜
          axios.get("http://localhost:3000/top/list?idx=0").then(new1=>{
              this.arrNew = new1.data.playlist.tracks;
          });
          //原创
          axios.get("http://localhost:3000/top/list?idx=2").then(ori=>{
              this.arrOriginal = ori.data.playlist.tracks;
          });
      },
//   banner定时器
      getInterVal(){
        this.timer = setInterval(()=>{
              this.index++;
              if(this.index == this.arrColor.length){
                this.index = 0;
              }
          },3000)
      },
 /*       //切换背景颜色
        getColor(){
                this.changeI++;
                if(this.changeI == this.arrColor.length){
                    this.changeI = 0;
                }
        },
        getLeftColor(){
            this.changeI--;
            if(this.changeI < 0 ){
                this.changeI = this.arrColor.length-1;
            }
        },*/
        //鼠标进入
        into(){
          clearInterval(this.timer);
      },
        //鼠标移出
      out(){
        this.getInterVal();
          // this.getColor();
      },
        //点击左边
      leftImage(){
        this.index--;
        if(this.index <0){
          this.index = this.arrImg.length-1;
        };
          this.getLeftColor();
      },
        //点击右边
      rightImage(){
        this.index++;
        if(this.index == this.arrImg.length){
          this.index = 0;
        };
          this.getColor()
      },
        //排行榜颜色
        /*changeColor(){
            $(".numtop:eq(3)").css("color","yellow")
        },*/
        //点击切换
      /*changeImage(){

      }*/
  },
    created(){
      this.getImg();
      this.getInterVal();
       // this.timer = setInterval(this.getColor,3000)
       //  this.changeColor();
    },
        filters:{
           num:function (vall) {
               return Math.floor(vall / 10000) +"万"
           }
       },

  }
</script>
<style scoped="">
  .banner{
    width: 100%;
    height: 336px;
    /*border:1px solid #cccccc;*/
  }
  .v-enter .v-leave-to{
    opacity: 1;
  }
  .v-enter-active .v-leave-active{
    transition: all 1s;
  }
  .banner>.bgc{
    width: 100%;
    height: 100%;
  }
  .content{
    width: 982px;
    height: 336px;
    margin:  0 auto;
    /*border:1px solid #cccccc;*/
    position: relative;
    box-sizing: border-box;
    z-index: 10;
  }
  .content>span{
    font-size: 60px;
    color: #f5f5f5;
  }
  .content>span:hover{
    background-color:rgba(0,0,0,.5);
    cursor: pointer;
  }
  .content>span:first-of-type{
    position: absolute;
    top: 41%;
    right:-60px ;
  }
  .content>span:last-of-type{
    position: absolute;
    top: 41%;
    left:-60px ;
  }
  .content>img{
    height: 336px;
    width: 730px;
  }
  .content_right{
    height: 336px;
    width: 252px;
    /*border:1px solid #cccccc;*/
    float: right;
    background: url("../assets/download.png");
    position: relative;
  }
  .content_right:hover{
    cursor: pointer;
  }
  .content_right>p{
    font-size: 12px;
    color:#8d8d8d;
    margin:10px auto;
    position: absolute;
    bottom: 30px;
    left:10px;
  }
  .down{
    width: 100%;
    height: 1430px;
    background-color: #f5f5f5;
    /*border: 1px solid #cccccc;*/
  }
  .down2{
    width: 982px;
    height: 100%;
    box-sizing: border-box;
    margin:  0 auto;
    border:1px solid #cccccc;
    border-bottom: none;
    background-color:#ffffff ;
  }
  /*.down::after{*/
  /* content:"";*/
  /*  display: block;*/
  /*  height: 100%;*/
  /*  clear: both;*/
  /*}*/
  .downleft{
    height: 523px;
    width: 689px;
    margin-left:20px;
    padding-top: 20px;
    float: left;
  }
  .downright{
    height: 100%;
    width: 250px;
    border: 1px solid #cccccc;
    border-bottom: none;
    border-right: none;
    float: right;
    /*margin-top: -543px;*/
  }
  .downright>.right1{
    height: 126px;
    width: 250px;
    background: url("https://s2.music.126.net/style/web2/img/index/index.png?ac1406bd35e0c0340bacb83102534b6a") no-repeat;
  }
  .downright>.right1>.content1{
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    font-size: 12px;
    color: #666;
  }
  .hot{
    height: 33px;
    padding: 0 10px 0 34px;
    border-bottom: 2px solid #C10D0C;
    background:url("https://s2.music.126.net/style/web2/img/index/index.png?ac1406bd35e0c0340bacb83102534b6a") no-repeat;
    background-position:-225px -156px;
  }
  .hot>.recommend{
    float: left;
    font-size: 20px;
    color: #333333;
    text-decoration: none;
    font-weight: normal;
    line-height: 28px;
  }
  .albumall{
    width: 689px;
    height: 186px;
    border: 1px solid #cccccc;
    background-color: #f5f5f5;
    margin: 20px auto 40px;
    position: relative;
  }
  .albumul{
    width:645px;
    height:180px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
  }
  .albumul1{
    /*width:645px;*/
    height:150px;
    position: absolute;
    top: 0;
    left: -645px;
    margin: 28px 0 0 4px;
    overflow: hidden;
  }
  .albumli{
    width: 118px;
    height: 115px;
    float: left;
    margin-left:10px;
    position:relative;
  }
  .albumli img{
    width: 100px;
    height: 100px;
  }
  .albumli>p>a{
    display: inline-block;
    text-decoration: none;
    font-size: 12px;
    overflow: hidden;
    width:100px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .albumli>p>a:hover{
    text-decoration: underline;
  }
  .my{
    margin-top: 6px;
    color: #333333;
  }
  .sin{
    color: #666666;
  }
  .right11,.left11{
    display: inline-block;
    width: 17px;
    height: 17px;
    position: absolute;
  }
  .left11{
    background: url("../assets/index.png");
    background-position:153px -74px;
    top: 42%;
    left:5px;
  }
  .left11:hover{
    background: url("../assets/index.png");
    background-position:133px -74px;
  }
  .right11{
    background: url("../assets/index.png");
    background-position:524px -74px;
    top: 42%;
    right:5px;
  }
  .right11:hover{
    background: url("../assets/index.png");
    background-position:504px -74px;
  }
  .black{
    display:inline-block;
    width: 118px;
    height: 100px;
    background: url("../assets/black.png") no-repeat;
    background-position:0 -570px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .albumli>div:hover .iconplay{
    display: block;
  }
  .iconplay:hover{
    background: url("../assets/icn_ply_hvr.png") no-repeat;
  }
  .iconplay{
    display:none;
    width: 22px;
    height: 22px;
    background: url("../assets/icn_ply.png") no-repeat;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  .bgi{
    display: inline-block;
    width: 118px;
    height: 11px;
    background: url("../assets/index.png");
    background-position: 153px 0px;
    position: absolute;
    top: 100px;
    left: 0px;
  }
  .tab{
    float: left;
    margin: 7px 0 0 20px;
  }
  .tab>a{
    text-decoration: none;
    font-size: 12px;
    color:#666666;
  }
  .tab>.line{
    color:#cccccc;
    margin: 0 10px;
  }
  .more{
    float: right;
    color: #666666;
    font-size: 12px;
    margin-top: 10px;
    margin-right: 5px;
  }
  .more:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  .blank{
    margin-top: 14px;
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background: url("https://s2.music.126.net/style/web2/img/index/index.png?ac1406bd35e0c0340bacb83102534b6a") no-repeat;
    background-position: 0 -240px;
    float: right;
  }
  .ulplay{
    margin: 20px 0px 0 -42px;
    height: 523px;
  }
  .downleft .ulplay li{
    width: 140px;
    height: 204px;
    padding-left: 42px;
  }
  .ulplay>li{
    float: left;
    display: inline-block;
    width: 140px;
    height: 188px;
    overflow: hidden;
    padding: 0 0 30px 50px;
    line-height: 1.4;
  }
  .liimg{
    position: relative;
  }
  .msk {
    background-position: 0 0;
  }
  .msk {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .liimg>img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .listall{
    width:687px;
    height: 470px;
    border: 1px solid #cccccc;
    background-color: #f4f4f4;
    margin: 20px auto 40px;
    box-sizing: border-box;
  }
  .listall>.bsb{
    width:227px;
    height: 470px;
    border-right: 1px solid #cccccc;
    float: left;
  }
  .listall>.bsb:last-of-type{
    border-right:none;
  }
  .bsbtop{
    height: 100px;
    margin: 20px 0 0 20px;
    position: relative;
  }
 /*#no:first-of-type{
    color: #c10d0c;
  }
  #no:nth-of-type(2){
    color: #c10d0c;
  }
  #no:nth-of-type(3){
    color: #c10d0c;
  }*/
  .numtop{
    /*color: #cccccc;*/
    color: #c10d0c;
    float: left;
    position: relative;
    width: 35px;
    height: 32px;
    margin-left: -32px;
    text-align: center;
    font-size: 16px;
    line-height: 32px;
  }
  .bangdanli{
    width: 180px;
    height: 32px;
    vertical-align: middle;
    margin-left: 32px;
  }
  .coverimga{
    display: inline-block;
    width: 80px;
    height: 80px;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .coverimg{
    width: 80px;
    height: 80px;
    float:left;
    position: relative;
  }
  .bgimga{
    display: inline-block;
    width: 80px;
    height: 15px;
    background: url("../assets/index.png");
    background-position: 153px 0px;
    position: absolute;
    top: 80px;
    left:0px;
  }
  .coverimg>img{
    width: 80px;
    height: 80px;
  }
  .tit{
    margin-top: 5px;
  }
  .tit,.btnicon{
    float:left;
    margin-left: 10px;
  }
  .btnicon{
    margin-top: 10px;
  }
  .tit>a{
    text-decoration: none;
  }
  .tit>a>h3{
    font-size: 14px;
    color: #333333;
  }
  .tit>a:hover{
    color: #333333;
    text-decoration: underline;
  }
  .btnicon>.play,.btnicon>.collect{
    display: inline-block;
    width: 22px;
    height: 22px;
  }
  .btnicon>.play{
    background: url("../assets/index.png") no-repeat;
    background-position: -267px -205px;
    position: absolute;
    top:32px;
    left: 93px;
  }
  .btnicon>.play:hover{
    background: url("../assets/index.png") no-repeat;
    background-position: -267px -235px;
    position: absolute;
    top:32px;
    left: 93px;
  }
  .btnicon>.collect{
    background: url("../assets/index.png") no-repeat;
    background-position: -300px -205px;
    position: absolute;
    top:32px;
    left: 123px;
  }
  .btnicon>.collect:hover{
    background: url("../assets/index.png") no-repeat;
    background-position: -300px -235px;
    position: absolute;
    top:32px;
    left: 123px;
  }
  .dan{
    display: inline-block;
    font-size: 12px;
    text-decoration: none;
    color: black;
    line-height: 32px;
    width: 90px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .dan:hover{
    text-decoration: underline;
  }
  .btndan>a{
    float: left;
    display: inline-block;
    width: 17px;
    height: 17px;
    margin-left: 5px;
    line-height: 32px;
  }
  .bangdanli:hover .btndan{
    display: block;
  }
  .btndan{
    height: 19px;
    display: none;
    float: right;
    width: 82px;
    margin-top: 7px;
  }
  .btndan>a:first-of-type{
    margin-right: 2px;
    background: url("../assets/index.png") no-repeat;
    background-position:-267px -268px;
  }
  .btndan>a:first-of-type:hover{
    background: url("../assets/index.png") no-repeat;
    background-position:-267px -288px;
  }
  .btndan>a:nth-of-type(2){
    background: url("../assets/icon.png") no-repeat;
    background-position:0 -700px;
  }
  .btndan>a:nth-of-type(2):hover{
    background: url("../assets/icon.png") no-repeat;
    background-position:-22px -700px;
  }
  .btndan>a:last-of-type{
    background: url("../assets/index.png") no-repeat;
    background-position:-296px -268px;
  }
  .btndan>a:last-of-type:hover{
    background: url("../assets/index.png") no-repeat;
    background-position:-296px -288px;
  }
  .dec{
    margin: 8px 0 3px;
    font-size: 14px;
    width: 100%;
  }
  .dec>a{
    color: black;
    text-decoration: none;
  }
  .dec>a:hover{
    text-decoration: underline;
  }
  .bottom{
    width: 140px;
    height: 27px;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    bottom: 0;
    left: 0;
    line-height: 27px;
  }
  .bottom>a{
    float: right;
    text-decoration: none;
    color: #f5f5f5;
    margin-top: 8px;
    margin-right: 5px;

  }
  .bottom>span{
    color: #f5f5f5;
    font-size: 12px;
    margin-left: 5px;
  }
  .right1>.btn{
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    margin: 0 auto;
    text-decoration: none;
    background-color: #cb0d14;
    border-radius: 3px;
  }
  .right1>.btn:hover{
    background-color: rgb(233,39,47);
  }
  .singer>.s_h3{
    padding-top: 10px;
    height: 32px;
    width: 210px;
    border-bottom: #cccccc 1px solid;
    margin: 0 auto;
    /*padding-bottom: 5px;*/
  }
  .singer>.s_h3>span{
    font-size: 12px;
    line-height: 32px;
  }
  .singer>.s_h3>a{
    text-decoration: none;
    color: #666666;
    font-size: 12px;
    float: right;
    line-height: 32px;
  }
  .singer>.s_h3>a:hover{
    text-decoration: underline;
  }
  .singertit{
    float: left;
    width: 133px;
    height: 60px;
    padding-left: 14px;
    border: 1px solid #e9e9e9;
    border-left: none;
    background-color: #fafafa;
  }
  .ulsinger>.ulsingerli:hover{
    cursor: pointer;
  }
  .ulsingerli{
    width: 210px;
    height:62px;
    margin-top: 15px;
  }
  .singertit:hover{
    background-color: #f5f5f5;
  }
  .singertit>h4>span{
    font-size: 14px;
  }
  .singertit>h4{
    margin-top: 8px;
    color: #333333;
  }
  .singertit>p{
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #666666;
    margin-top: 10px;
  }
  .singerimg{
    height: 62px;
    width: 62px;
    float: left;
  }
  .ulsinger{
    width: 230px;
    height: 380px;
    margin-left: 20px;
    margin-top: 20px;
  }
  .singerimg>img{
    width: 60px;
    height:60px;
  }
  .btndiv{
    width: 210px;
    height: 31px;
    border: 1px solid #cccccc;
    margin-left: 20px;
    border-radius: 4px;
    background-color:#fafafa;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .btndiv>.btn{
    text-align: center;
    line-height: 31px;
    padding-left: 50px;
    font-weight: bold;
    font-size: 12px;
    color: #333;
    text-decoration: none;
  }
  .btndiv:hover{
    background-color:#ffffff;
  }
  .aimg{
    display: inline-block;
    width: 40px;
    height:43.5px;
    float:left;
  }
  .aimg>img{
    width: 40px;
    height:40px;
  }
  .hotdj{
    width: 230px;
    height: 250px;
    margin: 20px 0 0 20px;
  }
  .hotdj>li{
    width: 210px;
    height: 50px;
  }
  .hotdj_name{
    float:left;
    margin-left: 10px;
  }
  .hotdj_name>p{
    font-size: 12px;
  }
  .hotdj_name>p>a{
    color:#333333;
    text-decoration: none;
  }
  .hotdj_name>p>a:hover{
    text-decoration: underline;
  }
  .hotdj_name>p:last-of-type{
    color: #666666;
    margin-top: 6px;
  }
  .icon_v{
    display: inline-block;
    width: 11px;
    height: 13px;
    background: url("../assets/icon.png") no-repeat;
   background-position: 0 1px;
  }
  .check_more>a{
    float: right;
    font-size: 12px;
    text-decoration: none;
    color:black;
    margin-right: 20px;
  }
  .check_more>a:hover{
    text-decoration: underline;
  }
.footer{
  width: 100%;
  height: 149px;
  border-top: 1px solid #cccccc;
  background-color: #f2f2f2;
}
  .footer1{
    width: 980px;
    height: 91px;
    margin: auto;
  }
  .footer1>.footer1_left{
    float: left;
    width: 520px;
    height: 87px;
  }
  .footer1_left>.servers>a,.footer1_left>.servers>span{
    text-decoration: none;
    color: #c2c2c2;
    font-size: 12px;
  }
  .footer1_left>.servers>span{
    margin: 0 8px 0 10px;
  }
  .footer1_left>.servers>a:hover{
    text-decoration: underline;
  }
  .copy{
    margin-left: 0px;
  }
  .copy>span{
    color: #666666;
    font-size: 12px;
  }
  .copy>a{
    text-decoration: none;
    color: #666666;
    font-size: 12px;
  }
  .copy>a:hover{
    text-decoration: underline;
  }
  .copy>span:nth-of-type(2){
    margin-left: 10px;
  }
  .footer1_left>p:first-of-type{
    margin-top: 10px;
  }
  .footer1_left>p:nth-of-type(2){
    margin-top: 8px;
  }
  .footer1_left>p:nth-of-type(3){
    margin-top:8px;
  }
  .footer1_right{
    width: 330px;
    margin-top: 21px;
    float: right;
  }
  .footer1_right>.unit:first-of-type{
    margin-left: 0px;
  }
  .footer1_right>.unit{
    float: left;
    width: 60px;
    height: 70px;
    margin-left: 30px;
    text-align: center;
    color: #666;
  }
  .footer1_right>.unit{
    float: left;
    width: 60px;
    height: 70px;
    margin-left: 30px;
    text-align: center;
    color: #666;
  }
  .footer1_right>.unit{
    float: left;
    width: 60px;
    height: 70px;
    margin-left: 30px;
    text-align: center;
    color: #666;
  }
  .footer1_right>.unit>a{
    display: inline-block;
    width: 50px;
    height: 45px;
  }
  .footer1_right>.unit>span{
    display: inline-block;
    margin: 5px 5px 0;
    width: 52px;
    height: 14px;
  }
  .footer1_right>.unit>.user{
    background: url("../assets/foot_enter_new.png") no-repeat;
    background-size: 110px 450px;
    background-position: -63px -101px;
  }
  .footer1_right>.unit>.tt_user{
    background: url("../assets/foot_enter_tt.png") no-repeat;
    background-position: -1px -91px;
    background-size: 180px 100px;
  }
  .footer1_right>.unit>.music{
    background: url("../assets/foot_enter_new.png") no-repeat;
    background-size: 110px 450px;
    background-position: 0px 0px;
  }
  .footer1_right>.unit>.tt_music{
    background: url("../assets/foot_enter_tt.png") no-repeat;
    background-position: 0px 0px;
    background-size: 180px 100px;
  }
  .footer1_right>.unit>.admire{
    background: url("../assets/foot_enter_new.png") no-repeat;
    background-size: 110px 450px;
    background-position: -60px -50px;

  }
  .footer1_right>.unit>.tt_admire{
    background: url("../assets/foot_enter_tt.png") no-repeat;
    background-position: 0 -54px;
    background-size: 180px 100px;
  }
  .footer1_right>.unit>.reward{
    background: url("../assets/foot_enter_new.png") no-repeat;
    background-size: 110px 450px;
    background-position: 0 -101px;
  }
  .footer1_right>.unit>.tt_reward{
    background: url("../assets/foot_enter_tt.png") no-repeat;
    background-position: -1px -72px;
    background-size: 180px 100px;
  }
  .top{
    display: block;
    position: fixed;
    left: 50%;
    margin-left: 500px;
    bottom: 160px;
    width: 49px;
    height: 44px;
    background: url("../assets/sprite.png");
    background-position: -265px -47px;
  }
  .top:hover{
    background: url("../assets/sprite.png");
    background-position: -325px -47px;
  }
</style>
