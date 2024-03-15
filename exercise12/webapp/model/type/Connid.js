sap.ui.define([
    "sap/ui/model/SimpleType",
    "sap/ui/model/ValidateException"
],
    function( SimpleType, ValidateException ) {
        "use strict";
        return SimpleType.extend("sync.e18.exercise12.model.type.Connid", {
            formatValue: function ( oValue ) {
                // 입력된 값 그대로 화면에 출력할 경우
                return oValue;
            },

            parseValue: function ( oValue ) {
                // 화면에 값을 저장할 때 어떻게 변경해서 저장할거냐
                return oValue;
            },

            validateValue: function ( oValue ) {
                // /^    : 문자의 시작
                // \d    : 숫자
                // \d{4} : 숫자 4개
                // $/    : 문자의 종료

                if ( /^\d{4}$/.test( oValue ) ) {
                    // oValue는 숫자 4개로 구성되어 있다
                } else {
                    // oValue는 숫자 4개로 구성되어 있지 않다
                    // ABAP RAISE EXCEPTION과 동일
                    throw new ValidateException( "항공편은 숫자 4자리로 입력해 주세요." )
                }
            }
        });
    }
);