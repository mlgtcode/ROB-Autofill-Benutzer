// ==UserScript==
// @name          Raiffeisen Online Banking Benutzer
// @description   Skript zum automatischen Ausfüllen des Benutzer bei der Anmeldung.
// @match         https://auth.raiffeisen.it/ridp/*
// @match         https://rob.raiffeisen.it/*
// @version       1
// @grant         none
// @noframes      
// @run-at        document-idle
// ==/UserScript==

function ROBUserFill(nutzer){  
     if (window.location.href.startsWith("https://rob.raiffeisen.it")) {
       document.getElementById('username').value = nutzer;
     } else if (window.location.href.startsWith("https://auth.raiffeisen.it")) {
       var Rform = document.forms[0];
       var RElement = Rform.querySelector('input[name="loginUser"]');
       var RNutzer = RElement.value = nutzer;
     }
}

// Bitte den Nutzer hier eintragen
ROBUserFill("NUTZER")
