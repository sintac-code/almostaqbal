var add_button = document.getElementById("add_button");
var add_option = document.getElementById("add_option");

add_button.onclick = function () {
    if (add_option.value != "") {
        if(add_option.value == "check") {
            const myFormElement = document.getElementById('my_form');

            // إنشاء العنصر article الخارجي
            const chickQuestionElement = document.createElement('article');
            chickQuestionElement.classList.add('chick-question');
            
            // إضافة المحتوى الداخلي للعنصر article
            chickQuestionElement.innerHTML = `
            <button onclick="remove(this)" title="حذف السؤال"><i class="icon-cross"></i></button>
              <h2>سؤال صح أم خطأء</h2>
              <p>يرجى كتابة السؤال داخل خانة الإدخال واختيار ان كانت الاجابة الصحيحة صح أم خطأ</p>
              <article>
                <input type="text" placeholder="برجاء إدخال نص السؤال هنا">
                <span>
                  <i onclick="chick(this)" class="icon-checkbox-checked"></i>
                  <i onclick="chick(this)" class="icon-cross"></i>
                  <input name="" type="hidden" class="chick_input">
                </span>
              </article>
              <article>
                <input type="text" placeholder="برجاء إدخال نص السؤال هنا">
                <span>
                  <i onclick="chick(this)" class="icon-checkbox-checked"></i>
                  <i onclick="chick(this)" class="icon-cross"></i>
                  <input name="" type="hidden" class="chick_input">
                </span>
              </article>
              <article>
                <input type="text" placeholder="برجاء إدخال نص السؤال هنا">
                <span>
                  <i onclick="chick(this)" class="icon-checkbox-checked"></i>
                  <i onclick="chick(this)" class="icon-cross"></i>
                  <input name="" type="hidden" class="chick_input">
                </span>
              </article>
              <article>
                <input type="text" placeholder="برجاء إدخال نص السؤال هنا">
                <span>
                  <i onclick="chick(this)" class="icon-checkbox-checked"></i>
                  <i onclick="chick(this)" class="icon-cross"></i>
                  <input name="" type="hidden" class="chick_input">
                </span>
              </article>
              <article>
                <input type="text" placeholder="برجاء إدخال نص السؤال هنا">
                <span>
                  <i onclick="chick(this)" class="icon-checkbox-checked"></i>
                  <i onclick="chick(this)" class="icon-cross"></i>
                  <input name="" type="hidden" class="chick_input">
                </span>
              </article>
              <input type="text" placeholder="أدخل درجة السؤال بالنسبة المئوية على الإختبار (%)">
            `;
            
            // إضافة العنصر article إلى العنصر الذي يحمل id="my_form"
            myFormElement.append(chickQuestionElement);
        }else if (add_option.value == "selcted") {
            const myFormElement = document.getElementById('my_form');

            // إنشاء العنصر article الخارجي
            const chickQuestionElement = document.createElement('article');
            chickQuestionElement.classList.add('chose-question');
            
            // إضافة المحتوى الداخلي للعنصر article
            chickQuestionElement.innerHTML = `
            <button onclick="remove(this)" title="حذف السؤال"><i class="icon-cross"></i></button>
            <h2>سؤال اختر الاجابة الصحيحة</h2>
            <p>يرجى كتابة السؤال داخل خانة الإدخال وادخال الاختيارات واختيار الاجابة الصحيحة</p>
            <article class="chose-cont">
                <input type="text" placeholder="برجاء إدخال نص السؤال هنا">
                <article class="chose-item">
                    <input type="text" placeholder="اختيار 1" oninput="oninput_option(this, 1)">
                    <input type="text" placeholder="اختيار 2" oninput="oninput_option(this, 2)">
                    <input type="text" placeholder="اختيار 3" oninput="oninput_option(this, 3)">
                    <input type="text" placeholder="اختيار 4" oninput="oninput_option(this, 4)">
                </article>
                <select name="" id="" class="select-option">
                    <option value="" selected disabled>-- اختر الاجابة الصحيحة --</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

            </article>
            <article class="chose-cont">
                <input type="text" placeholder="برجاء إدخال نص السؤال هنا">
                <article class="chose-item">
                    <input type="text" placeholder="اختيار 1" oninput="oninput_option(this, 1)">
                    <input type="text" placeholder="اختيار 2" oninput="oninput_option(this, 2)">
                    <input type="text" placeholder="اختيار 3" oninput="oninput_option(this, 3)">
                    <input type="text" placeholder="اختيار 4" oninput="oninput_option(this, 4)">
                </article>
                <select name="" id="" class="select-option">
                    <option value="" selected disabled>-- اختر الاجابة الصحيحة --</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

            </article>
            <article class="chose-cont">
                <input type="text" placeholder="برجاء إدخال نص السؤال هنا">
                <article class="chose-item">
                    <input type="text" placeholder="اختيار 1" oninput="oninput_option(this, 1)">
                    <input type="text" placeholder="اختيار 2" oninput="oninput_option(this, 2)">
                    <input type="text" placeholder="اختيار 3" oninput="oninput_option(this, 3)">
                    <input type="text" placeholder="اختيار 4" oninput="oninput_option(this, 4)">
                </article>
                <select name="" id="" class="select-option">
                    <option value="" selected disabled>-- اختر الاجابة الصحيحة --</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

            </article>
            <article class="chose-cont">
                <input type="text" placeholder="برجاء إدخال نص السؤال هنا">
                <article class="chose-item">
                    <input type="text" placeholder="اختيار 1" oninput="oninput_option(this, 1)">
                    <input type="text" placeholder="اختيار 2" oninput="oninput_option(this, 2)">
                    <input type="text" placeholder="اختيار 3" oninput="oninput_option(this, 3)">
                    <input type="text" placeholder="اختيار 4" oninput="oninput_option(this, 4)">
                </article>
                <select name="" id="" class="select-option">
                    <option value="" selected disabled>-- اختر الاجابة الصحيحة --</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

            </article>
            <article class="chose-cont">
                <input type="text" placeholder="برجاء إدخال نص السؤال هنا">
                <article class="chose-item">
                    <input type="text" placeholder="اختيار 1" oninput="oninput_option(this, 1)">
                    <input type="text" placeholder="اختيار 2" oninput="oninput_option(this, 2)">
                    <input type="text" placeholder="اختيار 3" oninput="oninput_option(this, 3)">
                    <input type="text" placeholder="اختيار 4" oninput="oninput_option(this, 4)">
                </article>
                <select name="" id="" class="select-option">
                    <option value="" selected disabled>-- اختر الاجابة الصحيحة --</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

            </article>
            <input type="text" placeholder="أدخل درجة السؤال بالنسبة المئوية على الإختبار (%)">
            `;
            
            // إضافة العنصر article إلى العنصر الذي يحمل id="my_form"
            myFormElement.append(chickQuestionElement);

        }else {
            alert (add_option.value)

        }
    }else {
        alert ("يرجى اختيار نوع السؤال")

    }
}
function chick(element) {
    // التحقق إذا كان العنصر يحتوي على class "icon-checkbox-checked"
    if (element.classList.contains('icon-checkbox-checked')) {
      element.style.color = "green";
  
      // الحصول على العنصر i المجاور مع class "icon-cross"
      const nextIElement = element.nextElementSibling;
      if (nextIElement && nextIElement.classList.contains('icon-cross')) {
        nextIElement.style.color = "white";
      }
  
      // الحصول على العنصر input مع class "chick_input"
      const chickInputElement = element.parentElement.querySelector('.chick_input');
      if (chickInputElement) {
        chickInputElement.value = "true";
      }
    } else {
      // إذا لم يكن العنصر مع class "icon-checkbox-checked"
      element.style.color = "green";
  
      // الحصول على العنصر i المجاور مع class "icon-checkbox-checked"
      const prevIElement = element.previousElementSibling;
      if (prevIElement && prevIElement.classList.contains('icon-checkbox-checked')) {
        prevIElement.style.color = "white";
      }
  
      // الحصول على العنصر input مع class "chick_input"
      const chickInputElement = element.parentElement.querySelector('.chick_input');
      if (chickInputElement) {
        chickInputElement.value = "false";
      }
    }
  }



  function remove(element) {
    // Get the parent element
    const parentElement = element.parentElement;

    // Remove the parent element from the DOM
    parentElement.remove();
  }




  function oninput_option (input, index) {
    const elmint = input.parentElement;
    const select = elmint.parentElement.querySelector('.select-option');
    const firstOption = select.options[index];

    // تغيير قيمة value و innerHTML
    firstOption.value = input.value;
    firstOption.innerHTML = input.value;

  }



  // handle the keywords keys

const tagsContainer = document.getElementById("tags-container");
const ul = document.getElementById("hashtagUl");
const textarea = document.getElementById("textarea");
const length = document.getElementById("length");
const input = ul.querySelector("input");
document.getElementById("errorAdd").style.display = "none";
let tags = [];
function removeTags() {
    ul.querySelectorAll("li").forEach((li) => li.remove());
    tags = [];
    textarea.innerHTML = "";

    length.innerHTML = 10 - tags.length;
}
function creatTag() {
    ul.querySelectorAll("li").forEach((li) => li.remove());
    textarea.innerHTML = "";
    tags.forEach((tag) => {
        let liTag = `<li id=${tag} class="added-li" onclick=removeTag(this,this.id)> ${tag} <span>&times;</span></li>`;
        let textTag = tag + ",";
        //
        tagsContainer.insertAdjacentHTML("afterbegin", liTag);
        textarea.insertAdjacentHTML("afterbegin", textTag);
    });
}
function removeTag(element, tagn) {
    let index = tags.indexOf(tagn);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.remove();
    creatTag();
    length.innerHTML = 10 - tags.length;
    document.getElementById("errorAdd").style.display = "none";
}

function addTag(e) {
    if (e.key == "Tab" || e.type === "click") { // تحقق من نوع الحدث وليس فقط من الضغط على Tab
        e.preventDefault();
        let tag = input.value.replace(/\s+/g, "_");
        if (tags.length < 10) {
            if (!tags.includes(tag)) {
                tag.split(",").forEach((tag) => {
                    input.value != "" && tags.push(tag);
                    input.value != "" && creatTag();
                });
                document.getElementById("errorAdd").style.display = "none";
                console.log(tags);
            } else {
                document.getElementById("errorAdd").innerHTML =
                    "هذه الكلمة مستخدمة";
                document.getElementById("errorAdd").style.cssText =
                    "display:flex;color:red;font-size:1.2rem";
            }
        } else {
            document.getElementById("errorAdd").innerHTML = "تم تجاوز العدد";
            document.getElementById("errorAdd").style.cssText =
                "display:flex;color:red;font-size:1.2rem";
        }
        input.value = "";
        length.innerHTML = 10 - tags.length;
    }
    input.focus();
}

input.addEventListener("keydown", addTag);
plused.addEventListener('click', addTag); // استدعاء addTag عند الضغط على الزر
