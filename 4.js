function ElectricalAppliance(power)
{
    this.power = power;
    this.on = false;
}

ElectricalAppliance.prototype.switch = function(on)
{
    this.on = typeof(on)=="boolean" ? on : false;
}
ElectricalAppliance.prototype.getPower = function()
{
    console.log(`Power = ${this.power}`) ;
}
ElectricalAppliance.prototype.getConsumedPower = function()
{
    return this.on? this.power : 0;
}


function Refregerator(power, volume)
{
    this.power = power;
    this.volume = volume;
}

Refregerator.prototype = new ElectricalAppliance();
Refregerator.prototype.getVolume = function(){
	console.log(this.volume);
}

function Blender(power, rate)
{
    this.power = power;
    this.rate = rate;
}

Blender.prototype = new ElectricalAppliance();
Blender.prototype.getRate = function(){
	console.log(this.rate);
}

let appliances = new Array(0);

let blender1 = new Blender(500, 1000);
blender1.switch(Math.round(Math.random())==1);
appliances.push(blender1);

let refregerator = new Refregerator(200, 350);
refregerator.switch(Math.round(Math.random())==1);
appliances.push(refregerator);

let blender2 = new Blender(450, 900);
blender2.switch(Math.round(Math.random())==1);
appliances.push(blender2);

console.log(appliances.reduce((a, b) => a + (b.getConsumedPower()), 0));

