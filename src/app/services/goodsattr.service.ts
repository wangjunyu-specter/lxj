import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodsattrService {
  num: number; //套装几层结构
  suitRuleInfo: object = {}; //套装信息 如 {"6692398":"0_26_0_2","6692393":"0_24_0_2"} //{套装ID:第一层_第二层_第三层_第四层}
  paramsSort: any[] = [];//已经设置的层级ID及值[0:21,1:0,2:0,3:5]
  paramsArr: any[] = [];//每层可选范围[0:[21,11],1:[2]],
  canNotArr: any[] = [];//不能选数组，返回给回调函数使用
  tempCan: any[] = [];//临时可选
  enddata: any;
  isclick: boolean = false; // 是否购买
  constructor() { }
  //配置
  clear() {
    this.num = 0; //套装几层结构
    this.suitRuleInfo = {}; //套装信息 如 {"6692398":"0_26_0_2","6692393":"0_24_0_2"} //{套装ID:第一层_第二层_第三层_第四层}
    this.paramsSort= [];//已经设置的层级ID及值[0:21,1:0,2:0,3:5]
    this.paramsArr= [];//每层可选范围[0:[21,11],1:[2]],
    this.canNotArr= [];//不能选数组，返回给回调函数使用
    this.tempCan = [];//临时可选
    this.enddata = null;
    this.isclick = false; // 是否购买
  }
  config (obj){
    this.suitRuleInfo = obj.suitRuleInfo;
    this.init();
  }
  //设置信息
  set(position, val){
    this.paramsSort[position] = val;
    this.singleInit();
    this.out();
  }
  //删除信息
  unset(position){
    this.paramsSort[position] = 0;
    this.singleInit();
    this.out();
  }
  //全局初始化
  init(){
    //判断套装使用的几层模型
    if(!this.num){
      var suitRuleInfo = this.suitRuleInfo;
      for(var i in suitRuleInfo){
        if(this.num){//只执行一次
          break;
        }
        var frontValArr = suitRuleInfo[i].split("_");
        this.num = frontValArr.length;
      }
    }

    //根据结构类型创建参数对象
    for(let i = 0; i < this.num; i++){
      this.paramsSort[i]  = 0;
      this.paramsArr[i]   = [];
    }

    //每层可选范围
    for(var i in this.suitRuleInfo){
      var curSuitRuleInfo = this.suitRuleInfo[i].split("_");
      for(var j in curSuitRuleInfo){
        if(this.inArr(curSuitRuleInfo[j],this.paramsArr[j]) < 0){
          if(curSuitRuleInfo[j] > 0) {
            if (!this.paramsArr[j]) {
              continue;
            }
            this.paramsArr[j].push(curSuitRuleInfo[j]);
          }
        }
      }
    }
  }
  //临时变量初始化，循环中使用的变量［将每层可选的项置为空］
  tempInit(){
    for(var i=0; i<this.num; i++){
      this.tempCan[i]     = [];
    }
  }
  //单次初始化变量，每次选择变更时要调整的量［将每层不可选的项置为空］
  singleInit(){
    for(var i=0; i<this.num; i++){
      this.canNotArr[i]   = [];
    }
  }
  //数组判断
  inArr(val,IdArr){
    var flag: any = -1;
    for(var i in IdArr){
      if(val == IdArr[i]){
        flag = i;
      }
    }
    return flag;
  }
  //数组取差集 a与b的差集
  diffArr(a,b){
    var c = [];
    for(var i in b){
      if(this.inArr(b[i],a) < 0){
        c.push(b[i]);
      }
    }
    return c;
  }
  //复制数组
  copyArray(object){
    var newObj  = [];
    for(var i in object){
      newObj[i]   = object[i];
    }
    return newObj;
  }
  //外部输出
  out(){
    //判断当前设置了几个层级
    var number  = 0;
    for(var i in this.paramsSort){
      if(this.paramsSort[i] || !this.paramsArr[i].length){
        number++;
      }
    }
    //筛选
    this.loopJurdge(number);

    //如果所有层级选择完整，且有符合条件的数据
    var suitId:any = -1;
    if(number == this.num){
      var curPattren  = this.createPattren(this.paramsSort);
      for(var curSuitId in this.suitRuleInfo){
        var pattren = new RegExp(curPattren);
        if(pattren.test(this.suitRuleInfo[curSuitId])){
          suitId  = curSuitId;
          break;
        }
      }
    }

    //返回数据
    this.callBack(this.canNotArr, suitId);
  }
  //按需创建正则
  createPattren(positionObj){
    var pattrenArr  = new Array;
    for(var i=0; i<this.num; i++){
      var curVal  = '[0-9]+';
      if(i in positionObj){
        curVal  = positionObj[i];
      }
      pattrenArr.push(curVal);
    }
    var pattren     = pattrenArr.join('_');
    return pattren;
  }
  //递归筛选每个层级不可选 positionArr 位置数组  k当前联合值的个数  number最大联合值的个数
  loopJurdge(number,positionArr?, k?){
    if(!number){
      return false;
    }
    if(!positionArr){
      positionArr     = [];
    }
    if(!k){
      k   = 0;
    }

    //递归处理数据
    k = parseInt(k);
    for(var i = k ; i< this.num; i++){
      var curPositionArr      = this.copyArray(positionArr);
      if(this.paramsSort[i]){
        curPositionArr[i]   = this.paramsSort[i];

        if(curPositionArr.length <= number){
          var curk    = i+1;
          this.loopJurdge(number, curPositionArr, curk);
        }

        var curPattren      = this.createPattren(curPositionArr);
        this.jurdgeSuit(curPattren, curPositionArr);
      }
    }
    return false;
  }
  //获取一定不可选的套装数据
  jurdgeSuit(curPattren, positionArr){
    //重置临时变量
    this.tempInit();
    //判断正则
    var pattren         = new RegExp(curPattren);
    var suitRuleInfo    = this.suitRuleInfo;
    //匹配数据并解析［每个层级可选的项］
    for(var i in suitRuleInfo){
      var curVal  = suitRuleInfo[i];
      var flag    = pattren.test(curVal);
      if(flag){
        var curArr  = curVal.split("_");
        for(var j in curArr){
          if(this.inArr(curArr[j],this.tempCan[j]) < 0 && this.tempCan[j]) {
            this.tempCan[j].push(curArr[j]);
          }
        }
      }
    }
    //通过可选推导出各层级一定不能选的ID
    for(var i in this.tempCan){
      if(i in positionArr){
        continue;
      }
      var canNotArr       = this.diffArr(this.tempCan[i],this.paramsArr[i]);
      for(var j in canNotArr){
        //本次正则选择的层级不在范围里
        if(this.inArr(canNotArr[j], this.canNotArr[i]) < 0){
          this.canNotArr[i].push(canNotArr[j]);
        }
      }
    }
  }
  callBack(data, skuId){
    this.isclick = skuId !== -1 ? false : true;
    this.enddata = data;
    //可选与不可选
  };
}
