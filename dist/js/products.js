"use strict";$(function(){var s=location.search.split("=")[1];$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:s},function(s){for(var t="",i=JSON.parse(s[0].goodsBenUrl),n=0;n<i.length;n++)t+='\n                <li><img src="'+i[n]+'" alt=""></li>';var e='\n    <div class="productIntro">\n        <div class="pItems">\n            <div class="pItemsMain">\n                <div class="pItemsName">\n                    <div class="cm">\n                        <h1 id="base_name-sf">'+s[0].goodsName+'</h1>\n                    </div>\n                </div>\n                <div class="pItemsPrice" id="price-sf">\n                    <div class="priceBox">\n                        <span class="dt">优选价：</span>\n                        <span class="rmb">￥</span>\n                        <strong class="price">'+s[0].price+'</strong>\n                    </div>\n                </div>\n                <div class="pItemsStock">\n                    <div class="dt">送至：</div>\n                    <div class="dd">\n                        <div class="store-selector">河南省郑州市金水区</div>\n                    </div>\n                </div>\n                <br>\n                <div class="pItemsChoose">\n                    <div class="chooseBtns" id="buy-btn-sf">\n                        <div class="pAmount">\n                            <span class="fl">\n                                <input type="text" id="number_267087" class="text" value="1">\n                            </span>\n                            <span class="fl">\n                                <a id="add-sell-num">+</a>\n                                <a id="reduce-sell-num">-</a>\n                            </span>\n                        </div>\n                        <div class="pBtn" id="cart-add-btn-sf">\n                            <a>\n                                <b></b> 加入购物车\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="pView">\n                <div id="pView">\n                    <div id="zoom-jpg" class="jqzoom">\n                        <img src="'+s[0].goodsListImg+'" alt="">\n                        <div id="jqzoomLens"></div>\n                    </div>\n                    <div id="zoomdiv">\n                        <img src="'+s[0].goodsListImg+'" alt="">\n                    </div>\n                    <div id="pic-list">\n                        <div class="pic-items">\n                            <ul>'+t+'</ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="pItemsSide">\n            <div class="sideWrap">\n                <div class="points">\n                    <ul>\n                        <li><img src="http://i.sfimg.cn/html/images/productattr3.png" alt=""></li>\n                        <li><img src="http://i.sfimg.cn/html/images/productattr2.png" alt=""></li>\n                        <li><img src="http://i.sfimg.cn/html/images/productattr4.png" alt=""></li>\n                    </ul>\n                </div>\n                <div class="temperature"></div>\n            </div>\n            <div class="pdetail">\n                <ul>\n                    <li style="height: 30px;"> 产地： <span>中国</span></li>\n                    <li>详情：'+s[0].detail+"</li>\n                    <li>商品编号："+s[0].goodsID+"</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n";$(".pWrap").html(e);var d=document.getElementById("pView"),l=document.getElementById("zoom-jpg"),a=document.getElementById("jqzoomLens"),o=(l.children[0],document.getElementById("zoomdiv")),c=o.children[0];l.onmouseover=function(){o.style.display="block",a.style.display="block"},l.onmouseout=function(){o.style.display="none",a.style.display="none"},l.onmousemove=function(s){var t=s||event,i=t.pageX-d.offsetLeft,n=t.pageY-d.offsetTop,e=i-a.offsetWidth/2-165,o=n-a.offsetHeight/2-200;e<=0&&(e=0),e>=l.offsetWidth-a.offsetWidth&&(e=l.offsetWidth-a.offsetWidth),o<=0&&(o=0),o>=l.offsetHeight-a.offsetHeight&&(o=l.offsetHeight-a.offsetHeight),a.style.left=e+"px",a.style.top=o+"px",c.style.left=-a.offsetLeft/l.offsetWidth*c.offsetWidth+"px",c.style.top=-a.offsetTop/l.offsetHeight*c.offsetHeight+"px"},$(".pic-items li").mousemove(function(){var s=$(this).children().attr("src");console.log(s,$("#zoom-jpg img").attr("src")),$("#zoom-jpg img").attr("src",s),$("#zoomdiv img").attr("src",s)}),$("#cart-add-btn-sf").click(function(){$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:s[0].goodsID},function(s){console.log(s),0==s&&alert("添加失败"),1==s&&alert("添加成功")})})}),$(".search4").click(function(){console.log("111"),location.href="cart.html"})});