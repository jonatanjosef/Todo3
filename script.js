$(document).ready(function () {

    var user = "test"
    var password = "password"

    var stuffToDo = [
        "Klipp gräset",
        "Betala räkningar",
        "Köp mjölk",
        "Spika upp tavlor",
        "Ringa Glenn"
    ];


    printArray();

    if (sessionStorage.ourUser != null) {
        visaMember();

    } else {

        visaMain();

    }

    //login-knappen
    $(".loginButton").click(function () {

        if ($(".user").val() == user && $(".password").val() == password) {
            visaMember();

        } else {

            visaForgot();
        }

    });

    //logout-knappen
    $(".logoutButton").click(function () {
        visaMain();
    });

    var date = new Date;
    $(".todaysDate").append(date.getFullYear(),
        "-", date.getMonth(), "-", date.getDate());

    //main page
    function visaMain() {
        $("input").show();
        $(".loginButton").show();
        $(".logoutButton").hide();

        $("#main").show();
        $("#forgot").hide();
        $("#member").hide();
    };

    //member
    function visaMember() {
        $("#main").hide();
        $("#forgot").hide();
        $("#member").show();
        $(".loginButton").hide();
        $(".user").hide();
        $(".inlogg").hide();
        $(".logoutButton").show();
        $(".password").hide();
        $("#namn").text($(".user").val());
        sessionStorage.ourUser = $(".user").val();
    };

    //forgot
    function visaForgot() {
        $("#forgot").show();
        $("#main").hide();
        $("#member").hide();
    };

    function printArray() {
        var printToDoList = "";

        for (var i = 0; i < stuffToDo.length; i++) {
            printToDoList += "<div>" + stuffToDo[i] + " | <a href='#' onclick='deleteToDo(" + i + ")' >Ta Bort</a> </div>";
        }
        document.getElementById("list").innerHTML = printToDoList;
        document.getElementById("number").innerHTML = stuffToDo.length;
    }

    $(".addToDoButton").click(function () {
        stuffToDo.push($(".toDoInput").val());
        printArray();
    });

    deleteToDo = function (i) {
        stuffToDo.splice(i, 1);
        printArray();
    }

});