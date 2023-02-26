import React from "react";
import { Input } from "../Public";

const citys = [
  { value: "", name: "請選擇縣市" },
  { value: "KLU", name: "基隆市" },
  { value: "TPH", name: "新北市" },
  { value: "TYC", name: "桃園市" },
  { value: "HSH", name: "新竹縣" },
  { value: "HSC", name: "新竹市" },
  { value: "MAC", name: "苗栗市" },
  { value: "MAL", name: "苗栗縣" },
  { value: "TXG", name: "臺中市" },
  { value: "CWH", name: "彰化縣" },
  { value: "CWS", name: "彰化市" },
  { value: "NTC", name: "南投市" },
  { value: "NTO", name: "雲林縣" },
  { value: "YLH", name: "嘉義縣" },
  { value: "CHY", name: "嘉義市" },
  { value: "CYI", name: "台南市" },
  { value: "TNN", name: "高雄市" },
  { value: "KHH", name: "屏東縣" },
  { value: "IUH", name: "屏東市" },
  { value: "PTS", name: "宜蘭縣" },
  { value: "ILN", name: "花蓮縣" },
  { value: "ILC", name: "花蓮市" },
  { value: "HWA", name: "台東市" },
  { value: "HWC", name: "台東縣" },
  { value: "TTC", name: "金門縣" },
  { value: "TTT", name: "連江縣" },
];

function StepOne() {
  return (
    <form className="col col-12" data-phase="address">
      <h3 className="form-title">寄送地址</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-s1">
            <div className="input-label">稱謂</div>
            <div className="select-container">
              <select>
                <option value="mr" selected>
                  先生
                </option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-s2">
            <div className="input-label">姓名</div>
            <Input type="text" placeholder="請輸入姓名" />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-full">
            <div className="input-label">電話</div>
            <Input type="tel" placeholder="請輸入行動電話" />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-full">
            <div className="input-label">Email</div>
            <Input type="email" placeholder="請輸入電子郵件" />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-full">
            <div className="input-label">縣市</div>
            <div className="select-container">
              <select required>
                {citys.map((city) => (
                  <option key={city.name} value={city.value}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">地址</div>
            <Input type="text" placeholder="請輸入地址" />
          </div>
        </div>
      </section>
    </form>
  );
}

export default StepOne;
