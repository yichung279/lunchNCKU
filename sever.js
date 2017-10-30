const express =require('express')
const app = express()
const port =10300

app.use(express.static(__dirname+'/pub'));

app.get("/ajax_data",function(req, res) {
  
  var list_breakfast=["黑色香蕉","無名早餐","阿公阿婆","老丘","緹克廚房","拉亞","阿寶","良晨吉食",
                     "濰克","元之氣","彩虹城堡","貓吐司","多麼胖","日十","鄉村","呷霸","少爺",
                     "吐司吐司","麥當勞","弘爺","吃土"];
  var list_lunch=["經典咖哩","元味屋","樂品屋","顏舍","大醬","煦悅","活力小廚","加依軒","阿莫","蒸蛋飯",
                  "錢鼠","麻辣李","阿強","四海遊龍","好事麵家","不倒翁","麥當勞","摩斯","肯德基",
                  "大肥鴨","奧莉薇","阿元","添福","廣越","食神滷味","鴨霸","醫餐","小赤佬","水餃之家",
                  "食為天","三媽","大呼過癮","湯師傅","日食堂","港記","華園","香香","萬客樓","紅番茄",
                  "目白簡餐","萬紅"];
  var list_dinner=["經典咖哩","元味屋","樂品屋","顏舍","大醬","煦悅","活力小廚","加依軒","阿莫","蒸蛋飯",
                   "錢鼠","麻辣李","阿強","四海遊龍","好事麵家","不倒翁","麥當勞","摩斯","肯德基",
                   "大肥鴨","奧莉薇","阿元","添福","廣越","食神滷味","鴨霸","醫餐","小赤佬","水餃之家",
                   "食為天","三媽","大呼過癮","湯師傅","日食堂","港記","華園","香香","萬客樓","紅番茄",
                   "目白簡餐","萬紅","無名米糕"];                                                                          
  var list_snack=["這麼胖了還要吃?","紅記","巷口","錢鼠","麻辣李","八八","黑工號","Q董","轉角","一點刈包",
                  "吳師傅","大水餃","四海","小東關東煮","歡喜"];
  var num_r=parseInt(Math.random()*100);   


  if("T"==req.query.breakfast ){
    res.send(`${list_breakfast[num_r%21]}`)
  }
  else if("T"==req.query.lunch){
      res.send(`${list_lunch[num_r%41]}`)
  }
  else if("T"==req.query.dinner){
      res.send(`${list_dinner[num_r%42]}`)
  }
  else if("T"==req.query.snack){
      res.send(`${list_snack[num_r%15]}`)
  }
  else{
    res.send("else????????????")
  }
   
  
  });
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
    });
