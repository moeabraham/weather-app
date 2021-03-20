const $city = $('#city');
const $temp = $('#temp');
const $feelsLike = $('#feelsLike');
const $weather= $('#weather');
const $input = $('input[type="text"]')

let userInput;









// event listener

$('form').on('submit',getTemp)

function getTemp(e){
    e.preventDefault();

 const userInput = $input.val();
 console.log('userInput',userInput)


 $.ajax({
    url : `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=3920c6f983ffaf4df5366e3dd467a743`
}) .then(
    (data) => {
        render(data)
        console.log('data',data)
}
), (error) => {
    
    console.log('data',data)

}

}

function render(data){
    $city.text(data.name)
    $temp.text(data.main.temp)
    $feelsLike.text(data.main.feels_like)
    console.log(data.main.feels_like)
    $weather.text(data.weather[0].main)
}