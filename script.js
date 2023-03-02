
function MyDate(year = 0,month = 0,day = 0,hour = 0,min = 0,sec = 0,milsec = 0) {
   if(!year){
    return new Date()
   }
   if(year === "0"){
    return new Date(0)
   }
   this._year = year;
   this._month = month;
   this._monthsname = ["Hunvar","Petrvar","Mart","April","Mayis","Hunis","Hulis","Ogostos","September","Hoktember","Noyember","December"]
   this._day = day;
   this._hour = hour 
   this._min = min;
   this._sec = sec;
   this._milsec = milsec
   this._weekname = ["Erk","Ereq","Choreq","Hingshabti","Urbat"]


  

     this.getFullyear = function(){
        return this.year
        
     }
     this.getFullmonth = function(){
       
        return this.monthsname[this.month]
     }
     this.getFullday = function(){
        return this.day
     }
     this.getFullhour = function(){
        return this.hour
     }
     this.getFullmin = function(){
        return this.min
     }
     this.getFullsec = function(){
        return this.sec
     }
     this.setyear = function (){
        return Math.floor (  this.year + this.month / 12)
     }
     
     this.setmonth = function(value){
        value = this.month
      return  value % 12 


        
     }
     this.setday = function(value){
     value = this.day

     return value % 30

     }
     this.toStrnig = function (){ 
     return `  ${day} ${this.monthsname [this.month]} ${this.setyear()} ${min}:${sec}:${milsec}`
     } 
     
     
     //isk es tarberak sxale?  return `${this.weekname[this.day]}  ${day} ${this.monthsname [this.month]} ${this.year} ${min}:${sec}:${milsec}`
     //uxxaki es devov consoli mej petke aranc new stexcel

  


} 
Object.defineProperty(this, "year", {
   set: (value) => {
       this._year = value;
   },
   get: () => {
       return this._month
   }
})
Object.defineProperty(this, "month", {
   set: (value) => {
       this._year += parseInt(value / 12)
       this._month = value % 12;
   },
   get: () => {
       return this._month
   }

})

let a= new MyDate(2023, 50, 15, 14, 30, 15)
console.log(a._hour);



