import { UserService } from 'src/app/services/user.service';
/*
 * @Author: wjy-mac
 * @Date: 2019-12-18 15:01:09
 * @LastEditors  : wjy-mac
 * @LastEditTime : 2019-12-18 15:16:37
 * @Description: file content
 */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
declare var AMap;
@Component({
  selector: 'app-amap',
  templateUrl: './amap.component.html',
  styleUrls: ['./amap.component.scss'],
})
export class AmapComponent implements OnInit {
  @ViewChild('mapcontent', {static: true}) map_container: ElementRef;
  map: any;//地图对象
  data: any;
  constructor(public modalController: ModalController, private userfn: UserService) { }

  ngOnInit() {
    const mapdata = {//创建地图二维视口
      zoom: 11, //设置地图缩放级别
      rotateEnable: true,
      showBuildingBlock: true
    };
    const position = this.userfn.getLocation3();
    console.log(position)
    if (position.address) {
      mapdata['center'] = [position.lng, position.lat];
      this.data = {
        lnglat: position['lng'] + '|' + position['lat'],
        address: position.address
      }
    }
    const map = new AMap.Map(this.map_container.nativeElement, {
      view: new AMap.View2D(mapdata)
    });
    //显示地图层级与中心点信息
    const logMapinfo = () => {
      var zoom = map.getZoom(); //获取当前地图级别
      var center = map.getCenter(); //获取当前地图中心位置
      console.log(zoom);
      console.log(center);
      this.getPosition(center);
    };
    //绑定地图移动与缩放事件
    this.map = map;
    map.on('moveend', logMapinfo);
    map.on('zoomend', logMapinfo);
  }
  async getPosition(center) {
    const res2 = await this.lnglattoaddress([center['lng'], center['lat']]);
    const res = {
      lnglat: center['lng'] + '|' + center['lat'],
      address: res2['formattedAddress'],
    };
    if (!this.data) {
      this.data = {};
    }
    this.data.lnglat = res.lnglat;
    this.data.address = res.address;
  }
  async lnglattoaddress(lnglat) {
    return new Promise((resolve, reject) => {
      AMap.plugin('AMap.Geocoder', function() {
        const geocoder = new AMap.Geocoder();
        // const lnglat = [116.396574, 39.992706];
        geocoder.getAddress(lnglat, function(status, result) {
          if (status === 'complete' && result.info === 'OK') {
              // result为对应的地理位置详细信息
              resolve(result.regeocode);
          } else {
            reject();
          }
        });
      });
    });
  }
  close(data?) {
    this.map && this.map.destroy();
    this.modalController.dismiss(data);
  }
  sub() {
    this.close(this.data);
  }
}
