/// <reference path="MyApp.Area.ng.ts" />

module MyApp.Area {
    class MyController {
        constructor () {
            
        }
    }
    
    angular.module("MyApp.Area")
        .controller("MyApp.Area.MyController", [
            MyController
        ]);
}