<script setup>
document.title = "Cook Your Phone 🔥";

const settings = {
  source: `https://cdn.iconscout.com/icon/free/png-512/free-settings-2844891-2365240.png?f=webp&w=256`,
  link: `intent://com.android.settings/#Intent;scheme=android-app;end`,
};
const galaxyStore = {
  source: `https://img.utdstc.com/icon/520/8be/5208bee71cdcb2b9fb82965e89aa8797806fde064b9c1dd878d2e26332184293:200`,
  link: `intent://com.android.settings/#Intent;scheme=android-app;end`,
};
const files = {
  source: `https://play-lh.googleusercontent.com/PXJtX6D0xyvnakG7idyf5BQMtcgry1BzSsEdpeZjIEvQ7O46p9LUgEUhOeATLWktQX8`,
  link: `intent://com.android.settings/#Intent;scheme=android-app;end`,
};
const smartLock = {
  source: `https://f-droid.org/repo/net.blumia.pineapple.lockscreen.oss/en-US/icon_ldOr8OetvIKXtuGTj2zcvlnLlDPFvSS2zmFuA8zwnDY=.png`,
  link: `intent://com.android.settings/#Intent;scheme=android-app;end`,
};
const chrome = {
  source: `https://static.vecteezy.com/system/resources/previews/022/484/505/non_2x/google-chrome-icon-logo-symbol-free-png.png`,
  link: `intent://com.android.chrome/#Intent;scheme=android-app;end`,
};
const youtube = {
  source: `https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg`,
  link: `intent://com.google.android.youtube/#Intent;scheme=android-app;end`,
};
const calculator = {
  source: `https://files.catbox.moe/ft4m2v.png`,
  link: `intent://com.sec.android.app.popupcalculator/#Intent;scheme=android-app;end`,
};
const login = {
  source: `https://files.catbox.moe/unya4s.jpg`,
  link: `intent://com.google.android.gsf.login.LoginActivity/#Intent;scheme=android-app;end`,
};
const allianceShield = {
  source: `https://files.catbox.moe/1knizz.png`,
  link: `intent://com.rrivenllc.shieldx/#Intent;scheme=android-app;end`,
};
const gmail = {
  source: `https://files.catbox.moe/q7l67r.jpg`,
  link: `mailto:google@gmail.com`,
};
const dial = {
  source: `https://oceanapk.net/wp-content/uploads/2023/05/samsung-dialer-apk.webp`,
  link: `tel:123456789`,
};
const map = {
  source: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/AppleMaps_logo.svg/2048px-AppleMaps_logo.svg.png`,
  link: `intent://com.google.android.apps.maps/#Intent;scheme=android-app;end%22%3E`,
};
const googleSearch = {
  source: `https://files.catbox.moe/vplfy6.png`,
  link: `intent://com.google.android.googlequicksearchbox/#Intent;scheme=android-app;end`,
};
const homelaucher = {
  source: `https://c.clc2l.com/t/e/c/ecran-daccueil-samsung-one-ui-LnQyap.png`,
  link: `intent://com.sec.android.app.launcher/#Intent;scheme=android-app;end`,
};


</script>

<template>
  <div class="container apps">
    <div class="row">
      <div class="col-3">
        <a class="container" :href="settings.link">
          <img :src="settings.source" class="icon" />
          <p class="label">Settings</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="galaxyStore.link">
          <img :src="galaxyStore.source" class="icon" />
          <p class="label">Galaxy Store</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="files.link">
          <img :src="files.source" class="icon" />
          <p class="label">Files</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="smartLock.link">
          <img :src="smartLock.source" class="icon" />
          <p class="label">Screen SmartLock</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="chrome.link">
          <img :src="chrome.source" class="icon" />
          <p class="label">Chrome</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="youtube.link">
          <img :src="youtube.source" class="icon" />
          <p class="label">YouTube</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="calculator.link">
          <img :src="calculator.source" class="icon" />
          <p class="label">Calculator</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="login.link">
          <img :src="login.source" class="icon" />
          <p class="label">Login Google</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="allianceShield.link">
          <img :src="allianceShield.source" class="icon" />
          <p class="label">Alliance Shield</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="gmail.link">
          <img :src="gmail.source" class="icon" />
          <p class="label">Gmail</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="dial.link">
          <img :src="dial.source" class="icon" />
          <p class="label">Dial</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="map.link">
          <img :src="map.source" class="icon" />
          <p class="label">Map</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="googleSearch.link">
          <img :src="googleSearch.source" class="icon" />
          <p class="label">Google Search</p>
        </a>
      </div>
      <div class="col-3">
        <a class="container" :href="homelaucher.link">
          <img :src="homelaucher.source" class="icon" />
          <p class="label">Home Launcher</p>
        </a>
      </div>
    </div>
  </div>
  <div class="more">
    <hr />
    <h6>More</h6>
    <a
      href="https://com.sec.android.app.modemui.activities.usb.settings/#Intent;scheme=android-app;end"
      >1. Open ADB
      <i class="fa-sharp fa-regular fa-arrow-up-right-from-square"></i
    ></a>
    <a
      href="https://com.sec.android.app.servicemodeapp/#Intent;scheme=promote_USBSettings_scheme;end"
      >2. Open USB Settings
      <i class="fa-sharp fa-regular fa-arrow-up-right-from-square"></i
    ></a>
    <a
      href="https://com.google.android.apps.googleassistant/#Intent;scheme=android-app;end"
      >3. Open Google Assistant
      <i class="fa-sharp fa-regular fa-arrow-up-right-from-square"></i
    ></a>
    <a
      href="https://com.android.settings/com.samsung.android.settings.biometrics.fingerprint.FingerprintEntry/#Intent;scheme=android-app;end"
      >4. Open Samsung Touch ID
      <i class="fa-sharp fa-regular fa-arrow-up-right-from-square"></i
    ></a>
    <a
      href="https://com.samsung.knox.securefolder/#Intent;scheme=android-app;end"
      >5. Open Samsung Secured Folder
      <i class="fa-sharp fa-regular fa-arrow-up-right-from-square"></i
    ></a>
    <a href="https://com.sec.android.easymover/#Intent;scheme=android-app;end"
      >6. Open Smart Switch App
      <i class="fa-sharp fa-regular fa-arrow-up-right-from-square"></i
    ></a>
    <a
      href="https://com.mi.android.globalfileexplorer/#Intent;scheme=android-app;end"
      >7. Open Mi File Manager
      <i class="fa-sharp fa-regular fa-arrow-up-right-from-square"></i
    ></a>
    <a href="https://com.xiaomi.midrop/#Intent;scheme=android-app;end"
      >8. Open Xiaomi ShareMe
      <i class="fa-sharp fa-regular fa-arrow-up-right-from-square"></i
    ></a>
    <a href="https://com.vivo.easyshare/#Intent;scheme=android-app;end"
      >9. Open Vivo EasyShare
      <i class="fa-sharp fa-regular fa-arrow-up-right-from-square"></i
    ></a>
    <a href="https://com.infinix.xshare/#Intent;scheme=android-app;end"
      >10. Open Xshare Mini
      <i class="fa-sharp fa-regular fa-arrow-up-right-from-square"></i
    ></a>
    <a href="https://com.coloros.backuprestore/#Intent;scheme=android-app;end"
      >11. Open OPPO Phone Clone
      <i class="fa-sharp fa-regular fa-arrow-up-right-from-square"></i
    ></a>
  </div>
  <div class="more">
    <hr />
    <a href="https://github.com/vnrom/bypass/raw/master/Bar_Settings.apk"
      >12. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Bar_Settings</a
    >
    <a
      href="https://galaxystore.samsung.com/detail/com.rrivenllc.shieldx?session_id=W_0a719781bf2f739158262639f4c63d35"
      >13. <i class="fa-regular fa-cloud-arrow-down"></i> Install Alliance
      Shield</a
    >
    <a href="https://galaxystore.samsung.com/detail/org.aospstudio.files"
      >14. <i class="fa-regular fa-cloud-arrow-down"></i> Install File
      Shortcut</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/Notification_Bar.apk"
      >15. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Notification_Bar</a
    >
    <a
      href="https://github.com/vnrom/bypass/raw/master/Package_Manager_v7.0.apk"
      >16. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Package_Manager</a
    >
    <a
      href="https://github.com/vnrom/bypass/raw/master/Package_Disabler_Pro_13.5.apk"
      >17. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Package_Disabler_Pro</a
    >
    <a
      href="https://github.com/vnrom/bypass/raw/master/Disable_PlayServices.xml"
      >18. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Disable_PlayServices.xml</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/Android_5_GAM.apk"
      >19. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Android_5_GAM</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/Android_6_GAM.apk"
      >20. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Android_6_GAM</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/Android_8-9-10_GAM.apk"
      >21. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Andoid_8-9-10_GAM</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/Google_Setting.apk"
      >22. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Google_Settings</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/FRP_Bypass.apk"
      >23. <i class="fa-regular fa-cloud-arrow-down"></i> Install FRP_Bypass</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/FRP_Android_7.apk"
      >24. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      FRP_Android_7</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/Test_DPC.apk"
      >25. <i class="fa-regular fa-cloud-arrow-down"></i> Install Test_DPC</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/QuickShortcutMaker.apk"
      >26. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      QuickShortcutMaker</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/Apex_Launcher.apk"
      >27. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Apex_Laucher</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/Nova_Launcher.apk"
      >28. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Nova_Launcher</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/Menu_Button.apk"
      >29. <i class="fa-regular fa-cloud-arrow-down"></i> Install Menu_Button</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/ES_File_Explorer.apk"
      >30. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      ES_File_Explorer</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/Setting.apk"
      >31. <i class="fa-regular fa-cloud-arrow-down"></i> Install Settings</a
    >
    <a
      href="https://github.com/vnrom/bypass/raw/master/Development_Settings.apk"
      >32. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Development_Settings</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/HushSMS.apk"
      >33. <i class="fa-regular fa-cloud-arrow-down"></i> Install HushSMS</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/Phone_Clone.apk"
      >34. <i class="fa-regular fa-cloud-arrow-down"></i> Install Phone_Clone</a
    >
    <a
      href="https://github.com/vnrom/bypass/raw/master/File_Commander_Manager.apk"
      >35. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      File_Commander_Manager</a
    >
    <a href="https://github.com/vnrom/bypass/raw/master/Smart_Switch_Mobile.apk"
      >36. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Smart_Switch_Mobile</a
    >
    <a
      href="https://frpbypass.romstage.com/wp-content/uploads/2022/01/FactoryReset_v1.3.apk"
      >37. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      FactoryReset_v1.3</a
    >
    <a
      href="https://www.dropbox.com/scl/fi/4v9pm639fcswx4v1tfm7r/Magisk-v27.0.apk?rlkey=nndf4i37gp3wxhp4or2psalyu&st=6twrbrx4&dl=1"
      >38. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Masgisk-v17.0</a
    >
    <a
      href="https://www.dropbox.com/scl/fi/jabijaxrassxsxjzml76z/Root-Checker_6.5.3_Apkpure.apk?rlkey=9nfeoyu8yn3a09nil3spsmwp4&st=njnyzr4g&dl=1"
      >39. <i class="fa-regular fa-cloud-arrow-down"></i> Install
      Root_Checker_6.5.3</a
    >
  </div>
  <footer>
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <a href="/">
          <img src="/thinology-title.svg" />
        </a>
        <p>
          Developed with passion and dedication by yours truly. Thank you for
          using the products of <a href="/about" style="color: whitesmoke">mine</a>.
        </p>
        <p>Currently v1.0.1.</p>
      </div>
      <div class="col-md-9 page-content">
        <p class="page-info">
          <i class="fa-sharp fa-regular fa-triangle-exclamation"></i
          ><span class="info-text">
            This page is exclusively dedicated to assisting private developers
            who have forgotten their passwords. It is important to note that
            this service is intended solely for legitimate recovery purposes and
            does not support any unauthorized access or bypassing of stolen
            devices.</span
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital@0;1&display=swap");

.icon {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: whitesmoke;
}
.label {
  font-size: x-small;
  text-align: center;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.more {
  gap: 5px;
  display: flex;
  flex-direction: column;
  margin: 4%;
  font-size: smaller;
}
.more a {
  margin: 0 4%;
}

.apps {
  margin-top: 5rem;
}

a {
  text-decoration: none;
  color: rgb(44, 135, 255);
}

footer {
  margin-top: 5rem;
  background-color: #43474b;
  color: whitesmoke;
  font-size: small;
  padding: 10px;
}

footer img {
  width: 13rem;
  filter: brightness(0) invert(1);
}

footer p {
  color: rgb(165, 165, 165);
  margin-left: 16px;
  margin-right: 16px;
}

.page-info {
  text-align: justify;
  color: rgb(238, 255, 86);
}

.page-content {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
