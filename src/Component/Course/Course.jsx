import React from "react";
import about from "../../Picture/ba1.jpg";
import react from "../../Picture/react.webp";
import java from "../../Picture/js.webp";
import html from "../../Picture/htmlcss.webp";
import typescript from "../../Picture/typescript.webp";
import word from "../../../src/Picture/word2019.jpg";
import excel from "../../../src/Picture/excel2019.jpg";
import powerpoint from "../../../src/Picture/powerpoint2019.jpg";
import access from "../../../src/Picture/access2019.jpg";
import acrobat from "../../../src/Picture/acrobat.jpg";
import allust from "../../../src/Picture/allustrator2020.jpg";
import photoshop from "../../../src/Picture/Photoshop2020.jpg";
import primeirpro from "../../../src/Picture/primeipro2020.jpg";
import facbook from "../../../src/Picture/facebook.jpg";
import capcut from "../../../src/Picture/capcut2020.jpg";
import youtube from "../../../src/Picture/youtub.jpg";
import software from "../../../src/Picture/software.webp";
import "./Course.css";
function Course() {
  return (
    <div>
      <div className="controll_course">
        <div className="description_picuter">
          <img src={about} alt="" />
        </div>

        <div className="controll_componentcoure">
          <div className="tittle_microsoft">
            <h4 className="tittleCurse">Coding</h4>
          </div>
         
          <div className="courseBox">
            <img src={html} alt="" />
            <h3 className="center">HTML & CSS</h3>
            <h4>
                 ជាភាសាដំបូងទាំងអស់ដែលប្រើប្រាស់សម្រាប់សាងសង់ រូបរាងរបស់ Web site ចំណែកឯ CSS ជាអ្នកកែលម្អបន្ថែមនូវរចនសម្ព័ន្ធរបស់ Web Site អោយកាន់តែមានភាពទាក់ទាញ ។
            </h4>
          </div>
          <div className="courseBox">
            <img src={java} alt="" />
            <h3 className="center">JavaScript</h3>
            <h4>
             ជាភាសា Programing language សម្រាប់ Web Delvelopment ដែលធ្វើអោយ Web Site កាន់តែមានភាព​រស់រវើកបន្ថែមទៀត ។
            </h4>
          </div>
          <div className="courseBox">
            <img src={react} alt="" />
            <h3 className="center">React Js</h3>
            <h4>
              ជា JavaScript Library ដ៏ល្បីមួយ ដើម្បីបង្កើតនូវ​ ផ្ទាំងដ៏ទាក់ទាញទៅតាមបែបទំនើបតាមសម័យទំនើប ដែលគេនិយមប្រើប្រាស់សព្វថ្ងៃ។
            </h4>
          </div>
          <div className="courseBox">
            <img src={typescript} alt="" />
            <h3 className="center">TypeScript</h3>
            <h4>
              ជាភាសា បំពេញបន្ថែមនូវអ្វីដែល JavaScript មិនទាន់មាន ធ្វើ Web Site កាន់តែមានភាពទាក់ទាញបន្ថែមទៀត ។
            </h4>
          </div>
        </div>
        <div className="controll_componentcoure">
          <div className="tittle_microsoft">
            <h4 className="tittleCurse">Microsoft</h4>
          </div>
          <div className="courseBox">
            <img src={word} alt="" />
            <h3 className="center">Ms.Word</h3>
            <h4>
            គឺជាកម្មវិធីរបស់ក្រុមហ៊ុន Microsoft ដែលមានយ៉ាងតួនាទីសំខាន់ក្នុងកិច្ចការ រដ្ខបាល ដូចជា ការវាយអត្ថបទ កែតម្រូវ និងរចនាអត្ថបទ បោះពុម្ភ និងរៀបចំអត្ថបទឲ្យមានរបៀបរៀបរាយ ។
            </h4>
          </div>
          <div className="courseBox">
            <img src={excel} alt="" />
            <h3 className="center">Ms.Excel</h3>
            <h4>
            ​គឺជាកម្មវិធីរបស់ក្រុមហ៊ុន Microsoft ដែលមានយ៉ាងតួនាទីសំខាន់ សម្រាប់គ្រប់គ្រងទិន្នន័យ ការគណនា សង់ក្រាហ្វិចជាដើម ។
            </h4>
          </div>
          <div className="courseBox">
            <img src={powerpoint} alt="" />
            <h3 className="center">Ms.PowerPoint</h3>
            <h4>
            គឺជាកម្មវិធីរបស់ក្រុមហ៊ុន Microsoft ដែលគេនិយមប្រើប្រាស់ក្នុងកិច្ចការការងាររៀបចំគំរោង Presentation ការរៀបចំប្លង់ និងការបកស្រាយពីគំរោងដោយបញ្ចាំងជា Slide Presentation ជាដើម ។
            </h4>
          </div>  
          <div className="courseBox">
            <img src={access} alt="" />
            <h3 className="center">Ms.Access</h3>
            <h4>
            គឺជាប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋាន ទិន្នន័យ (DBMS) ពីក្រុមហ៊ុន Microsoft ដែលរួមបញ្ចូលគ្នានូវម៉ាស៊ីនមូលដ្ឋានទិន្នន័យទំនាក់ទំនង (ACE) ជាមួយនឹងចំណុចប្រទាក់អ្នកប្រើក្រាហ្វិក និងឧបករណ៍អភិវឌ្ឍន៍កម្មវិធី ។
            </h4>
          </div>
        </div>
        <div className="controll_componentcoure">
          <div className="tittle_microsoft">
            <h4 className="tittleCurse">Editor </h4>
          </div>
          <div className="courseBox">
            <img src={photoshop} alt="" />
            <h3 className="center"> Photo Shop</h3>
            <h4>
             ជាកម្មវិធីស្តង់ដារអន្តរជាតិមួយដែលបង្កើតឡើង​​ សម្រាប់ធ្វើការរចនារូបភាព​ បង្កើតរូបភាព និងអាចរចនាក្រាហ្វិករូបភាពអោយមានភាពរស់រវើកបាន ។
            </h4>
          </div>
          <div className="courseBox">
            <img src={allust} alt="" />
            <h3 className="center">Allustrator</h3>
            <h4>
            គឺជាកម្មវិធីសម្រាប់បង្កើតគំនូរ គំនូរ និងការងារសិល្បៈដោយប្រើអាចប្រើបានទាំងកុំព្យូទ័រ Windows ឬ MacOS ។
            </h4>
          </div>
          <div className="courseBox">
            <img src={primeirpro} alt="" />
            <h3 className="center">Premiere Pro</h3>
            <h4>
            គឺជាកម្មវិធីមួយដែលគេនិយមប្រើប្រាស់សម្រាប់ការកាត់តរ និងកែសម្រួលទៅលើវីដេអូ អាចបង្កើតជាវីដេអូពាណិជកម្ម និងភាពយន្ត ក៏ដូចជាវីដេអូនៅលើអនឡាញបន្ថែមទៀត ។
            </h4>
          </div>
          <div className="courseBox">
            <img src={capcut} alt="" />
            <h3 className="center">Capcut</h3>
            <h4>កម្មវិធីកែវីដេអូ និងកម្មវិធីបង្កើតវីដេអូទាំងអស់ក្នុងតែមួយឥតគិតថ្លៃ ជាមួយនឹងអ្វីគ្រប់យ៉ាងដែលអ្នកត្រូវការដើម្បីបង្កើតវីដេអូគុណភាពខ្ពស់ និងគួរឱ្យភ្ញាក់ផ្អើល ។ 
            </h4>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Course;
