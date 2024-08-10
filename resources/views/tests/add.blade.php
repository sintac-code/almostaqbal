<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/add-test.css') }}">
    <link rel="stylesheet" href="{{ asset('smart/style.css') }}">
    <title>اضافة اختبار</title>
</head>
<body dir="rtl">
    <form id="my_form" action="">
        @csrf
        <article class="choos-question">
            <button onclick="remove(this)" title="حذف السؤال"><i class="icon-cross"></i></button>
            <h2>سؤال أكمل الفراغات</h2>
            <p>يرجى كتابة السؤال في خانتة السؤال ولا تنسى الفراغات في اماكن الفراغات عبارة عن نقاط متتالية وكتابة الكلمات الناقصة دون ترتيب وبعد ذلك قم بكتابة الكلمات الناقصة بالترتيب</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="يرجى إدخال السؤال هنا."></textarea>
            <article id="errorAdd">
                <h4>تم تجاوز العدد</h4>
            </article>    
            <article class="hashtag">
                <h1 dir="rtl">اضافة الاجابة دون ترتيب الكلمات بالضغط على زر (Tab)</h1>
                <ul id="hashtagUl">
                  <input id="hashtagInput" type="text" />
                  <i class="icon-plus" id="plused"></i>
                  <article id="tags-container"></article>
                </ul>
                <textarea
                  style="display: none"
                  name="hashtag"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
                <article class="key-rest">
                  <h1 dir="rtl"><span id="length">10</span> كلمات متبقية لديك</h1>
                  <button
                    class="keywords-delete-btn button"
                    type="button"
                    onClick="removeTags()"
                  >
                    حذف الكل
                  </button>
                </article>
            </article>
            <article class="hashtag">
                <h1 dir="rtl">اضافة الاجابة بالترتيب الصحيح الكلمات بالضغط على زر (Tab)</h1>
                <ul id="hashtagUl">
                  <input id="hashtagInput" type="text" />
                  <i class="icon-plus" id="plused"></i>
                  <article id="tags-container"></article>
                </ul>
                <textarea
                  style="display: none"
                  name="hashtag"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
                <article class="key-rest">
                  <h1 dir="rtl"><span id="length">10</span> كلمات متبقية لديك</h1>
                  <button
                    class="keywords-delete-btn button"
                    type="button"
                    onClick="removeTags()"
                  >
                    حذف الكل
                  </button>
                </article>
            </article>
            <input class="pona-inpot" type="text" placeholder="أدخل درجة السؤال بالنسبة المئوية على الإختبار (%)">
        </article>
    </form>
    <article class="add-question">
        <button id="add_button"><i class="icon-plus"></i></button>
        <select name="" id="add_option">
            <option value="" selected disabled>-- اختر نوع السؤال --</option>
            <option value="check">صح أم خطأ</option>
            <option value="selcted">اختر الاجابة الصحيحة</option>
            <option value="choos">اكمل الفراغات</option>
        </select>
    </article>
    <script src="{{ asset('js/add-test.js') }}"></script>
</body>
</html>