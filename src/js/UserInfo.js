import {userInfo, popup} from '../index.js';
export class UserInfo {

  constructor(
    userName, //container
    userJob,
    userPhoto,//container
    inputName,
    inputJob,
    nameValueForm,//textCont
    jobValueForm,//textCont
    api
  ) {
    this.userName = userName;
    this.userJob = userJob;
    this.userPhoto = userPhoto;
    this.inputName = inputName;
    this.inputJob = inputJob;
    this.api = api;
    this.nameValueForm = nameValueForm;
    this.jobValueForm = jobValueForm;
    
    this.inputInfoApi = this.inputInfoApi.bind(this);
        
    this.upgradeUserInfo = this.upgradeUserInfo.bind(this);

    
    
  
  }
  string(nameStr, jobStr) {


    this.inputName.value = nameStr;
    this.inputJob.value = jobStr;
  }
  setUserInfoEdit() {
    this.nameValueForm = this.inputName.value;
    this.jobValueForm = this.inputJob.value;

  }
  updateUserInfo (data) {
    this.userName.textContent = data.name;
    this.userJob.textContent = data.about;
    this.userPhoto.setAttribute('style',
      `background-image: url(${data.avatar})`);
  }
  upgradeUserInfo() {
    this.userName.textContent = this.inputName.value;
    this.userJob.textContent = this.inputJob.value;
  }
  infoEditListener() {
    document.querySelector('.user-info__edit-button').addEventListener('click', function () {
      userInfo.string(document.querySelector(".user-info__name").textContent, document.querySelector(".user-info__job").textContent);
    });

  };
  infoApi() {
    this.api.getUserInfo()
      .then((data) =>  {

        return this.updateUserInfo(data);



      })
      .catch(function(err) {
        console.log(err);
      })
  }
  inputInfoApi() {
    this.api.setUserInfo(this.nameValueForm, this.jobValueForm)
      .then(function()  {
        popup.toggleEditPopup();

    


      })
      .then(function()  {
 

          this.upgradeUserInfo();


      })
      .catch((err) => {
        console.log(err);
      })
  } /**/
}



