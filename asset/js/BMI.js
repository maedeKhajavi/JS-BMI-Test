let inpghad = document.querySelector('#inpghad');
let inpvazn = document.querySelector('#inpvazn');
let btnBmi = document.querySelector('.btnBmi');
let bmiValue = document.querySelector('.bmiValue');
let staus = document.querySelector('.staus');
let advice = document.querySelector('.advice');
let resaultBox = document.querySelector('.resault_box');

btnBmi.addEventListener('click', function () {
    let vazn = Number(inpvazn.value);
    let ghad = Number(inpghad.value) / 100;

    if (isNaN(vazn) || isNaN(ghad) || vazn <= 0 || ghad <= 0) {
        alert('لطفاً قد و وزن را به صورت صحیح وارد کنید');
        return;
    }
    let totalBMI = Math.round(vazn / (ghad ** 2))
    let vazeeat = " "
    let pishnahad = " "
    switch (true) {
        case totalBMI <= 18:
            vazeeat = "شما لاغر هستید";
            pishnahad = "توصیه می‌شود رژیم غذایی پرکالری و ورزش‌های افزایش عضله انجام دهید";
            break;

        case totalBMI <= 24.9:
            vazeeat = "شما در محدوده نرمال هستید";
            pishnahad = "همین روال رو ادامه بدید! فعالیت مناسب و تغذیه منظم حفظ شود";
            break;

        case totalBMI <= 29.9:
            vazeeat = "شما اضافه وزن دارید";
            pishnahad = "توصیه می‌شود فعالیت بدنی روزانه افزایش یابد و مصرف شیرینی کاهش پیدا کند";
            break;

        case totalBMI <= 34.9:
            vazeeat = "شما اضافه وزن درجه 1 دارید";
            pishnahad = "توصیه می‌شود رژیم غذایی کنترل‌ شده و ورزش منظم را آغاز کنید";
            break;

        case totalBMI <= 39.9:
            vazeeat = "شما اضافه وزن درجه 2 دارید";
            pishnahad = "بهتر است با یک متخصص تغذیه مشورت کرده و برنامه غذایی دقیق بگیرید";
            break;

        case totalBMI >= 40:
            vazeeat = "شما اضافه وزن درجه 3 (چاقی مفرط) دارید";
            pishnahad = "حتماً با پزشک یا متخصص تغذیه مشورت کنید؛ کنترل وزن در این مرحله ضروری است";
            break;

        default:
            vazeeat = "خالی";
            pishnahad = "خالییییییی ";
            break;
    
    }

    resaultBox.style.display = 'block';
    bmiValue.textContent = totalBMI;
    staus.textContent = vazeeat;
    advice.textContent = pishnahad;
});
