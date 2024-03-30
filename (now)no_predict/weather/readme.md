# React Native - Basic

- initialize (expo-cli) : `npx expo init <project_name>`
  - 選擇template時，我選擇的是 `minimal`。
    ![1711819570993](image/readme/1711819570993.png)
    但我發現 `blank` 和 `minimal` 都差不多，只是 `minimal` 的預設檔案(?)多了 `android` 和 `ios` (目測，詳細請觀察 temperature專案 (`blank`) 及 weather專案 (`minimal`) 的差別。)
- 執行 : `npx expo start`
- 電腦無法查看執行狀況 (除非下載模擬器)，需使用Android或iOS手機下載 `Expo` APP ，並掃描QRcode或自行輸入網址，才能查看畫面。
- 程式碼每次儲存時，手機APP會自動更新畫面，若有bug也會顯示在畫面中。