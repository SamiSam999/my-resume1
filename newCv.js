function ar(){
    document.documentElement.dir = "rtl";
var $ar = document.getElementById("1").innerHTML = "<h1 style=margin-right:45px>مــحــمــــد نـــــــور الســـــــحار</h1>";
 $ar = document.getElementById("2").innerHTML = "أخصائي تقنية معلومات";
$ar = document.getElementById("3").innerHTML =  '<h3 >الأنجازات والتكريم</h3>';
$ar = document.getElementById("4").innerHTML =" <p >  عضو فريق الجامعة البرمجي للطلبة المتفوقين. شاركت بمسابقة (ألتقط العلم) ضمن فريق (دارك ويب)التي نظمتها منصة (سايبر هب) تحت مظلة الاتحاد السعودي للأمن السيبراني والبرمجة والدرونز لدعم قدرات الطلاب الجامعيين وفزنا بالمركز الأول في المملكة بالنسبة للجامعات الخاصةوالمركز الحادي عشر في المملكة العربية السعودية بالنسبة للجامعات ككل.   تم تقيم مشروعي من ضمن أفضل مشاريع التخرج وتكريمي من قبل الجامعة العربية المفتوحة للمشاركة بمسابقة المشاريع الأولى</p>";
$ar = document.getElementById("21").innerHTML ="<span >: الخبر,السعودية</span>";
$ar = document.getElementById("22").innerHTML ="<span>الجنسية: سوري</span>";
$ar = document.getElementById("25").innerHTML ="<h3 style=color:blue;> المهارات</h3> <ul> <li >WINDOWS SERVER</li><li >MICROSOFT 365</li> <li >MicroSoft Office.</li> <li >معرفة بالشبكات.</li>  <li >التواصل ضمن فريق العمل.</li> <li >حل المشكلات وتطوير الذات. </li> <li > اجادة اللغة العربية والأنكليزية. </li> </ul> </ul>";

$ar = document.getElementById("11").innerHTML ="<h3>التعليم</h3>";
$ar = document.getElementById("12").innerHTML ="<p >درجة البكالوريوس في العلوم تقنية معلومات وحوسبة الجامعة العربية المفتوحة/الجامعة البريطانية المفتوحة. المعدل 3.63-4 بتقدير ممتاز/ مرتبة الشرف من الدرجة الأولى 2016-2020<br/></p>";
$ar = document.getElementById("13").innerHTML ="<h3 > الخبرات </h3> ";
$ar = document.getElementById("27").innerHTML ="<spane>مؤسسة كيان (أوميغا سوفت وير)</spane> <br/>";
$ar = document.getElementById("32").innerHTML ="(صيانة الشبكات ودعم الفني)";
 $ar = document.getElementById("40").innerHTML = "<span>شركة أبناء محمد عبد الله الدوسري للعقارات والمقاولات</span>";
 $ar = document.getElementById("33").innerHTML ="أخصائي تقنية معلومات <br/>الخبر-المملكة العربية السعودية </br>  02/2020-لتاريخ الحالي <br/>"

$ar = document.getElementById("14").innerHTML ="<span>المهام:</span>";
    $ar = document.getElementById("30").innerHTML ="<p> .فحص الأمتثال السيبراني <br/> .إدارة النظام <br/>.مكتب المساعدة <br/>.الدعم الفني ";
    $ar = document.getElementById("34").innerHTML = "<span><a href=https://samisam999.github.io/my-resume1.github.io/ target=blank>موقع السيرة الذاتية</a></span></p> ";


}

function en(){
    window.location.reload("Refresh")
  }

 function pdf(){

    const file = document.getElementById("container");
   
      html2pdf().from(file).save();
  }
  
