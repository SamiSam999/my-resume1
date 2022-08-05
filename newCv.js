function ar(){
    document.documentElement.dir = "rtl";
var $ar = document.getElementById("1").innerHTML = "<h1 style=margin-right:45px>مــحــمــــد نـــــــور الســـــــحار</h1>";
 $ar = document.getElementById("2").innerHTML = "أخصائي تقنية معلومات";
$ar = document.getElementById("3").innerHTML =  '<h3 >الأنجازات والتكريم</h3>';
$ar = document.getElementById("4").innerHTML =" <p >  عضو فريق الجامعة البرمجي للطلبة المتفوقين. شاركت بمسابقة (ألتقط العلم) ضمن فريق (دارك ويب)التي نظمتها منصة (سايبر هب) تحت مظلة الاتحاد السعودي للأمن السيبراني والبرمجة والدرونز لدعم قدرات الطلاب الجامعيين وفزنا بالمركز الأول في المملكة بالنسبة للجامعات الخاصةوالمركز الحادي عشر في المملكة العربية السعودية بالنسبة للجامعات ككل.   تم تقيم مشروعي من ضمن أفضل مشاريع التخرج وتكريمي من قبل الجامعة العربية المفتوحة للمشاركة بمسابقة المشاريع الأولى</p>";
$ar = document.getElementById("21").innerHTML ="<span >: الخبر,السعودية</span>";
$ar = document.getElementById("22").innerHTML ="<span>الجنسية: سوري</span>";
$ar = document.getElementById("25").innerHTML ="<h3 style=color:blue;> المهارات</h3> <ul>  <li >Java</li> <li >Java FX</li> <li >JavaScript</li> <li >HTML</li> <li >CSS</li> <li >SQL Server</li> <li >Bootstarp</li> <li >C #</li> <li >MicroSoft Office.</li> <li >معرفة بالشبكات.</li>  <li >التواصل ضمن فريق العمل.</li> <li >حل المشكلات وتطوير الذات. </li> <li > اجادة اللغة العربية والأنكليزية. </li> </ul> </ul>";

$ar = document.getElementById("11").innerHTML ="<h3>التعليم</h3>";
$ar = document.getElementById("12").innerHTML ="<p >درجة البكالوريوس في العلوم تقنية معلومات وحوسبة الجامعة العربية المفتوحة/الجامعة البريطانية المفتوحة بتقدير ممتاز/ مرتبة الشرف من الدرجة الأولى 2016-2020<br/></p>";
$ar = document.getElementById("13").innerHTML ="<h3 > الخبرات و المشاريع</h3> ";
 $ar = document.getElementById("20").innerHTML = "<span> أخصائي تقنية معلومات(فحص أمتثال,أدارة النظام)<br/> شركة أبناء محمد الدوسري 11/2020-لتاريخ الحالي <br/>الخبر-المملكة العربية السعودية</span> <br/>";
$ar = document.getElementById("14").innerHTML ="<spane >نموذج التشفير التوقيعي:</spane> <br/>";
$ar = document.getElementById("15").innerHTML ="<span >تطبيق مكتبي جافا (يستخدم لأغراض الأمن السيبراني)</span> <br/>";
$ar = document.getElementById("16").innerHTML ="<spane > الضريبة السهلة: </spane><br/>";
$ar = document.getElementById("17").innerHTML ="<span >تطبيق مكتبي جافا(لحساب النسبة والقيمة المضافة)</span> <br>";
$ar = document.getElementById("18").innerHTML ="<spane >السيرة الذاتية: </spane><br/>";
$ar = document.getElementById("19").innerHTML ="<span ><a href=https://samisam999.github.io/my-resume1.github.io/ target=blank>موقع الكتروني للسيرتي الذاتية</a></span>";

}

function en(){
    window.location.reload("Refresh")
  }

 function pdf(){

    const file = document.getElementById("container");
   
      html2pdf().from(file).save();
  }
  
