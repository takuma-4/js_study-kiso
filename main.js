'use strict';

// コメント

/*
コメント
コメント
コメント
*/

/*
console.log('Hello world from main.js!');

console.log('it\'me');

console.log('hell\no wo\trld');
// 改行とタブ

console.log('hello' + 'world');
*/


// console.log(10 + 3); // 13
// console.log(10 - 3); // 7
// console.log(10 * 3); // 30
// console.log(10 / 3); // 3.333....
// console.log(10 % 3); // 1
// console.log(10 ** 3); // 乗　1000

// console.log(2 + 10 * 3); // 32
// console.log((2 + 10) * 3); // 36

// #08 
 // #09  

// const price = 150;

// console.log(price * 140); 
// console.log(price * 160); 

// price = 150;

// console.log(price * 140); 
// console.log(price * 160); 


 // #15

 // const signal = 'red';

// if (signal === 'red') {
//   console.log('stop!');
// } else if (signal === 'yellow') {
//   console.log('caution!');
// } else if (signal === 'blue'){
//   console.log('go!');
// }

 // swith(signal){
 // 	case 'red':
	//  	console.log('stop')
	//  	break;
 // 	case 'yellow'
	//  	console.log('caution')
	//  	break;
 // 	case 'blue':
 // 	case 'green':
	//  	console.log('go')
	//  	break;
	//  default://どちらにもあてはまらない
	//  	console.log('warong signal')
	//  	break;

 // }

//#16

// for( let i = 1; i <= 10; i++){
// 	console.log('hello')
// }


//#17

// const hp = 200;

// 	while( 0 <= hp){
// 		console.log(`${hp} HP left!`);

// 		hp -= 15;
// 	}



//#18

	
	// for( let i = 1; i <= 10; i++){
		// if(i === 4){
		// if(i % 3 === 0){
		// 	continue; 
			//指定した物が飛ばされる処理
	// 		if(i ===4 ){
	// 			break;
	// 	}
	// 	console.log(i);
	// }

//#19 関数

	// fanction showAd(){
	// 	console.log('--------');
	// 	console.log('---AD---');
	// 	console.log('--------');
	// }

	// showAd();
	// 	console.log('Tom is great');
	// 	console.log('Bob is great');


//#20 引数
	// 仮引数
	// fanction showAd(messeage = 'AD'){
	// 	console.log('--------');
	// 	console.log(`---$(message)`);
	// 	console.log('--------');
	// }


	// 実引数
	// showAd(Header AD);
	// 	console.log('Tom is great');
	// 	console.log('Bob is great');

	// showAd();
	// 	console.log('Tom is great');
	// 	console.log('Bob is great');


	// showAd(Footer AD);
	// 	console.log('Tom is great');
	// 	console.log('Bob is great');


//#21 関数
	fanction sum(1 ,2, 3){
		//console.log(a +b +c);
		return a + b + c
	}

	sum(1 ,2 ,3);
	sum(4 ,5 ,6);

	const total = sum(1, 2, 3) + sum(3,4,5);
	//const total = 6 + 12; //18

	console.log(total);

