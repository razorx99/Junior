var app = angular.module("benimuygulamam", []);

app.controller("kitaplar", function($scope) {

	$scope.kitaplar = [];
	

     $scope.onClickButton = function(){
	 $scope.kitaplar.push({
		 isim: $scope.isim,
		 fiyat: $scope.fiyat,
		 aciklama: $scope.aciklama
		 
     }
        
         );

         $scope.urunSil = function (siraNo) {
             $scope.kitaplar.splice(siraNo, 1);
         };

        



        


	 
 };

}); 

