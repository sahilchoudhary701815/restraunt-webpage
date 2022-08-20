array=[[['Panner Tikka','Rs.40'],['Paneer Butter','Rs.70'],['Mixed Vegetables','Rs.70'],['Veg pulao','Rs.60']],
[["Paratha",'Rs.30'],['Naan','Rs.50'],['Butter naan','Rs.60'],['Kulcha','Rs.50'],['Tandoori Roti','Rs.30'],['Masala Kulcha','Rs.60']],
[['Fish Masala','Rs.60'],['Fish Tikka','Rs.40']],
[['Chicken Tikka','Rs.40'],['Chicken Curry','Rs.70'],['Chicken Kadahi','Rs.80']],
[['Mutton handi','Rs.80'],["Mutton Tikka",'Rs.50'],['Mutton Kabab','Rs.70']],
[['Mutton Biryani','Rs.60'],['Mutton Biryani Special','Rs.80'],["Chicken Biryani",'Rs.60'],['Chicken Biryani Special','Rs.80']]]
imagesArray=['paneer_tikka.jpg','paratha.jpg','fish_tikka.jpg','chicken.jpg','mutton.jpg','Chicken_biryani.jpg']
var displayer=document.getElementById('displayer')
//console.log(map.get('Fish')[0])
$('li').hover(function() {
image=document.createElement('img')
displayer.innerHTML=''
image.id='items'
image.src=imagesArray[this.id]
displayer.appendChild(image)
for([i,j] of array[this.id]){
    var x=document.createElement('p')
    x.innerHTML=i+" "+j
    displayer.appendChild(x)
}})