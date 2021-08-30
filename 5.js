class ElectricalAppliance
{
    constructor(power)
    {
        this.power = power;
        this.on = false;
    }
    switch(on) {
        this.on = typeof(on)=="boolean" ? on : false;
    }
    getPower()
    {
        console.log(`Power = ${this.power}`) ;
    }
    getConsumedPower()
    {
        return this.on? this.power : 0;
    }
}

class Refregerator extends ElectricalAppliance
{
    constructor(volume, power)
    {
        super(power);
        this.volume = volume;
    }
    getVolume() {
        console.log(this.volume);
    }
}

class Blender extends ElectricalAppliance
{
    constructor(rate, power)
    {
        super(power);
        this.rate = rate;
    }
    getRate(){
        console.log(this.rate);
    }    
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
