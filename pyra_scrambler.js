/*

File: pyra_scrambler.js
Authors: Jaap Scherphuis, (www.jaapsch.net), Syoji Takamatsu (red_dragon a t honki d o t net)
Modified by: Conrad Rider (www.crider.co.uk)
Date: 10/21/09
Copyright 2010: All rights reserved.
Description: Random-state scrambler and solver for the pyraminx

*/

function genScramblePyra(seqlen){
	var i, j, n, ls, t;
	var seq = new Array();

	i = 0;

	var f2e=[[],[3,2,1,2,3,1,1,2,0,1,1,2,0,2],[3,2,1,2,0,2,1,1,0,2,3,1,0,2],[0,1,2,2,0,2,2,1,0,2,1,1,0,1,1,2],[1,1,0,2,3,2,0,1,3,1,1,2],[1,2,3,1,1,1,3,2],[0,2,3,2,1,1,0,2,3,1,0,2,1,2],[0,1,3,2,2,2,0,2,3,2,2,1,3,2],[1,1,0,1,1,2,0,2],[1,2,3,2,1,1,3,1],[0,2,3,2,1,1,0,2,3,1,1,2,0,2],[1,2,3,2,0,2,1,1,0,2,3,1,0,2],[3,1,1,2,3,2,1,1],[3,1,1,1,0,1,1,2,0,2,3,2],[0,1,3,2,0,1,1,2,3,1,0,1,1,1],[1,2,0,2,3,2,1,1,0,2,3,1,0,2],[0,1,1,1,0,2,1,2],[1,1,0,2,3,1,0,1,3,2,1,2],[3,2,0,2,1,1,0,2,3,1,0,2,1,2],[3,1,2,2,0,1,3,2,2,1,0,2],[0,1,3,1,0,1,1,1,3,2,0,1,1,2],[0,2,1,1,3,1,0,1,3,2,1,2],[3,1,1,1,0,2,3,2,1,2,0,1],[3,2,0,1,1,2,3,2,1,1,3,2,0,2],[0,2,1,1,3,2,0,1,3,1,1,2],[3,1,1,2,0,2,1,2,0,1,3,2,1,2],[2,2,1,1,0,2,2,1,0,1,1,2],[0,1,1,2,3,1,1,1,0,2,3,2],[0,2,1,1,0,2,1,2,0,2],[3,2,1,2,0,2,1,2,0,1,3,1,1,2],[0,1,1,1,3,2,1,1,3,1,1,1,0,2],[1,2,0,1,3,1,0,2,3,2,1,1],[1,2,0,2,1,2,0,1,1,2],[0,2,3,1,1,1,0,1,3,2,1,2],[0,1,3,2,1,2,3,1,1,1,0,2],[0,1,1,2,3,1,0,2,3,2,1,1],[0,2,1,1,0,1,1,2],[1,1,0,2,3,1,0,2,3,2,0,2,1,2],[0,1,3,2,1,2,3,1,1,2,0,2,1,2],[0,1,1,2,3,1,0,1,3,2,0,1,1,1],[0,1,1,1,3,2,0,1,3,1,0,1,1,2],[0,1,1,2,3,2,1,1,0,2,3,1],[1,1,3,1,0,2,1,2,0,1,3,2],[2,1,1,1,0,2,2,2,0,1,1,2],[0,1,3,2,0,2,3,1],[0,1,2,2,0,1,1,1,2,1,0,1,1,2],[3,2,0,1,1,1,3,1,1,2,0,2],[0,2,1,2,3,1,1,2,0,1,3,2,1,2],[1,1,0,1,3,2,1,2,0,2,3,1],[0,1,3,2,1,1,0,1,3,1,0,1,1,2],[1,2,3,1,0,2,1,2,3,2,0,1,1,2],[1,2,3,2,0,1,1,1,3,1,0,2],[0,1,3,2,0,2,1,2,3,1,1,1],[3,1,1,1,0,1,3,1,1,2,3,1,0,2],[3,1,0,2,1,2,0,1,3,2,1,1],[1,1,3,1,1,1,0,2,3,2,1,1,0,1],[0,1,1,1,3,2,0,2,3,1,1,2],[3,1,1,1,3,1,0,1,1,2,3,1,0,2],[3,2,0,1,1,1,3,1,0,2,1,2],[3,1,0,2,1,2,3,2,0,1,1,1],[0,1,1,1,0,1,1,2,0,1],[3,1,0,1,1,2,3,2,1,1,0,2],[1,1,3,2,0,2,1,2,3,1,0,1],[1,2,0,1,3,2,1,1,3,1,0,2],[3,1,0,1,3,2,0,2],[1,2,3,1,1,2,0,1,3,2,1,2,0,2],[0,1,3,2,1,1,3,1,1,2,0,2],[0,1,1,1,3,1,0,2,1,1,3,2,1,1],[1,1,3,2,0,1,3,1,1,2,0,2],[1,2,3,1,0,1,1,1,3,2,0,2],[0,2,3,2,0,2,1,1,3,1,0,2,1,2],[1,1,0,1,1,1,3,1,1,1,0,2,3,2],[1,2,3,1,0,1,3,2,1,2,0,2,1,2],[3,1,1,1,0,1,3,2,1,2,0,2],[3,2,0,2,1,2,3,1,0,1,1,1],[1,2,0,2,3,2,0,2,1,1,3,1,0,2],[3,1,0,1,1,1,3,2,0,2,1,2],[1,1,3,1,0,1,3,2,1,2,0,2],[0,1,3,2,1,1,3,1,0,2,1,2],[1,2,3,2,0,2,1,2,3,1,0,1,1,2],[1,1,0,2,1,1,0,1,1,1],[1,2,0,2,3,1,0,2,3,2,1,1,0,2],[0,1,3,1,1,1,0,1,3,2,0,1,1,2],[0,1,1,2,3,2,1,1,3,1,0,2],[0,2,1,2,0,1,1,1],[3,2,0,2,1,2,3,1,1,2,0,1,1,2],[0,1,3,1,0,2,3,2],[0,1,3,1,1,1,0,2,1,1,3,2,1,1],[0,1,3,2,1,1,0,1,3,1,1,2,0,1],[0,2,1,2,3,1,0,1,1,1,3,2],[1,1,3,2,0,1,1,2,3,1,0,2],[0,1,3,2,1,2,3,2,1,1,0,2,3,2],[0,2,1,2,0,1,1,2,0,1,1,2,0,2],[0,2,1,2,3,1,0,1,3,2,1,1],[1,1,0,1,3,2,1,2,3,1,0,2],[1,2,3,2,1,1,0,1,3,1,0,2],[0,2,1,2,0,2,1,2,0,2,1,2],[0,2,1,2,3,2,0,1,1,1,3,1],[0,1,3,1,1,1,0,2,3,2,1,2],[1,2,0,2,3,2,1,2,3,1,0,1,1,2],[1,1,0,2,1,2,0,1],[0,2,1,1,3,1,0,2,3,2,0,2,1,2],[1,1,0,1,3,1,0,1,3,2,0,1,1,2],[0,2,1,2,3,2,1,2,3,1,0,1,1,2],[1,2,0,2,1,1,0,1],[3,1,1,1,0,2,1,1,3,2,1,1,0,1],[3,2,1,1,0,1,3,1,0,2,1,2],[2,1,1,2,3,1,2,2,1,1,3,2],[3,1,1,2,0,2,3,2,1,1,0,1],[1,2,3,1,0,2,1,1,0,1,3,2],[3,2,1,1,0,1,3,1,1,2,0,2],[0,2,3,2,1,2,3,2,0,1,1,1,3,2],[1,1,0,1,1,1,0,1,1,1,0,1],[1,2,3,2,0,2,1,1,3,1,0,1],[1,1,0,1,3,1,1,2,0,2,3,2],[3,2,1,2,0,1,1,2,3,1,0,2,1,2],[3,1,1,2,3,2,0,2,1,1,0,1],[1,2,3,1,0,2,3,2,1,1,0,1],[0,2,3,2,1,2,3,1,0,1,1,1],[3,2,1,1,3,2,0,1,3,2,1,2,0,2]];
	
	var l4e=[[],[1,1,3,2,1,2,3,2,1,1,3,2,1,2],[1,1,3,1,1,2,3,1,1,1,3,1,1,2],[3,1,0,1,3,2,1,1,3,2,1,2,3,1,0,2],[1,2,3,1,0,2,3,1,0,1,3,2,1,1,3,2],[0,1,3,2,1,1,3,2,1,2,3,1,0,2,3,1],[0,1,3,1,1,1,3,2,1,2,0,2],[1,2,0,2,3,2,0,1,3,1,1,1],[2,2,1,2,3,2,1,1,3,1,2,1],[0,1,1,1,3,1,1,2,3,2,0,2],[1,2,3,2,0,2,3,1,0,1,1,1],[2,2,3,2,1,2,3,1,1,1,2,1],[1,1,0,2,3,1,0,1,3,2,0,1,1,2,0,2],[3,2,1,1,3,2,1,2,3,1,0,2,3,1,0,1],[0,2,1,1,3,2,1,2,3,1,1,2,0,1,1,1],[3,1,0,2,3,1,0,1,1,1,3,2,2,1,3,2,2,2,1,2],[3,2,0,2,2,2,3,1,2,2,0,2,2,2,0,2],[3,1,0,1,2,1,0,1,2,1,3,2,2,1,0,1],[1,1,3,2,1,2,0,2,3,2,0,1,3,2],[3,2,1,1,3,2,1,2,0,2,3,2,0,1],[3,1,1,1,3,2,1,2,0,2,3,2,0,1,3,1],[3,2,0,2,3,1,0,1,1,1,3,1,1,2,3,2],[3,1,0,2,3,1,0,1,1,1,3,1,1,2],[0,2,3,1,0,1,1,1,3,1,1,2,3,1],[3,2,0,2,2,2,3,1,2,1,0,1],[0,1,1,2,2,1,0,1,2,2,0,1,1,1],[3,1,1,2,0,1,1,1,0,1,3,2,0,1],[3,1,0,1,1,1,0,1,3,2,0,2,1,2,0,2],[3,1,0,2,3,2,0,1],[1,1,3,1,1,2,3,1,0,2,3,1,0,1],[0,1,1,2,0,2,1,1],[3,1,0,2,2,2,3,2,2,1,3,2,0,1,3,1],[3,2,0,2,3,1,0,1],[0,2,2,1,0,2,2,2,0,2],[3,1,1,1,3,2,1,2,3,1,0,2,3,2,0,1],[3,1,0,2,3,1,2,2,3,1,2,1,0,1],[0,2,3,1,0,1,1,1,3,2,1,2],[3,2,1,1,3,1,2,2,1,1,2,1,1,1],[3,2,1,1,3,1,1,2,3,1,1,1,3,2,1,2],[0,1,1,1,0,1,3,1,0,2,1,2,0,2,3,2],[1,1,3,2,1,2,3,1],[3,1,0,2,3,1,0,1,3,2,1,1,3,1,1,2,3,1],[3,1,0,1,2,1,0,1,2,2,0,1,3,2],[3,1,1,1,3,2,2,1,3,2,2,2,1,2,3,1],[3,1,1,1,3,1,1,2,3,1],[3,2,1,2,0,1,1,1,0,2,3,1],[1,2,2,2,1,2,2,2,3,2,2,2,1,2,3,1],[3,1,1,1,2,1,3,1,2,2,3,1,1,2],[3,2,1,1,3,1,1,2],[1,2,0,1,1,1,0,2],[0,2,3,2,0,1,3,2,1,1,3,2,1,2],[3,2,1,1,2,1,3,1,2,2,3,1,1,2,3,2],[3,1,1,1,2,1,3,2,2,2,1,2],[3,2,0,1,1,2,0,2,1,2,3,1,1,2],[1,2,0,1,2,2,1,2,2,1,1,2,0,2],[3,2,1,2,0,2,1,2,3,1,1,1,0,1,1,1],[3,1,1,1,3,2,1,2],[3,2,0,2,3,1,0,1,3,2,1,1,3,1,1,2],[1,1,2,2,1,1,2,1,1,1],[3,2,1,1,3,2,2,1,3,2,2,2,1,2],[0,2,3,1,0,1,3,2],[3,2,1,2,2,2,1,2,2,1,1,2,3,1],[3,2,1,1,3,2,1,2,3,1,0,2,3,2,0,1,3,2],[3,2,0,2,3,1,2,2,3,1,2,1,0,1,3,2],[1,1,3,2,1,2,0,2,3,1,0,1],[3,1,0,2,3,2,0,1,3,2,0,2,3,1,0,1],[3,1,0,2,3,2,2,1,0,2,2,2,0,2],[1,2,0,2,1,2,3,2,1,1,0,1,1,1,3,1],[3,2,0,2,3,2,0,1,3,2],[0,1,2,1,0,1,2,1,3,1,2,1,0,1,3,2],[3,1,0,1,1,2,0,2,1,1,3,2],[3,2,0,2,2,2,3,2,2,1,3,2,0,1],[3,2,1,1,3,2,1,2,3,2],[0,1,2,1,0,1,2,2,0,1],[0,1,1,1,2,2,1,1,0,1,2,1,0,1,1,1],[1,1,3,2,2,1,3,2,2,2,1,2,3,2],[1,1,3,1,1,2,3,2],[3,1,0,2,2,2,3,2,2,2,0,2,2,2,0,2],[3,1,1,2,0,1,1,1,0,2,3,2],[1,1,2,1,3,1,2,2,3,1,1,2,3,1],[3,1,1,1,3,2,1,1,0,1,1,1,0,2],[3,2,0,1,1,1,0,1,3,1,0,2,1,2,0,2],[3,2,0,2,2,2,3,2,2,1,0,1,3,2],[3,1,1,1,3,2,1,2,3,2,1,1,3,1,1,2],[0,2,3,2,0,1,3,1],[3,2,0,1,1,2,0,2,1,1,3,1],[3,2,1,1,2,1,3,1,2,1,1,1,2,1,1,1],[0,2,2,2,3,2,2,1,3,2,0,1,3,2],[3,1,0,2,3,1,0,1,3,1],[1,2,0,2,2,1,0,2,1,2,2,2,1,2,0,2],[1,2,2,2,1,2,2,1,1,2],[0,2,3,1,2,2,3,1,2,1,0,1,3,1],[3,2,0,2,3,1,0,2,1,2,0,2,1,1],[3,1,1,1,2,1,3,1,2,2,1,2,3,1],[3,1,1,2,0,2,1,2,3,2,1,1,0,1,1,1],[3,2,0,2,3,1,0,1,3,1,0,2,3,2,0,1]];

	var AUFs=[3,1,0,2,7,5,4,6];
	seq=f2e[Math.floor(Math.random()*120)].concat(l4e[Math.floor(Math.random()*96)]);
	for(var i=0;i<8;i++){
		var dir=Math.floor(Math.random()*3);
		if(dir>0)
		seq=seq.concat([AUFs[i],dir]);
	}

	var s = "", i;
	for(i = 0; i < seq.length; i += 2) {
		s += "LRBUlrbu".charAt(seq[i]);
		if( seq[i + 1] == 2 )
			s += "'";
		s += " ";
	}
	do {} while (s != (s=s.replace(/(.) \1 /g,"$1' ").replace(/(.)' \1' /g,"$1 ").replace(/(.)' \1 /g,"").replace(/(.) \1' /g,"")));
	return s;

}

