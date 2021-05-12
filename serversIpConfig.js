/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getLocalServerConfig() {
    var serverConfig = {
        "serverIP" : "http://localhost",
        "serverPort" : "3000"
    };
    return serverConfig;
}

function getMwServerConfig(configType) {
   
    
    var serverConfig = {
        "serverIP" : "https://superheroapi.com",
        "serverPort" : "443"
    };
    return serverConfig;
}


module.exports = {
   getMwServerConfig: function(configType) {
      return getMwServerConfig(configType);
   },
   getPortalURL : function () {
        var URL = "http://localhost";
        return URL;
    }
}