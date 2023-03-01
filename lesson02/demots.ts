let sports: string[] = ["Golf","Rugby","Swiming","Tennis"];
sports.push("Running");
for( let sport of sports){
    if(sport == "Swiming"){
        console.log(`${sport} << my fav`);
    }else{
        console.log(`${sport} is just a normal sport`);
    }

}
