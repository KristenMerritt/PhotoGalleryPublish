import { Component, OnInit } from '@angular/core';
import { Photo } from './photo';
import { PhotoService } from './photo.service';
import { Router } from '@angular/router';


@Component({
	//selector: 'app-photos',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit{
	pageTitle = "My Photos";
	thumbWidth:number = 150;
	thumbMarg:number = 1;
	photoType:string = "All";
	favoritePhotos:Photo[];
	photos:Photo[];
	p_url:string;

	/**
	* @constructor
	*/
	constructor(private _photoService: PhotoService,
				private _router: Router){
		this.p_url = this._router.url;
	}
	
	updateRating(rate:number): void{
		console.log("Wir haben die Wertung " + rate + " erhalten.");
	}//end function: updateRating
	
	ngOnInit():void{
		console.log("On Init - PhotoListComponent");
		this.photos = this._photoService.getPhotos();
		this.favoritePhotos = this.setFavorites();
	}//end function: ngOnInit
	
	
	updateFav(fav:boolean, photo:Photo): void{
		console.log("Dieses Bild ist dein Lieblingsbild: " + fav.toString());
		//photo.switchFavorite();
		console.log(photo);
		this._photoService.updateFavorites(photo, fav);
		this.favoritePhotos = this.setFavorites();
	}//end function: updateFav
	
	
	
	setFavorites():Photo[]{
		return this._photoService.getFavorites();
	}//end function: setFavorites
	
}

