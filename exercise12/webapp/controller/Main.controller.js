sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync.e18.exercise12.controller.Main", {
            onInit: function () {
                
                let data = {
                    Carrid: "AA",
                    Connid: "0017"
                };

                let oModel = new JSONModel( data );

                let oView = this.getView();
                oView.setModel(oModel, "view");

                // MessageManager를 가져와서 Main View에 등록
                // 오류가 발생한 위치에 메시지가 붙어있을 수 있도록 Event Handling 옵션도 true
                // false 옵션은 커스텀으로 오류메시지를 띄울 때 사용 
                sap.ui.getCore().getMessageManager().registerObject(oView, true);
            },

            onCarridValidError: function ( oEvent ) {
                // let oSource = oEvent.getSource();
                // oSource.setValueState(sap.ui.core.ValueState.Error)

                let oView = this.getView();
                let oModel = oView.getModel("view");
                let data = oModel.getData();

                // 오류를 MessageToast로만 알림 << 오류의 느낌이 안남
                sap.m.MessageToast.show( data.Carrid + " 항공사 ID값이 잘못되었습니다.");
            }
        });
    });
