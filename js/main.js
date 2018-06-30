Vue.http.options.emulateJSON = true;
Vue.component('v-select', VueSelect.VueSelect);
Vue.component('carousel', VueCarousel.Carousel);
Vue.component('slide', VueCarousel.Slide);

var app = new Vue({
  el: '#apple-service-app',
  data: {
    devices: [],
    models: [],
    malfunctions: [],
    malfunctionsFullList: [],
    malfunction: [],
    depMaster: false,
    deviceId: false,
    modelId: false,
    malfunctionId: false,
    malfunctionVariant: false,
    panelOffset: document.getElementById("devices-scroll").offsetTop,
    fixPanel: false,
    showCallBackModal: false,
    showChangeModal: false,
    showMasterModal: false,
    showCourierModal: false,
    showChangesForm: false,
    showOrderModal: false,
    sendData: {
      formUserName: '',
      formUserPhone: '',
      formUserAddress: '',
      formUserImei: '',
      formUserEmail: '',
      formUserMsg: '',
      formUserPhoneOrEmail: ''
    }
  },
  methods: {
    onSubmitForm(form) {
      var formData = new FormData(document.getElementById(form.target.id));
      this.$http.post(form.target.action, formData).then(response => {
        if(response.error)
        {
          this.alertMsgError = true;
          this.alertMsg = response.error_msg;
        }
        else
        {
          var targetDiv = document.getElementById(form.target.id).getElementsByClassName("msg")[0];
          targetDiv.innerHTML = '<div class="form"><div class="text-center">Thank you for your request!</div></div>';
        }
      }, response => {
        this.alertMsgError = true;
        this.alertMsg = 'Status: \'' + response.status + '\' Text: \'' + response.statusText + '\'';
      });
    },
    onSubmitCallbackForm(form) {
      var formData = new FormData(document.getElementById('callback-form'));
      this.$http.post(form.target.action, formData).then(response => {
        //console.log(response);
        if(response.error)
        {
          this.alertMsgError = true;
          this.alertMsg = response.error_msg;
        }
        else
        {
          var targetDiv = document.getElementById("callbackModal").getElementsByClassName("modal-body")[0];
          targetDiv.innerHTML = '<div class="form"><div class="text-center">Thank you for your request!</div></div>';
        }
      }, response => {
        this.alertMsgError = true;
        this.alertMsg = 'Status: \'' + response.status + '\' Text: \'' + response.statusText + '\'';
      });
    },
    onSubmitChangeForm(form) {
      var formData = new FormData(document.getElementById('change-form'));
      this.$http.post(form.target.action, formData).then(response => {
        //console.log(response);
        if(response.error)
        {
          this.alertMsgError = true;
          this.alertMsg = response.error_msg;
        }
        else
        {
          var targetDiv = document.getElementById("changeModal").getElementsByClassName("form")[0];
          targetDiv.innerHTML = '<div class="form"><div class="text-center">Thank you for your request!</div></div>';
        }
      }, response => {
        this.alertMsgError = true;
        this.alertMsg = 'Status: \'' + response.status + '\' Text: \'' + response.statusText + '\'';
      });
    },
    onSubmitChangeBottomForm(form) {
      var formData = new FormData(document.getElementById('change-bottom-form'));
      this.$http.post(form.target.action, formData).then(response => {
        //console.log(response);
        if(response.error)
        {
          this.alertMsgError = true;
          this.alertMsg = response.error_msg;
        }
        else
        {
          var targetDiv = document.getElementById("changeForm");
          targetDiv.innerHTML = '<div class="form"><div class="text-center">Thank you for your request!</div></div>';
        }
      }, response => {
        this.alertMsgError = true;
        this.alertMsg = 'Status: \'' + response.status + '\' Text: \'' + response.statusText + '\'';
      });
    },
    onSubmitMasterForm(form) {
      var formData = new FormData(document.getElementById('master-form'));
      this.$http.post(form.target.action, formData).then(response => {
        //console.log(response);
        if(response.error)
        {
          this.alertMsgError = true;
          this.alertMsg = response.error_msg;
        }
        else
        {
          var targetDiv = document.getElementById("masterModal").getElementsByClassName("modal-body")[0];
          targetDiv.innerHTML = '<div class="form"><div class="text-center">Thank you for your request!</div></div>';
        }
      }, response => {
        this.alertMsgError = true;
        this.alertMsg = 'Status: \'' + response.status + '\' Text: \'' + response.statusText + '\'';
      });
    },
    onSubmitCourierForm(form) {
      var formData = new FormData(document.getElementById('courier-form'));
      this.$http.post(form.target.action, formData).then(response => {
        //console.log(response);
        if(response.error)
        {
          this.alertMsgError = true;
          this.alertMsg = response.error_msg;
        }
        else
        {
          var targetDiv = document.getElementById("courierModal").getElementsByClassName("modal-body")[0];
          targetDiv.innerHTML = '<div class="form"><div class="text-center">Thank you for your request!</div></div>';
        }
      }, response => {
        this.alertMsgError = true;
        this.alertMsg = 'Status: \'' + response.status + '\' Text: \'' + response.statusText + '\'';
      });
    },
    onSubmitOrderTopForm(form) {
      var formData = new FormData(document.getElementById('order-top-form'));
      formData.append('device', this.devices[this.deviceId].name);
      formData.append('model', this.models[this.modelId].name);
      formData.append('malfunction', this.malfunctionsFullList[this.malfunctionId].name);
      formData.append('master', ((this.depMaster === true) ? 'Yes' : 'No'));
      this.$http.post(form.target.action, formData).then(response => {
        if(response.error)
        {
          this.alertMsgError = true;
          this.alertMsg = response.error_msg;
        }
        else
        {
          var targetDiv = document.getElementById("order-top-form");
          targetDiv.innerHTML = '<div class="form"><div class="text-center">Thank you for your request!</div></div>';
        }
      }, response => {
        this.alertMsgError = true;
        this.alertMsg = 'Status: \'' + response.status + '\' Text: \'' + response.statusText + '\'';
      });
    },
    onSubmitOrderForm(form) {
      var formData = new FormData(document.getElementById('order-form'));
      formData.append('device', this.devices[this.deviceId].name);
      formData.append('model', this.models[this.modelId].name);
      formData.append('malfunction', this.malfunctionsFullList[this.malfunctionId].name);
      formData.append('master', ((this.depMaster === true) ? 'Yes' : 'No'));
      this.$http.post(form.target.action, formData).then(response => {
        if(response.error)
        {
          this.alertMsgError = true;
          this.alertMsg = response.error_msg;
        }
        else
        {
          var targetDiv = document.getElementById("orderModal").getElementsByTagName("form")[0];
          targetDiv.innerHTML = '<div class="form"><div class="text-center">Thank you for your request!</div></div>';
        }
      }, response => {
        this.alertMsgError = true;
        this.alertMsg = 'Status: \'' + response.status + '\' Text: \'' + response.statusText + '\'';
      });
    },
    fetchData: function () {
      this.$http.get('./json.json').then(response => {
        this.devices = response.data.devices;
      }, response => {
        this.alertMsgError = true;
        this.alertMsg = 'Status: \'' + response.status + '\' Text: \'' + response.statusText + '\'';
      })
    },
    handleScroll (e) {
      this.fixPanel = (window.window.pageYOffset > this.panelOffset) ? true : false;
    },
    changeDevice: function (key) {
      this.deviceId = key
      this.models = this.devices[key].models
      this.modelId = false
      this.malfunctions = []
      this.malfunctionsFullList = []
      this.malfunctionId = false
    },
    changeDeviceSelect: function (val) {
      if(val.value)
      {
        this.changeDevice(val.value)
        setTimeout(function(){
          VueScrollTo.scrollTo('#model-scroll', 500 , {
            container: 'body',
            offset: -80
          })
        }, 100)
      }
    },
    changeModel: function (key) {
      var malfunctions = []

      this.modelId = key
      this.malfunctions = this.models[key].malfunction
      this.malfunctionId = false

      for (var key in this.malfunctions.main) {
        this.malfunctionsFullList.push(this.malfunctions.main[key]);
      }
      for (var key in this.malfunctions.full) {
        this.malfunctionsFullList.push(this.malfunctions.full[key]);
      }
    },
    changeModelSelect: function (val) {
      if(val.value)
      {
        this.changeModel(val.value)
        setTimeout(function(){
          VueScrollTo.scrollTo('#malfunction-scroll', 500 , {
            container: 'body',
            offset: -80
          })
        }, 100)
      }
    },
    changeMalfunction: function (key) {
      this.malfunctionId = key
      this.malfunction = this.malfunctionsFullList[key]
    },
    changeMalfunctionSelect: function (val) {
      if(val.value)
      {
        this.changeMalfunction(val.value)
      }
    }
  },
  created: function () {
    this.fetchData()
  },
  computed: {
    devices_select: function() {
      var returnDevices = []
      for (var key in this.devices) {
        returnDevices.push({label: this.devices[key]['name'], value: key})
      }
      return returnDevices
    },
    models_select: function() {
      var returnModels = []
      for (var key in this.models) {
        returnModels.push({label: this.models[key]['short_name'], value: key})
      }
      return returnModels
    },
    malfunctions_select: function() {
      var returnMalfunctions = []
      for (var key in this.malfunctionsFullList) {
        returnMalfunctions.push({label: this.malfunctionsFullList[key]['name'], value: key})
      }
      return returnMalfunctions
    },
    total_price: function() {
      var val = 0;
      if(this.depMaster === true)
        val += parseFloat(this.malfunction.departure_price)

      for (var key in this.malfunction.price_detail) {
        val += parseFloat(this.malfunction.price_detail[key]['price'])
      }
      return val;
    },
    CallBackModalStyle() {
      return (this.showCallBackModal) ? { display: 'block' } : {} ;
    },
    orderModalStyle() {
      return (this.showOrderModal) ? { display: 'block' } : {} ;
    },
    MasterModalStyle() {
      return (this.showMasterModal) ? { display: 'block' } : {} ;
    },
    changeModalStyle() {
      return (this.showChangeModal) ? { display: 'block' } : {} ;
    },
    CourierModalStyle() {
      return (this.showCourierModal) ? { display: 'block' } : {} ;
    },
    carouselItemsCount() {
      if(window.innerWidth < 768)
        return 1
      else 
        return 3
    },
    carouselItemsCountEmployees: function() {
      if(window.innerWidth < 768)
        return 1
      else if(window.innerWidth < 992)
        return 2
      else if(window.innerWidth < 1200)
        return 3
      else
        return 4
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
})
app.$watch(vm => [vm.showCallBackModal , vm.showChangeModal , vm.showMasterModal , vm.showCourierModal , vm.showOrderModal ].join(), val => {
  var body = document.querySelector("body");

  if (val.search('true') != -1)
    body.classList.add("modal-open");
  else
    body.classList.remove("modal-open");
})